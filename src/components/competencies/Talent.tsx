import React from "react";
import { BookOpen } from "lucide-react";
import { ExperienceDetailsProps } from "../../types";

interface TalentProps {
  setSelectedExperience: React.Dispatch<React.SetStateAction<ExperienceDetailsProps | null>>;
  experiences: Record<string, ExperienceDetailsProps>;
}

const Talent = ({ setSelectedExperience, experiences }: TalentProps) => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Talent Component</h2>
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
            Excel-based workflow. I implemented Next.js, SQLite, and automated
            lease management to enhance data integrity, access control, and
            system reliability, strengthening both security and efficiency while
            refining my full-stack development skills.
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                Key Achievements:
              </h4>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>
                  Replaced Excel with full-stack app, refining data integrity.
                </li>
                <li>Automated lease processing and backend integration.</li>
                <li>Built a scalable system with Next.js, SQLite and AWS.</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-[1.02]"
          onClick={() => setSelectedExperience(experiences.capstone)}
        >
          <h3 className="text-xl font-semibold mb-4">CSE486: Capstone II</h3>
          <p className="text-gray-600 mb-4">
            Capstone II focuses on enhancing security and scalability for the
            property management system, with my contributions in frontend
            development, lease generation, and AWS deployment. I implement user
            authentication, secure PDF automation, and database improvements,
            strengthening data protection, access control, and system
            reliability.
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
                <li>Deploy on AWS with documentation, ensuring scalability.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talent;
