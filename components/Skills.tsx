"use client";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Embedded & IoT",
    skills: ["ESP32 / ESP32-S3", "FreeRTOS", "LVGL", "Arduino IDE", "PlatformIO", "I2C / SPI / GPIO", "PLC Ladder Logic"],
  },
  {
    category: "Machine Learning",
    skills: ["NLP", "Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "MATLAB"],
  },
  {
    category: "Databases & Tools",
    skills: ["MySQL", "DBMS", "RDBMS", "Git / GitHub", "Linux", "Streamlit", "Pandas"],
  },
  {
    category: "Networking & Communication",
    skills: ["REST API", "WebSocket", "HTTPS", "JSON", "WiFi / ESP-NOW", "Data Communication", "Computer Networks"],
  },
  {
    category: "Relevant Coursework",
    skills: [
      "Digital Electronics",
      "Analog Electronics",
      "Microprocessor",
      "Microcontroller",
      "Programmable Logic Controllers",
      "Wireless Network Communication",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subheading">Technologies and tools I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider text-cyan-500">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
