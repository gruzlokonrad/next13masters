/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { GraphQLClient, gql } from 'graphql-request';
import { type DataProductType } from '../types';
import { ProductListItem } from '@molecules/ProductListItem';

async function getProducts() {
  const hygraph = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmix0d2r1bc201tch8awfzkp/master',
  );

  const QUERY = gql`{
    products {
      id name price
      categories { id name }
      images { id url fileName }
    }
  }`;

  if (!hygraph) {
    throw new Error('Network response was not ok');
  }

  const data: { products: DataProductType[] } = await hygraph.request(QUERY);
  return data;
}

export const ProductList = async () => {
  const data = await getProducts();
  const products = data.products.map(({ id, images, categories, name, price }) => {

    const element = {
      id: id,
      image: {
        src: images[0]?.url || '/vercel.svg',
        alt: name
      },
      product: {
        category: categories[0]?.name,
        name: name,
        price: price
      }
    };
    return element;
  });
  return (
    <div className='mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-testid="products-list">
        {products?.map(({ id, image, product }): JSX.Element => (
              <li key={id}>
                <ProductListItem image={image} product={product} />
              </li>
        ))}
      </ul>
    </div>
  )
}
