"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Featured = () => {
  const projects = [
    {
      id: 1,
      title: "Advanced ALPR System",
      description:
        "Real-time vehicle tracking and license plate recognition system deployed at MNIT main gate. Achieved 98% detection accuracy in live environment, processing over 1,000 vehicles daily.",
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Flask"],
      image: "/images/projects/ALPR.png",
      link: "https://github.com/0evashish/ALPR-System",
      github: "https://github.com/0evashish/ALPR-System",
    },
    {
      id: 2,
      title: "Artrivate E-Commerce Platform",
      description:
        "Full-stack, responsive e-commerce platform with secure authentication, cart management, and payment processing. Engineered to support 100+ concurrent users with 99.5% uptime.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      image: "/images/projects/Ecommerce.png",
      link: "https://atrivate-devashish.vercel.app/",
      github: "https://github.com/0evashish/Shop-client",
    },
    {
      id: 3,
      title: "Automated Image Processing Tool",
      description:
        "Command-line tool for batch image processing including resizing, format conversion, and bulk manipulation. Reduced processing time by 80% compared to manual workflows.",
      tech: ["Node.js", "JavaScript", "Sharp"],
      image: "/images/projects/ImageProc.png",
      link: "https://github.com/0evashish/Automated-Pixelisation-and-Image-Manipulation",
      github: "https://github.com/0evashish/Automated-Pixelisation-and-Image-Manipulation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-neutral-950 relative">
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <Link
                  href={project.link}
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                >
                  View Project <FiExternalLink size={16} />
                </Link>
                <Link
                  href={project.github}
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm font-semibold"
                >
                  Code <FiGithub size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="#projects" className="inline-flex items-center gap-2 btn-secondary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
