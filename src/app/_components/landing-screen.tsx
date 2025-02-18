"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LandingScreen() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = [
    "C++",
    "Golang",
    "JavaScript",
    "SQL",
    "TypeScript",
    "Solidity",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "Node.js",
    "React.js",
    "Next.js",
    "Django",
    "Expo",
    "ThirdWeb",
    "Hardhat",
    "Express",
    "React Native",
    "Socket.io",
    "Jest",
    "Gin",
    "Git",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Prisma",
    "Kubernetes",
    "GCP",
    "GORM",
    "Jenkins",
    "GitHub Actions (CI/CD)",
    "Operating Systems",
    "System Design",
    "Object-Oriented Programming (OOP)",
    "DBMS",
    "Computer Networks",
    "Software Testing",
    "Software Engineering",
  ];

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 12);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gray-800 p-5 shadow-lg">
        <h1 className="text-2xl font-bold">Ankit Nayan</h1>
        <div className="space-x-6">
          <Link href="#about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="#skills" className="hover:text-blue-400">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-blue-400">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link href="#coding" className="hover:text-blue-400">
            Coding Platforms
          </Link>
          <Link href="#contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex h-screen flex-col items-center justify-center px-5 text-center">
        <motion.img
          src="/profile_img.jpg"
          alt="Ankit Nayan"
          className="mx-auto mb-3 h-[400px] w-[300px] rounded-xl object-cover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          className="text-4xl font-extrabold md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Ankit Nayan
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Developer | Passionate about building scalable applications
        </motion.p>
      </section>

      {/* About Me Section */}
      <section id="about" className="mx-auto max-w-4xl px-5 py-20 text-justify">
        <h3 className="text-center text-3xl font-bold text-blue-400">
          About Me
        </h3>
        <p className="my-4 text-gray-300">
          <strong>Dynamic and results-driven Software Engineer</strong> with a
          proven passion for leveraging cutting-edge technologies to design and
          deliver innovative, scalable solutions. Adept at adapting to emerging
          trends and thriving in fast-paced environments, I excel at
          contributing to impactful projects that drive positive change and
          deliver measurable results. With a proactive approach to continuous
          learning, I am committed to staying ahead of the curve in technology
          and applying my skills to solve complex challenges.
        </p>
        <p className="text-gray-300">
          Outside of work, I enjoy staying active and creative through hobbies
          such as playing football, exploring music, and driving, which fuel my
          enthusiasm for teamwork, precision, and exploration.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-4xl px-5 py-20">
        <h3 className="text-center text-3xl font-bold text-blue-400">Skills</h3>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-4">
          {displayedSkills.map((skill) => (
            <motion.div
              key={skill}
              className="rounded-lg bg-gray-800 p-3 shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
        {skills.length > 12 && (
          <div className="mt-2 flex justify-end">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="rounded-lg px-4 py-2 font-semibold text-blue-600 underline"
            >
              {showAllSkills ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto max-w-4xl px-5 py-20">
        <h3 className="text-center text-3xl font-bold text-blue-400">
          Experience
        </h3>
        <div className="mt-6 space-y-6">
          {[
            {
              company: "MathonGo",
              role: "SDE 1",
              period: "SEP 2024 - Present",
            },
            {
              company: "MathonGo",
              role: "Backend Developer Intern",
              period: "JUL 2024 - SEP 2024",
            },
            {
              company: "Krinvi Technology",
              role: "Full Stack Developer Intern",
              period: "JUN 2023 - AUG 2023",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-gray-800 p-5 shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold">
                {job.role} @ {job.company}
              </h4>
              <p className="text-gray-400">{job.period}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-4xl px-5 py-20">
        <h3 className="text-center text-3xl font-bold text-blue-400">
          Projects
        </h3>
        <div className="mt-6 space-y-6">
          {[
            {
              name: "Mathongo-LMS",
              description:
                "A learning management system handling 20,000+ users.",
              deployedLink: "https://app.mathongo.com/",
              githubLink: "",
            },
            {
              name: "Marks",
              description:
                "Exam preparation platform with 200,000+ active users.",
              deployedLink: "https://web.getmarks.app/",
              githubLink: "",
            },
            {
              name: "Brocord",
              description:
                "Real-time chat app with voice, video, and text features.",
              deployedLink: "",
              githubLink: "https://github.com/AnkitNayan83/Brocord",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-800 p-5 shadow-md"
            >
              <span className="flex flex-col items-start space-y-2">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-400">{project.description}</p>
              </span>
              <span className="flex items-center space-x-4">
                {project.deployedLink && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link cursor-pointer"
                    onClick={() => window.open(project.deployedLink)}
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                )}
                {project.githubLink && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github cursor-pointer"
                    onClick={() => window.open(project.githubLink)}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="coding" className="mx-auto max-w-4xl px-5 py-20">
        <h3 className="text-center text-3xl font-bold text-blue-400">
          Coding Platforms
        </h3>
        <div className="mt-6 space-y-6">
          {[
            {
              name: "Leetcode",
              description: "Solved over 400 questions",
              deployedLink: "https://leetcode.com/u/ankitnayan83/",
              githubLink: "",
            },
            {
              name: "Github",
              description: "Over 50+ industry level projects",
              githubLink: "https://github.com/AnkitNayan83",
            },
            {
              name: "Geeks for Geeks",
              description:
                "Solved over 500+ questions on DSA and System Design",
              deployedLink: "https://www.geeksforgeeks.org/user/ankitnayan83/",
              githubLink: "",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-800 p-5 shadow-md"
            >
              <span className="flex flex-col items-start space-y-2">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-400">{project.description}</p>
              </span>
              <span className="flex items-center space-x-4">
                {project.deployedLink && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link cursor-pointer"
                    onClick={() => window.open(project.deployedLink)}
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                )}
                {project.githubLink && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github cursor-pointer"
                    onClick={() => window.open(project.githubLink)}
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-5 py-20 text-center"
      >
        <h3 className="text-3xl font-bold text-blue-400">Contact</h3>
        <p className="mt-4 text-gray-300">Feel free to reach out!</p>
        <p className="mt-2 text-blue-400">
          Email:{" "}
          <span className="cursor-pointer hover:underline">
            ankitnayan83@gmail.com
          </span>
        </p>
        <p className="text-blue-400">
          LinkedIn:{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ankit-nayan-816337221/")
            }
          >
            linkedin.com/in/ankit-nayan-816337221
          </span>{" "}
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-5 text-center">
        &copy; {new Date().getFullYear()} Ankit Nayan. All rights reserved.
      </footer>
    </div>
  );
}
