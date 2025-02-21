import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Wallet, Database, FileText, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#F2D3AD] text-[#2f4858]">

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="z-10 max-w-4xl mx-auto px-4 text-center text-[#2f4858]">
          <div className="mb-8 sm:mb-12">
            <div className="w-48 h-48 sm:w-80 sm:h-80 mx-auto mb-8 sm:mb-12 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:scale-110">
              <img 
                src="/img/pro.jpg" 
                alt="Stevan Bogosavljević"
                className="w-full h-full object-cover duration-500"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#2f4858] to-[#2f4858] animate-gradient-x drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)] tracking-tight px-4">
              Stevan Bogosavljević
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#2f4858] mb-8 sm:mb-12 font-light tracking-wide animate-fade-in-up px-4">Senior Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4">
              <a href="https://github.com/stevyhacker" 
                 className="p-4 rounded-2xl backdrop-blur-md 
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] 
                          transition-all hover:scale-110 hover:bg-white/20 dark:hover:bg-gray-700/20"
                 aria-label="GitHub Profile">
                <Github size={32} className="text-[#2f4858] dark:text-gray-300" />
              </a>
              <a href="https://twitter.com/stevyhacker" 
                 className="p-4 rounded-2xl backdrop-blur-md 
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] 
                          transition-all hover:scale-110 hover:bg-white/20 dark:hover:bg-gray-700/20"
                 aria-label="Twitter Profile">
                <Twitter size={32} className="text-[#2f4858] dark:text-gray-300" />
              </a>
              <a href="https://linkedin.com/in/stevan-bogosavljevic/" 
                 className="p-4 rounded-2xl backdrop-blur-md 
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] 
                          transition-all hover:scale-110 hover:bg-white/20 dark:hover:bg-gray-700/20"
                 aria-label="LinkedIn Profile">
                <Linkedin size={32} className="text-[#2f4858] dark:text-gray-300" />
              </a>
              <a href="mailto:stevan.bogosavljevic@gmail.com" 
                 className="p-4 rounded-2xl backdrop-blur-md 
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] 
                          transition-all hover:scale-110 hover:bg-white/20 dark:hover:bg-gray-700/20"
                 aria-label="Email Me">
                <Mail size={32} className="text-[#2f4858] dark:text-gray-300" />
              </a>
              <a 
                href="/Stevan_Bogosavljevic_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_6px_12px_rgba(0,0,0,0.4)] transition-all hover:scale-110 hover:bg-white/20 dark:text-gray-300"
                aria-label="Download CV"
              >
                <FileText size={28} className="text-[#2f4858] dark:text-gray-300" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              {['Solidity', 'Smart Contracts', 'DeFi', 'React'].map((skill) => (
                <span key={skill} className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.3)] border border-white/10 font-bold hover:bg-white/20 hover:scale-105 transform transition-all duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8bb93]/70 to-[#b8bb93]/90 backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <Code2 size={32} className="text-[#2f4858]" />,
                title: "Smart Contract Expert",
                description: <span className="font-medium">4+ years of experience with Solidity, EVM, Hardhat, and Foundry</span>
              },
              {
                icon: <Wallet size={32} className="text-[#2f4858]" />,
                title: "DeFi Enthusiast",
                description: <span className="font-medium">Specialized in DeFi protocols and NFT implementations</span>
              },
              {
                icon: <Database size={32} className="text-[#2f4858]" />,
                title: "Full Stack Developer",
                description: <span className="font-medium">Proficient in React/Next.js and TypeScript</span>
              },
              {
                icon: <Brain size={32} className="text-[#2f4858]" />,
                title: "Team Lead",
                description: <span className="font-medium">Led mobile development teams and mentored Android developers</span> 
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.3)] border border-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:scale-105 hover:bg-white/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2f4858]">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C4BF98]/40 to-[#C4BF98]/60  backdrop-blur-xl transition-colors duration-200"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="font-sans text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2f4858] to-[#2f4858]">Pet Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-[#2f4858]">
            {projects.map((project) => (
              <div key={project.title} className="group relative transform hover:-translate-y-1 transition-all duration-300 back ">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#a3bba5] to-[#638767] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-[#83a186]/90 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.2)] border border-[#b3c7b5]/30 dark:border-[#4a614c]/30 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden rounded-2xl">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-50 dark:from-black/90 dark:via-black/50 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-sans text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                      <p className="font-sans text-white/90 line-clamp-2 text-sm font-medium drop-shadow-lg leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-[#b3c7b5]/50 dark:from-[#4a614c]/50 dark:to-[#3c4f3e]/50 transition-colors duration-200">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} 
                          className="font-mono text-sm px-3 py-1 bg-[#d1dfd2] dark:bg-[#4a614c] rounded-full
                                   shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] 
                                   border border-[#b3c7b5] dark:border-[#638767] text-[#2f4858] dark:text-[#e8efe9] font-medium
                                   hover:bg-[#b3c7b5] dark:hover:bg-[#638767] hover:scale-105 transform transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.url} 
                      className="font-sans inline-flex items-center px-4 py-2 bg-[#d1dfd2] dark:bg-[#4a614c] rounded-lg 
                               text-[#2f4858] dark:text-[#e8efe9] hover:text-[#1a2e38] dark:hover:text-white transition-all duration-300 
                               hover:bg-[#b3c7b5] dark:hover:bg-[#638767] group/link font-medium">
                      View Project 
                      <ExternalLink size={16} className="ml-2 transform group-hover/link:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#58857c] backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-700">Let's Connect</h2>
          <p className="text-[#2f4858] mb-12 text-lg font-semibold">
            Always open for new opportunities and interesting projects
          </p>
          <a
            href="mailto:stevan.bogosavljevic@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-[#2f4858] text-[#f7f3e9] rounded-full font-semibold text-lg shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-all hover:scale-105"
          >
            stevan.bogosavljevic@gmail.com
            <Mail size={24} className="ml-2" />
          </a>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "Aimons",
    description: "Digital character AI-assisted generator tool with NFT minting as a saving mechanism.",
    image: "img/aimon.png",
    tech: ["React", "Next.js", "Solidity", "Hardhat", "OpenZeppelin"],
    url: "https://ai-mons-frontend.vercel.app/"
  },
  {
    title: "Chain Art",
    description: "NFT minting tool with on-chain art generation and marketplace.",
    image: "/img/chainArt.png",
    tech: ["React", "Solidity", "IPFS", "OpenZeppelin"],
    url: "https://chain-art.vercel.app/"
  },
  {
    title: "IT Stats",
    description: "IT industry salary statistics and job market analysis tool.",
    image: "/img/it_stats.png",
    tech: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
    url: "https://it-stats.vercel.app/"
  },
  {
    title: "Token Locker",
    description: "Simple protocol for locking ERC20 tokens with a user-friendly interface.",
    image: "/img/ethereumLogo.png",
    tech: ["React", "TypeScript", "Solidity", "Hardhat", "ethers.js"],
    url: "https://token-locker.vercel.app/"
  }
];

export default App;