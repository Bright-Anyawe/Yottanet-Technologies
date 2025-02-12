import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {}
        <div>
          <h2 className="text-2xl font-bold text-red-500">Yotech</h2>
        </div>
        
        {}
        <div>
          <h3 className="text-xl font-semibold">Learn More</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-red-500">Networking Engineering</a></li>
            <li><a href="#" className="hover:text-red-500">Network Products</a></li>
            <li><a href="#" className="hover:text-red-500">MTN Products</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-red-500" />
              <span>+123-456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-red-500" />
              <span>contact@yotech.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-red-500" />
              <span>123 Tech Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>
      
      {}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        <p>&copy; 2025 Yotech. All Rights Reserved.</p>
        <div className="mt-3 flex justify-center space-x-5">
          <a href="#" className="hover:text-red-500">Privacy Policy</a>
          <a href="#" className="hover:text-red-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
