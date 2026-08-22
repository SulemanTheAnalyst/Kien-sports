export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'sport' | 'lifestyle';
  subcategory: string;
  collection: string;
  price: number;
  compareAtPrice?: number;
  colors: ProductColor[];
  sizes?: string[];
  images: string[];
  description: string;
  shortDescription: string;
  features: ProductFeature[];
  materials: string[];
  dimensions: string;
  weight: string;
  capacity?: string;
  sku: string;
  tags: string[];
  isFeatured: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  inStock: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
  images: string[];
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize?: string;
}

export interface Category {
  name: string;
  slug: string;
  world: 'sport' | 'lifestyle';
  hasProducts: boolean;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
