import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Cybersecurity", link: "#cybersecurity" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Priorizo colaboração e comunicação aberta em todos os projetos",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Baseado no Porto, Portugal",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Sempre a aprender e melhorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Apaixonado por tecnologia, desenvolvimento e cibersegurança.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente a desenvolver o BeatRooter",
    description: "Projeto Atual",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer começar um projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "NataBase",
    des: "Aplicação para digitalizar processos físicos na indústria alimentar, focada em organização de produção e inventário.",
    img: "/natabase_logo.png",
    iconLists: ["/kot.png", "/xml.png"],
    link: "https://github.com/Samucahub/Portfolio/tree/main/NataBase",
    sourceCode: "https://github.com/Samucahub/Portfolio/tree/main/NataBase",
  },
  {
    id: 2,
    title: "CaraDBela",
    des: "Serviço de segurança para dispositivos IoT, protegendo eletrodomésticos inteligentes numa rede privada isolada.",
    img: "/caradbela_logo.png",
    iconLists: ["/py.png", "/js.png", "/mongo.png"],
    link: "https://github.com/davideferreira00/caraDBela",
    sourceCode: "https://github.com/davideferreira00/caraDBela",
  },
  {
    id: 3,
    title: "Radiante",
    des: "Sistema de radar para localização e deteção de frotas desenvolvido com Arduino, C++ e Python.",
    img: "/radiante.png",
    iconLists: ["/cpp.png", "/py.png", "/re.svg"],
    link: "https://github.com/davideferreira00/-Radiante-",
    sourceCode: "https://github.com/davideferreira00/-Radiante-",
  },
  {
    id: 4,
    title: "Rebirth",
    des: "Projeto final de curso desenvolvido em Unity com C#, game completo com mecânicas avançadas.",
    img: "/rebirth.png",
    iconLists: ["/csharp.png", "/unity.png"],
    link: "https://github.com/Samucahub/Rebirth/tree/main",
    sourceCode: "https://github.com/Samucahub/Rebirth/tree/main",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer e Hardware Assistant - Pluricosmética",
    desc: "Desenvolvimento frontend e backend de website de compras com MySQL, PHP e HTML/CSS. Reparação de computadores.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Dev Full Stack - SigmaCode",
    desc: "Construção de Web App para monitorizar entradas/saídas de funcionários usando C# e SQL Server.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Cybersecurity Student",
    desc: "Especialização em Pentesting, Network Security, Forense e OSINT. Descoberta de vulnerabilidades em sistemas.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Development Projects",
    desc: "Desenvolvimento de aplicações usando Kotlin, Python, C++, Node.js e frameworks modernos.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Samucahub",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/Samuel98625313",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/samuel-rocha-3a630731a/",
  },
] as const;

export const techStack = {
  stack1: ["PHP", "Node.js", "Python"],
  stack2: ["Kotlin", "C++", "C#"],
} as const;

export const cyberSecuritySkills = [
  {
    id: 1,
    title: "Pentesting",
    description: "Testes de penetração em ambientes controlados e seguros, identificação de vulnerabilidades em web, rede e hardware.",
    icon: "🎯",
  },
  {
    id: 2,
    title: "Network Security",
    description: "Configuração e gestão de redes seguras, análise de tráfego e deteção de intrusões.",
    icon: "🔐",
  },
  {
    id: 3,
    title: "Forense Digital",
    description: "Análise forense de sistemas comprometidos, recuperação e análise de evidências digitais.",
    icon: "🔍",
  },
  {
    id: 4,
    title: "OSINT",
    description: "Recolha e análise de informação de fontes abertas para investigações e avaliações de segurança.",
    icon: "🕵️",
  },
] as const;

export const cyberSecurityTools = [
  {
    id: 1,
    name: "Wireshark",
    category: "Network Analysis",
    proficiency: 85,
  },
  {
    id: 2,
    name: "Metasploit",
    category: "Exploitation",
    proficiency: 80,
  },
  {
    id: 3,
    name: "Nessus",
    category: "Vulnerability Scanner",
    proficiency: 80,
  },
  {
    id: 4,
    name: "Caido",
    category: "Web Proxy",
    proficiency: 80,
  },
  {
    id: 5,
    name: "FTK Imager",
    category: "Forensics",
    proficiency: 75,
  },
  {
    id: 6,
    name: "Burp Suite",
    category: "Web Security",
    proficiency: 75,
  },
  {
    id: 7,
    name: "Nmap",
    category: "Network Scanner",
    proficiency: 85,
  },
  {
    id: 8,
    name: "Flipper Zero",
    category: "Hardware",
    proficiency: 90,
  },
] as const;

export const cyberSecurityProjects = [
  {
    id: 1,
    title: "Keylogger",
    description: "Ferramenta educativa para demonstração de técnicas de keylogging em ambientes controlados. Desenvolvida para consciencialização de segurança.",
    year: "2025",
    impact: "Educational",
    tags: ["Educational", "Malware Dev", "Security Awareness"],
    img: "/keylogger.png",
    iconLists: ["/py.png"],
    link: "https://github.com/Samucahub/Portfolio/tree/main/Keylogger",
    sourceCode: "https://github.com/Samucahub/Portfolio/tree/main/Keylogger",
  },
  {
    id: 2,
    title: "Scalable Access Vulnerability",
    description: "Exploração e documentação de vulnerabilidade de escalação de privilégios no sistema ISTEC, permitindo acesso não autorizado a recursos críticos.",
    year: "2025",
    impact: "Critical",
    tags: ["Privilege Escalation", "Pentesting", "Critical Infrastructure"],
    img: "/ataqueservidor.png",
    iconLists: ["/linux.png", "/bash.png"],
    link: "https://github.com/Samucahub/Portfolio/tree/main/Scalable%20Access%20Vulnerability",
    sourceCode: "https://github.com/Samucahub/Portfolio/tree/main/Scalable%20Access%20Vulnerability",
  },
  {
    id: 3,
    title: "BeatRooter",
    description: "Programa desenvolvido para auxiliar hackers e profissionais de cibersegurança na criação de mapas mentais de ataque, visualização de vetores e planeamento de operações.",
    year: "2025",
    impact: "High",
    tags: ["Red Team", "Attack Planning", "Visualization Tool"],
    img: "/beatrooter.jpg",
    iconLists: ["/py.png", "/ollama.png"],
    link: "https://github.com/0xadamastor/ISTEC-Wargaming/tree/core",
    sourceCode: "https://github.com/0xadamastor/ISTEC-Wargaming/tree/core",
  },
  {
    id: 4,
    title: "Pentreble",
    description: "Ataque massivo coordenado a toda a infraestrutura hardware e software do ISTEC. Demonstração de capacidades de penetração em larga escala em ambiente educacional.",
    year: "2025",
    impact: "Critical",
    tags: ["Mass Exploitation", "Infrastructure Attack", "Advanced Pentesting"],
    img: "/flipper.png",
    iconLists: ["/flipper_logo.png", "/linux.png", "/bash.png"],
    link: "https://github.com/Samucahub/Portfolio/tree/main/Pentreble",
    sourceCode: "https://github.com/Samucahub/Portfolio/tree/main/Pentreble",
  },
] as const;
