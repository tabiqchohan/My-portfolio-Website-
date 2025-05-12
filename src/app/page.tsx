// import Image from "next/image";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Products from "./components/Products"
import Footer from "./components/Footer";
  export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Sale/>
      <Products/>
      <Footer/>
    </div>
    
     );
}
