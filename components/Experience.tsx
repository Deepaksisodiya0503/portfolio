"use client";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">Work <span className="text-gradient">Experience</span></h2>
          <p className="section-subheading">Where I've worked</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline item */}
          <div className="relative pl-8 border-l-2 border-cyan-400/30">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-white dark:ring-gray-950" />

            <div className="card ml-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-400/10">
                    <Briefcase size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">IoT Engineer Intern</h3>
                    <p className="text-sm text-cyan-500 font-medium">Vibe6 Digital LLP, Indore</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  Jan 2026 – Present
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Embedded & IoT Engineer with hands-on experience building real-time firmware on ESP32-S3,
                integrating touchscreen UIs, live WebSocket APIs, and FreeRTOS multitasking on custom hardware.
              </p>

              <div className="flex flex-wrap gap-2">
                {["ESP32-S3", "FreeRTOS", "LVGL", "WebSocket", "C/C++", "Custom Hardware"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-md bg-cyan-400/10 text-cyan-500 border border-cyan-400/20 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
