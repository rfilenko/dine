import Head from 'next/head';
import Reserv from '../components/layouts/Reserv';
import FiveLines from '../components/visual/FiveLines';
import { About } from '../components/sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Reservations page</title>
      </Head>
      <Reserv>
        <section className="reservations-section">
          <div className="container">
            <FiveLines />
          </div>
        </section>
      </Reserv>
    </>
  );
}
