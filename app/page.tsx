import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Services from "./services/page";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Footer />

    </>
  );
}