import { Product, Category } from '../types';

export const products: Product[] = [
  {
    id: 'kien-athlete-40l',
    name: 'KIEN Athlete 40L Backpack',
    slug: 'kien-athlete-40l',
    category: 'sport',
    subcategory: 'bags',
    collection: 'Athlete Series',
    price: 4999,
    compareAtPrice: 5999,
    colors: [
      {
        name: 'Matte Black',
        hex: '#1a1a1a',
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
          'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=1000&fit=crop&q=80',
          'https://images.unsplash.com/photo-1581605405669-fcdf81165b94?w=800&h=1000&fit=crop&q=80',
          'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&h=1000&fit=crop&q=80',
        ],
      },
      {
        name: 'Graphite',
        hex: '#3a3a3a',
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
          'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=1000&fit=crop&q=80',
        ],
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165b94?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&h=1000&fit=crop&q=80',
    ],
    description: 'The Athlete 40L is built around the way you actually move. From early morning training to late night travel, every compartment has a purpose. Engineered with water-resistant fabric, reinforced stitching, and ergonomic shoulder straps designed for heavy loads.',
    shortDescription: 'Engineered for athletes who demand more from their gear.',
    features: [
      { title: 'Dedicated Shoe Compartment', description: 'Ventilated bottom compartment keeps shoes separate from clean gear.' },
      { title: 'Quick-Access Pocket', description: 'Top-access pocket for phone, keys, and essentials without opening main compartment.' },
      { title: 'Laptop Sleeve', description: 'Padded 15.6" laptop sleeve with soft-touch lining.' },
      { title: 'Water Bottle Pockets', description: 'Dual stretch mesh side pockets fit bottles up to 1L.' },
      { title: 'Compression Straps', description: 'External compression straps for volume control and load stability.' },
      { title: 'Key Leash', description: 'Built-in key clip in the front pocket for quick access.' },
      { title: 'Chest Strap', description: 'Adjustable chest strap distributes weight for long carries.' },
      { title: 'Hidden Security Pocket', description: 'Back-panel pocket against your back for valuables.' },
    ],
    materials: ['900D Water-Resistant Polyester', 'YKK Zippers', 'Reinforced Nylon Base', 'EVA Padded Back Panel'],
    dimensions: '55cm x 33cm x 22cm',
    weight: '1.2 kg',
    capacity: '40 Liters',
    sku: 'KIEN-ATH-40L-BLK',
    tags: ['backpack', 'sport', 'training', 'gym', 'travel', 'athlete'],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    inStock: true,
  },
  {
    id: 'kien-duffel',
    name: 'KIEN Duffel Bag',
    slug: 'kien-duffel',
    category: 'sport',
    subcategory: 'bags',
    collection: 'Training Series',
    price: 3499,
    compareAtPrice: 3999,
    colors: [
      {
        name: 'Matte Black',
        hex: '#1a1a1a',
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
          'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&h=1000&fit=crop&q=80',
        ],
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165b94?w=800&h=1000&fit=crop&q=80',
    ],
    description: 'The KIEN Duffel is the gym bag you actually want to carry. Purpose-built compartments for wet and dry separation, a dedicated shoe pocket, and enough room for a full training session. Designed for the daily athlete.',
    shortDescription: 'Purpose-built for training. Separate. Organize. Move.',
    features: [
      { title: 'Wet/Dry Separation', description: 'Waterproof inner pocket separates wet towels and swimwear from dry gear.' },
      { title: 'Shoe Compartment', description: 'Side-access ventilated shoe pocket fits up to size 12.' },
      { title: 'U-Shaped Opening', description: 'Wide U-shaped main opening for easy packing and visibility.' },
      { title: 'Removable Shoulder Strap', description: 'Padded adjustable strap with anti-slip grip.' },
      { title: 'Inner Mesh Pockets', description: 'Multiple mesh organizer pockets for small items.' },
      { title: 'Reinforced Base', description: 'Hard-shell base protects contents when bag is placed down.' },
    ],
    materials: ['600D Ripstop Nylon', 'YKK Zippers', 'TPE Waterproof Lining', 'Reinforced Handles'],
    dimensions: '52cm x 28cm x 26cm',
    weight: '0.85 kg',
    capacity: '35 Liters',
    sku: 'KIEN-DUF-35L-BLK',
    tags: ['duffel', 'gym', 'training', 'sport', 'bag'],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    inStock: true,
  },
  {
    id: 'kien-lifestyle-sling',
    name: 'KIEN Lifestyle Sling Bag',
    slug: 'kien-lifestyle-sling',
    category: 'lifestyle',
    subcategory: 'sling-bags',
    collection: 'Everyday Series',
    price: 1999,
    compareAtPrice: 2499,
    colors: [
      {
        name: 'Matte Black',
        hex: '#1a1a1a',
        images: [
          'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1000&fit=crop&q=80',
          'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=1000&fit=crop&q=80',
        ],
      },
      {
        name: 'Stone',
        hex: '#a09080',
        images: [
          'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1000&fit=crop&q=80',
        ],
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80',
    ],
    description: 'The KIEN Lifestyle Sling is minimal carry at its most purposeful. Designed for the essentials: phone, wallet, keys, earbuds and not much else. Wear it crossbody or over one shoulder. From commute to weekend, it fits naturally into everyday life.',
    shortDescription: 'Minimal carry for maximum freedom.',
    features: [
      { title: 'Quick-Access Front Pocket', description: 'Magnetic closure pocket for phone or transit card.' },
      { title: 'Main Compartment', description: 'Organized interior with card slots and key clip.' },
      { title: 'Hidden Back Pocket', description: 'Security pocket against your body for valuables.' },
      { title: 'Adjustable Strap', description: 'Single strap with quick-release buckle for crossbody or shoulder wear.' },
      { title: 'Water-Resistant Shell', description: 'Coated exterior repels light rain and splashes.' },
    ],
    materials: ['Coated 420D Nylon', 'SBS Zippers', 'Soft-Touch Lining', 'Nylon Webbing Strap'],
    dimensions: '32cm x 18cm x 8cm',
    weight: '0.3 kg',
    capacity: '4 Liters',
    sku: 'KIEN-SLG-4L-BLK',
    tags: ['sling', 'lifestyle', 'everyday', 'minimal', 'crossbody'],
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    inStock: true,
  },
];

