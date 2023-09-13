export type Product = {
  name: string;
  category: string;
  price: number;
}

export type Image = {
  src: string;
  alt: string;
}

export type Products = {
  id: string;
  image: Image;
  product: Product;
}