import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Film, Palette, Zap, Mic, Monitor, Smartphone,
  Star, ArrowRight, Mail, 
  CheckCircle, ChevronRight, Play
} from "lucide-react";
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #050508;
      --bg2: #0d0d14;
      --purple: #a855f7;
      --purple-dark: #7c3aed;
      --pink: #ec4899;
      --text: #ffffff;
      --muted: #94a3b8;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    .bebas { font-family: 'Bebas Neue', cursive; }

    body::after {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.035;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      background-size: 128px 128px;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--purple); border-radius: 2px; }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track { animation: marquee 22s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }

    @keyframes glow-pulse {
      0%, 100% { text-shadow: 0 0 20px #a855f7, 0 0 40px #a855f7; }
      50% { text-shadow: 0 0 40px #ec4899, 0 0 80px #ec4899; }
    }
    .glow-num { animation: glow-pulse 3s ease-in-out infinite; }

    input, textarea {
      font-family: 'Inter', sans-serif;
    }

    .glass {
      background: rgba(13,13,20,0.6);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(168,85,247,0.15);
    }

    .purple-glow { box-shadow: 0 0 30px rgba(168,85,247,0.3); }
    .pink-glow { box-shadow: 0 0 30px rgba(236,72,153,0.3); }
  `}</style>
);
export default GlobalStyles;