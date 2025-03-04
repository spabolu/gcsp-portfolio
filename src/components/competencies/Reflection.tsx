import React from "react";
import { GraduationCap } from "lucide-react";

const Reflection: React.FC = () => {
  return (
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
          development: my Capstone projects provided technical expertise, FSE301
          taught me to consider business viability, my study abroad experience
          offered global perspectives, and EPICS grounded my work in community
          needs.
        </p>
        <p className="text-gray-600">
          Moving forward, I aim to leverage these diverse experiences in my
          career, focusing on developing accessible medical technologies that
          consider both technical innovation and social impact. The GCSP has
          prepared me to approach healthcare challenges with a comprehensive
          understanding of technical, social, and economic factors.
        </p>
      </div>
    </section>
  );
};

export default Reflection;
