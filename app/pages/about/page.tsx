import Image from "next/image";
import Header from "@/app/components/header";
import {
  CameraIcon,
  SignalIcon,
  CpuChipIcon,
  SignalSlashIcon,
  PhoneIcon,
  HeartIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LightBulbIcon,  
} from "@heroicons/react/24/outline";



const About = () => {
  // Array of card data
  const services = [
    {
      title: "CCTV Installation",
      description:
        "Secure your premises with our state-of-the-art CCTV systems and professional installation services.",
      icon: <CameraIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />,
    },
    {
      title: "Dish Mounting",
      description:
        "Expert dish mounting for optimal satellite reception and uninterrupted viewing experience.",
      icon: <SignalIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />,
    },
    {
      title: "Network Solutions",
      description:
        "Reliable and high-speed networking solutions tailored to your business needs.",
      icon: <CpuChipIcon className="h-16 w-16 text-purple-600 mx-auto mb-4" />,
    }, {
      title: "Starlink Installation",
      description:
        "Connect to high-speed satellite internet with our professional Starlink installation services.",
      icon: <SignalSlashIcon className="h-16 w-16 text-red-600 mx-auto mb-4" />,
    },
    {
      title: "MTN Products",
      description:
        "Get the best MTN products, including merchant SIM cards and data bundles for your business needs.",
      icon: <PhoneIcon className="h-16 w-16 text-yellow-600 mx-auto mb-4" />,
    },
  ];

  const values = [
    {
      title: "Customer Satisfaction",
      description:
        "We prioritize customer needs and work tirelessly to exceed expectations.",
      icon: <HeartIcon className="h-16 w-16 text-red-600 mx-auto mb-4" />,
    },
    {
      title: "Integrity and Transparency",
      description:
        "We uphold honesty and transparency in all our dealings to build trust.",
      icon: <ShieldCheckIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />,
    },
    {
      title: "Growth and Continuous Learning",
      description:
        "We embrace continuous growth and learning to keep up with industry trends.",
      icon: (
        <AcademicCapIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
      ),
    },
    {
      title: "Innovation and Excellence",
      description:
        "We are committed to innovative solutions that drive excellence and quality.",
      icon: <LightBulbIcon className="h-16 w-16 text-yellow-600 mx-auto mb-4" />,
    },
  ];
  

  return (
    <>
      <Header />

      {}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/path/to/background-image.jpg" // Replace with your image path
          alt="About Us"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="-z-10"
        />

        {}
        <div className="absolute inset-0 bg-black opacity-40 -z-10" />

        {}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Mission
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            At Yottanet Technologies, we are dedicated to delivering the best
            networking solutions and tech products that empower businesses
            and individuals to stay connected and grow.
          </p>
        </div>
      </section>

      {}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          What We Do
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 w-full md:w-1/3 transition-transform hover:scale-105"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Our Values
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {values.map((value, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
      > 
        {value.icon}
        <h2 className="text-2xl font-semibold text-gray-800">{value.title}</h2>
        <p className="text-gray-600">{value.description}</p>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default About;
