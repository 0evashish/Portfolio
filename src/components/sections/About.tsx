"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const experiences = [
    {
      year: "Aug 2025 - Present",
      title: "Software Engineer",
      company: "Wells Fargo, Hyderabad",
      description: "Engineered DevOps modernization with Docker & OpenShift, achieved 45% efficiency gain. Reduced p99 API response time by 30%. Led AI/ML hackathon team with PKI security layer.",
    },
    {
      year: "Aug 2024 - Aug 2025",
      title: "Program Associate",
      company: "Wells Fargo, Hyderabad",
      description: "Architected MongoDB backend with 40% maintainability improvement. Managed 21+ microservices deployment, achieved 99.5% uptime. Integrated SOAP/REST APIs with FISERV.",
    },
    {
      year: "May 2023 - Jul 2023",
      title: "Software Development Intern",
      company: "Xpot Technologies, Jaipur",
      description: "Developed 10+ reusable React components, accelerating feature implementation by 30%. Managed Agile sprints and improved code quality through peer reviews.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-900 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            My journey in web development and professional experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 p-8">
              <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 opacity-20"></div>
              <Image
                src="/images/profile/me.jpg"
                alt="Devashish Badaria"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              I&apos;m a Software Engineer at Wells Fargo with a B.Tech in Computer Science from MNIT Jaipur (2024, CGPA: 7.49). With expertise in Microservices, Cloud, and DevOps, I specialize in building scalable distributed systems and optimizing application performance.
            </p>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
              Passionate about solving complex technical challenges through innovative solutions. I&apos;ve deployed real-time systems handling 1M+ monthly transactions and led teams to deliver hackathon-winning AI/ML solutions. When not coding, you can find me solving DSA problems on LeetCode or contributing to open-source projects.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Experience</h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-blue-600 pl-4 pb-4"
                >
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {exp.year}
                  </p>
                  <h4 className="text-lg font-bold mt-1">{exp.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
