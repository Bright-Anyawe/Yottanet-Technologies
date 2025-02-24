

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    review:
      "Yottanet Technologies provided exceptional service. Their team is highly professional and delivered exactly what we needed.",
    rating: 5,
    image: "/images/user1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager at StarBiz",
    review:
      "Outstanding customer support and innovative solutions. Highly recommend Yottanet for networking needs!",
    rating: 4,
    image: "/images/user2.jpg",
  },
  {
    name: "Samuel Johnson",
    role: "CTO at InnovateX",
    review:
      "Their team exceeded our expectations with seamless installation and maintenance services. Truly experts in the field!",
    rating: 5,
  },
];

const clientRevenues = [
  {
    client: "TechCorp",
    revenue: "$1.2M",
    growth: "35%",
  },
  {
    client: "StarBiz",
    revenue: "$850K",
    growth: "28%",
  },
  {
    client: "InnovateX",
    revenue: "$1.5M",
    growth: "42%",
  },
];

const Testimonials = () => {
  return (
    <>
      {}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Testimonials & Client Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.image || "/images/default-user.png"}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>

              {}
              <div className="flex items-center justify-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 mt-4">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </section>

      {}
     
    </>
  );
};

export default Testimonials;
