import React, { useState } from 'react';
import {
  Lightbulb,
  BookOpen,
  Globe2,
  Heart,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  X,
} from 'lucide-react';

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-xl flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// Experience Details Component
interface ExperienceDetailsProps {
  title: string;
  status: string;
  description: string;
  outcomes: string[];
  impact?: string[];
  imageUrl?: string;
}

function ExperienceDetails({
  title,
  status,
  description,
  outcomes,
  impact,
  imageUrl,
}: ExperienceDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            status.includes('Confirmed')
              ? 'bg-green-100 text-green-800'
              : status.includes('Review')
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </span>
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
        <p className="text-gray-600">{description}</p>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Key Outcomes
          </h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>

        {impact && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Impact & Applications
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetailsProps | null>(null);

  const experiences = {
    capstone: {
      title: 'Capstone Project',
      status: 'Capstone I (Confirmed), Capstone II (Resubmit)',
      description:
        "My capstone project focused on developing innovative solutions in medical device technology, specifically targeting drug delivery systems for cancer treatment. Through this year-long endeavor, I've gained hands-on experience in medical device development, from initial concept to prototype testing.",
      outcomes: [
        'Developed a novel drug delivery system prototype',
        'Conducted extensive literature review on current cancer treatment methods',
        'Performed feasibility studies and initial testing',
        'Collaborated with medical professionals for user feedback',
        'Implemented design improvements based on testing results',
      ],
      impact: [
        'Potential to improve cancer treatment efficacy',
        'Reduced side effects compared to traditional methods',
        'Cost-effective manufacturing process',
        'Patent-pending status for key innovations',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
    },
    fse150: {
      title: 'FSE150: Perspectives on Grand Challenges',
      status: 'Confirmed',
      description:
        'FSE150 provided a comprehensive introduction to the grand challenges facing engineering in the 21st century. The course emphasized interdisciplinary approaches to solving complex global problems, particularly in healthcare and medical technology.',
      outcomes: [
        'Analyzed complex global engineering challenges',
        'Developed cross-disciplinary problem-solving skills',
        'Collaborated with peers from various engineering disciplines',
        'Created innovative solutions for healthcare accessibility',
        'Learned about regulatory and ethical considerations in medical innovation',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
    },
    paf415: {
      title: 'PAF415: Public Policy',
      status: 'Confirmed',
      description:
        'In PAF415, I gained crucial insights into how public policy shapes healthcare innovation and implementation. The course provided a deep understanding of the regulatory landscape surrounding medical devices and healthcare technology.',
      outcomes: [
        'Analyzed healthcare policy frameworks',
        'Studied medical device regulation processes',
        'Examined case studies of successful medical technologies',
        'Developed policy recommendations for healthcare innovation',
        'Understanding of FDA approval processes',
      ],
    },
    fse301: {
      title: 'FSE301: Entrepreneurship & Value Creation',
      status: 'Confirmed',
      description:
        'FSE301 provided hands-on experience in developing business strategies for medical innovations. The course combined entrepreneurial principles with technical expertise to create viable business solutions in healthcare.',
      outcomes: [
        'Developed comprehensive business plan for medical device',
        'Conducted market analysis and competitor research',
        'Created financial projections and funding strategies',
        'Pitched to industry professionals and investors',
        'Learned about intellectual property protection',
      ],
      impact: [
        'Secured potential investor interest',
        'Developed network of healthcare industry contacts',
        'Created foundation for future startup venture',
      ],
    },
    ireland: {
      title: 'Ireland Study Abroad Program',
      status: 'Confirmed',
      description:
        'The Ireland Study Abroad program provided invaluable exposure to European healthcare systems and medical device innovation. This experience broadened my understanding of global healthcare approaches and international medical device regulations.',
      outcomes: [
        'Studied European healthcare systems',
        'Visited leading medical device companies',
        'Collaborated with international students',
        'Researched EU medical device regulations',
        'Participated in cross-cultural healthcare projects',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1526315251174-de0107e28fb4?auto=format&fit=crop&q=80',
    },
    solarspell: {
      title: 'SolarSPELL Internship',
      status: 'Under Review',
      description:
        "At SolarSPELL, I'm working on developing sustainable digital library solutions for healthcare education in resource-limited areas. This experience combines technology with cultural sensitivity to create effective educational tools.",
      outcomes: [
        'Developing digital healthcare education resources',
        'Creating culturally appropriate content',
        'Implementing sustainable technology solutions',
        'Collaborating with international partners',
        'Conducting user research in target communities',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
    },
    epics: {
      title: 'EPICS Program',
      status: 'Semester I & II (Confirmed)',
      description:
        'Through two semesters of Engineering Projects in Community Service (EPICS), I worked on healthcare accessibility projects for underserved communities, developing practical solutions to real-world healthcare challenges.',
      outcomes: [
        'Developed low-cost medical device prototypes',
        'Implemented community feedback systems',
        'Created sustainable solution frameworks',
        'Conducted user research and testing',
        'Collaborated with local healthcare providers',
      ],
      impact: [
        'Improved healthcare access for underserved communities',
        'Reduced medical device costs by 60%',
        'Implemented solutions in three local clinics',
        'Created replicable design templates',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-6">Saketh Pabolu</h1>
          <div className="flex flex-col gap-2 text-xl text-blue-100">
            <p>
              Computer Science (B.S.) | Minor in Data Science | Certificate in
              Cross-Sector Leadership
            </p>
            <p>Grand Challenge Theme: Security</p>
          </div>
          <div className="flex gap-4 mt-8">
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
                of today’s most pressing issues, from cybersecurity threats to
                AI-driven misinformation—challenges that have become more urgent
                in an increasingly digital world. My journey has been shaped by
                experiences in entrepreneurship and social impact, including my
                role as the Founder of Courseer, a SaaS startup helping over
                2000 students track course availability. I have also developed
                my technical and leadership skills through my Capstone projects,
                coursework in FSE 150 and PAF 415, and FSE 301, fulfilling key
                GCSP competencies.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Beyond academics, I have gained a global perspective through my
                Ireland Study Abroad experience and work with SolarSPELL, a
                project bringing digital learning to underserved communities. My
                commitment to social impact is evident in my contributions to
                EPICS (Engineering Projects in Community Service) and my work at
                Intel, where I help bridge technology with real-world
                applications. As AI, cybersecurity, and data privacy continue to
                dominate headlines, my goal is to leverage these experiences to
                build solutions that are not only innovative but also ethical
                and impactful. This portfolio reflects my journey as a GCSP
                scholar and my commitment to using technology to make a
                difference.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
                alt="Medical Research Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Research/Talent Component */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Research/Talent Component
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Status: Capstone I (Confirmed), Capstone II (Resubmit)
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedExperience(experiences.capstone)}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Capstone Project
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Capstone I
                    </h4>
                    <p className="text-gray-600">
                      Completed initial research and development phase of the
                      project, focusing on preliminary design and feasibility
                      studies for medical device innovation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Capstone II
                    </h4>
                    <p className="text-gray-600">
                      Currently refining the project based on feedback, with
                      focus on prototype development and testing protocols.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80"
                  alt="Research Project"
                  className="w-full h-full object-cover rounded-lg"
                />
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
                Viable Business/Entrepreneurship Component
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
                  src="https://images.unsplash.com/photo-1526315251174-de0107e28fb4?auto=format&fit=crop&q=80"
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
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Sarah Chen</h2>
              <p className="text-gray-400">Grand Challenges Scholar</p>
              <p className="text-gray-400">Biomedical Engineering</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.title || ''}
      >
        {selectedExperience && <ExperienceDetails {...selectedExperience} />}
      </Modal>
    </div>
  );
}

export default App;
