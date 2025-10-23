"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 90 },
        { name: "OpenShift", level: 85 },
        { name: "Jenkins", level: 80 },
      ],
    },
    {
      category: "Backend & Microservices",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Microservices", level: 85 },
      ],
    },
    {
      category: "Frontend & Web",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-neutral-950 relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive list of my technical skills and proficiencies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.8,
                          delay: catIndex * 0.2 + index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-800"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "MongoDB",
              "SQL",
              "REST/SOAP APIs",
              "Circuit Breaker",
              "GitHub Actions",
              "CI/CD Pipelines",
              "Agile/Scrum",
              "Performance Testing",
              "JMeter",
              "AWS",
              "Flask",
              "Express",
              "Spring Batch",
              "Resilience4j",
              "OAuth & Security",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
