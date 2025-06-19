import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProductItem {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
}

const kalamkariShawls: ProductItem[] = [
  {
    id: 1,
    name: "Pashmina Kalamkari Shawl",
    price: "Rs. 225,000.00",
    image: "/saree-1.jpg",
    alt: "Colorful Pashmina Kalamkari Shawl with intricate patterns"
  },
  {
    id: 2,
    name: "Pashmina Kalamkari Shawl",
    price: "Rs. 210,000.00",
    image: "/saree-1.jpg",
    alt: "Blue and white Pashmina Kalamkari Shawl with traditional motifs"
  },
  {
    id: 3,
    name: "Pashmina Kalamkari Shawl",
    price: "Rs. 175,000.00",
    image: "/saree-1.jpg",
    alt: "Vibrant multicolored Pashmina Kalamkari Shawl"
  },
  {
    id: 4,
    name: "Pashmina Kalamkari Shawl",
    price: "Rs. 114,000.00",
    image: "/saree-1.jpg",
    alt: "Dark floral Pashmina Kalamkari Shawl"
  }
];

const capeShawls: ProductItem[] = [
  {
    id: 5,
    name: "Beige Cape Shawl",
    price: "Rs. 3,850.00",
    image: "/saree-1.jpg",
    alt: "Elegant beige cape shawl with embroidered details"
  },
  {
    id: 6,
    name: "Beige Cape Shawl",
    price: "Rs. 4,850.00",
    image: "/saree-1.jpg",
    alt: "Cream colored cape shawl with intricate embroidery"
  },
  {
    id: 7,
    name: "Black Cape Shawl",
    price: "Rs. 3,850.00",
    image: "/saree-1.jpg",
    alt: "Black cape shawl with white embroidered pattern"
  },
  {
    id: 8,
    name: "Black Cape Shawl",
    price: "Rs. 3,850.00",
    image: "/saree-1.jpg",
    alt: "Black cape shawl with colorful floral embroidery"
  }
];

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div className="aspect-square relative bg-gray-50">
      <Image
        src={product.image}
        alt={product.alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
      <p className="text-lg font-semibold text-gray-800">{product.price}</p>
    </div>
  </div>
);

const FeaturedProduct: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Kalamkari Shawls Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
              FEATURED COLLECTION
            </h2>
            <h3 className="text-xl font-medium text-gray-700 uppercase tracking-wide">
              KALAMKARI SHAWLS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kalamkariShawls.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md">
              View all
            </Button>
          </div>
        </div>

        {/* Cape Shawls Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
              FEATURED COLLECTION
            </h2>
            <h3 className="text-xl font-medium text-gray-700 uppercase tracking-wide">
              CAPE SHAWLS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {capeShawls.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md">
              View all
            </Button>
          </div>
        </div>

        {/* Sozni Shawls Section Header (for future expansion) */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
            FEATURED COLLECTION
          </h2>
          <h3 className="text-xl font-medium text-gray-700 uppercase tracking-wide">
            SOZNI SHAWLS
          </h3>
        </div>
        {/* You can add Sozni shawls products here when ready */}
      </div>
    </div>
  );
};

export default FeaturedProduct;