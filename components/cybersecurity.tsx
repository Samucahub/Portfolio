"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "@/components/ui/3d-pin";
import { cyberSecuritySkills, cyberSecurityTools, cyberSecurityProjects } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

export const Cybersecurity = () => {
  const { t } = useLanguage();

  return (
    <section id="cybersecurity" className="w-full py-20">
      <h1 className="heading">
        {t.cybersecurity.heading} <span className="text-purple">{t.cybersecurity.headingHighlight}</span>
      </h1>

      <div className="mt-20 grid gap-10">
        <div className="relative">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {cyberSecuritySkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="heading mb-10">
            {t.cybersecurity.toolsHeading} <span className="text-purple">{t.cybersecurity.toolsHighlight}</span>
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cyberSecurityTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="heading mb-10">
            {t.cybersecurity.projectsHeading} <span className="text-purple">{t.cybersecurity.projectsHighlight}</span>
          </h2>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
            {cyberSecurityProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-white/[0.1] p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-blue-500/10" />
          
          <div className="relative z-10 text-center">
            <h3 className="mb-6 text-3xl font-bold text-white">
              {t.cybersecurity.certificationsHeading} <span className="text-purple">{t.cybersecurity.certificationsHighlight}</span>
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-black-200 px-8 py-4 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="relative text-lg font-bold text-white">{t.cybersecurity.cert1}</p>
                <p className="relative text-sm text-white-200">{t.cybersecurity.cert1desc}</p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-black-200 px-8 py-4 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="relative text-lg font-bold text-white">{t.cybersecurity.cert2}</p>
                <p className="relative text-sm text-white-200">{t.cybersecurity.cert2desc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const [hovered, setHovered] = useState(false);

  const getSkillIcon = (title: string) => {
    switch (title) {
      case "Pentesting":
        return (
          <svg className="h-16 w-16 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        );
      case "Network Security":
        return (
          <svg className="h-16 w-16 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        );
      case "Forense Digital":
        return (
          <svg className="h-16 w-16 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case "OSINT":
        return (
          <svg className="h-16 w-16 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple to-blue-500 opacity-0 blur transition duration-500 group-hover:opacity-75" />
      
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-black-100 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        
        <div className="relative z-10">
          <motion.div 
            className="mb-6"
            animate={{ 
              scale: hovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {getSkillIcon(skill.title)}
          </motion.div>
          <h3 className="mb-3 text-2xl font-bold text-white">{skill.title}</h3>
          <p className="text-sm leading-relaxed text-white-200">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ToolCard = ({ tool, index }: { tool: any; index: number }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple via-blue-500 to-purple opacity-0 blur transition duration-500 group-hover:opacity-100" />
      
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-black-100 to-black-200 p-6">
        <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-purple/20 to-transparent blur-2xl" />
        
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-xl font-bold text-white transition-colors group-hover:text-purple">
              {tool.name}
            </h4>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple/30 bg-purple/10">
              <span className="text-sm font-bold text-purple">{tool.proficiency}</span>
            </div>
          </div>
          
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white-200">
            {t.cybersecurity.toolCategories[tool.category as keyof typeof t.cybersecurity.toolCategories] || tool.category}
          </p>
          
          <div className="relative h-2 overflow-hidden rounded-full bg-black-300">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tool.proficiency}%` }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full rounded-full bg-gradient-to-r from-purple via-blue-500 to-purple"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { t } = useLanguage();

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical":
        return { bg: "bg-red-500/20", text: "text-red-500" };
      case "High":
        return { bg: "bg-orange-500/20", text: "text-orange-500" };
      case "Educational":
        return { bg: "bg-green-500/20", text: "text-green-500" };
      default:
        return { bg: "bg-blue-500/20", text: "text-blue-500" };
    }
  };

  const colors = getImpactColor(project.impact);
  const translatedImpact = t.cybersecurity.impact[project.impact as keyof typeof t.cybersecurity.impact] || project.impact;

  return (
    <div className="flex h-[28rem] w-[95vw] items-center justify-center sm:h-[32rem] sm:w-[90vw] md:h-[41rem] md:w-[570px] lg:min-h-[32.5rem]">
      <PinContainer title={t.projects.visit} href={project.sourceCode || project.link || "#cybersecurity"}>
        <div className="relative mb-10 flex h-[25vh] w-[90vw] items-center justify-center overflow-hidden sm:h-[30vh] sm:w-[80vw] md:h-[40vh] md:w-[570px]">
          <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
            {project.img ? (
              <Image
                height={330}
                width={552}
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                height={330}
                width={552}
                src="/bg.png"
                alt="bg-img"
              />
            )}
          </div>

          {!project.img && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-purple bg-black-100/90 backdrop-blur-sm">
                <span className={`text-5xl font-bold ${colors.text}`}>
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          )}

          <div className="absolute right-4 top-4 z-10">
            <span className={`rounded-full ${colors.bg} ${colors.text} px-4 py-2 text-xs font-bold backdrop-blur-sm`}>
              {translatedImpact}
            </span>
          </div>
        </div>

        <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
          {project.title}
        </h1>

        <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
          {project.description}
        </p>

        <div className="mb-3 mt-7 flex items-center justify-between">
          <div className="flex items-center">
            {project.iconLists &&
              project.iconLists.map((icon: string, i: number) => (
                <div
                  key={icon}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                  style={{
                    transform: `translateX(-${5 * i * 2}px)`,
                  }}
                >
                  <Image
                    height={40}
                    width={40}
                    src={icon}
                    alt={icon}
                    className="p-2"
                  />
                </div>
              ))}
          </div>

          <div className="flex items-center justify-center">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-purple hover:opacity-70 md:text-xs lg:text-xl"
            >
              <p className="flex">{t.projects.sourceCode}</p>
              <FaLocationArrow className="ms-3" color="#cbacf9" />
            </a>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
