import {
  Facebook,
  Instagram,
  ArrowRight,
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FeaturedProduct from "@/components/FeaturedProduct";

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
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
            <div className="flex items-center gap-3">
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
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>
              <div className="flex items-center gap-1">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Mens
                </Link>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Womens
                </Link>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  Decor
                </Link>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <Link
                href="#"
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

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/hero-textiles.jpg"
          alt="Beautiful Kashmiri textiles and shawls"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/20">
          <div className="container mx-auto px-4 h-full flex items-center justify-end">
            <div className="text-right text-white max-w-md">
              <div className="mb-6">
                <svg
                  viewBox="0 0 48 48"
                  className="w-16 h-16 text-white ml-auto mb-4"
                >
                  <g fill="currentColor">
                    <path d="M24 4l3 9h9l-7.5 5.5L31 28l-7-5-7 5 2.5-9.5L12 13h9l3-9z" />
                    <path
                      d="M24 8l2 6h6l-5 3.5L28.5 24l-4.5-3-4.5 3L21 17.5 16 14h6l2-6z"
                      opacity="0.7"
                    />
                    <circle cx="24" cy="24" r="2" />
                    <path
                      d="M24 12v24M12 24h24M16.5 16.5l15 15M31.5 16.5l-15 15"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </g>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-2">Tarang</h2>
              <p className="text-lg md:text-xl tracking-widest font-light">
                ART FROM KERALA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Controls */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-800"
          >
            <Pause className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Hand Crafted Pashmina Shawls Section */}
      <section className="relative">
        {/* Background with colorful textiles */}
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/handloom.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
                  Hand Crafted Sarees For Women By Women
                </h2>

                {/* Product Images Grid */}
                <div className="grid grid-cols-3 gap-4 max-w-xl ">
                  <div className="bg-white p-1 rounded-lg shadow-lg">
                    <Image
                      src="/saree-1.jpg"
                      alt="Red embroidered Kashmiri shawl"
                      width={300}
                      height={400}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="bg-white p-1 rounded-lg shadow-lg">
                    <Image
                      src="/saree-1.jpg"
                      alt="Kashmiri shawl on mannequin"
                      width={120}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <div className="bg-white p-1 rounded-lg shadow-lg">
                    <Image
                      src="/saree-1.jpg"
                      alt="Purple Kashmiri shawl on chair"
                      width={120}
                      height={150}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teal Description Section */}
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-12 max-w-6xl mx-auto">
              {/* Circular Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-white p-4">
                  <Image
                    src="/logo.jpg"
                    alt="Kashmiri shawl on mannequin"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Description Text */}
              <div className="flex-1">
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  At PashmHome, we offer exquisitely handcrafted Kashmir shawls,
                  blending timeless traditions with contemporary elegance. Each
                  piece tells a story of heritage, artistry, and the finest
                  craftsmanship passed down through generations of skilled
                  artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProduct/>
    </div>
  );
}
