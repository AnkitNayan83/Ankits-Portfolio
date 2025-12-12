"use client";

import { MetricsSection } from "@/components/ui/metrics-card";
import { Particles } from "@/components/ui/particles";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { Typewriter } from "@/components/ui/typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Network,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function LandingScreen() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const skills = [
    // High-demanding skills at the top
    { name: "Java", category: "Language", icon: Code2, isHighlighted: true },
    {
      name: "Spring Boot",
      category: "Framework",
      icon: Server,
      isHighlighted: true,
    },
    { name: "Golang", category: "Language", icon: Code2, isHighlighted: true },
    { name: "Gin", category: "Framework", icon: Server, isHighlighted: true },
    { name: "AWS", category: "Cloud", icon: Cloud, isHighlighted: true },
    { name: "gRPC", category: "API", icon: Network, isHighlighted: true },
    {
      name: "TypeScript",
      category: "Language",
      icon: Code2,
      isHighlighted: true,
    },
    { name: "Node.js", category: "Runtime", icon: Server, isHighlighted: true },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: Database,
      isHighlighted: true,
    },
    { name: "Docker", category: "DevOps", icon: Cloud, isHighlighted: true },
    {
      name: "GitHub Actions",
      category: "CI/CD",
      icon: GitBranch,
      isHighlighted: true,
    },
    {
      name: "Jenkins",
      category: "CI/CD",
      icon: GitBranch,
      isHighlighted: true,
    },
    // Other skills
    { name: "JavaScript", category: "Language", icon: Code2 },
    { name: "C++", category: "Language", icon: Code2 },
    { name: "Python", category: "Language", icon: Code2 },
    { name: "Express", category: "Framework", icon: Server },
    { name: "Django", category: "Framework", icon: Server },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "MySQL", category: "Database", icon: Database },
    { name: "GraphQL", category: "API", icon: Network },
    { name: "Kubernetes", category: "DevOps", icon: Cloud },
    { name: "GCP", category: "Cloud", icon: Cloud },
    { name: "Git", category: "Tool", icon: GitBranch },
    { name: "Prisma", category: "ORM", icon: Database },
    { name: "GORM", category: "ORM", icon: Database },
    { name: "Socket.io", category: "Real-time", icon: Network },
    { name: "System Design", category: "Architecture", icon: Cpu },
    { name: "DBMS", category: "Database", icon: Database },
    { name: "Operating Systems", category: "System", icon: Cpu },
    { name: "Computer Networks", category: "System", icon: Network },
  ];

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 50);

  const experiences = [
    {
      company: "MathonGo",
      role: "SDE 1 (Full Stack Developer)",
      period: "JUN 2024 - Present",
      description:
        "Built features for Marks and Mathongo-LMS serving 300,000-400,000 monthly users. Automated Zoom video recording workflow, reducing manual effort by 100% and saving 5+ hours/week. Developed AI models using 200,000+ questions for intelligent doubt-solving bot. Optimized API response times by 20-30% across multiple projects.",
      tech: ["Spring Boot", "Golang", "Next.js", "MongoDB", "Docker", "AWS"],
    },
    {
      company: "Krinvi Technology",
      role: "Full Stack Developer Intern",
      period: "JUN 2023 - SEP 2023",
      description:
        "Developed features for EduLeague and Audeet. Deployed applications on AWS, improving scalability and performance. Worked with designers and QA to deliver high-quality solutions on time.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
  ];

  const projects = [
    {
      name: "Mathongo-LMS",
      description:
        "Learning management system handling 20,000+ users with microservices architecture",
      deployedLink: "https://app.mathongo.com/",
      githubLink: "",
      tech: ["Golang", "Gin", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
      metrics: "100K+ Users",
    },
    {
      name: "Marks",
      description:
        "Exam preparation platform with 200,000+ active users, optimized for high concurrency",
      deployedLink: "https://web.getmarks.app/",
      githubLink: "",
      tech: ["Spring Boot", "Java", "MongoDB", "Redis", "AWS"],
      metrics: "2.5M+ Users",
    },
    {
      name: "Brocord",
      description:
        "Real-time chat application with voice, video, and text features using WebSockets",
      deployedLink: "",
      githubLink: "https://github.com/AnkitNayan83/Brocord",
      tech: ["Golang", "Gin", "Socket.io", "MongoDB"],
      metrics: "Real-time",
    },
  ];

  const codingPlatforms = [
    {
      name: "LeetCode",
      description: "Solved over 500 questions",
      link: "https://leetcode.com/u/ankitnayan83/",
      icon: Code2,
      color: "text-orange-400",
    },
    {
      name: "GitHub",
      description: "50+ industry-level projects",
      link: "https://github.com/AnkitNayan83",
      icon: Github,
      color: "text-gray-300",
    },
    {
      name: "GeeksforGeeks",
      description: "550+ questions on DSA and System Design",
      link: "https://www.geeksforgeeks.org/user/ankitnayan83/",
      icon: Code2,
      color: "text-green-400",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <Particles />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8"
      >
        <motion.div style={{ opacity, scale }} className="relative z-10">
          {/* Profile Image with Glow Effect */}
          <motion.div
            className="relative mx-auto mb-8 w-fit"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="relative mx-auto h-[280px] w-[220px] overflow-hidden rounded-2xl border-4 border-blue-500/50 shadow-2xl sm:h-[320px] sm:w-[260px] md:h-[350px] md:w-[280px]"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/profile_img.jpg"
                alt="Ankit Nayan"
                width={560}
                height={700}
                quality={100}
                priority
                className="h-full w-full object-cover"
                style={{
                  objectFit: "cover",
                }}
                sizes="(max-width: 768px) 280px, 280px"
              />
            </motion.div>
          </motion.div>

          {/* Terminal-style Introduction */}
          <TerminalWindow className="mx-auto mb-6 max-w-2xl sm:mb-8">
            <div className="space-y-2">
              <div className="text-green-400">
                <span className="text-blue-400">$</span> whoami
              </div>
              <div className="text-gray-300">
                <Typewriter
                  text="Ankit Nayan"
                  speed={100}
                  className="text-xl font-bold"
                />
              </div>
              <div className="mt-4 text-green-400">
                <span className="text-blue-400">$</span> cat about.txt
              </div>
              <div className="text-gray-300">
                <Typewriter
                  text="Backend Engineer | System Architect | Problem Solver"
                  speed={50}
                />
              </div>
            </div>
          </TerminalWindow>

          {/* Main Heading */}
          <motion.h1
            className="gradient-text mb-4 text-5xl font-extrabold md:text-7xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building Scalable Systems
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-3xl text-xl text-gray-400 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Crafting robust backend architectures that handle millions of
            requests
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="mb-20 mt-8 flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/AnkitNayan83"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 bg-gray-800/50 p-3 transition-colors hover:border-blue-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ankit-nayan-816337221/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 bg-gray-800/50 p-3 transition-colors hover:border-blue-500"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:ankitnayan83@gmail.com"
              className="rounded-full border border-gray-700 bg-gray-800/50 p-3 transition-colors hover:border-blue-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-blue-400" size={32} />
          </motion.div> */}
        </motion.div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex items-center gap-4">
            <Terminal className="text-blue-400" size={32} />
            <h2 className="gradient-text text-4xl font-bold md:text-5xl">
              About Me
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <TerminalWindow>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-purple-400">engineer</span> = {"{"}
                </p>
                <p className="ml-4">
                  <span className="text-green-400">role</span>:{" "}
                  <span className="text-yellow-400">
                    &quot;Backend Engineer&quot;
                  </span>
                  ,
                </p>
                <p className="ml-4">
                  <span className="text-green-400">focus</span>:{" "}
                  <span className="text-yellow-400">
                    &quot;Scalable Systems&quot;
                  </span>
                  ,
                </p>
                <p className="ml-4">
                  <span className="text-green-400">passion</span>:{" "}
                  <span className="text-yellow-400">
                    &quot;Solving Complex Problems&quot;
                  </span>
                </p>
                <p>{"}"}</p>
              </div>
            </TerminalWindow>

            <div className="space-y-4 leading-relaxed text-gray-300">
              <p>
                <strong className="text-blue-400">
                  Dynamic and results-driven Software Engineer
                </strong>{" "}
                with a proven passion for leveraging cutting-edge technologies
                to design and deliver innovative, scalable solutions.
              </p>
              <p>
                I specialize in building high-performance backend systems that
                can handle millions of requests, designing microservices
                architectures, and optimizing database performance for
                enterprise-scale applications.
              </p>
              <p>
                Outside of work, I enjoy staying active through football,
                exploring music, and driving—activities that fuel my enthusiasm
                for teamwork, precision, and continuous exploration.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex items-center gap-4">
            <Code2 className="text-blue-400" size={32} />
            <h2 className="gradient-text text-4xl font-bold md:text-5xl">
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {displayedSkills.map((skill, index) => {
              const Icon = skill.icon;
              const isHighlighted = skill.isHighlighted ?? false;
              return (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <motion.div
                    className={`relative cursor-pointer overflow-hidden rounded-lg border p-4 backdrop-blur-sm ${
                      isHighlighted
                        ? "border-blue-500/50 bg-gradient-to-br from-blue-900/50 to-purple-900/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                    }`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100 ${
                        isHighlighted
                          ? "from-blue-500/0 via-blue-500/20 to-purple-500/0"
                          : "from-blue-500/0 via-blue-500/10 to-blue-500/0"
                      }`}
                    ></div>
                    <div className="relative z-10">
                      <Icon
                        className={`mb-2 ${isHighlighted ? "text-blue-300" : "text-blue-400"}`}
                        size={24}
                      />
                      <p
                        className={`text-sm font-semibold ${isHighlighted ? "text-blue-200" : ""}`}
                      >
                        {skill.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {skill.category}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {skills.length > 50 && (
            <div className="mt-8 flex justify-center">
              <motion.button
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllSkills ? "View Less" : "View More"}
              </motion.button>
            </div>
          )}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex items-center gap-4">
            <Server className="text-blue-400" size={32} />
            <h2 className="gradient-text text-4xl font-bold md:text-5xl">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <TerminalWindow>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400">
                          {job.role}
                        </h3>
                        <p className="text-lg text-gray-300">@{job.company}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          {job.period}
                        </p>
                      </div>
                      <Zap className="text-yellow-400" size={32} />
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TerminalWindow>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex items-center gap-4">
            <Database className="text-blue-400" size={32} />
            <h2 className="gradient-text text-4xl font-bold md:text-5xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TerminalWindow className="h-full">
                  <div className="flex h-full flex-col space-y-4">
                    <div>
                      <div className="mb-2 flex items-start justify-between">
                        <h3 className="text-xl font-bold text-blue-400">
                          {project.name}
                        </h3>
                        <div className="flex gap-2">
                          {project.deployedLink && (
                            <motion.a
                              href={project.deployedLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink
                                className="text-gray-400 hover:text-blue-400"
                                size={20}
                              />
                            </motion.a>
                          )}
                          {project.githubLink && (
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github
                                className="text-gray-400 hover:text-blue-400"
                                size={20}
                              />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <p className="mb-3 text-sm text-gray-400">
                        {project.description}
                      </p>
                      <div className="mb-3 flex items-center gap-2 text-xs text-green-400">
                        <Zap size={14} />
                        <span>{project.metrics}</span>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-gray-700 bg-gray-800/50 px-2 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TerminalWindow>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Performance Metrics Section */}
      <MetricsSection />

      {/* Coding Platforms Section */}
      <section
        id="coding"
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex items-center gap-4">
            <GitBranch className="text-blue-400" size={32} />
            <h2 className="gradient-text text-4xl font-bold md:text-5xl">
              Coding Platforms
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {codingPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <TerminalWindow className="h-full">
                    <div className="space-y-4 text-center">
                      <Icon className={`${platform.color} mx-auto`} size={48} />
                      <h3 className="text-2xl font-bold">{platform.name}</h3>
                      <p className="text-gray-400">{platform.description}</p>
                    </div>
                  </TerminalWindow>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 md:px-8 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TerminalWindow>
            <div className="space-y-6">
              <h2 className="gradient-text mb-8 text-4xl font-bold md:text-5xl">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300">
                Always open to discussing backend architecture, system design,
                and new opportunities.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
                <motion.a
                  href="mailto:ankitnayan83@gmail.com"
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  ankitnayan83@gmail.com
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ankit-nayan-816337221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-gray-900/50 p-8 text-center">
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Ankit Nayan.
        </motion.p>
      </footer>
    </div>
  );
}
