
"use client";

import { useState } from "react";

const projects = [
  {
    title: "ByteRoom",
    type: "Business collaboration · UI/UX",
    color: "#DCD3FF",
    mark: "✳",
    link: "https://www.behance.net/gallery/255708383/ByteRoom-UIUX-Case-Study",
    image: "/projects/byteroom.png",
  },
  {
    title: "Habit Flow",
    type: "Daily habit tracker · Mobile app",
    color: "#D8F36A",
    mark: "✿",
    link: "https://www.behance.net/gallery/238983071/HabitFlow-Daily-Habit-Tracker-App",
    image: "/projects/habit-flow.png",
  },
  {
    title: "Readmate",
    type: "Book reading · Mobile app",
    color: "#FF8979",
    mark: "✦",
    link: "https://www.behance.net/gallery/235681453/Book-Reading-App",
    image: "/projects/readmate.png",
  },
  {
    title: "Food Delivery App",
    type: "Food ordering · UI/UX",
    color: "#DCD3FF",
    mark: "↗",
    link: "https://www.behance.net/gallery/230595179/Online-Food-Delivery-App-Ui",
    image: "/projects/food-delivery.png",
  },
  {
    title: "Fitness App",
    type: "Fitness · Mobile app",
    color: "#D8F36A",
    mark: "✳",
    link: "https://www.behance.net/gallery/226828761/Fitness-App",
    image: "/projects/fitness-app.png",
  },
  {
    title: "Fitness Dashboard",
    type: "Dashboard · Visual design",
    color: "#FF8979",
    mark: "✦",
    link: "https://www.behance.net/gallery/222095943/Fitness-Dashboard-UI",
    image: "/projects/fitness-dashboard.png",
  },
];

const experience = [
  {
    company: "Empiric Business Solutions",
    role: "UI/UX Designer",
    date: "Dec 2025 – Aug 2026",
    detail: "Owned end-to-end product design as the sole UI/UX Designer, from requirements and problem definition to user flows, wireframes, high-fidelity UI, prototyping, and developer handoff. Simplified CRM workflows across 10+ modules and designed 50+ MES screens with clear information architecture. Delivered 110+ screens across CRM, MES, collaboration and IoT products, using AI for ideation, UI exploration and UX content refinement.",
  },
  {
    company: "Cognifyz Technologies",
    role: "UI/UX Intern",
    date: "Feb 2025 – Apr 2025",
    detail: "Designed website interfaces from scratch, translating requirements into structured layouts and intuitive navigation. Redesigned existing websites to improve content hierarchy, layout consistency and navigation clarity. Created mobile app interfaces and visual concepts from user flows to screen-level designs.",
  },
  {
    company: "Krutanic Solutions",
    role: "UI/UX Intern",
    date: "Jun 2024 – Aug 2024",
    detail:"Designed a 20+ screen food delivery app, mapping user flows from restaurant discovery to checkout. Simplified menu navigation and ordering through structured layouts and clear interactions. Built high-fidelity screens and interactive prototypes with consistent UI patterns.",
  },
];

export default function Home() {
  const [hearts, setHearts] = useState(false);

  return (
    <main className="portfolio">
      <nav className="nav">
        <a className="wordmark" href="#">Sakshi Kadel<span>●</span></a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
      <div className="hero-copy">
    <span className="edition">✳ A creative portfolio · 2026</span>

   <h1 className="hero-title">
  Port<br />
  folio<i>✦</i>
</h1>

    <div className="role-sticker">
      UI/UX Designer <span>✳</span>
    </div>

    <p className="intro">
     Crafting intuitive digital experiences that balance beauty and function. I turn complex problems into elegant, user-centered designs.
    </p>

    <div className="hero-actions">
        </div>
</div>
        
<div className="hero-art">
  <div className="id-card">
    <span className="holder-smiley" aria-hidden="true">☻</span>

    <div className="id-card-photo">
      <img src="/profile.jpeg" alt="Sakshi Kadel" />
    </div>

    <div className="id-card-info">
      <span className="id-card-tape" />
      <strong>Sakshi Kadel <span>✿</span></strong>
      <p>UI/UX Designer</p>
      <a href="mailto:sakshikadel16@gmail.com">
        sakshikadel16@gmail.com
      </a>
      <p>Pune, India</p>
    </div>
  </div>


  <span className="sunburst">✳</span>
  <span className="spark spark-one">✳</span>
  <span className="spark spark-two">✦</span>
</div>

      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-kicker">A LITTLE ABOUT ME</span>
          <h2>About<br />me<span>!</span></h2>
          <span className="underline-doodle">𐔌˶ •⁠  ᴥ  ⁠• ⋆𐦯</span>
        </div>
        <div className="about-copy">
          <p className="about-lead">Understand challenges. Design intuitive solutions.</p>
          <p>I'm a UI/UX Designer who looks beyond the brief to understand the problems behind a product. I identify usability gaps, explore different approaches, and turn complex challenges into intuitive, user-friendly experiences. From defining user flows and structuring information to making informed design decisions, I focus on creating solutions that improve how people interact with digital products.</p>
          <div className="about-tags"><span>✳ User-focused</span><span>✦ Problem-solving</span><span>☺ Product thinking</span></div>
        </div>
        <div className="note-sticker">Identify the real problem.<br />Explore meaningful solutions.<br />Create intuitive experiences.<br /></div>
      </section>

      <section className="work section" id="work">
        <div className="section-title-row">
          <div><span className="section-kicker">A FEW THINGS I’VE MADE</span><h2>Selected work<span>↗</span></h2></div>
          <span className="side-note">Little ideas, big possibilities ✳</span>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-art" style={{ backgroundColor: project.color, backgroundImage: "url(" + project.image + ")", backgroundSize: "cover", backgroundPosition: "center" }}>
                <span className="project-number">0{index + 1} / SELECTED WORK</span>
                
              </div>
              <div className="project-info"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>↗</span></div>
            </a>
          ))}
        </div>
        <p className="work-footnote">More details and case studies on Behance ↗</p>
      </section>

      <section className="experience section" id="experience">
        <div className="section-title-row">
          <div><span className="section-kicker">MY DESIGN JOURNEY</span><h2>Where I’ve worked<span>✳</span></h2></div>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={item.company}>
              <span className="timeline-dot">{index + 1}</span>
              <div className="timeline-main"><p className="timeline-date">{item.date}</p><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.detail}</p></div>
              <span className="timeline-star">{index === 1 ? "✦" : "✳"}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="section-kicker">HAVE A GOOD PROJECT IN MIND?</span>
        <h2>Let’s make<br /><span>something</span><br />meaningful<span className="contact-star">✳</span></h2>
        <p>I’m open to full-time UI/UX Design opportunities and new creative challenges.</p>
        <a className="button dark" href="mailto:sakshikadel16@gmail.com">Say hello ↗</a>
        <div className="social-links"><a href="https://www.linkedin.com/in/sakshi-kadel-a43190310" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/sakshikadel" target="_blank" rel="noreferrer">Behance ↗</a><a href="mailto:sakshikadel16@gmail.com">Email ↗</a></div>
      </section>

      <footer className="footer">
        <span>© 2026 Sakshi Kadel</span>
       <button
  className="love-button"
  onClick={() => setHearts(!hearts)}
>
  Built with love 😊
  {hearts && (
    <span className="heart-burst" aria-hidden="true">
      <span>♥</span>
      <span>♥</span>
      <span>♥</span>
      <span>♥</span>
      <span>♥</span>
      <span>♥</span>
    </span>
  )}
</button>
        <a href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}
