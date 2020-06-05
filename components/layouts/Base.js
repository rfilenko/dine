import React from 'react';
import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

const BaseLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>{title}</title>
        <meta
          name="description"
          content="Dine restaurant landing page, build with nextjs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#111111" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default BaseLayout;
