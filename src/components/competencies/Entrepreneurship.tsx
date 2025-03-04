import React from "react";
import { GraduationCap } from "lucide-react";

const Entrepreneurship: React.FC = ({ setSelectedExperience, experiences }) => {
  return (
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
              taught me the importance of considering market needs, regulatory
              requirements, and financial viability in engineering solutions.
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
  );
};

export default Entrepreneurship;
