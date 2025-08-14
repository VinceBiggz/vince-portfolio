import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["dist/**", "node_modules/**", "*.config.js"],
    plugins: {
      react: react,
      tailwindcss: tailwindcss,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        navigator: "readonly",
        location: "readonly",
        history: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        FormData: "readonly",
        Headers: "readonly",
        Request: "readonly",
        Response: "readonly",
        Event: "readonly",
        CustomEvent: "readonly",
        Element: "readonly",
        HTMLElement: "readonly",
        SVGElement: "readonly",
        Node: "readonly",
        NodeList: "readonly",
        HTMLCollection: "readonly",
        MutationObserver: "readonly",
        IntersectionObserver: "readonly",
        ResizeObserver: "readonly",
        PerformanceObserver: "readonly",
        getComputedStyle: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        queueMicrotask: "readonly",
        performance: "readonly",
        PointerEvent: "readonly",
        TouchEvent: "readonly",
        KeyboardEvent: "readonly",
        MouseEvent: "readonly",
        WheelEvent: "readonly",
        FocusEvent: "readonly",
        InputEvent: "readonly",
        CompositionEvent: "readonly",
        ClipboardEvent: "readonly",
        DragEvent: "readonly",
        ProgressEvent: "readonly",
        ErrorEvent: "readonly",
        MessageEvent: "readonly",
        CloseEvent: "readonly",
        PageTransitionEvent: "readonly",
        PopStateEvent: "readonly",
        HashChangeEvent: "readonly",
        BeforeUnloadEvent: "readonly",
        UnloadEvent: "readonly",
        StorageEvent: "readonly",
        DOMException: "readonly",
        // React globals
        React: "readonly",
        __REACT_DEVTOOLS_GLOBAL_HOOK__: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      // Disable some rules for build files
      "no-undef": "off", // We're defining globals above
      "no-unused-vars": "warn", // Make unused vars warnings instead of errors
      "react/prop-types": "off", // We're not using prop-types
      "react/display-name": "off", // Allow anonymous components
    },
  },
  prettier,
];