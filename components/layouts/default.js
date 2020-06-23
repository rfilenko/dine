import React from 'react';
import Head from 'next/head';
import { LayoutFavicon } from './LayoutFavicon';
import HeaderCustom from '../HeaderCustom';
import Footer from '../Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <LayoutFavicon />
      <HeaderCustom />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default DefaultLayout;
