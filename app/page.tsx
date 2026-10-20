 "use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Heart, Mail, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { experiences, profile, projects, skills } from "./config";

export default function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sakshi Kadel home">sakshi<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <Link className="resume-nav" href="/resume">Resume <ArrowUpRight size={14}/></Link>
        </nav>
      </header>

      <section className="hero page-wrap" id="top">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow"><span className="availability-dot" /> {profile.status} <span className="eyebrow-divider">/</span> {profile.location}</p>
          <h1>Hello, I’m<br/><span>Sakshi Kadel.</span></h1>
          <p className="hero-role">UI/UX Designer <span>·</span> Product-minded, detail-driven.</p>
          <p className="hero-intro">
            I design thoughtful digital experiences across web and mobile—turning complex workflows into clear, useful, and visually consistent products.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View my work <ArrowDownRight size={16}/></a>
            <a className="text-action" href="#contact">Let’s connect <ArrowUpRight size={15}/></a>
          </div>
        </motion.div>
        <motion.div
          className="portrait-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="portrait-halo" />
          <Image src={profile.photo} alt="Sakshi Kadel" width={520} height={650} priority className="portrait"/>
          <div className="portrait-note">DESIGNING WITH<br/>INTENTION <span>✳</span></div>
        </motion.div>
        <div className="hero-index">PORTFOLIO <span>2026</span></div>
      </section>

      <section className="intro-strip page-wrap" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <div className="intro-grid">
          <h2>Curious by nature.<br/><span>Intentional by design.</span></h2>
          <p>
            I’m a UI/UX Designer with 1+ year of combined internship and full-time experience. I enjoy simplifying complex workflows into intuitive, accessible experiences—from early user flows and wireframes to high-fidelity interfaces and prototypes. I focus on balancing user needs with business goals.
          </p>
        </div>
      </section>

      <section className="work-section page-wrap" id="work">
        <div className="section-topline">
          <div>
            <p className="eyebrow">SELECTED WORK · 2024—2026</p>
            <h2>Things I’ve designed<span>.</span></h2>
          </div>
          <p className="section-aside">A selection of product concepts<br/>and interface explorations.</p>
        </div>

        <div className="project-grid">
          {projects.filter((project) => project.featured).map((project, index) => (
            <motion.a
              className="project-card"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="project-image">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                <span className="project-open" aria-hidden="true"><ArrowUpRight size={20}/></span>
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <span className="case-link">View case study <ArrowUpRight size={14}/></span>
              </div>
              <p className="project-description">{project.description}</p>
            </motion.a>
          ))}
        </div>

        <details className="more-work">
          <summary>Explore two more projects <ArrowRight size={15}/></summary>
          <div className="project-grid extra-projects">
            {projects.filter((project) => !project.featured).map((project) => (
              <a className="project-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.title}>
                <div className="project-image">
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/>
                  <span className="project-open" aria-hidden="true"><ArrowUpRight size={20}/></span>
                </div>
                <div className="project-meta">
                  <div><h3>{project.title}</h3><p>{project.category}</p></div>
                  <span className="case-link">View case study <ArrowUpRight size={14}/></span>
                </div>
                <p className="project-description">{project.description}</p>
              </a>
            ))}
          </div>
        </details>
      </section>

      <section className="experience-section page-wrap" id="experience">
        <div className="section-topline">
          <div><p className="eyebrow">WHERE I’VE BEEN</p><h2>Experience<span>.</span></h2></div>
          <p className="section-aside">Learning, contributing,<br/>and growing through design.</p>
        </div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <span className="experience-count">0{index + 1}</span>
              <div className="experience-main">
                <div className="experience-heading"><h3>{item.role}</h3><span className="experience-dates">{item.dates}</span></div>
                <p className="company-name">{item.company}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section page-wrap">
        <div className="section-topline">
          <div><p className="eyebrow">MY TOOLKIT</p><h2>How I work<span>.</span></h2></div>
        </div>
        <div className="skill-groups">
          <div className="skill-group"><h3>UX / UI Design</h3><p>{skills.design.join(" · ")}</p></div>
          <div className="skill-group"><h3>Design Tools</h3><p>{skills.tools.join(" · ")}</p></div>
          <div className="skill-group"><h3>AI Tools</h3><p>{skills.ai.join(" · ")}</p></div>
        </div>
      </section>

      <section className="contact-section page-wrap" id="contact">
        <p className="eyebrow">HAVE A ROLE IN MIND?</p>
        <h2>Let’s make<br/><span>good things happen.</span></h2>
        <p className="contact-copy">I’m open to full-time UI/UX and Product Designer opportunities. I’d love to connect and discuss how I can contribute to your team.</p>
        <div className="contact-actions">
          <a className="button button-dark" href={`mailto:${profile.email}`}><Mail size={16}/> Email me <ArrowUpRight size={15}/></a>
          <a className="text-action" href={profile.behance} target="_blank" rel="noreferrer">Behance <ExternalLink size={14}/></a>
          <a className="text-action" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14}/></a>
          <Link className="text-action" href="/resume">Resume <ArrowUpRight size={15}/></Link>
        </div>
      </section>

      <footer className="site-footer page-wrap">
        <a className="wordmark" href="#top">sakshi<span>.</span></a>
        <p>Designed with care by Sakshi Kadel</p>
        <button className="love-button" onClick={(event) => {
          const button = event.currentTarget;
          button.classList.remove("celebrate");
          void button.offsetWidth;
          button.classList.add("celebrate");
          window.setTimeout(() => button.classList.remove("celebrate"), 1100);
        }} aria-label="Built with love">
          Built with love <Heart size={14} fill="currentColor"/>
          <span className="heart-burst" aria-hidden="true">♥　♥　♥</span>
        </button>
        <p className="copyright">© 2026</p>
      </footer>
    </main>
  );
}
