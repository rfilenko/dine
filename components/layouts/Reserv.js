import React from 'react';
import Head from 'next/head';

import HeaderCustom from '../HeaderCustom';
import Footer from '../Footer';

const Reserv = ({ children }) => {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <HeaderCustom />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Reserv;
