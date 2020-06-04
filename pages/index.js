import Header from '../components/Header';
import FamilyGathering from '../components/FamilyGathering';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FamilyGathering />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
