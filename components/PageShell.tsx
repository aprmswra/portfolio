"use client";

import { useState } from "react";
import BootLoader from "./BootLoader";
import Nav from "./Nav";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

export default function PageShell() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootLoader onDone={() => setBooted(true)} />}
      <div className="scanlines" />
      <div className="crt-glow" />
      {booted && (
        <div className="fade-in-up">
          <Nav />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}
