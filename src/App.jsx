import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import PageTransition from "./components/PageTransition.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </MainLayout>
    </ThemeProvider>
  );
}