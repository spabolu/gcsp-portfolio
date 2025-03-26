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
        Headcount, on the other hand, emerged from a public safety need. After
        the pandemic, there was a clear challenge in tracking and managing the
        number of people in indoor spaces like ASU classrooms or ballrooms at
        MU. Our team partnered with staff at the ASU Memorial Union to build a
        solution that used computer vision to monitor room occupancy. We
        developed several prototypes using Raspberry Pi devices, shifting
        between thermal sensors, Haarcascade-based AI modules (Python/OpenCV),
        and finally exploring IMEI-based tech tracking to ensure better privacy
        and cost-efficiency. Our goal was to create a system that was accurate,
        low-cost, easy to deploy, and unobtrusive. However, we had to completely
        rework the software multiple times and it was a great learning
        opportunity.
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
