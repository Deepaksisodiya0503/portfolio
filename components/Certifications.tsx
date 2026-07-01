"use client";
import { Award } from "lucide-react";

const certs = [
  {
    title: "IoT based Product Development",
    issuer: "UpSys & DAVV",
    date: "August 2023",
  },
  {
    title: "Hands on Training on PLC and Factory Automation Tools",
    issuer: "Mitsubishi Electric",
    date: "January 2025",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading"><span className="text-gradient">Certifications</span></h2>
          <p className="section-subheading">Professional credentials</p>
        </div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
          {certs.map((cert) => (
            <div key={cert.title} className="card flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-yellow-400/10 h-fit">
                <Award size={20} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{cert.title}</h3>
                <p className="text-xs text-cyan-500 mt-1">{cert.issuer}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
