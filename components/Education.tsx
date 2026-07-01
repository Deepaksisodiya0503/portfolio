"use client";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Integrated M.Tech — Internet of Things (IoT)",
    school: "School of Instrumentation, DAVV",
    period: "2022 – 2027 (Ongoing)",
    grade: "CGPA: 8.4",
    highlight: true,
  },
  {
    degree: "Higher Secondary School (12th)",
    school: "Jawahar Navodaya Vidhyalaya",
    period: "2022",
    grade: "77.44%",
    highlight: false,
  },
  {
    degree: "High School (10th)",
    school: "Jawahar Navodaya Vidhyalaya",
    period: "2020",
    grade: "81.2%",
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading"><span className="text-gradient">Education</span></h2>
          <p className="section-subheading">Academic background</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className={`card flex gap-4 ${
                edu.highlight ? "border-cyan-400/50 bg-cyan-400/5 dark:bg-cyan-400/5" : ""
              }`}
            >
              <div className={`p-3 rounded-xl h-fit ${edu.highlight ? "bg-cyan-400/20" : "bg-gray-200 dark:bg-gray-800"}`}>
                <GraduationCap size={20} className={edu.highlight ? "text-cyan-400" : "text-gray-500"} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-semibold ${edu.highlight ? "text-cyan-500" : "text-gray-600 dark:text-gray-400"}`}>
                      {edu.grade}
                    </span>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{edu.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
