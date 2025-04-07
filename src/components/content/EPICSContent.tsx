import React from "react";

const EPICSContent: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="bg-amber-100 rounded-lg p-2">
        <p className="font-bold">
          Stardust Deck:{" "}
          <a
            href="https://docs.google.com/presentation/d/1hZw8SSTHxfQvrohfbz4LW3Hy9RNNoul-2aXLxMg8GuM/edit?usp=sharing"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
        <p className="font-bold">
          Headcount Deck:{" "}
          <a
            href="https://docs.google.com/presentation/d/1cFxulxwm8uM5A4dBSGLyJjgNUL11h30L-4pQN46AHLc/edit?usp=sharing"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
      </div>

      <p>
        My time in the EPICS program has been a defining part of how I see
        engineering and service. I had the opportunity to work on two projects:
        Stardust and Headcount. Both pushed me to think beyond the code and
        circuitry and instead focus on the human needs and real-world contexts
        that engineering is meant to serve.
      </p>
      <p>
        With Stardust, our goal was to address the growing issue of solar panel
        waste by creating a standardized pipeline to refurbish pre-owned solar
        panels. This wasn't just a technical challenge; it was an environmental
        and economic one. We explored how to make the refurbishment process
        scalable and affordable while preserving the energy efficiency of older
        panels. The work involved research, prototyping, and asking tough
        questions about sustainability and accessibility. It helped me see how
        engineering can support climate-conscious innovation and create
        meaningful change at the community level.
      </p>
      <p>
        Headcount, on the other hand, directly tied into my Grand Challenge
        theme of Security. In the wake of the pandemic, tracking room occupancy
        became a pressing public safety concern. Our EPICS team partnered with
        staff at the ASU Memorial Union (MU) to develop a system using Raspberry
        Pi devices, computer vision (Python/OpenCV), and IMEI-based tech
        tracking to monitor indoor crowd sizes. From handling privacy concerns
        to ensuring data accuracy and minimal network interference, the project
        taught me how security is more than just software. It's also about
        creating systems people trust and feel safe using. Designing with
        privacy, safety, and accessibility in mind made me think deeply about
        how engineering solutions must be not only functional but also ethically
        and socially sound.
      </p>
      <p>
        These EPICS experiences had a meaningful impact on both my academic and
        professional goals. Both projects tied into my Grand Challenge theme of
        Security, and they helped me understand that complex problems require
        solutions that are not only technically sound but also secure, with
        proper safeguards in place. This was especially true for the Headcount
        project, where we were prototyping ML algorithms to capture images of
        people in public spaces—raising important considerations around privacy
        and data ethics. The Stardust project showed me that security isn't just
        about making something hacker-proof; it also involves transparency, such
        as creating an open, testable process for refurbishing solar panels and
        earning customer trust. These experiences have made me more aware of the
        ethical implications of my work and the importance of considering the
        broader societal impact of engineering solutions.
      </p>
      <p>
        Through both projects, I learned that real impact doesn't come from
        perfect solutions—it comes from being willing to listen, iterate, and
        adapt based on the needs of the community you're serving. Two semesters
        of EPICS gave me the opportunity to practice engineering that is
        socially responsible and committed to the long-term good. These projects
        taught me how to be a better problem-solver and a more thoughtful,
        human-centered engineer.
      </p>
    </div>
  );
};

export default EPICSContent;
