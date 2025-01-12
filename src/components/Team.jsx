const Team = () => {
  // Team Members Array
  const teamMembers = [
    { name: "Ashokanad Chaudhary", role: "Data Scientist" },
    { name: "Gaurav Dahal", role: "Data Scientist" },
    { name: "Anaya Sutar", role: "Bigg Boss" },
    { name: "Vincent Paul Bacalso", role: "AI Engineer" },
    { name: "Swarup Sapkota", role: "Front-End Developer" },
    { name: "Bishal Somare Magar", role: "Back-End Developer" },
    { name: "Chukwumam Akachukwu David", role: "Data Analyst" },
    { name: "Isioma Ossai", role: "Data Analyst" },
    { name: "Joy Adike", role: "Data Analyst" },
    { name: "Ashutosh Kumar", role: "Data Analyst" },
    { name: "Usman Rasheed", role: "Data Analyst" },
  ];

  return (
    <section className="py-5 my-0 w-full px-3 lg:px-40" id="team">
      <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
      <div className="bg-[#1F3442] text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <ul className="space-y-4">
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between border-b border-gray-600 pb-4"
            >
              <span className="font-medium">{member.name}</span>
              <span className="text-sm text-gray-300 mt-2 sm:mt-0">
                {member.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
