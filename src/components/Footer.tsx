import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:mb-2">Saketh Pabolu</h2>
              <p className="text-gray-400">Grand Challenges Scholar</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/spabolu"
                className="hover:text-blue-200 transition-colors"
                target="_blank"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/spabolu/"
                className="hover:text-blue-200 transition-colors"

              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* <a href="#" className="hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
