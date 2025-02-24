"use client";
import Image from "next/image";
import Header from "./components/header";
import ProductCards from "./components/productCards";
import Team from "./components/teamCards";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import { useInView } from "./components/UseInView";

export default function Home() {
  const [productsRef, productsInView] = useInView();
  const [teamRef, teamInView] = useInView({ threshold: 0.2 });
  const [carouselRef, carouselInView] = useInView({ threshold: 0.2 });

  // const imageRef = useRef(null);
  const [imageRef, imageInView] = useInView({ threshold: 0.2 });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section>
        <HeroSection />
      </section>
      <main className="flex-grow">
        <section className="flex flex-col items-center justify-center gap-8 px-4 py-8">
          {}
        </section>

        <section
          ref={productsRef as React.RefObject<HTMLElement>}
          id="products"
          className={`flex flex-col items-center justify-center gap-8 px-4 py-8 transition-all duration-1000 transform
          ${productsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl">
            Check out our latest products designed to meet your needs.
          </p>
          <ProductCards />
        </section>

        <section
          ref={teamRef as React.RefObject<HTMLElement>}
          className={`flex flex-col items-center justify-center gap-8 px-4 py-8 bg-gray-100 transition-all duration-1000 transform ${
            teamInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Our Team Of Engineers
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl">
            Meet our team of experienced engineers who are dedicated to
            delivering top-notch solutions and services.
          </p>
          <Team />
        </section>

        <section
          ref={carouselRef as React.RefObject<HTMLElement>}
          className={`flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8 bg-gray-100${
            carouselInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`
            }
        >
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Starlink Products
            </h1>
            <Carousel />
          </div>
          <div ref={imageRef as React.Ref<HTMLDivElement>} className={`md:w-1/2 flex items-center justify-center  ${
              imageInView ? "opacity-100" : "opacity-0"
            }`}>
            <Image
              src="/path/to/starlink-image.jpg"
              alt="Starlink Products"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
