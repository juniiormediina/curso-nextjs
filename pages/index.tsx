import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '@components/Layout/Layout';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';

/* Server side rendering */
/* importante estos metodos solo los podemos utilizar en las paginas y no en los componentes */
// export const getServerSideProps = async () => {
//   const response = await fetch('https://curso-nextjs-qfvrx0rrk-juniiormediina.vercel.app/api/avo');
//   const { data: productList }: TAPIAvoResponse = await response.json();

//   return {
//     props: {
//       productList,
//     },
//   };
// };

export const getStaticProps = async () => {
  const response = await fetch('https://curso-nextjs-qfvrx0rrk-juniiormediina.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default HomePage;
