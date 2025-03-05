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
              I was part of two teams in EPICS. First, I worked with the
              Stardust team, which focused on reducing solar panel waste by
              creating a standardized pipeline to refurbish pre-owned solar
              panels. My second project, Headcount, addressed occupancy tracking
              in response to social distancing and limited spacing. Using
              machine learning, Headcount monitored and counted total room
              occupancy to ensure it remained within fire safety limits for
              classrooms and ballrooms.
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
