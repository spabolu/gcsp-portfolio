import React from "react";
import { Heart } from "lucide-react";
import { ExperienceDetailsProps } from "../../types";

interface SocialProps {
  setSelectedExperience: React.Dispatch<
    React.SetStateAction<ExperienceDetailsProps | null>
  >;
  experiences: Record<string, ExperienceDetailsProps>;
}

const Social: React.FC<SocialProps> = ({
  setSelectedExperience,
  experiences,
}) => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Social Consciousness Component
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Status: EPICS FSE 104 (Completed), FSE 404 (Completed)
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
        onClick={() => setSelectedExperience(experiences.epics)}
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4">
              EPICS FSE 104 & FSE 404 Program
            </h3>
            <p className="text-gray-600 mb-4">
              My experience in the EPICS program allowed me to work on two
              projects: Stardust and Headcount. They challenged me to approach
              engineering through the lens of social responsibility. With
              Stardust, I helped design a scalable process for refurbishing
              solar panels, addressing both environmental and economic concerns.
              In Headcount, our team partnered with the ASU Memorial Union to
              build a room occupancy monitoring system using Raspberry Pi,
              computer vision, and IMEI-based tracking to support post-pandemic
              public safety. Both projects emphasized user needs, and long-term
              impact, shaping me into a better engineer.
            </p>
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
  );
};

export default Social;
