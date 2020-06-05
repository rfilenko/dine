import BaseLayout from '../components/layouts/Base';

import FamilyGathering from '../components/FamilyGathering';
import Reservation from '../components/Reservation';

export default function Home() {
  return (
    <BaseLayout title="Dine restaurant">
      <FamilyGathering />
      <Reservation />
    </BaseLayout>
  );
}
