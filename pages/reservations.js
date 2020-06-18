import Head from 'next/head';
import DefaultLayout from '../components/layouts/default';
import FiveLines from '../components/visual/FiveLines';

const ReservationsPage = () => {
  return (
    <>
      <Head>
        <title>Reservations page</title>
      </Head>
      <DefaultLayout>
        <section className="reservations-section">
          <div className="container">
            <FiveLines />
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

ReservationsPage.Layout = DefaultLayout;

export default ReservationsPage;
