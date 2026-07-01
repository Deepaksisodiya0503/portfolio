"use client";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Smart Home Controller",
    period: "Feb 2026 – Apr 2026",
    stack: ["ESP32-S3", "LVGL", "FreeRTOS", "Tinxy Cloud API", "C/C++"],
    description:
      "Built a touchscreen smart home panel on WT32-SC01 Plus (320×480) with 4-screen UI for real-time device control and WiFi configuration.",
    highlights: [
      "Integrated Tinxy Cloud REST API with dual-core FreeRTOS architecture",
      "GUI Development with LVGL 9, LovyanGFX, touchscreen interfaces",
      "Real-Time Systems with FreeRTOS dual-core task management",
      "IoT & Cloud Integration: REST API, HTTPS, JSON parsing",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
  },
  {
    title: "College Web Portal Management System",
    period: "Sep 2025 – Nov 2025",
    stack: ["Python", "Streamlit", "Pandas", "Excel", "Git/GitHub"],
    description:
      "Developed a centralized, browser-based platform for accessing academic information including timetables, exam schedules, and library data.",
    highlights: [
      "Secure admin panel for managing and updating academic data",
      "Semester timetables, exam schedules, and library information",
      "Enables non-technical users to update data easily",
      "Practical implementation of Python-based web dev using Streamlit",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    title: "Pan-Tilt Camera",
    period: "Feb 2025 – Apr 2025",
    stack: ["ESP32-CAM", "Arduino IDE", "Servo Motors", "C++"],
    description:
      "A pan-tilt camera module designed for dynamic imaging with flexible surveillance and object tracking capabilities.",
    highlights: [
      "Dual-axis motorized mechanism (horizontal pan + vertical tilt)",
      "Enhanced field of view and monitoring efficiency",
      "Real-time streaming via ESP32-CAM module",
      "Object tracking for surveillance applications",
    ],
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
  {
    title: "Greenhouse Automation",
    period: "Aug 2023 – Sep 2023",
    stack: ["Arduino", "C++", "Temperature Sensor", "Soil Moisture Sensor"],
    description:
      "Automated greenhouse system using Arduino IDE with temperature and soil moisture sensors for optimized plant growth.",
    highlights: [
      "Automated climate control using temperature sensor",
      "Soil moisture monitoring for irrigation control",
      "Arduino-based control logic with C++",
      "Real-world application of embedded sensor integration",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">My <span className="text-gradient">Projects</span></h2>
          <p className="section-subheading">Things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight pr-4">
                  {project.title}
                </h3>
                <a
                  href="https://github.com/Deepaksisodiya0503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors flex-shrink-0"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>

              {/* Period */}
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
                <Calendar size={12} />
                <span>{project.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-md bg-white/50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/Deepaksisodiya0503"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 rounded-xl text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-all duration-200"
          >
            <Github size={18} />
            View all on GitHub
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
