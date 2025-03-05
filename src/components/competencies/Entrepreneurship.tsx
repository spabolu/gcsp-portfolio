import React from "react";
import { GraduationCap } from "lucide-react";

interface EntrepreneurshipProps {
  setSelectedExperience: React.Dispatch<
    React.SetStateAction<ExperienceDetailsProps | null>
  >;
  experiences: Record<string, ExperienceDetailsProps>;
}

interface ExperienceDetailsProps {
  title: string;
  status: string | string[];
  imageUrl?: string;
  content: React.ReactNode;
}

const Entrepreneurship: React.FC<EntrepreneurshipProps> = ({
  setSelectedExperience,
  experiences,
}) => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Entrepreneurship Component
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Status: FSE 301 (Completed)
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-xl shadow-md p-8 cursor-pointer transform transition-transform hover:scale-[1.02]"
        onClick={() => setSelectedExperience(experiences.fse301)}
      >
        <h3 className="text-2xl font-semibold mb-4">
          FSE 301: Entrepreneurship & Value Creation
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              In FSE 301, I developed a comprehensive business plan for
              commercializing a AI-powered fitness program. This experience
              taught me the importance of considering market needs, customer
              development, regulatory requirements, and financial viability in
              engineering solutions.
            </p>
            <p className="text-gray-600">
              The course provided hands-on experience in market analysis,
              financial modeling, and pitch presentation, culminating in a
              successful presentation to industry professionals. I got the
              opportunity to take this course in Ireland with Professor Kennedy.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">
                Key Achievements:
              </h4>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Hands-on experience in ideation and business modeling.</li>
                <li>
                  Conducted 30+ customer interviews to refine the venture.
                </li>
                <li>Overcame introversion through user engagement.</li>
                <li>Improved UI/UX using Figma based on real feedback.</li>
                <li>
                  Gained confidence in pitching a venture under 90 seconds.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
