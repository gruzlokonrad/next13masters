// export type ProductItemDescriptionType = {
//   productId: string;
//   name: string;
//   category: string;
//   price: number;
// }

// export type ProductItemImageType = {
//   productId: string;
//   src: string;
//   alt: string;
// }

// export type DataCategoriesType = {
//   id: string;
//   name: string;
// }

// export type DataImageType = {
//   id: string;
//   url: string;
//   fileName: string;
// }

// export type DataProductType = {
//   id: string;
//   name: string;
//   price: number;
//   categories: DataCategoriesType[];
//   images: DataImageType[];
// }
// export type CategoryType = { name: string, id: string };

export type ProductItemType = {
  id: string;
  image: ParsedImageType;
  product: ParsedProductType;
}


export type CategoryType = {
  id: string;
  name: string;
}

export type CategoriesType = {
  categories: CategoryType[]
}

export type ImageType = {
  id: string;
  url: string;
  fileName: string;
}
export type ParsedImageType = {
  productId: string;
  src: string;
  alt: string;
}

export type ProductType = {
  id: string;
  name: string;
  price: number;
  categories: CategoryType[];
  images: ImageType[];
}

export type ParsedProductType = {
  productId: string;
  category: string;
  name: string;
  price: number;
}

export type ProductsType = {
  products: ProductType[]
}
