import React from "react";

const CapstoneContent: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="bg-amber-100 rounded-lg p-2">
        <p className="font-bold">
          Project Overview Slides:{" "}
          <a
            href="https://docs.google.com/presentation/d/17QWrZ5OeZXgPss-vr1xEuZh5a-X5s1pabSeBVgKcd0A/edit?usp=sharing"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
        <p className="font-bold">
          Reflection Paper:{" "}
          <a
            href="https://drive.google.com/file/d/1W56OY6SzHtOMXBjaNerQ_nlDPIwolstr/view?usp=sharing"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
      </div>

      <p>
        During my Capstone project, I worked on designing a secure commercial
        property management system for Rock Bay Square LP, replacing an outdated
        workflow that relied heavily on Excel.{" "}
        <span className="font-bold">
          Due to an NDA, I can't share specific details, but the project spanned
          two semesters and focused on improving data security, automation, and
          scalability.
        </span>
      </p>

      <p>
        In the first phase, I developed a full-stack web application aimed at
        enhancing data integrity and security. A major milestone was automating
        lease processing, which included secure PDF generation to streamline
        operations. To improve system efficiency, I integrated Next.js with
        SQLite, optimizing both performance and usability.
      </p>
      <p>
        The second phase of the project concentrated on implementing secure
        authentication with role-based access control, ensuring that only
        authorized users could access sensitive information. I also refactored
        the database schema to enhance scalability and data security. To further
        strengthen reliability, I deployed the system on AWS using a CI/CD
        pipeline, incorporating encryption to safeguard stored data.
      </p>
      <p>
        Security was at the core of every decision made throughout the project.
        Transitioning from an Excel-based system to a secure web application
        significantly improved data protection, access control, and overall
        system reliability. Implementing JWT authentication reduced the risk of
        unauthorized access, while automated lease generation eliminated manual
        processing errors, making the workflow more efficient. Hosting the
        platform on AWS with encrypted storage and automated updates ensured
        both scalability and security.
      </p>
      <p>
        This experience was valuable in multiple ways. Through my involvement
        with the Grand Challenge Scholars Program (GCSP), I developed
        interdisciplinary skills in security, automation, and cloud
        infrastructure. Academically, I deepened my understanding of full-stack
        security, API development, and database optimization. Professionally,
        the project allowed me to apply real-world security principles,
        complementing my internship experience at Intel and reinforcing my
        long-term goal of building a career in secure technology solutions.
      </p>
    </div>
  );
};

export default CapstoneContent;
