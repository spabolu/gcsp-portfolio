import React from "react";
import headshot from "../assets/IMG_3738.jpg";

const About: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 leading-relaxed">
              My name is Saketh Pabolu, and I am pursuing a Bachelor of Science
              in Computer Science with a minor in Data Science at Arizona State
              University. As a Grand Challenge Scholar under the Security theme,
              I have explored how technology can address some of today's most
              pressing issues, from reliable systems to AI-driven
              workflows—increasingly urgent challenges in an increasingly
              digital world. My journey has been shaped by experiences in
              entrepreneurship and social impact, including my role as the
              Founder of Courseer, a SaaS startup helping over 2000 students
              track course availability. I have also developed my technical and
              leadership skills through my Capstone project coursework in FSE
              150, PAF 415, and FSE 301, fulfilling key GCSP competencies.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Beyond academics, I have gained a global perspective through my
              Fulton Ireland Study Abroad experience and work with SolarSPELL, a
              project bringing digital learning to underserved communities. My
              commitment to social impact is evident in my contributions to
              EPICS (Engineering Projects in Community Service) and several
              hours of unpaid work at various nonprofit organizations, where I
              volunteer to make a difference in the community. As AI,
              cybersecurity, and data privacy continue to dominate headlines, my
              goal is to leverage these experiences to build solutions that are
              not only innovative but also ethical and impactful. Upon
              graduation, I'm set to move to New York, where I will pursue a
              Master's at Cornell University. This portfolio reflects my journey
              as a GCSP scholar and my commitment to using technology to make a
              difference.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden w-full h-[350px] md:h-[550px] md:w-[400px] mx-auto">
              <img
                src={headshot}
                alt="headshot"
                className="object-cover object-[50%_30%] w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
