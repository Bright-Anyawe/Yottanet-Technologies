import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      src: "/engineer1.jpg",
      name: "Mr. John Smith",
      title: "Lead Network Engineer",
      bio: "Expert in network architecture and infrastructure design with over 10 years of experience.",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 2,
      src: "/engineer2.jpg",
      name: "Ms. Jane Doe",
      title: "Senior Software Engineer",
      bio: "Specialist in full-stack development and cloud solutions.",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 3,
      src: "/engineer3.jpg",
      name: "Mr. Michael Lee",
      title: "Systems Engineer",
      bio: "Focused on scalable systems and cybersecurity solutions.",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={member.src}
            alt={member.name}
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-blue-600 font-medium">{member.title}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>

            <div className="flex space-x-4 mt-4 text-gray-600">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-6 h-6" />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <PaperAirplaneIcon className="w-6 h-6" />
              </a>
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
