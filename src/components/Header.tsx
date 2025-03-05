import React from "react";
import { Github, Linkedin, FileBadge } from "lucide-react";

const Header: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 md:py-20 py-16">
          <h1 className="text-5xl font-bold mb-6">
            <a href="/">Saketh Pabolu</a>
          </h1>
          <div className="flex flex-col gap-2 text-xl text-blue-100">
            <p>
              Computer Science (B.S.) | Minor in Data Science | Certificate in
              Cross-Sector Leadership
            </p>
            <p>Grand Challenge Theme: Security</p>
          </div>
          <div className="flex gap-2.5 md:mt-7 mt-6">
            <a
              href="https://github.com/spabolu"
              className="hover:text-zinc-800 transition-colors hover:bg-neutral-100 p-0.5 rounded-lg"
              target="_blank"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/spabolu/"
              className="hover:text-zinc-800 transition-colors hover:bg-neutral-100 p-0.5 rounded-lg"
              target="_blank"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://drive.google.com/file/d/1b8XyrQlHGXgqFsIEce1qwjsb9qiMn2uw/view?usp=sharing"
              className="hover:text-zinc-800 transition-colors hover:bg-neutral-100 p-0.5 rounded-lg"
              target="_blank"
            >
              <FileBadge className="w-6 h-6" />
            </a>
            {/* <a href="#" className="hover:text-zinc-800 transition-colors hover:bg-neutral-100 p-0.5 rounded-lg">
            <Mail className="w-6 h-6" />
          </a> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
