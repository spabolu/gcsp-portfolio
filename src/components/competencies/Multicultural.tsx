import React from "react";
import { Globe2 } from "lucide-react";
import { ExperienceDetailsProps } from "../../types";

interface MulticulturalProps {
  setSelectedExperience: React.Dispatch<React.SetStateAction<ExperienceDetailsProps | null>>;
  experiences: Record<string, ExperienceDetailsProps>;
}

const Multicultural: React.FC<MulticulturalProps> = ({ setSelectedExperience, experiences }) => {
  return (
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
              approaches and regulatory frameworks. This experience broadened my
              perspective on global healthcare solutions.
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
              Currently working with SolarSPELL to develop sustainable digital
              library solutions for healthcare education in resource-limited
              areas, combining technology with cultural sensitivity to create
              effective educational tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multicultural;
