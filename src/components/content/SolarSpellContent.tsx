import React from "react";

const SolarSpellContent: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="bg-amber-100 rounded-lg p-2">
        <p className="font-bold">
          Perspective of Themes:{" "}
          <a
            href=""
            className="text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
          >
            Google Drive Link
          </a>
        </p>
      </div>

      <p>
        One of the most valuable aspects of my SolarSPELL internship was
        learning about the cultural and educational challenges faced by students
        and teachers in the regions where SolarSPELL operates, such as South
        Africa. My role required me to research and analyze local education
        systems, digital literacy levels, and infrastructure limitations. For
        example, in South Africa, I explored how gender inequality affects
        access to education and how limited internet connectivity impacts
        students’ ability to access digital learning materials.
      </p>

      <p>
        To ensure my work aligned with the needs of these communities, I
        actively participated in weekly meetings with my mentor and team, where
        we discussed cultural and technical barriers impacting educators and
        students. My mentor, Zeinab Serhan, shared firsthand insights from her
        experience designing and deploying SolarSPELL devices, emphasizing how
        cultural context influences technology adoption. I also reviewed user
        feedback from deployed devices, which helped me understand how different
        communities interact with educational technology based on their specific
        cultural perspectives.
      </p>

      <p>
        My internship closely aligned with my Grand Challenges theme of
        Security, but in a way that required me to think beyond traditional
        cybersecurity concerns. In many of the regions SolarSPELL serves,
        security extends to protecting the integrity of offline digital
        libraries while ensuring they remain accessible to educators with
        limited technical backgrounds.
      </p>
      <p>
        One of my key projects involved configuring secure Wi-Fi access points
        (WAP) on Raspberry Pi devices. I had to implement security protocols
        that were effective yet user-friendly, considering that privacy
        concerns, internet regulations, and technology adoption vary by region.
        For example, since most users relied on Android and Windows rather than
        iOS, I adapted authentication mechanisms accordingly, using Samba shares
        instead of AFP shares to make file-sharing more accessible for teachers
        and students.
      </p>
      <p>
        A major takeaway from my experience was learning how cultural factors
        influence the adoption of technology. Simply designing a functional
        system is not enough—users must feel comfortable trusting and using it.
        Many teachers in the target regions were hesitant to embrace new digital
        tools due to past experiences with unreliable or unmaintained
        technology.
      </p>
      <p>
        One of my contributions was improving Wi-Fi connectivity for SolarSPELL
        devices, ensuring that multiple students and teachers could access
        educational materials simultaneously. While implementing this feature, I
        had to consider how different cultural attitudes toward technology
        influence user interaction. In some communities, there is a hesitancy
        toward unfamiliar digital tools, making it crucial to design an
        intuitive and straightforward interface. I incorporated feedback from
        educators and students into my technical improvements, ensuring the
        system was both functional and culturally adaptable.
      </p>
      <p>
        This internship required me to work 10 hours per week for an entire
        semester, meeting the substantial engagement criteria for a
        multicultural experience. While I did not physically travel to the
        regions SolarSPELL serves, I actively immersed myself in understanding
        the global impact of educational technology. Through research,
        discussions, and hands-on technical contributions, I gained firsthand
        insight into how cultural and infrastructural challenges affect
        technology adoption.
      </p>
    </div>
  );
};

export default SolarSpellContent;
