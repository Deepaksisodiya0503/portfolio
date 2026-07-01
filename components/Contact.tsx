"use client";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={20} className="text-cyan-400" />,
    label: "Email",
    value: "sisodiyadeepak936@gmail.com",
    href: "mailto:sisodiyadeepak936@gmail.com",
  },
  {
    icon: <Phone size={20} className="text-cyan-400" />,
    label: "Phone",
    value: "+91 9575152563",
    href: "tel:+919575152563",
  },
  {
    icon: <Linkedin size={20} className="text-cyan-400" />,
    label: "LinkedIn",
    value: "deepak-sisodiya",
    href: "https://www.linkedin.com/in/deepak-sisodiya",
  },
  {
    icon: <Github size={20} className="text-cyan-400" />,
    label: "GitHub",
    value: "Deepaksisodiya0503",
    href: "https://github.com/Deepaksisodiya0503",
  },
  {
    icon: <MapPin size={20} className="text-cyan-400" />,
    label: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-heading">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subheading">
            Open to internships, collaborations, and exciting IoT projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* CTA Banner */}
          <div className="relative rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 p-8 mb-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Let's build something together!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
              Whether it's an IoT product, embedded firmware, or a web portal — I'm always excited to work on impactful projects.
            </p>
            <a
              href="mailto:sisodiyadeepak936@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Mail size={16} />
              Send me an email
            </a>
          </div>

          {/* Contact Links */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:scale-[1.02] transition-transform"
                >
                  <div className="p-2 rounded-lg bg-cyan-400/10">{c.icon}</div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{c.label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{c.value}</p>
                  </div>
                </a>
              ) : (
                <div key={c.label} className="card flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-cyan-400/10">{c.icon}</div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{c.label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{c.value}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
