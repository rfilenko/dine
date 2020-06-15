import BaseLayout from '../components/layouts/Base';
import Head from 'next/head';
import About from '../components/About';
import Menu from '../components/Menu';
import FamilyGathering from '../components/FamilyGathering';
import Reservation from '../components/Reservation';

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
