import { FaSimCard, FaMobileAlt, FaBriefcase } from "react-icons/fa";

const mtnServices = [
  {
    title: "Merchant SIM Cards",
    description:
      "Get your business connected with dedicated merchant SIM cards.",
    icon: <FaSimCard className="text-6xl text-yellow-500 mb-4" />,
  },
  {
    title: "Data Bundles and Top-ups",
    description:
      "Affordable data bundles and instant top-ups to keep you connected.",
    icon: <FaMobileAlt className="text-6xl text-yellow-500 mb-4" />,
  },
  {
    title: "Corporate and Business Plans",
    description:
      "Customized plans for businesses to stay connected and productive.",
    icon: <FaBriefcase className="text-6xl text-yellow-500 mb-4" />,
  },
];

const MtnProducts = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        MTN Products and SIM Registration Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mtnServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MtnProducts;
