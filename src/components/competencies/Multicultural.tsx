import React from "react";
import { Globe2 } from "lucide-react";
import { ExperienceDetailsProps } from "../../types";

interface MulticulturalProps {
  setSelectedExperience: React.Dispatch<
    React.SetStateAction<ExperienceDetailsProps | null>
  >;
  experiences: Record<string, ExperienceDetailsProps>;
}

const Multicultural: React.FC<MulticulturalProps> = ({
  setSelectedExperience,
  experiences,
}) => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <Globe2 className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Multicultural Component
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Status: Ireland Study Abroad (Completed), SolarSPELL Internship
            (Completed)
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
              Study Abroad Experience - Summer in Dublin, Ireland
            </h3>
            <p className="text-gray-600">
              My study abroad experience in Dublin, Ireland was a six-week
              immersion into Irish culture, history, and innovation. Living at
              University College Dublin (UCD), I explored the country's rich
              heritage through visits to Croke Park, historic castles, and the
              scenic Howth Cliffs, while also engaging with fellow students.
              Experiencing Dublin's tech ecosystem, including the Silicon Docks,
              gave me insight into how culture influences business and
              technology. This experience deepened my global perspective,
              enhancing my ability to approach problem-solving with a
              cross-cultural mindset.
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
              The SolarSPELL Backend Engineering Internship allowed me to
              explore global security challenges while developing technical
              solutions for offline digital libraries in regions with limited
              internet access. I researched cultural and educational barriers in
              struggling countries, adapting secure Wi-Fi access points on
              Raspberry Pi devices to meet local privacy regulations and user
              needs. Working with other teams, I gained insight into how
              usability and cultural acceptance intersect in technology
              adoption. This experience deepened my global perspective on
              security, reinforcing the importance of culturally-accepted
              engineering solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multicultural;
