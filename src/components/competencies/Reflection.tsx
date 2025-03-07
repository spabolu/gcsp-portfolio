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
      <div className="bg-white rounded-xl shadow-md p-8 space-y-3">
        <p className="text-gray-600 mb-4">
          My journey through the Grand Challenge Scholars Program (GCSP) has
          been an enriching experience, allowing me to explore the intersection
          of engineering, security, entrepreneurship, and global impact. Each of
          the five GCSP competencies has shaped my growth as an engineer and
          prepared me for a career in tech and business industries. Throughout
          my coursework, internships, research, and leadership experiences, I
          have developed a well-rounded perspective on engineering solutions
          that extend beyond technical implementation, like considering
          real-world constraints, ethical implications, and cultural acceptance.
        </p>
        <h3 className="text-lg font-medium">
          Talent – Real-world Experience through Capstone
        </h3>
        <p className="text-gray-600 mb-4">
          My Capstone project played a pivotal role in developing my technical
          expertise in security and scalable applications. I worked on designing
          a secure commercial property management system for Rock Bay Square LP,
          replacing an outdated Excel-based workflow with a scalable, full-stack
          web application. Throughout this project, I focused on secure
          authentication, role-based access control, and database optimization
          (with SQLite), ensuring data integrity and protection. Implementing
          CI/CD pipelines and AWS deployment reinforced my ability to build
          scalable, and industry-ready solutions. This experience strengthened
          my understanding of full-stack development, cloud security, and
          automation, preparing me for future roles in secure software
          engineering.
        </p>
        <h3 className="text-lg font-medium">
          Multicultural Experience – Global Engineering Perspective
        </h3>
        <p className="text-gray-600">
          My SolarSPELL Backend Engineering Internship gave me invaluable
          experience in adapting security solutions for global communities.
          Working with Raspberry Pi-based offline digital libraries, I explored
          how cultural and educational barriers impact technology adoption in
          regions like South Africa. I researched privacy regulations, digital
          literacy challenges, and infrastructure limitations, ensuring that my
          work aligned with local needs. Additionally, my study abroad
          experience in Dublin, Ireland provided a deep cultural immersion,
          allowing me to engage with Ireland's tech ecosystem, historic sites,
          and entrepreneurial community at University College Dublin (UCD).
          These experiences expanded my understanding of how cultural context
          influences engineering solutions, preparing me to develop globally
          scalable and culturally aware technology in my future career.
        </p>
        <h3 className="text-lg font-medium">
          Multidisciplinary Experience – Bridging Security, Business & Policy
        </h3>
        <p>
          GCSP encouraged me to explore engineering beyond technical
          disciplines, leading me to take courses in public policy and
          entrepreneurship. My coursework in PAF 415 – Public Policy challenged
          me to think about security and more from a policy perspective, working
          with St. Mary's Food Bank to develop a iOS mobile app solution
          addressing alumni retention in upskilling programs. I gained
          experience working across public, private, and nonprofit sectors,
          which reinforced the importance of collaboration in security-driven
          environments. Similarly, in FSE 150 – GCSP, I was introduced to how
          engineering, governance, and˝ ethics intersect in tackling complex
          Grand Challenges, helping me understand the broader impact of
          technology beyond just its functionality.
        </p>
        <h3 className="text-lg font-medium">
          Entrepreneurship – Tech Startups
        </h3>
        <p>
          My coursework in FSE 301 – Entrepreneurship was instrumental in
          helping me connect business strategy with security-focused technology
          development. During this course, I developed Strive, an AI-powered
          fitness SaaS, applying market research, product development, and
          business modeling strategies to refine my idea. This entrepreneurial
          mindset carried over into my personal project, Courseer, where I
          implemented course tracking bakend, user authentication, and scalable
          growth. Courseer has over 2000 users and generates monthly revenue.
          Taking FSE 301 during my study abroad experience further solidified my
          understanding of global entrepreneurship and the importance of
          security considerations in emerging technologies.
        </p>
        <h3 className="text-lg font-medium">
          Social Consciousness – Engineering for Impact
        </h3>
        <p>
          A core takeaway from GCSP was learning that engineering must be
          socially responsible. My work at Headcount reinforced this by showing
          me how technical solutions must be accessible, ethical, and
          sustainable. While tracking the headcount of people in a room, I had
          to ensure that sensitive data, such as facial/body recognition and
          timestamps, was stored safely. Similarly, my experience in EPICS with
          Stardust emphasized the importance of designing technology with
          long-term societal impact in mind. By working on renewable energy
          solutions to recycle and repurpose old solar panels, I have gained a
          deep appreciation for the responsibility engineers have in shaping a
          better world.
        </p>
        <h3 className="text-lg font-medium">Future Impact</h3>
        <p>
          Across all five competencies, security has been the central theme
          tying together my experiences. Whether developing machine learning
          solutions for fire safety, improving cybersecurity in offline digital
          libraries, or integrating security into entrepreneurial ventures, I
          have consistently applied security principles in diverse contexts.
          GCSP has given me a holistic perspective on security, teaching me that
          effective solutions must be technically sound, culturally aware,
          socially responsible, and scalable. As I prepare for my Master's in
          Computer Science at Cornell University, I feel well-equipped to tackle
          security challenges in software development, AI, or whatever the
          latest trends may be. The interdisciplinary skills I have developed
          through GCSP, entrepreneurship, and global experiences will guide me
          as I work toward building secure, user-centered technologies in my
          future career.
        </p>
        <p>
          My Grand Challenges Scholars Program experience has been one of the
          most rewarding aspects of my academic journey. It has pushed me to
          think beyond classroom materials, helping me understand how
          engineering intersects with everyday life. I have gained technical
          expertise, global awareness, entrepreneurial skills, and a deeper
          appreciation for social impact. More than anything, GCSP has prepared
          me to be part of a community and build meaningful relationships. I am
          excited to see how these competencies will continue to shape my career
          and personal growth in the future.
        </p>
      </div>
    </section>
  );
};

export default Reflection;
