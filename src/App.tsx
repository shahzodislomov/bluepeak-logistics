import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Features } from "./components/sections/Features";
import { Services } from "./components/sections/Services";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";

export function App() {
  return (
    <>
      <Helmet>
        <title>BluePeak Logistics</title>
        <meta
          name="description"
          content="Build Strong, Compliant, and Successful Businesses"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
