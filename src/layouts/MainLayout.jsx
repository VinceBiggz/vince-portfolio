import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}