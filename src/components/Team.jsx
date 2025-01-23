import GauravAvatar from "../assets/team/gaurav-avatar.svg";
import VincentAvatar from "../assets/team/vincent-avatar.svg";
import YelyzavetaAvatar from "../assets/team/yelyzaveta-avatar.svg";
import BishalAvatar from "../assets/team/bishal-avatar.svg";
import IsiomaAvatar from "../assets/team/isioma-avatar.svg";
import AnayaAvatar from "../assets/team/anaya-avatar.svg";
import AshokAvatar from "../assets/team/ashok-avatar.svg";
import DavidAvatar from "../assets/team/david-avatar.svg";
import AshutoshAvatar from "../assets/team/ashustosh-avatar.svg";
import SwarupAvatar from "../assets/team/swarup-avatar.svg";
import UsmanAvatar from "../assets/team/usman-avatar.svg";

import LinkedInLogo from "../assets/linkedin.svg";
import GmailLogo from "../assets/gmail.svg";
import GithubLogo from "../assets/github.svg";

const Team = () => {
  const avatarMapping = {
    "Gaurav Dahal": GauravAvatar,
    "Vincent Paul Bacalso": VincentAvatar,
    Yelyzaveta: YelyzavetaAvatar,
    "Bishal Somare Magar": BishalAvatar,
    "Isioma Ossai": IsiomaAvatar,
    "Anaya Sutar": AnayaAvatar,
    "Ashokanad Chaudhary": AshokAvatar,
    David: DavidAvatar,
    "Ashutosh Kumar": AshutoshAvatar,
    "Swarup Sapkota": SwarupAvatar,
    "Usman Rasheed": UsmanAvatar,
  };

  const teamMembers = [
    {
      name: "Gaurav Dahal",
      role: "Data Scientist",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Vincent Paul Bacalso",
      role: "AI Engineer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Yelyzaveta",
      role: "Data Scientist",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/bishalsomare",
        gmail: "mailto:bishal@example.com",
      },
    },
    {
      name: "Bishal Somare Magar",
      role: "Back-End Developer",
      socialLinks: {
        gmail: "mailto:bishal@example.com",
      },
    },
    {
      name: "Isioma Ossai",
      role: "Data Analyst",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Anaya Sutar",
      role: "Designer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Ashokanad Chaudhary",
      role: "Data Scientist",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "David",
      role: "AI Engineer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Ashutosh Kumar",
      role: "AI Engineer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Swarup Sapkota",
      role: "Front-End Developer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
    {
      name: "Usman Rasheed",
      role: "AI Engineer",
      socialLinks: {
        linkedin: "https://www.linkedin.com/",
        gmail: "mailto:gaurav@example.com",
        github: "https://github.com/",
      },
    },
  ];

  return (
    <section className="py-5 my-0 w-full" id="team">
      <h2 className="text-3xl text-center mb-6">Our Team</h2>
      <div
        className="w-full px-3 lg:px-40"
        style={{
          background: "linear-gradient(180deg, #2A1137 50%, #1F3442 100%)",
        }}
      >
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg"
            >
              {/* Avatar Image */}
              <img
                src={avatarMapping[member.name]}
                alt={member.name}
                className="w-24 h-24 mb-4"
              />
              <span className="font-medium text-xl mb-2 text-white">
                {member.name}
              </span>
              <span className="text-sm text-gray-300 mb-4">{member.role}</span>

              <div className="flex space-x-4">
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    className="text-white hover:opacity-80"
                  >
                    <img
                      src={LinkedInLogo}
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    className="text-white hover:opacity-80"
                  >
                    <img src={GithubLogo} alt="GitHub" className="h-6 w-6" />
                  </a>
                )}
                {member.socialLinks.gmail && (
                  <a
                    href={member.socialLinks.gmail}
                    className="text-white hover:opacity-80"
                  >
                    <img src={GmailLogo} alt="Gmail" className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
