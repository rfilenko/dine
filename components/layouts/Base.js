import React from 'react';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

const BaseLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default BaseLayout;
