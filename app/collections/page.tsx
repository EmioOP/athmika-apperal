import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface CollectionItem {
  id: number;
  title: string;
  image: string;
  alt: string;
  href: string;
}

const collections: CollectionItem[] = [
  {
    id: 1,
    title: "Sozni Shawls",
    image: "/saree-1.jpg",
    alt: "Purple Sozni shawl with intricate embroidery",
    href: "/collections/sozni-shawls"
  },
  {
    id: 2,
    title: "Best Sellers",
    image: "/saree-1.jpg", 
    alt: "Black cape shawl with white embroidery",
    href: "/collections/best-sellers"
  },
  {
    id: 3,
    title: "Sozni Shrugs",
    image: "/saree-1.jpg",
    alt: "Black sozni shrug with golden embroidery",
    href: "/collections/sozni-shrugs"
  },
  {
    id: 4,
    title: "Cape Shawls",
    image: "/saree-1.jpg",
    alt: "Light colored cape shawl with floral embroidery",
    href: "/collections/cape-shawls"
  },
  {
    id: 5,
    title: "Carpets",
    image: "/saree-1.jpg",
    alt: "Traditional Kashmiri carpet with intricate patterns",
    href: "/collections/carpets"
  },
  {
    id: 6,
    title: "Sozni Shawls",
    image: "/saree-1.jpg",
    alt: "White sozni shawl with red embroidery",
    href: "/collections/sozni-shawls-2"
  }
];

const CollectionCard: React.FC<{ collection: CollectionItem }> = ({ collection }) => (
  <Link href={collection.href} className="group block">
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
      <div className="aspect-[4/5] relative bg-gray-50">
        <Image
          src={collection.image}
          alt={collection.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
            {collection.title}
          </h3>
          <svg 
            className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
);

const CollectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Collections
          </h1>
          
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">
              Authentic Kashmiri Craftsmanship
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Each collection represents generations of skilled artistry passed down through 
              Kashmiri families. From the delicate Sozni embroidery to the luxurious Pashmina 
              weaves, every piece is a testament to the rich cultural heritage of Kashmir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors rounded-md font-medium"
              >
                Learn Our Story
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white hover:bg-teal-700 transition-colors rounded-md font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 text-teal-400">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <g fill="currentColor">
                      <path d="M24 4l3 9h9l-7.5 5.5L31 28l-7-5-7 5 2.5-9.5L12 13h9l3-9z" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-yellow-400">Pashm Home</h3>
                  <p className="text-xs text-teal-400 tracking-widest">ART FROM KASHMIR</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Bringing you the finest collection of authentic Kashmiri handicrafts, 
                each piece crafted with love and tradition.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/collections/sozni-shawls" className="hover:text-white transition-colors">Sozni Shawls</Link></li>
                <li><Link href="/collections/cape-shawls" className="hover:text-white transition-colors">Cape Shawls</Link></li>
                <li><Link href="/collections/carpets" className="hover:text-white transition-colors">Carpets</Link></li>
                <li><Link href="/collections/best-sellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pashm Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollectionsPage;