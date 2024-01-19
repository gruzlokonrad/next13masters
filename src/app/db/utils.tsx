import { GraphQLClient, gql } from 'graphql-request';

type ImageType = {
  id: string;
  url: string;
  fileName: string;
}

type ProductType = {
  id: string;
  name: string;
  price: number;
  categories: CategoryType[];
  images: ImageType[];
}


type ProductsType = {
  products: ProductType[]
}

export type CategoryType = {
  id: string;
  name: string;
}

type CategoriesType = {
  categories: CategoryType[]
}

const connectDB = () => {
  const hygraph: GraphQLClient = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmix0d2r1bc201tch8awfzkp/master',
  );
  return hygraph;
}

const parseData = ({ products }: ProductsType) => {
  const productsData = products.map((product) => {
    const { id, name, price, categories, images } = product;
    return ({
      id: id,
      image: {
        productId: id,
        src: images[0]?.url || '/vercel.svg',
        alt: name
      },
      product: {
        productId: id,
        category: categories[0]?.name || '',
        name: name,
        price: price
      }
    })
  })
  return productsData;
}

export async function getProducts() {
  const QUERY = gql`{
    products {
      id name price
      categories { id name }
      images { id url fileName }
    }
  }`;

  const data: ProductsType = await connectDB().request(QUERY);
  const parsedData = parseData(data);
  return parsedData;
}

export async function getProductById(productId: string) {
  const QUERY = gql`{
    products(where: {id: "${productId}"}) {
      id name price
      categories { id name }
      images { id url fileName }
    }
  }`;

  const data: ProductsType = await connectDB().request(QUERY);
  return parseData(data)
}

export async function getAllCategories() {
  const QUERY = gql`{categories {id name}}`;
  const data: CategoriesType = await connectDB().request(QUERY);
  return data.categories;
}

export const getCategoryIdByName = async (categoryName: string) => {
  const QUERY = gql`{
      categories(where: {name: "${categoryName}"}) {
      id
      name
    }
    }`
  const data: CategoriesType = await connectDB().request(QUERY);
  return data.categories;
}

export async function getProductsByCategoryName(categoryName: string) {
  type ProductsByCategoryType = {
    category: CategoryType & ProductsType
  }
  const categoryId: string = (await getCategoryIdByName(categoryName))[0].id;

  const QUERY = gql`{
    category(where: {id: "${categoryId}"}) {
      # id
      # name
      products {
        id name price
        categories { id name }
        images { id url fileName }
      }
    }
  }`;

  const data: ProductsByCategoryType = await connectDB().request(QUERY);
  const parsedData = parseData(data.category)
  return parsedData
}