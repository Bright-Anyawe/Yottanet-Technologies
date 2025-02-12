import Image from "next/image";
import Header from "./components/header";
import ProductCards from "./components/productCards";
import Team from "./components/teamCards";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="flex flex-col items-center justify-center gap-8 px-4 py-8">
          {}
            </section>
        
        <section className="flex flex-col items-center justify-center gap-8 px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl">
            Check out our latest products designed to meet your needs.
          </p>
          <ProductCards />
        </section>

        <section className="flex flex-col items-center justify-center gap-8 px-4 py-8 bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800">
            Our Team Of Engineers
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl">
            Meet our team of experienced engineers who are dedicated to
            delivering top-notch solutions and services.
          </p>
          <Team />
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-8 bg-gray-100">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Starlink Products
            </h1>
            <Carousel />
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
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
