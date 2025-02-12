import Image from "next/image";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      src: "/product1.jpg",
      name: "Product 1",
      description: "Description 1",
      price: 100,
    },
    {
      id: 2,
      src: "/product2.jpg",
      name: "Product 2",
      description: "Description 2",
      price: 200,
    },
    {
      id: 3,
      src: "/product3.jpg",
      name: "Product 3",
      description: "Description 3",
      price: 300,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={product.src}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600 mt-4">${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
