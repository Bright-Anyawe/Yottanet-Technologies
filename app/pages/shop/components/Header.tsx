
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-2xl font-bold text-yottech-900 hover:text-yottech-700 transition-colors"
            >
              Yottech
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/products"
                className="text-gray-600 hover:text-yottech-700 transition-colors"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="text-gray-600 hover:text-yottech-700 transition-colors"
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-yottech-700 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              className="hidden md:inline-flex bg-yottech-900 hover:bg-yottech-800"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
