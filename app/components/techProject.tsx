import { FaSatelliteDish, FaWifi, FaLaptop } from "react-icons/fa";

const products = [
  {
    title: "Starlink and Accessories",
    description:
      "Get the latest Starlink kits and accessories for high-speed satellite internet.",
    icon: <FaSatelliteDish className="text-6xl text-blue-600 mb-4" />,
  },
  {
    title: "Routers and Broadband Devices",
    description:
      "Reliable routers and broadband devices for seamless connectivity.",
    icon: <FaWifi className="text-6xl text-green-600 mb-4" />,
  },
  {
    title: "Laptops, Wi-Fi Extenders, and Gadgets",
    description:
      "Explore our range of laptops, Wi-Fi extenders, and other tech gadgets.",
    icon: <FaLaptop className="text-6xl text-purple-600 mb-4" />,
  },
];

const TechProductSales = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
        Tech, Product, and Sales
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            {product.icon}
            <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechProductSales;
