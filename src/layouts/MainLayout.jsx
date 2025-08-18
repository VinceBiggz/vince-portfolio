import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Header />
      <main id="main-content" className="grow">{children}</main>
      <Footer />
    </div>
  );
}