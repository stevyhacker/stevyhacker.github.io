import { Github, Linkedin, Mail, ExternalLink, Code2, Brain, Wallet, Database, FileText, Twitter } from 'lucide-react';

const projects = [
  {
    title: "Aimons",
    description: "Digital character AI-assisted generator tool with NFT minting as a saving mechanism.",
    image: "/img/aimon.png",
    tech: ["React", "Next.js", "Solidity", "Hardhat", "OpenZeppelin"],
    url: "https://ai-mons-frontend.vercel.app"
  },
  {
    title: "Chain Art",
    description: "NFT minting tool with on-chain art generation and marketplace.",
    image: "/img/chainArt.png",
    tech: ["React", "Solidity", "IPFS", "OpenZeppelin"],
    url: "https://chain-art-frontend.vercel.app"
  },
  {
    title: "IT Stats",
    description: "IT industry salary statistics and job market analysis tool.",
    image: "/img/it_stats.png",
    tech: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
    url: "https://itstats.me"
  },
  {
    title: "Token Locker",
    description: "Simple protocol for locking ERC20 tokens with a user-friendly interface.",
    image: "/img/ethereumLogo.png",
    tech: ["React", "TypeScript", "Solidity", "Hardhat", "ethers.js"],
    url: "https://token-locker.vercel.app"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2D3AD] via-[#E6C39D] to-[#D9B48F] text-[#2f4858]">
      {/* Hero Section */}
      <div id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="main">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F2D3AD]/30 to-[#58857c]/20"></div>
        <div className="z-10 max-w-4xl mx-auto px-4 text-center text-[#2f4858]">
          <div className="mb-8 sm:mb-12 animate-float">
            <div className="w-48 h-48 sm:w-80 sm:h-80 mx-auto mb-8 sm:mb-12 rounded-full overflow-hidden border-4 border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-[#d1dfd2] to-[#b3c7b5] p-1">
              <div className="rounded-full overflow-hidden w-full h-full">
                <img 
                  src="/img/pro.jpg" 
                  fetchpriority="high"
                  decoding="async"
                  alt="Stevan Bogosavljević"
                  className="w-full h-full object-cover duration-700"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#2f4858] via-[#3a5a6d] to-[#2f4858] animate-gradient-x drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] tracking-tight px-4">
              Stevan Bogosavljević
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#2f4858] mb-8 sm:mb-12 font-light tracking-wide animate-fade-in-up px-4 mt-4">Senior Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 px-4">
              <a href="https://github.com/stevyhacker" 
                 className="p-4 rounded-2xl backdrop-blur-md bg-white/20
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.2)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] 
                          transition-all duration-300 hover:scale-110 hover:bg-white/30"
                 aria-label="GitHub Profile">
                <Github size={32} className="text-[#2f4858]" />
              </a>
              <a href="https://twitter.com/stevyhacker" 
                 className="p-4 rounded-2xl backdrop-blur-md bg-white/20
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.2)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] 
                          transition-all duration-300 hover:scale-110 hover:bg-white/30"
                 aria-label="Twitter Profile">
                <Twitter size={32} className="text-[#2f4858]" />
              </a>
              <a href="https://linkedin.com/in/stevan-bogosavljevic/" 
                 className="p-4 rounded-2xl backdrop-blur-md bg-white/20
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.2)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] 
                          transition-all duration-300 hover:scale-110 hover:bg-white/30"
                 aria-label="LinkedIn Profile">
                <Linkedin size={32} className="text-[#2f4858]" />
              </a>
              <a href="mailto:stevan.bogosavljevic@gmail.com" 
                 className="p-4 rounded-2xl backdrop-blur-md bg-white/20
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.2)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] 
                          transition-all duration-300 hover:scale-110 hover:bg-white/30"
                 aria-label="Email Me">
                <Mail size={32} className="text-[#2f4858]" />
              </a>
              <a 
                href="/Stevan_Bogosavljevic_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl backdrop-blur-md bg-white/20
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.2)] 
                          hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] 
                          transition-all duration-300 hover:scale-110 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Download CV"
              >
                <FileText size={24} className="text-[#2f4858]" />
                <span className="text-[#2f4858] font-medium">Download CV</span>
              </a>
            </div>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4" aria-label="Skills">
              {['Solidity', 'EVM', 'Smart Contracts', 'DeFi', 'React', 'TypeScript'].map((skill) => (
                <li key={skill} className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-white/20 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.2)] border border-white/20 font-bold hover:bg-white/30 hover:scale-105 transform transition-all duration-300 cursor-default">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8bb93]/60 via-[#a3bba5]/70 to-[#83a186]/80 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2f4858] to-[#3a5a6d]">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/20 rounded-2xl backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.2)] border border-white/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_16px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2f4858]">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C4BF98]/50 via-[#b3c7b5]/60 to-[#83a186]/70 backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="font-sans text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2f4858] to-[#3a5a6d]">Pet Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div key={project.title} className="group relative transform hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#a3bba5] to-[#638767] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-white/20 rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" width="1280" height="720" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-sans text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                      <p className="font-sans text-white/90 line-clamp-2 text-sm font-medium drop-shadow-lg leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-sm transition-colors duration-300">
                    <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies">
                      {project.tech.map((tech) => (
                        <li key={tech} 
                          className="font-mono text-xs sm:text-sm px-3 py-1 bg-white/20 rounded-full
                                   shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] 
                                   border border-white/20 text-[#2f4858] font-medium
                                   hover:bg-white/30 hover:scale-105 transform transition-all duration-300">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={project.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans inline-flex items-center px-4 py-2 bg-white/20 rounded-lg 
                               text-[#2f4858] hover:text-[#1a2e38] transition-all duration-300 
                               hover:bg-white/30 group/link font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/20">
                      View Project 
                      <ExternalLink size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#83a186]/80 to-[#58857c]/90 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#f7f3e9]">Let's Connect</h2>
          <p className="text-white mb-12 text-lg font-medium max-w-2xl mx-auto">
            Always open for new opportunities and interesting projects
          </p>
          <a
            href="mailto:stevan.bogosavljevic@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-full font-semibold text-lg shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-md border border-white/20 transition-all hover:scale-105 group"
          >
            stevan.bogosavljevic@gmail.com
            <Mail size={24} className="ml-2 group-hover:animate-pulse" />
          </a>
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/stevyhacker" 
               className="p-3 rounded-xl backdrop-blur-md bg-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.2)] 
                        hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.3)] 
                        transition-all duration-300 hover:scale-110 hover:bg-white/20"
               aria-label="GitHub Profile">
              <Github size={24} className="text-white" />
            </a>
            <a href="https://twitter.com/stevyhacker" 
               className="p-3 rounded-xl backdrop-blur-md bg-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.2)] 
                        hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.3)] 
                        transition-all duration-300 hover:scale-110 hover:bg-white/20"
               aria-label="Twitter Profile">
              <Twitter size={24} className="text-white" />
            </a>
            <a href="https://linkedin.com/in/stevan-bogosavljevic/" 
               className="p-3 rounded-xl backdrop-blur-md bg-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.2)] 
                        hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_8px_rgba(0,0,0,0.3)] 
                        transition-all duration-300 hover:scale-110 hover:bg-white/20"
               aria-label="LinkedIn Profile">
              <Linkedin size={24} className="text-white" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;