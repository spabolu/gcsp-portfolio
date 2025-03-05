import React from "react";
import { BookOpen } from "lucide-react";
import { ExperienceDetailsProps } from "../../types";

interface MultidisciplinaryProps {
  setSelectedExperience: React.Dispatch<
    React.SetStateAction<ExperienceDetailsProps | null>
  >;
  experiences: Record<string, ExperienceDetailsProps>;
}

const Multidisciplinary = ({
  setSelectedExperience,
  experiences,
}: MultidisciplinaryProps) => {
  return (
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
            FSE 150: Perspectives on Grand Challenges
          </h3>
          <p className="text-gray-600 mb-4">
            This foundational course introduced me to the interconnected nature
            of global challenges. Through brainstorming sessions with peers and
            presentations from various engineering disciplines, we explored how
            different fields contribute to solving Grand Challenges. These
            discussions broadened my perspective on how technical advancements
            must align with societal needs to create meaningful impact.
          </p>
          <p className="text-gray-600">
            Key learning outcomes included understanding the depth of different
            Grand Challenge themes, ethical considerations in innovative
            solutions, and the importance of cross-disciplinary collaboration. I
            also gained insight into how engineering intersects with policy and
            business, shaping real-world implementations. This experience
            reinforced my interest in developing solutions that are both
            technically sound and socially responsible.
          </p>
        </div>
        <div
          className="bg-white rounded-xl shadow-md p-6 cursor-pointer transform transition-transform hover:scale-[1.02]"
          onClick={() => setSelectedExperience(experiences.paf415)}
        >
          <h3 className="text-xl font-semibold mb-4">PAF 415: Public Policy</h3>
          <p className="text-gray-600 mb-4">
            This upper-division course was part of my Next Generation Service
            Corps (NGSC) requirements and provided valuable insight into working
            across the public, private, and nonprofit sectors to develop
            solutions for complex challenges. Through this experience, I learned
            how to navigate interdisciplinary collaboration and apply a systems
            mindset to problem-solving.
          </p>
          <p className="text-gray-600">
            I worked closely with St. Mary’s Food Bank in Phoenix to address
            alumni retention issues in their community upskilling programs. This
            involved analyzing human behavior, conducting interviews to identify
            engagement barriers, and gaining a deeper understanding of nonprofit
            business structures. Additionally, I collaborated with the
            engineering team to explore potential solutions. This experience
            reinforced the importance of integrating policy, business, and
            technology to develop sustainable and impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Multidisciplinary;
