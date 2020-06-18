import Head from 'next/head';
import MainLayout from '../components/layouts/main';

import {
  About,
  FamilyGathering,
  Menu,
  ReservationSection,
} from '../components/sections';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dine restaurant</title>
      </Head>
      <MainLayout>
        <About />
        <Menu />
        <FamilyGathering />
        <ReservationSection />
      </MainLayout>
    </>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
