"use client";

import React, { useState, useEffect } from "react";
import { Code, BookOpen, Award, User2 } from "lucide-react";

// Definisikan tipe untuk SkillBar
interface Skill {
  name: string;
  level: number;
}

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(level), 500);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-blue-300">{skill}</span>
        <span className="text-sm font-medium text-blue-300">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, items }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.marginRight = "0px";
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-gray-900 rounded-xl p-6 transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Icon className="text-blue-500" size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item: string, index: number) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

function AboutSection() {
  const skills: Skill[] = [
    { name: "HTML/CSS", level: 75 },
    { name: "JavaScript", level: 45 },
    { name: "React/Next.js", level: 80 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Unity", level: 40 },
  ];

  return (
    <section id="about" className="bg-gray-950 py-20 relative">
      <div className="container mx-auto px-4">
        {/* About Me Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <User2 className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Saya adalah seorang pemula di dunia pemrograman yang antusias untuk
            terus belajar dan berkembang. Meskipun baru memulai perjalanan ini,
            saya sudah memiliki dasar dalam beberapa bahasa pemrograman dan
            konsep pengembangan web. Saya senang mengeksplorasi teknologi baru
            dan mencari tantangan yang dapat membantu saya meningkatkan
            keterampilan saya. Dengan semangat belajar yang tinggi, saya
            berkomitmen untuk menguasai lebih banyak keterampilan teknis dan
            terus memperbaiki diri sebagai pengembang yang lebih baik setiap
            hari.
          </p>
        </div>

        {/* Profile and Skills Section */}
        <div className="grid md:grid-cols- 2 gap-8 md:gap-12 justify-center items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center items-center md:justify-start">
            <div className="relative group">
              <div className="relative rounded-full overflow-hidden w-48 md:w-64 h-48 md:h-64">
                <img
                  src="/img/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Skills & Expertise
            </h3>
            <div className="max-w-md">
              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          <InfoCard
            icon={BookOpen}
            title="Education"
            items={["PKBM 01 Jakarta", "SMK Negeri 21 Jakarta"]}
          />
          <InfoCard
            icon={Award}
            title="Certification"
            items={[
              "Virtual Bootcamp UNSIA x UNAS Digital Business and Cyber Security (2024)",
            ]}
          />
          <InfoCard
            icon={Code}
            title="Technologies"
            items={[
              "Frontend Development",
              "Responsive Design",
              "UI/UX Development",
              "Version Control (Git)",
              "Game Development (Unity)",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;