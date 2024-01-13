import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import About from "../components/About";
import NavBar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <NavBar />
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <About />
      <Footer />
    </div>
  );
};

export default Layout;
