"use client";
import { Cpu, Code2, Wifi, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: <Cpu size={22} className="text-cyan-400" />,
    title: "Embedded Systems",
    desc: "ESP32, FreeRTOS, LVGL, GPIO, I2C, SPI — building real hardware firmware.",
  },
  {
    icon: <Wifi size={22} className="text-cyan-400" />,
    title: "IoT & Cloud",
    desc: "REST APIs, WebSocket, HTTPS, JSON parsing — connecting devices to the cloud.",
  },
  {
    icon: <Code2 size={22} className="text-cyan-400" />,
    title: "Software Dev",
    desc: "C/C++, Python, JavaScript — from firmware to web portals.",
  },
  {
    icon: <GraduationCap size={22} className="text-cyan-400" />,
    title: "Academic Excellence",
    desc: "CGPA 8.4 in Integrated M.Tech IoT at DAVV Indore (2022–2027).",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">About <span className="text-gradient">Me</span></h2>
          <p className="section-subheading">A quick introduction</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              Hi! I'm <span className="text-cyan-500 font-semibold">Deepak Sisodiya</span>, an Embedded & IoT Engineer
              currently working as an <span className="text-cyan-500 font-semibold">IoT Engineer Intern at Vibe6 Digital LLP</span>, Indore.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
              I specialize in building real-time firmware on ESP32-S3, integrating touchscreen UIs using LVGL,
              live WebSocket APIs, and FreeRTOS multitasking on custom hardware.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm passionate about the intersection of hardware and software — from soldering circuits
              to writing cloud-connected firmware that runs on the edge.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="card">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
