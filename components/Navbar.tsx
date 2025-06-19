import React from 'react';
import {
  Facebook,
  Instagram,
  ArrowRight,
  Search,
  User,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>Discover The Art From</span>
            <span className="text-red-600 font-medium">India</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </div>
          <div></div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                                  src="/logo.jpg"
                                  alt="company logo"
                                  width={100}
                                  height={100}
                
                                />
              </div>
              <div>
                <h1 className="text-2xl font-serif text-yellow-700">ATHMIKA</h1>
                <p className="text-xs text-teal-600 tracking-widest">
                  ART FROM KERALA
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>
              <div className="flex items-center gap-1">
                <Link
                  href="/mens"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Mens
                </Link>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href="/womens"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Womens
                </Link>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href="/decor"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Decor
                </Link>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <span>India</span>
                <span className="text-gray-400">|</span>
                <span>INR ₹</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-gray-800"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-gray-800"
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-gray-800"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;