import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Film, Palette, Zap, Mic, Monitor, Smartphone, Star, ArrowRight, Mail,  CheckCircle, Play } from "lucide-react";

import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Portfolio from "./components/Porfolio";
import Stat from "./components/Stat";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// ...component code...

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Stat/>
      <Process />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </>
  );
}