import Head from 'next/head';
import BaseLayout from '../components/layouts/Base';

import {About, FamilyGathering, Menu, Reservation} from '../components/sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dine restaurant</title>
      </Head>
      <BaseLayout>
        <About />
        <Menu />
        <FamilyGathering />
        <Reservation />
      </BaseLayout>
    </>
  );
}
