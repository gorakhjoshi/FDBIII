import React from 'react';
import Product from './Product';
import { useFetch } from '../9-custom-hooks/2-useFetch';

const url = 'https://reactcourseapi.gorakhjoshi.com';

const Index = () => {
  const { products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