export const categories: Category[] = [
  { name: 'Bags', slug: 'bags', world: 'sport', hasProducts: true, description: 'Performance bags built for athletes.' },
  { name: 'Training', slug: 'training', world: 'sport', hasProducts: false, description: 'Training essentials for peak performance.' },
  { name: 'Running', slug: 'running', world: 'sport', hasProducts: false, description: 'Built for the road and the trail.' },
  { name: 'Apparel', slug: 'apparel', world: 'sport', hasProducts: false, description: 'Performance apparel for every sport.' },
  { name: 'Footwear', slug: 'footwear', world: 'sport', hasProducts: false, description: 'Engineered footwear for movement.' },
  { name: 'Accessories', slug: 'accessories', world: 'sport', hasProducts: false, description: 'Complete your training setup.' },
  { name: 'Sports Gear', slug: 'sports-gear', world: 'sport', hasProducts: false, description: 'Equipment built for performance.' },
  { name: 'Sling Bags', slug: 'sling-bags', world: 'lifestyle', hasProducts: true, description: 'Minimal carry for maximum freedom.' },
  { name: 'Everyday Bags', slug: 'everyday-bags', world: 'lifestyle', hasProducts: false, description: 'Everyday carry, elevated.' },
  { name: 'Travel', slug: 'travel', world: 'lifestyle', hasProducts: false, description: 'Purpose-built for the journey.' },
  { name: 'Everyday Carry', slug: 'everyday-carry', world: 'lifestyle', hasProducts: false, description: 'The essentials, organized.' },
  { name: 'Lifestyle Accessories', slug: 'lifestyle-accessories', world: 'lifestyle', hasProducts: false, description: 'Finishing touches.' },
];

export const getProductsByCategory = (category: 'sport' | 'lifestyle'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.isNewArrival);
};

export const getCategoriesWithProducts = (world: 'sport' | 'lifestyle'): Category[] => {
  return categories.filter(c => c.world === world && c.hasProducts);
};

export const searchProducts = (query: string): Product[] => {
  const lower = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lower) ||
    p.tags.some(t => t.includes(lower)) ||
    p.category.includes(lower) ||
    p.subcategory.includes(lower)
  );
};
