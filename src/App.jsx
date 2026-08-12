import React, { useMemo, useState, useEffect } from 'react';
import { Atom, ArrowDownRight, ArrowLeft, ArrowRight, Braces, Cloud, Database, Download, GitBranch, Github, Menu, MoveRight, Palette, PenTool, Server, Star, Terminal, Wind, X, ArrowDownUp, Zap, Send, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { socialLinksData } from './data/socialLinksData';
import { projectsData } from './data/projectsData';
import { PortfolioGrid } from './components/portfolio/PortfolioGrid';
import { ProjectModal } from './components/portfolio/ProjectModal';
import { SocialLinkButton } from './components/ui/SocialLinkButton';
import featuredVisual from '../imgs/photo_2025-12-12_12-05-37.jpg'; // Corrected path for featured visual
import moDrawsCover from '../imgs/Mo-draws.png';
import waymoCover from '../imgs/Waymo.png';
import forestStoryCover from '../imgs/Forest-story.png';
import forestStory2Cover from '../imgs/forest-story-2.png';
import forestStory3Cover from '../imgs/forest-story-3.png';
import bittyBrewCover from '../imgs/bitty-brew.png';
import bitty1Cover from '../imgs/bitty-1.png';
import bitty2Cover from '../imgs/bitty-2.png';
import princessCover from '../imgs/Princess.png';

const palette = {
  ink: '#000000',
  deep: '#1D2E4A',
  slate: '#52667E',
  mist: '#BDC4D4',
  sand: '#D2CFCA',
};

const projectImageMap = {
  moDraws: moDrawsCover,
  Waymo: waymoCover,
  forestStory: forestStoryCover,
  forestStory2: forestStory2Cover,
  forestStory3: forestStory3Cover,
  bittyBrew: bittyBrewCover,
  bitty1: bitty1Cover,
  bitty2: bitty2Cover,
  princess: princessCover,
};


const skillTags = [
  { label: 'React', icon: Atom },
  { label: 'TypeScript', icon: Braces },
  { label: 'Node.js', icon: Server },
  { label: 'Tailwind', icon: Wind },
  { label: 'Vite', icon: Zap },
  { label: 'Inkscape', icon: PenTool },
  { label: 'Canva', icon: Palette },
  { label: 'Firebase', icon: Cloud },
  { label: 'Render', icon: Server },
  { label: 'Lovely', icon: Heart },
  { label: 'Supabase', icon: Database },
  { label: 'Git', icon: GitBranch },
  { label: 'GitHub', icon: Github },
];
const navLinks = ['Skills', 'Projects', 'Experience', 'Certifications', 'Gallery'];
const certs = [
  {
    title: 'Google Cloud Computing Foundations: Cloud Computing Fundamentals',
    issuer: 'Google Skills',
  },
  {
    title: 'Google Cloud Computing Foundations: Infrastructure in Google Cloud',
    issuer: 'Google Skills',
  },
  {
    title: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
    issuer: 'Google Skills',
  },
  {
    title: 'Google Cloud Computing Foundations: Networking & Security in Google Cloud',
    issuer: 'Google Skills',
  },
];

const timeline = [
  
  
  {
    role: 'Brand Designer/Illustrator',
    date: '2021 — Present',
    description: 'Freelancer: Designing packaging, mockups, and identity systems for concept and client work.',
  },
  {
 
    role: 'Student Onboarding Buddy (Volunteer)',
    date: 'Feb 2026 – May 2026',
    description: 'Miva Open University - Abuja/Remote. ',
  },
  {
    role: 'Frontend Developer',
    date: 'July 2026 — Present',
    description: 'FlyrankAi - (Remote)',
  },
];

export default function App() {
  const featuredProjects = useMemo(() => projectsData.filter((project) => project.featured), []);
  const [projectIndex, setProjectIndex] = useState(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formState, handleFormSubmit] = useForm('moeaepnl');
  const currentProject = featuredProjects[projectIndex % featuredProjects.length] ?? projectsData[0];

  const nextProject = () => setProjectIndex((value) => (value + 1) % featuredProjects.length);
  const prevProject = () => setProjectIndex((value) => (value - 1 + featuredProjects.length) % featuredProjects.length);
  const closeSideNav = () => setIsSideNavOpen(false);
  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      nextProject();
    }, 8000); // Change project every 8 seconds
    return () => clearInterval(projectInterval);
  }, [featuredProjects.length]);

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-black">
      <div
        className="fixed inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#f4f4f0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 border-2 border-black bg-[#A3E635] px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.24em]">&lt;/&gt; Theresa</span>
          </div>

          <nav className="hidden items-center gap-5 font-mono text-sm font-bold uppercase tracking-[0.22em] lg:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="border-b-2 border-transparent transition hover:border-black">
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 border-2 border-black bg-[#7C3AED] px-4 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none lg:inline-flex"
          >
            Contact Me <MoveRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setIsSideNavOpen((value) => !value)}
            className="inline-flex items-center gap-2 border-2 border-black bg-[#A3E635] px-4 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none lg:hidden"
            aria-expanded={isSideNavOpen}
            aria-controls="mobile-side-nav"
            aria-label={isSideNavOpen ? 'Close navigation' : 'Open navigation'}
          >
            <Menu size={16} />
            Menu
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity lg:hidden ${isSideNavOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeSideNav}
        aria-hidden="true"
      />

      <aside
        id="mobile-side-nav"
        className={`fixed left-0 top-0 z-50 h-full w-[280px] border-r-[3px] border-black bg-[#f4f4f0] p-4 shadow-[10px_0px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 lg:hidden ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between gap-3 border-2 border-black bg-[#A3E635] px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.24em]">Menu</span>
          <button
            type="button"
            onClick={closeSideNav}
            className="inline-flex items-center justify-center border-2 border-black bg-white p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label="Close navigation"
          >
            <X size={16} />
          </button>
        </div>

        <nav className="mt-4 flex flex-col gap-3 font-mono text-sm font-black uppercase tracking-[0.18em]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={closeSideNav}
              className="border-2 border-black bg-white px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={closeSideNav}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-[#7C3AED] px-4 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Contact Me <MoveRight size={16} />
        </a>
      </aside>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-6 pl-24 sm:px-6 sm:pl-28 md:pl-32 lg:px-8 lg:pl-8 lg:py-8">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="border-[3px] border-black bg-[#f4f4f0] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] sm:p-8">
            <span className="inline-flex border-2 border-black bg-[#A3E635] px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em]">
              Hey, I&apos;m Theresa
            </span>
            <h1 className="mt-5 max-w-3xl font-mono text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Frontend Developer and Visual Designer.
            </h1>
            <p className="mt-5 max-w-2xl font-mono text-sm leading-7 sm:text-base">
              I design memorable interfaces with strong code foundations, playful illustration energy, and brand-ready detail.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border-2 border-black bg-[#A3E635] px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                View My Work <ArrowDownRight size={16} />
              </a>
              <a
                href="https://docs.google.com/document/d/1JOooQl-ucNEzUb7gEOIo80N7-rpBWiXoOvKreULOj4w/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.18em] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                 View Full Resume <ArrowDownUp  size={16} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinksData.map((link) => (
                <SocialLinkButton key={link.label} link={link} />
              ))}
            </div>
          </div>

          <div className="relative border-[3px] border-black bg-[#FF77BC] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] sm:p-8">
            <div className="absolute left-5 top-5 -rotate-3 border-2 border-black bg-[#7C3AED] px-3 py-1 font-mono text-xs font-bold uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Featured Visual
            </div>
            <div className="mx-auto mt-10 grid max-w-sm gap-5">
              <div className="relative border-[3px] border-black bg-[#D2CFCA] p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-[4/5] border-2 border-black bg-[linear-gradient(135deg,#BDC4D4_0%,#A3E635_45%,#FF77BC_100%)]">
                  <img
                    src={featuredVisual}
                    alt="Featured Visual"
                    className="h-full w-full object-cover mix-blend-multiply"
                  />
                </div>
                <div className="absolute -bottom-4 right-4 w-[85%] border-[3px] border-black bg-[#7C3AED] p-4 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em]">
                    <Terminal size={14} /> <span className="font-bold">Code Snippet</span>
                  </div>
                  <pre className="mt-3 overflow-hidden font-mono text-[11px] leading-5 text-white">
{`<Portfolio />
  <DesignSystem />
  <IllustrationGrid />
  <BrandMockups />`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          id="skills"
          className="flex flex-col border-[3px] border-black bg-[#7C3AED] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:flex-row">
          <div className="border-b-[3px] border-black px-5 py-4 font-mono text-lg font-black uppercase tracking-[0.22em] text-white lg:border-b-0 lg:border-r-[3px] lg:px-6 lg:py-6">
            Skills →
          </div>
          <div className="flex flex-1 flex-wrap gap-3 p-4 lg:p-5">
            {skillTags.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 border-2 border-black bg-[#f4f4f0] px-4 py-2 font-mono text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Icon size={14} /> {label}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          id="projects"
          className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-[3px] border-black bg-[#f4f4f0] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h2 className="font-mono text-2xl font-black uppercase tracking-tight sm:text-3xl">Featured Projects</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevProject}
                  className="border-2 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
                  aria-label="Previous project"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={nextProject}
                  className="border-2 border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
                  aria-label="Next project"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="border-[3px] border-black bg-[#FF77BC] p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <img src={projectImageMap[currentProject.coverImageKey]} alt={currentProject.title} className="h-full min-h-[260px] w-full border-2 border-black object-cover" />
                <div className="flex flex-col justify-between border-2 border-black bg-[#f4f4f0] p-5">
                  <div>
                    <span className="inline-block border-2 border-black bg-[#A3E635] px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                      {currentProject.category}
                    </span>
                    <h3 className="mt-4 font-mono text-3xl font-black uppercase leading-tight">{currentProject.title}</h3>
                    <p className="mt-3 font-mono text-sm leading-7">{currentProject.longDescription}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span key={tag} className="border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => openProject(currentProject)}
                    className="mt-5 inline-flex w-fit items-center gap-2 border-2 border-black bg-[#7C3AED] px-4 py-3 font-mono text-sm font-bold uppercase text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    VIEW DETAILS →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {featuredProjects.map((project, index) => {
                const isActive = index === (projectIndex % featuredProjects.length);

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setProjectIndex(index)}
                    className={`h-4 w-4 rounded-full border-2 border-black transition ${isActive ? 'bg-[#7C3AED]' : 'bg-[#f4f4f0] hover:-translate-y-0.5 hover:-translate-x-0.5'}`}
                    aria-label={`Show featured project ${index + 1}`}
                    aria-pressed={isActive}
                  />
                );
              })}
            </div>
          </div>

          <aside id="certifications" className="border-[3px] border-black bg-[#A3E635] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-mono text-2xl font-black uppercase tracking-tight">Certifications</h2>
            <div className="mt-5 space-y-4">
              {certs.map((cert) => (
                <div key={cert.title} className="border-[3px] border-black bg-[#D2CFCA] p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-mono text-base font-black uppercase leading-6">{cert.title}</p>
                  <p className="mt-2 font-mono text-sm leading-6">{cert.issuer}</p>
                </div>
              ))}
            </div>
            <a
              href="https://docs.google.com/document/d/1JOooQl-ucNEzUb7gEOIo80N7-rpBWiXoOvKreULOj4w/edit?usp=sharing"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-white px-4 py-3 font-mono text-sm font-black uppercase shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              View All <MoveRight size={16} />
            </a>
          </aside>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          id="gallery"
          className="border-[3px] border-black bg-[#f4f4f0] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="font-mono text-2xl font-black uppercase tracking-tight">Gallery</h2>
          <div className="mt-5">
            <PortfolioGrid projects={projectsData} onOpen={openProject} projectImageMap={projectImageMap} />
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          id="experience"
          className="grid gap-6 lg:grid-cols-[0.8fr_1.1fr_1fr]">
          <div className="flex items-center justify-center border-[3px] border-black bg-[#FF77BC] p-6 text-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-mono text-2xl font-black uppercase tracking-tight text-black">Experience →</h2>
          </div>

          <div className="border-[3px] border-black bg-[#f4f4f0] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-5">
              {timeline.map((item) => (
                <div key={item.role} className="grid gap-3 border-b-2 border-black pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[150px_1fr]">
                  <div className="flex items-start gap-3 font-mono text-sm font-black uppercase">
                    <span className="mt-1 h-4 w-4 border-2 border-black bg-[#A3E635]" />
                    <span>{item.date}</span>
                  </div>
                  <div>
                    <h3 className="font-mono text-xl font-black uppercase">{item.role}</h3>
                    <p className="mt-1 font-mono text-sm leading-7">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://docs.google.com/document/d/1JOooQl-ucNEzUb7gEOIo80N7-rpBWiXoOvKreULOj4w/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-[#A3E635] px-4 py-3 font-mono text-sm font-black uppercase shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              View Full Resume <MoveRight size={16} />
            </a>
          </div>

          <div className="border-[3px] border-black bg-[#7C3AED] p-6 text-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.25em]">
              <Star size={16} /> <span className="font-bold">Build something amazing together.</span>
            </div>
            <h2 className="mt-5 max-w-md font-mono text-4xl font-black uppercase leading-[0.95] sm:text-5xl">
              Let&apos;s build something amazing together.
            </h2>
            <a
              href="mailto:theresaakuruli@gmail.com"
              className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-mono text-sm font-black uppercase text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Get In Touch <MoveRight size={16} />
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Tailwind", "Illustration", "Branding"].map((tag) => (
                <span key={tag} className="border-2 border-black bg-[#FF77BC] px-3 py-2 font-mono text-xs font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          id="contact"
          className="border-[3px] border-black bg-[#f4f4f0] p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
        >
          <h2 className="font-mono text-2xl font-black uppercase tracking-tight">Get In Touch</h2>
          <p className="mt-2 max-w-2xl font-mono text-sm leading-7">
            Have a project in mind, or just want to say hi? Fill out the form below and I&apos;ll get back to you.
          </p>
          {formState.succeeded ? (
            <div className="mt-6 border-2 border-black bg-[#A3E635] p-4 font-mono font-bold text-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              Thanks for your message! I&apos;ll get back to you soon.
            </div>
          ) : (
          <form onSubmit={handleFormSubmit} className="mt-6 grid max-w-2xl gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input id="name" type="text" name="name" placeholder="Your Name" required className="w-full border-2 border-black bg-white p-3 font-mono text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" />
              <input id="email" type="email" name="email" placeholder="Your Email" required className="w-full border-2 border-black bg-white p-3 font-mono text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" />
            </div>
            <ValidationError prefix="Email" field="email" errors={formState.errors} className="font-mono text-sm text-red-500" />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border-2 border-black bg-white p-3 font-mono text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
            />
            <ValidationError prefix="Message" field="message" errors={formState.errors} className="font-mono text-sm text-red-500" />
            <button
              type="submit"
              disabled={formState.submitting}
              className="inline-flex w-fit items-center gap-2 border-2 border-black bg-[#7C3AED] px-5 py-3 font-mono text-sm font-bold uppercase text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Send Message <Send size={16} />
            </button>
          </form>
          )}
        </motion.section>

        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="border-[3px] border-black bg-[#D2CFCA] p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="border-2 border-black bg-[#A3E635] px-3 py-2 font-mono text-sm font-black uppercase">&lt;/&gt; Theresa</div>
              <p className="font-mono text-sm">© 2026 All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinksData.map((link) => (
                <SocialLinkButton key={link.label} link={link} />
              ))}
            </div>
          </div>
        </motion.footer>
      </main>

      <ProjectModal project={selectedProject} onClose={closeProject} projectImageMap={projectImageMap} />
    </div>
  );
}
