import React from "react";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="footer text-base-content items-center p-4">
        <aside className="grid-flow-col items-center place-self-center">

          <div className="ml-5 grid-flow-col">
            <Link className="p-2 link link-hover" href="/">Work</Link>
            <Link className="p-2 link link-hover" href="/about">About</Link>
          </div>
          
        </aside>
        <aside className="place-self-center"><p>made with 💜 by Tiago </p></aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-center place-self-center">
          <a href="https://github.com/TFX19" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/tiago-borges-35a914231/" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
