"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";

const roles = [
  "IoT Engineer",
  "Embedded Systems Developer",
  "Firmware Developer",
  "M.Tech IoT Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for Opportunities
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Deepak{" "}
          <span className="text-gradient">Sisodiya</span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-mono text-cyan-500 dark:text-cyan-400">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Building real-time embedded firmware, IoT systems, and touchscreen interfaces.
          Currently pursuing Integrated M.Tech IoT at DAVV Indore with CGPA{" "}
          <span className="text-cyan-500 font-semibold">8.4</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/Deepaksisodiya0503"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-600 dark:text-gray-400 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-sisodiya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-600 dark:text-gray-400 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sisodiyadeepak936@gmail.com"
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-600 dark:text-gray-400 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+919575152563"
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-600 dark:text-gray-400 transition-all duration-200"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
