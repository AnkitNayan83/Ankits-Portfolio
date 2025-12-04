"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  GitBranch, 
  Zap,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Terminal,
  Cpu,
  Network
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Particles } from "@/components/ui/particles";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { Typewriter } from "@/components/ui/typewriter";
import { MetricsSection } from "@/components/ui/metrics-card";

export default function LandingScreen() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const skills = [
    { name: "C++", category: "Language", icon: Code2 },
    { name: "Golang", category: "Language", icon: Code2 },
    { name: "JavaScript", category: "Language", icon: Code2 },
    { name: "TypeScript", category: "Language", icon: Code2 },
    { name: "Python", category: "Language", icon: Code2 },
    { name: "Java", category: "Language", icon: Code2 },
    { name: "Node.js", category: "Runtime", icon: Server },
    { name: "Express", category: "Framework", icon: Server },
    { name: "Gin", category: "Framework", icon: Server },
    { name: "Django", category: "Framework", icon: Server },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "MySQL", category: "Database", icon: Database },
    { name: "GraphQL", category: "API", icon: Network },
    { name: "Docker", category: "DevOps", icon: Cloud },
    { name: "Kubernetes", category: "DevOps", icon: Cloud },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "GCP", category: "Cloud", icon: Cloud },
    { name: "Git", category: "Tool", icon: GitBranch },
    { name: "GitHub Actions", category: "CI/CD", icon: GitBranch },
    { name: "Jenkins", category: "CI/CD", icon: GitBranch },
    { name: "Prisma", category: "ORM", icon: Database },
    { name: "GORM", category: "ORM", icon: Database },
    { name: "Socket.io", category: "Real-time", icon: Network },
    { name: "System Design", category: "Architecture", icon: Cpu },
    { name: "DBMS", category: "Database", icon: Database },
    { name: "Operating Systems", category: "System", icon: Cpu },
    { name: "Computer Networks", category: "System", icon: Network },
  ];

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 16);

  const experiences = [
    {
      company: "MathonGo",
      role: "SDE 1",
      period: "SEP 2024 - Present",
      description: "Building scalable backend systems handling 20,000+ concurrent users",
      tech: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      company: "MathonGo",
      role: "Backend Developer Intern",
      period: "JUL 2024 - SEP 2024",
      description: "Developed RESTful APIs and optimized database queries",
      tech: ["Express", "MongoDB", "Redis"],
    },
    {
      company: "Krinvi Technology",
      role: "Full Stack Developer Intern",
      period: "JUN 2023 - AUG 2023",
      description: "Built full-stack applications with modern tech stack",
      tech: ["React", "Node.js", "MySQL"],
    },
  ];

  const projects = [
    {
      name: "Mathongo-LMS",
      description: "Learning management system handling 20,000+ users with microservices architecture",
      deployedLink: "https://app.mathongo.com/",
      githubLink: "",
      tech: ["Node.js", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
      metrics: "20K+ Users",
    },
    {
      name: "Marks",
      description: "Exam preparation platform with 200,000+ active users, optimized for high concurrency",
      deployedLink: "https://web.getmarks.app/",
      githubLink: "",
      tech: ["Node.js", "MongoDB", "Redis", "AWS"],
      metrics: "200K+ Users",
    },
    {
      name: "Brocord",
      description: "Real-time chat application with voice, video, and text features using WebSockets",
      deployedLink: "",
      githubLink: "https://github.com/AnkitNayan83/Brocord",
      tech: ["Node.js", "Socket.io", "Express", "MongoDB"],
      metrics: "Real-time",
    },
  ];

  const codingPlatforms = [
    {
      name: "LeetCode",
      description: "Solved over 400 questions",
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
      description: "500+ questions on DSA and System Design",
      link: "https://www.geeksforgeeks.org/user/ankitnayan83/",
      icon: Code2,
      color: "text-green-400",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <Particles />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center z-10"
      >
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10"
        >
          {/* Profile Image with Glow Effect */}
          <motion.div
            className="relative mb-8 mx-auto w-fit"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.div 
              className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div
              className="relative mx-auto h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] md:h-[350px] md:w-[280px] rounded-2xl overflow-hidden border-4 border-blue-500/50 shadow-2xl"
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
                className="object-cover w-full h-full"
                style={{ 
                  objectFit: "cover"
                }}
                sizes="(max-width: 768px) 280px, 280px"
              />
            </motion.div>
          </motion.div>

          {/* Terminal-style Introduction */}
          <TerminalWindow className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="space-y-2">
              <div className="text-green-400">
                <span className="text-blue-400">$</span> whoami
              </div>
              <div className="text-gray-300">
                <Typewriter text="Ankit Nayan" speed={100} className="text-xl font-bold" />
              </div>
              <div className="text-green-400 mt-4">
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
            className="text-5xl md:text-7xl font-extrabold mb-4 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            Building Scalable Systems
          </motion.h1>
          
        <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
        >
            Crafting robust backend architectures that handle millions of requests
        </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/AnkitNayan83"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ankit-nayan-816337221/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:ankitnayan83@gmail.com"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-blue-400" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Terminal className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          About Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TerminalWindow>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-purple-400">engineer</span> = {"{"}
                </p>
                <p className="ml-4">
                  <span className="text-green-400">role</span>:{" "}
                  <span className="text-yellow-400">"Backend Engineer"</span>,
                </p>
                <p className="ml-4">
                  <span className="text-green-400">focus</span>:{" "}
                  <span className="text-yellow-400">"Scalable Systems"</span>,
                </p>
                <p className="ml-4">
                  <span className="text-green-400">passion</span>:{" "}
                  <span className="text-yellow-400">"Solving Complex Problems"</span>
                </p>
                <p>{"}"}</p>
              </div>
            </TerminalWindow>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-blue-400">Dynamic and results-driven Software Engineer</strong> with a
          proven passion for leveraging cutting-edge technologies to design and
                deliver innovative, scalable solutions.
              </p>
              <p>
                I specialize in building high-performance backend systems that can handle
                millions of requests, designing microservices architectures, and optimizing
                database performance for enterprise-scale applications.
              </p>
              <p>
                Outside of work, I enjoy staying active through football, exploring music,
                and driving—activities that fuel my enthusiasm for teamwork, precision, and
                continuous exploration.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {displayedSkills.map((skill, index) => {
              const Icon = skill.icon;
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
                    className="relative rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 border border-gray-700 backdrop-blur-sm cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <Icon className="text-blue-400 mb-2" size={24} />
                      <p className="text-sm font-semibold">{skill.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{skill.category}</p>
                    </div>
                  </motion.div>
            </motion.div>
              );
            })}
        </div>

          {skills.length > 16 && (
            <div className="mt-8 flex justify-center">
              <motion.button
              onClick={() => setShowAllSkills(!showAllSkills)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all"
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
      <section id="experience" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Server className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
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
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400">
                          {job.role}
                        </h3>
                        <p className="text-lg text-gray-300">@{job.company}</p>
                        <p className="text-sm text-gray-500 mt-1">{job.period}</p>
                      </div>
                      <Zap className="text-yellow-400" size={32} />
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30"
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
      <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Database className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TerminalWindow className="h-full">
                  <div className="space-y-4 h-full flex flex-col">
                    <div>
                      <div className="flex items-start justify-between mb-2">
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
                              <ExternalLink className="text-gray-400 hover:text-blue-400" size={20} />
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
                              <Github className="text-gray-400 hover:text-blue-400" size={20} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                      <div className="flex items-center gap-2 text-xs text-green-400 mb-3">
                        <Zap size={14} />
                        <span>{project.metrics}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded bg-gray-800/50 text-gray-300 text-xs border border-gray-700"
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
      <section id="coding" className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 z-10">
            <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <GitBranch className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Coding Platforms
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        className="relative mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TerminalWindow>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-300 text-lg">
                Always open to discussing backend architecture, system design, and new opportunities.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <motion.a
                  href="mailto:ankitnayan83@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all"
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
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white font-semibold hover:border-blue-500 transition-all"
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
      <footer className="relative bg-gray-900/50 border-t border-gray-800 p-8 text-center z-10">
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Ankit Nayan. Built with Next.js & TypeScript.
        </motion.p>
      </footer>
    </div>
  );
}
