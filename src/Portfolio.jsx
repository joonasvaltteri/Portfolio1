import React from "react";

const projects = [
  {
    title: "Treenikamu – Workout Buddy Finder App",
    role: "Full-stack Developer",
    technologies: "React Native, Firebase, Node.js, Express",
    description: "A mobile app that connects people looking for workout partners. Features include map view, filtering options, and a workout calendar.",
    achievements: [
      "Built both the frontend UI and backend API from scratch",
      "Developed filtering and matching logic to improve user experience",
      "Received positive user feedback from test users"
    ],
    learnings: "Learned mobile-first design principles and Firebase database management. Planning to finalize UI and publish via Vercel."
  },
  {
    title: "IT Support Portal – Ticketing System",
    role: "Full-stack Developer",
    technologies: "React, Firebase, Node.js, Express",
    description: "A real-time IT support portal where users can submit, track, and manage support tickets.",
    achievements: [
      "Designed and built a fully functional ticketing workflow",
      "Enabled real-time status updates and admin dashboards",
      "Improved internal support communication and traceability"
    ],
    learnings: "Learned to manage real-time data syncing and ticket prioritization logic."
  },
  {
    title: "Security Monitor – Vulnerability Assessment System",
    role: "Developer / Security Analyst",
    technologies: "Python, Flask, SQLite, SIEM",
    description: "A backend system that parses and analyzes security events from SIEM to detect risk factors.",
    achievements: [
      "Created a rule-based analysis engine to classify vulnerabilities",
      "Integrated basic alert logic and user feedback features",
      "Supported internal risk monitoring tasks"
    ],
    learnings: "Gained deeper knowledge of log structure and security incident parsing."
  },
  {
    title: "Smart Log Analysis Tool",
    role: "Developer",
    technologies: "Python, ELK Stack (Elasticsearch, Logstash, Kibana)",
    description: "A log analysis platform that identifies anomalies and suspicious behavior in system logs.",
    achievements: [
      "Created custom Logstash pipelines for parsing and filtering",
      "Visualized anomaly trends using Kibana dashboards",
      "Helped automate security event review"
    ],
    learnings: "Improved data pipeline building and real-time visualization skills."
  },
  {
    title: "Perfume Library – Fragrance Collection Manager",
    role: "Frontend Developer",
    technologies: "React, Firebase",
    description: "A personal project to manage and review perfumes, add scent notes and get recommendations.",
    achievements: [
      "Designed clean UI for browsing and categorizing scents",
      "Enabled user tagging and review submission",
      "Created logic to suggest new scents based on preferences"
    ],
    learnings: "Applied front-end design principles for a consumer-style app."
  },
  {
    title: "Automated Backup Tool for IT Infrastructure",
    role: "Automation Engineer",
    technologies: "Python, Bash, Rsync, AWS S3",
    description: "A script suite that automates scheduled backups both locally and to AWS S3.",
    achievements: [
      "Created modular scripts for cross-platform backup routines",
      "Ensured file integrity and automated email logging",
      "Used in internal support systems and staging servers"
    ],
    learnings: "Improved automation discipline and multi-environment deployment skills."
  }
];

export default function Portfolio() {
  return (
    <div>
      <h1>Joonas Raittila – Project Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
          <p>{project.description}</p>
          <ul>
            {project.achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p><strong>Learning & Future Development:</strong> {project.learnings}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}