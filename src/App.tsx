import React, { useState } from "react";
import {
  BookOpen,
  Globe2,
  Heart,
  GraduationCap,
  Github,
  Linkedin,
  // Mail,
  X,
} from "lucide-react";
import headshot from "./assets/IMG_3738.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white shadow-xl transition-all">
                <div className="sticky top-0 border-b border-gray-200 bg-white px-6 py-4 rounded-t-xl flex justify-between items-center">
                  <Dialog.Title className="text-xl font-semibold text-gray-800">
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="px-6 pt-4 pb-8">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Experience Details Component
interface ExperienceDetailsProps {
  title: string;
  status: string | string[];
  imageUrl?: string;
  content: React.ReactNode;
}

function ExperienceDetails({
  title,
  status,
  content,
  imageUrl,
}: ExperienceDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        {Array.isArray(status) ? (
          status.map((item, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                item.includes("Completed") || item.includes("Confirmed")
                  ? "bg-green-100 text-green-800"
                  : item.includes("Under Review") ||
                    item.includes("In-Progress")
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {item}
            </span>
          ))
        ) : (
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              status.includes("Completed")
                ? "bg-green-100 text-green-800"
                : status.includes("Under Review") ||
                  status.includes("In-Progress")
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {imageUrl && (
        <div className="aspect-video rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose max-w-none">
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function App() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetailsProps | null>(null);

  const experiences = {
    capstone: {
      title: "Capstone Project",
      status: ["Capstone I (Completed)", "Capstone II (In-Progress)"],
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3269&auto=format&fit=crop",
      content: (
        <>
          <p>
            My Capstone project focused on developing a secure commercial
            property management system for Rock Bay Square LP, replacing an
            outdated Excel-based workflow. Spanning two semesters, this project
            emphasized data security, automation, and scalability.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Capstone I Achievements:</h4>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>
              <span className="font-bold">Developed a full-stack web app</span>{" "}
              – Enhancing data integrity and security.
            </li>
            <li>
              <span className="font-bold">Automated lease processing</span> –
              With secure PDF generation.
            </li>
            <li>
              <span className="font-bold">Integrated Next.js and SQLite</span> –
              Improving system efficiency.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Capstone II Focus:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">
                Implemented secure authentication
              </span>{" "}
              – With role-based access control.
            </li>
            <li>
              <span className="font-bold">Refactored database schema</span> –
              For better scalability and data security.
            </li>
            <li>
              <span className="font-bold">Deployed on AWS with CI/CD</span> –
              Enhancing reliability and encryption.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Outcomes:</h4>
          <p>
            Security was the core focus throughout the project. Transitioning
            from an Excel-based system to a secure web application significantly
            improved data protection, access control, and system reliability.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">
                Data Protection & Access Control
              </span>{" "}
              – Implemented secure authentication, reducing unauthorized access
              risks.
            </li>
            <li>
              <span className="font-bold">Automation for Efficiency</span> –
              Developed automated lease generation, eliminating manual
              processing errors.
            </li>
            <li>
              <span className="font-bold">Scalable & Secure Deployment</span> –
              Hosted on AWS with encrypted data storage and automated updates.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Value of the Project Experience:
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">GCSP Connection</span> – Strengthened
              interdisciplinary skills in security, automation, and cloud
              infrastructure.
            </li>
            <li>
              <span className="font-bold">Academic Growth</span> – Gained
              expertise in full-stack security, API development, and database
              optimization.
            </li>
            <li>
              <span className="font-bold">Professional Impact</span> – Applied
              real-world security principles, aligning with my internship
              experience at Intel and future goals in secure software
              development.
            </li>
          </ul>
        </>
      ),
    },
    fse150: {
      title: "FSE150: Perspectives on Grand Challenges",
      status: "FSE150 (Completed)",
      imageUrl:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
      content: (
        <>
          <p>
            My multidisciplinary learning experience helped me approach security
            challenges from multiple perspectives, blending technical, social,
            and entrepreneurial insights. Through coursework in{" "}
            <span className="font-bold">FSE 150</span> and{" "}
            <span className="font-bold">PAF 415</span>, I explored how
            engineering, policy, and social impact intersect to address complex
            security issues.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            FSE 150 - Engineering Solutions & Social Impact:
          </h4>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>
              <span className="font-bold">Explored NAE Grand Challenges</span> –
              Gained insights into engineering solutions for global security
              concerns.
            </li>
            <li>
              <span className="font-bold">
                Analyzed real-world case studies
              </span>{" "}
              – Examined how security issues are tackled through
              multidisciplinary approaches.
            </li>
            <li>
              <span className="font-bold">
                Bridged technical and social perspectives
              </span>{" "}
              – Understood the societal implications of engineering decisions.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Outcomes:</h4>
          <p>
            These experiences reinforced my ability to approach security from a
            multidisciplinary lens, understanding not just the technical aspects
            but also the social and policy-driven factors shaping security
            solutions.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">Broader Perspective on Security</span>{" "}
              – Gained insight into how security is influenced by engineering,
              social structures, and governance.
            </li>
            <li>
              <span className="font-bold">Cross-Sector Collaboration</span> –
              Strengthened my ability to work across industries to develop
              security-focused solutions.
            </li>
            <li>
              <span className="font-bold">Real-World Application</span> –
              Applied this knowledge in my Capstone project and professional
              experiences to enhance security frameworks.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Value of the Project Experience:
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">GCSP Connection</span> – Aligned with
              the Grand Challenge theme by integrating security,
              entrepreneurship, and societal impact.
            </li>
            <li>
              <span className="font-bold">Academic Growth</span> – Strengthened
              my understanding of how security challenges extend beyond
              technology into policy and business.
            </li>
            <li>
              <span className="font-bold">Professional Impact</span> – Provided
              a foundation for working in security-driven environments that
              require multidisciplinary problem-solving.
            </li>
          </ul>
        </>
      ),
    },
    paf415: {
      title: "PAF415: Social Entrepreneurship",
      status: "PAF415 (Completed)",
      content: (
        <>
          <p>
            My multidisciplinary learning experience helped me approach security
            challenges from multiple perspectives, blending technical, social,
            and entrepreneurial insights. Through coursework in{" "}
            <span className="font-bold">FSE 150</span> and{" "}
            <span className="font-bold">PAF 415</span>, I explored how
            engineering, policy, and social impact intersect to address complex
            security issues.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            PAF 415 - Social Entrepreneurship & Security:
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">
                Developed a solution for St. Mary’s Food Bank
              </span>{" "}
              – Identified security and operational pain points in food
              distribution.
            </li>
            <li>
              <span className="font-bold">
                Studied the societal impacts of security
              </span>{" "}
              – Explored how policy, technology, and business models influence
              security challenges.
            </li>
            <li>
              <span className="font-bold">
                Applied cross-sector collaboration
              </span>{" "}
              – Learned to integrate private, public, and nonprofit sectors to
              solve security-related challenges.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Outcomes:</h4>
          <p>
            These experiences reinforced my ability to approach security from a
            multidisciplinary lens, understanding not just the technical aspects
            but also the social and policy-driven factors shaping security
            solutions.
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">Broader Perspective on Security</span>{" "}
              – Gained insight into how security is influenced by engineering,
              social structures, and governance.
            </li>
            <li>
              <span className="font-bold">Cross-Sector Collaboration</span> –
              Strengthened my ability to work across industries to develop
              security-focused solutions.
            </li>
            <li>
              <span className="font-bold">Real-World Application</span> –
              Applied this knowledge in my Capstone project and professional
              experiences to enhance security frameworks.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Value of the Project Experience:
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">GCSP Connection</span> – Aligned with
              the Grand Challenge theme by integrating security,
              entrepreneurship, and societal impact.
            </li>
            <li>
              <span className="font-bold">Academic Growth</span> – Strengthened
              my understanding of how security challenges extend beyond
              technology into policy and business.
            </li>
            <li>
              <span className="font-bold">Professional Impact</span> – Provided
              a foundation for working in security-driven environments that
              require multidisciplinary problem-solving.
            </li>
          </ul>
        </>
      ),
    },
    fse301: {
      title: "FSE301: Entrepreneurship & Value Creation",
      status: "FSE301 (Completed)",
      content: (
        <>
          <p>
            My entrepreneurial journey has been shaped by both academic
            coursework and hands-on startup experience, allowing me to develop
            solutions that address market needs while integrating
            security-focused principles. Through{" "}
            <span className="font-bold">FSE 301</span>, I gained a deep
            understanding of opportunity recognition, value creation, and
            business development, which I later applied to my own ventures.
          </p>

          <h4 className="font-semibold mt-4 mb-2">
            FSE 301 - Entrepreneurship in Practice:
          </h4>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>
              <span className="font-bold">Developed Strive</span> – Built an
              AI-powered fitness companion, refining customer and product
              development strategies.
            </li>
            <li>
              <span className="font-bold">
                Conducted market and pricing research
              </span>{" "}
              – Analyzed user behavior to enhance product viability and business
              growth.
            </li>
            <li>
              <span className="font-bold">Avoided common startup pitfalls</span>{" "}
              – Learned key risk mitigation strategies crucial for securing
              product success.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Applying Entrepreneurship to Security-Focused Tech:
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">Security in Product Development</span>{" "}
              – Recognized the importance of integrating security in AI-driven
              applications like Strive.
            </li>
            <li>
              <span className="font-bold">Data Protection & Ethical AI</span> –
              Explored privacy-preserving techniques to safeguard user data.
            </li>
            <li>
              <span className="font-bold">Scalability & Risk Management</span> –
              Applied strategies to mitigate business and security risks in new
              tech ventures.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Extending Concepts to Courseer:
          </h4>
          <p>
            While not part of FSE 301, the principles I learned in the course
            provided a solid foundation when designing my own project,{" "}
            <span className="font-bold">Courseer</span>. Understanding market
            needs, secure data handling, and scalable product growth helped
            ensure that Courseer maintained{" "}
            <span className="font-bold">
              data privacy, secure transactions, and user authentication,
            </span>{" "}
            aligning with security-focused solutions in tech.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Outcomes:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">
                Bridging Entrepreneurship & Security
              </span>{" "}
              – Learned to integrate security principles into business and
              product development.
            </li>
            <li>
              <span className="font-bold">Real-World Problem Solving</span> –
              Applied business strategy to create secure, scalable tech
              solutions.
            </li>
            <li>
              <span className="font-bold">Cross-Disciplinary Growth</span> –
              Connected business, technology, and security, reinforcing my GCSP
              competencies.
            </li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">
            Value of the Project Experience:
          </h4>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-bold">GCSP Connection</span> – Strengthened
              my ability to develop impactful solutions at the intersection of
              business and security.
            </li>
            <li>
              <span className="font-bold">Academic Growth</span> – Gained
              hands-on experience in business strategy, customer development,
              and product security.
            </li>
            <li>
              <span className="font-bold">Professional Impact</span> – Applied
              entrepreneurial skills in both{" "}
              <span className="font-bold">Strive and Courseer</span>, shaping my
              approach to secure software development.
            </li>
          </ul>
        </>
      ),
    },
    ireland: {
      title: "Ireland Study Abroad Program",
      status: "Study Abroad (Completed)",
      imageUrl:
        "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=3174&auto=format",
      content: (
        <>
          <p className="mb-4">
            The Ireland Study Abroad program provided invaluable exposure to
            European healthcare systems and medical device innovation. This
            experience broadened my understanding of global healthcare
            approaches and international medical device regulations.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Key Outcomes:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Studied European healthcare systems</li>
            <li>Visited leading medical device companies</li>
            <li>Collaborated with international students</li>
            <li>Researched EU medical device regulations</li>
            <li>Participated in cross-cultural healthcare projects</li>
          </ul>
        </>
      ),
    },
    solarspell: {
      title: "SolarSPELL Internship",
      status: "Under Review",
      imageUrl:
        "https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?q=80&w=3163&auto=format&fit=crop",
      content: (
        <>
          <p className="mb-4">
            At SolarSPELL, I'm working on developing sustainable digital library
            solutions for healthcare education in resource-limited areas. This
            experience combines technology with cultural sensitivity to create
            effective educational tools.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Key Outcomes:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Developing digital healthcare education resources</li>
            <li>Creating culturally appropriate content</li>
            <li>Implementing sustainable technology solutions</li>
            <li>Collaborating with international partners</li>
            <li>Conducting user research in target communities</li>
          </ul>
        </>
      ),
    },
    epics: {
      title: "EPICS Program",
      status: "Semester I & II (Confirmed)",
      imageUrl:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      content: (
        <>
          <p className="mb-4">
            Through two semesters of Engineering Projects in Community Service
            (EPICS), I worked on healthcare accessibility projects for
            underserved communities, developing practical solutions to
            real-world healthcare challenges.
          </p>

          <h4 className="font-semibold mt-4 mb-2">Key Outcomes:</h4>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Developed low-cost medical device prototypes</li>
            <li>Implemented community feedback systems</li>
            <li>Created sustainable solution frameworks</li>
            <li>Conducted user research and testing</li>
            <li>Collaborated with local healthcare providers</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">Impact:</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Improved healthcare access for underserved communities</li>
            <li>Reduced medical device costs by 60%</li>
            <li>Implemented solutions in three local clinics</li>
            <li>Created replicable design templates</li>
          </ul>
        </>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
          <div className="flex gap-4 md:mt-8 mt-6">
            <a
              href="https://github.com/spabolu"
              className="hover:text-blue-200 transition-colors"
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
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                My name is Saketh Pabolu, and I am pursuing a Bachelor of
                Science in Computer Science with a minor in Data Science at
                Arizona State University. As a Grand Challenge Scholar under the
                Security theme, I have explored how technology can address some
                of today's most pressing issues, from cybersecurity threats to
                AI-driven misinformation—challenges that have become more urgent
                in an increasingly digital world. My journey has been shaped by
                experiences in entrepreneurship and social impact, including my
                role as the Founder of Courseer, a SaaS startup helping over
                2000 students track course availability. I have also developed
                my technical and leadership skills through my Capstone project,
                coursework in FSE 150 and PAF 415, and FSE 301, fulfilling key
                GCSP competencies.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Beyond academics, I have gained a global perspective through my
                Fulton Ireland Study Abroad experience and work with SolarSPELL,
                a project bringing digital learning to underserved communities.
                My commitment to social impact is evident in my contributions to
                EPICS (Engineering Projects in Community Service) and my several
                hours of unpaid work at various nonprofit organizations, where I
                volunteering my time to make a difference in the community. As
                AI, cybersecurity, and data privacy continue to dominate
                headlines, my goal is to leverage these experiences to build
                solutions that are not only innovative but also ethical and
                impactful. This portfolio reflects my journey as a GCSP scholar
                and my commitment to using technology to make a difference.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden w-full h-[350px] md:h-[550px] md:w-[400px] mx-auto">
                <img
                  src={headshot}
                  alt="headshot"
                  className="object-cover object-[50%_30%] w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Research/Talent Component */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Talent Component
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Status: Capstone I (Completed), Capstone II (In-Progress)
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExperience(experiences.capstone)}
            >
              <h3 className="text-xl font-semibold mb-4">CSE485: Capstone I</h3>
              <p className="text-gray-600 mb-4">
                Capstone I focused on building a secure commercial property
                management system for Rock Bay Square LP, replacing a vulnerable
                Excel-based workflow. I implemented Next.js, SQLite, and
                automated lease management to enhance data integrity, access
                control, and system reliability, strengthening both security and
                efficiency while refining my full-stack development skills.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>
                      Replaced Excel with full-stack app, refining data
                      integrity.
                    </li>
                    <li>Automated lease processing and backend integration.</li>
                    <li>
                      Built a scalable system with Next.js, SQLite and AWS.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExperience(experiences.capstone)}
            >
              <h3 className="text-xl font-semibold mb-4">
                CSE486: Capstone II
              </h3>
              <p className="text-gray-600 mb-4">
                Capstone II focuses on enhancing security and scalability for
                the property management system, with my contributions in
                frontend development, lease generation, and AWS deployment. I
                implement user authentication, secure PDF automation, and
                database improvements, strengthening data protection, access
                control, and system reliability.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>
                      Implement JWT authentication, protecting sensitive data.
                    </li>
                    <li>
                      Automate lease exportation (PDF), reducing manual errors.
                    </li>
                    <li>
                      Deploy on AWS with documentation, ensuring scalability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multidisciplinary Component */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Multidisciplinary Component
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Status: FSE 150 (Confirmed), PAF 415 (Confirmed)
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExperience(experiences.fse150)}
            >
              <h3 className="text-xl font-semibold mb-4">
                FSE150: Perspectives on Grand Challenges
              </h3>
              <p className="text-gray-600 mb-4">
                This foundational course opened my eyes to the interconnected
                nature of global challenges. Through collaborative projects with
                students from various engineering disciplines, we explored how
                different fields contribute to solving healthcare challenges.
              </p>
              <p className="text-gray-600">
                Key learning outcomes included understanding the regulatory
                landscape of medical devices, ethical considerations in
                healthcare innovation, and the importance of cross-disciplinary
                collaboration.
              </p>
            </div>
            <div
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExperience(experiences.paf415)}
            >
              <h3 className="text-xl font-semibold mb-4">
                PAF 415: Public Policy
              </h3>
              <p className="text-gray-600 mb-4">
                This course provided crucial insights into how public policy
                shapes healthcare innovation and implementation. We examined
                case studies of successful medical technologies and their
                pathway through regulatory frameworks.
              </p>
              <p className="text-gray-600">
                The course enhanced my understanding of how policy
                considerations must inform engineering solutions in healthcare.
              </p>
            </div>
          </div>
        </section>

        {/* Entrepreneurship Component */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Entrepreneurship Component
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Status: FSE 301 (Confirmed)
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-md p-8 cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedExperience(experiences.fse301)}
          >
            <h3 className="text-2xl font-semibold mb-4">
              FSE301: Entrepreneurship & Value Creation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  In FSE301, I developed a comprehensive business plan for
                  commercializing a medical device innovation. This experience
                  taught me the importance of considering market needs,
                  regulatory requirements, and financial viability in
                  engineering solutions.
                </p>
                <p className="text-gray-600">
                  The course provided hands-on experience in market analysis,
                  financial modeling, and pitch presentation, culminating in a
                  successful presentation to industry professionals.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>Developed comprehensive business plan</li>
                    <li>Conducted market analysis</li>
                    <li>Created financial projections</li>
                    <li>Pitched to industry professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multicultural Component */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Multicultural Component
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Status: Ireland Study Abroad (Confirmed), SolarSPELL Internship
                (Under Review)
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExperience(experiences.ireland)}
            >
              <div className="aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=3174&auto=format"
                  alt="Ireland Study Abroad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Ireland Study Abroad Program
                </h3>
                <p className="text-gray-600">
                  Studied healthcare systems and medical device innovation in
                  Ireland, gaining valuable insights into European healthcare
                  approaches and regulatory frameworks. This experience
                  broadened my perspective on global healthcare solutions.
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedExperience(experiences.solarspell)}
            >
              <div className="aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?q=80&w=3163&auto=format&fit=crop"
                  alt="SolarSPELL Internship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  SolarSPELL Internship
                </h3>
                <p className="text-gray-600">
                  Currently working with SolarSPELL to develop sustainable
                  digital library solutions for healthcare education in
                  resource-limited areas, combining technology with cultural
                  sensitivity to create effective educational tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Consciousness Component */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Social Consciousness Component
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Status: EPICS Semester I & II (Confirmed)
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedExperience(experiences.epics)}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">EPICS Program</h3>
                <p className="text-gray-600 mb-4">
                  Participated in two semesters of Engineering Projects in
                  Community Service (EPICS), working on healthcare accessibility
                  projects for underserved communities.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Impact:</h4>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Developed low-cost medical device prototypes</li>
                      <li>Collaborated with local healthcare clinics</li>
                      <li>Implemented community feedback systems</li>
                      <li>Created sustainable solution frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                  alt="EPICS Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Reflection & Future Goals
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-600 mb-4">
              The GCSP experience has profoundly shaped my understanding of how
              engineering solutions can address global healthcare challenges.
              Through my Capstone projects, FSE150 and PAF415 coursework,
              entrepreneurship training in FSE301, international experience in
              Ireland, and EPICS service learning, I've developed a holistic
              approach to problem-solving in biomedical engineering.
            </p>
            <p className="text-gray-600 mb-4">
              Each component of the program has contributed uniquely to my
              development: my Capstone projects provided technical expertise,
              FSE301 taught me to consider business viability, my study abroad
              experience offered global perspectives, and EPICS grounded my work
              in community needs.
            </p>
            <p className="text-gray-600">
              Moving forward, I aim to leverage these diverse experiences in my
              career, focusing on developing accessible medical technologies
              that consider both technical innovation and social impact. The
              GCSP has prepared me to approach healthcare challenges with a
              comprehensive understanding of technical, social, and economic
              factors.
            </p>
          </div>
        </section>
      </main>

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

      {/* Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.title || ""}
      >
        {selectedExperience && <ExperienceDetails {...selectedExperience} />}
      </Modal>
    </div>
  );
}

export default App;
