import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
