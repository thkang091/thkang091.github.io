"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaJava, FaPhp, FaAws, FaWordpress, FaBootstrap, FaVuejs, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiCsharp, SiCplusplus, SiGo, SiScala, SiFlask, SiDjango, SiMongodb, SiMysql, SiGooglecloud, SiNeo4J, SiSpringboot, SiPostgresql, SiDotnet, SiExpress, SiApachehadoop, SiApachespark, SiGithub } from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const SkillIcon = ({ icon: Icon, name, experience, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.2)" }}
      className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-between h-full cursor-pointer relative overflow-hidden shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <Icon className="text-4xl text-[#854CE6] mb-2 transition-colors duration-300" />
      <div className="text-center">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400 mt-1">{experience} years</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
    </motion.div>
  );
};

const ExperienceItem = ({ logo, company, position, description, duration, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      className="bg-gray-800 text-white p-6 rounded-lg mb-6 shadow-lg relative overflow-hidden"
    >
      <div className="flex items-center mb-4">
        <Image 
          src={logo} 
          alt={company} 
          width={64}
          height={64}
          className="rounded-full mr-4 object-cover border-2 border-purple-500"
        />
        <div>
          <h3 className="text-2xl font-bold">{company}</h3>
          <h4 className="text-xl text-purple-400">{position}</h4>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
      </div>
      <motion.p
        className={`mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}
        animate={{ height: isExpanded ? "auto" : "4.5em" }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
      <Button 
        variant="outline" 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 bg-purple-600 text-white hover:bg-purple-700"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => {
          const IconComponent = getIconForTech(tech);
          return (
            <motion.div
              key={index}
              className="bg-gray-700 text-purple-300 px-2 py-1 rounded text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              {IconComponent && <IconComponent className="mr-1" />}
              {tech}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const EducationItem = ({ logo, institution, degree, description, duration, courses }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      className="bg-gray-800 text-white p-6 rounded-lg mb-6 shadow-lg relative overflow-hidden"
    >
      <div className="flex items-center mb-4">
        <Image 
          src={logo} 
          alt={institution} 
          width={64}
          height={64}
          className="rounded-full mr-4 object-cover border-2 border-purple-500"
        />
        <div>
          <h3 className="text-2xl font-bold">{institution}</h3>
          <h4 className="text-xl text-purple-400">{degree}</h4>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
      </div>
      <motion.p
        className={`mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}
        animate={{ height: isExpanded ? "auto" : "4.5em" }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
      <Button 
        variant="outline" 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 bg-purple-600 text-white hover:bg-purple-700"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h5 className="font-semibold mb-2 text-purple-300">Key Courses:</h5>
            <ul className="list-disc list-inside text-gray-300">
              {courses.map((course, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {course}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const getIconForTech = (tech) => {
  const iconMap = {
    "Python": FaPython,
    "Java": FaJava,
    "C++": SiCplusplus,
    "C#": SiCsharp,
    "HTML 5": FaHtml5,
    "CSS 3": FaCss3,
    "JavaScript": FaJs,
    "TypeScript": SiTypescript,
    "SQL": DiSqllite,
    "Go/Golang": SiGo,
    "PHP": FaPhp,
    "Scala": SiScala,
    "Flask": SiFlask,
    "Django": SiDjango,
    "React": FaReact,
    "React Native": FaReact,
    "Node.js": FaNodeJs,
    "Vue.js": FaVuejs,
    "Angular": FaAngular,
    "MongoDB": SiMongodb,
    "MySQL": SiMysql,
    "Figma": FaFigma,
    "Git/Github": SiGithub,
    "WordPress": FaWordpress,
    "AWS": FaAws,
    "GCP": SiGooglecloud,
    "Neo4j": SiNeo4J,
    "Bootstrap": FaBootstrap,
    "Spring Boot": SiSpringboot,
    "PostgreSQL": SiPostgresql,
    ".NET": SiDotnet,
    "Express.js": SiExpress,
    "Hadoop": SiApachehadoop,
    "Spark": SiApachespark,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
  };

  return iconMap[tech] || null;
};

const NavItem = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
      active ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

  const experiences = [
    {
      logo: '/assets/resume/experience/cognizant.jpg',
      company: 'Cognizant',
      position: 'Machine Learning Engineer Intern',
      description: "I helped a team use Hadoop, Spark, Java, and Scala to process data 25% faster. I also improved an information retrieval system with GPT-3, enhancing its natural language processing by 15%.",
      duration: 'February 2024 - Current',
      technologies: ['Hadoop', 'Spark', 'Java', 'Scala', 'GPT-3', 'NLP']
    },
    {
      logo: '/assets/resume/experience/McNamara.png',
      company: 'McNamara Alumni Center',
      position: 'Junior Web Developer',
      description: "I made a website for the McNamara Alumni Center with PHP, JavaScript, CSS, WordPress, Bootstrap, and jQuery. It helped over 2000 users book events and get involved, cutting manual work by 20%. I had the opportunity to TA for several lectures for alumni attending classes. I helped them understand how to organize their code efficiently and make their objects play nice together.",
      duration: 'August 2023 - December 2023',
      technologies: ['PHP', 'JavaScript', 'CSS', 'WordPress', 'Bootstrap', 'jQuery']
    },
    {
      logo: '/assets/resume/experience/Minnesota Supercomputing Institute.jpg',
      company: 'Minnesota Supercomputing Institute',
      position: 'Software Engineer Intern',
      description: "I solved computer problems using Linux and Unix commands, cutting manual work time by half. I also sped up network communication by 20% using C++ and Python, and made a climate modeling project run 30% faster with OpenMP, MPI, and C++. Special thanks to Jaime Vega for letting me explore supercomputer HPC resources like Agate, Mangi, and Mesabi at the MSI Data Center.",
      duration: 'June 2023 - August 2023',
      technologies: ['Linux', 'Unix', 'C++', 'Python', 'OpenMP', 'MPI']
    },
    {
      logo: '/assets/resume/experience/TransData.png',
      company: 'TransData',
      position: 'Software Engineer Intern',
      description: "I was involved in several impactful projects through various rotational programs: Digital Experience, Big Data Services, and Customer Service Technology. I worked on improving how our systems fetch data using Spring Boot and Java on AWS. I also created a smart chatbot with C# and .NET on Microsoft Azure to help customers, and I made the app look and work better using JavaScript, React, and React Native.",
      duration: 'June 2021 - August 2021',
      technologies: ['Spring Boot', 'Java', 'AWS', 'C#', '.NET', 'Azure', 'JavaScript', 'React', 'React Native']
    },
  ];

  const educationItems = [
    {
      logo: '/assets/resume/education/umn.png',
      institution: 'University of Minnesota Twin Cities',
      degree: 'Bachelor of Science in Computer Science and Data Science',
      description: "Pursuing a dual major in Computer Science and Data Science, focusing on machine learning, algorithms, and software engineering.",
      duration: '2022 - 2026',
      courses: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Database Management Systems",
        "Machine Architecture",
        "Artificial Intelligence",
      ]
    }
  ];

  const skills = {
    categories: {
      "All": [
        { icon: FaPython, name: "Python", experience: 1 },
        { icon: FaJava, name: "Java", experience: 1 },
        { icon: SiCplusplus, name: "C++", experience: 1 },
        { icon: SiCsharp, name: "C#", experience: 1 },
        { icon: FaHtml5, name: "HTML 5", experience: 1 },
        { icon: FaCss3, name: "CSS 3", experience: 1 },
        { icon: FaJs, name: "JavaScript", experience: 1 },
        { icon: SiTypescript, name: "TypeScript", experience: 1 },
        { icon: DiSqllite, name: "SQL", experience: 1 },
        { icon: SiGo, name: "Go/Golang", experience: 1 },
        { icon: FaPhp, name: "PHP", experience: 2 },
        { icon: SiScala, name: "Scala", experience: 1 },
        { icon: SiFlask, name: "Flask", experience: 2 },
        { icon: SiDjango, name: "Django", experience: 2 },
        { icon: FaReact, name: "React", experience: 3 },
        { icon: FaReact, name: "React Native", experience: 2 },
        { icon: FaNodeJs, name: "Node.js", experience: 2 },
        { icon: FaVuejs, name: "Vue.js", experience: 1 },
        { icon: FaAngular, name: "Angular", experience: 1 },
        { icon: SiMongodb, name: "MongoDB", experience: 2 },
        { icon: SiMysql, name: "MySQL", experience: 3 },
        { icon: FaFigma, name: "Figma", experience: 1 },
        { icon: SiGithub, name: "Git/Github", experience: 3 },
        { icon: FaWordpress, name: "WordPress", experience: 2 },
        { icon: FaAws, name: "AWS", experience: 2 },
        { icon: SiGooglecloud, name: "GCP", experience: 1 },
        { icon: SiNeo4J, name: "Neo4j", experience: 1 },
        { icon: FaBootstrap, name: "Bootstrap", experience: 2 },
        { icon: SiSpringboot, name: "Spring Boot", experience: 2 },
        { icon: SiPostgresql, name: "PostgreSQL", experience: 2 },
        { icon: SiDotnet, name: ".NET", experience: 2 },
        { icon: SiExpress, name: "Express.js", experience: 2 },
        { icon: SiApachehadoop, name: "Hadoop", experience: 1 },
        { icon: SiApachespark, name: "Spark", experience: 1 },
        { icon: SiNextdotjs, name: "Next.js", experience: 2 },
        { icon: SiTailwindcss, name: "Tailwind CSS", experience: 2 },
      ],
      "Languages": [
        { icon: FaPython, name: "Python", experience: 3 },
        { icon: FaJava, name: "Java", experience: 3 },
        { icon: SiCplusplus, name: "C++", experience: 2 },
        { icon: SiCsharp, name: "C#", experience: 2 },
        { icon: FaHtml5, name: "HTML 5", experience: 3 },
        { icon: FaCss3, name: "CSS 3", experience: 3 },
        { icon: FaJs, name: "JavaScript", experience: 3 },
        { icon: SiTypescript, name: "TypeScript", experience: 2 },
        { icon: DiSqllite, name: "SQL", experience: 2 },
        { icon: SiGo, name: "Go/Golang", experience: 1 },
        { icon: FaPhp, name: "PHP", experience: 2 },
        { icon: SiScala, name: "Scala", experience: 1 },
      ],
      "Frameworks": [
        { icon: SiFlask, name: "Flask", experience: 2 },
        { icon: SiDjango, name: "Django", experience: 2 },
        { icon: FaReact, name: "React", experience: 3 },
        { icon: FaReact, name: "React Native", experience: 2 },
        { icon: FaNodeJs, name: "Node.js", experience: 2 },
        { icon: FaVuejs, name: "Vue.js", experience: 1 },
        { icon: FaAngular, name: "Angular", experience: 1 },
        { icon: SiSpringboot, name: "Spring Boot", experience: 2 },
        { icon: SiDotnet, name: ".NET", experience: 2 },
        { icon: SiExpress, name: "Express.js", experience: 2 },
        { icon: SiNextdotjs, name: "Next.js", experience: 2 },
        { icon: SiTailwindcss, name: "Tailwind CSS", experience: 2 },
        { icon: FaBootstrap, name: "Bootstrap", experience: 2 },
      ],
      "Databases": [
        { icon: SiMongodb, name: "MongoDB", experience: 2 },
        { icon: SiMysql, name: "MySQL", experience: 3 },
        { icon: SiPostgresql, name: "PostgreSQL", experience: 2 },
        { icon: SiNeo4J, name: "Neo4j", experience: 1 },
      ],
      "Tools & Technologies": [
        { icon: FaFigma, name: "Figma", experience: 1 },
        { icon: SiGithub, name: "Git/Github", experience: 3 },
        { icon: FaWordpress, name: "WordPress", experience: 2 },
        { icon: FaAws, name: "AWS", experience: 2 },
        { icon: SiGooglecloud, name: "GCP", experience: 1 },
        { icon: SiApachehadoop, name: "Hadoop", experience: 1 },
        { icon: SiApachespark, name: "Spark", experience: 1 },
      ],
    }
  };

  const skillCategories = [
    { name: 'All', icon: '🌟' },
    { name: 'Languages', icon: '🗣️' },
    { name: 'Frameworks', icon: '🛠️' },
    { name: 'Databases', icon: '💾' },
    { name: 'Tools & Technologies', icon: '🔧' },
  ];

  const handleSkillClick = (skill) => {
    setHoveredSkill(skill);
    setIsSkillModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#854CE6]">
        </h1>

        <nav className="mb-12 flex justify-center space-x-4">
          <NavItem active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
            Experience
          </NavItem>
          <NavItem active={activeTab === 'education'} onClick={() => setActiveTab('education')}>
            Education
          </NavItem>
          <NavItem active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>
            Skills
          </NavItem>
        </nav>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <AnimatePresence mode="wait">
            <TabsContent value="experience" className="space-y-6">
              <ScrollArea className="h-[600px] pr-4">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} {...exp} />
                ))}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <ScrollArea className="h-[600px] pr-4">
                {educationItems.map((edu, index) => (
                  <EducationItem key={index} {...edu} />
                ))}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="skills">
              <div className="mb-8">
                <motion.div 
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skillCategories.map((category) => (
                    <motion.button
                      key={category.name}
                      onClick={() => setActiveSkillCategory(category.name)}
                      className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
                        activeSkillCategory === category.name
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.categories[activeSkillCategory].map((skill, index) => (
                      <SkillIcon 
                        key={index} 
                        {...skill} 
                        onClick={() => handleSkillClick(skill)}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        {/* Skill Modal */}
        <AnimatePresence>
          {isSkillModalOpen && hoveredSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setIsSkillModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.5, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: -100 }}
                className="bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-4">
                  <hoveredSkill.icon className="text-4xl mr-4 text-purple-500" />
                  <h2 className="text-2xl font-bold text-white">{hoveredSkill.name}</h2>
                </div>
                <p className="mb-4 text-gray-300">Years of Experience: {hoveredSkill.experience}</p>
                <Button 
                  onClick={() => setIsSkillModalOpen(false)}
                  className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;