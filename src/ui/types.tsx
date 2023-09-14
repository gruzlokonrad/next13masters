export type ProductListItemProductType = {
  name: string;
  category: string;
  price: number;
}

export type ProductListItemImageType = {
  src: string;
  alt: string;
}

export type DataCategoriesType = {
  id: string;
  name: string;
}

export type DataImageType = {
  id: string;
  url: string;
  fileName: string;
}

export type DataProductType = {
  id: string;
  name: string;
  price: number;
  categories: DataCategoriesType[];
  images: DataImageType[];
}