import Link from 'next/link';
import FiveLines from '../visual/FiveLines';
import EventCategories from './EventCategories';

const FamilyGathering = () => {
  return (
    <section className="family-gathering">
      <div className="container">
        <h2> Family Gathering</h2>
        <div className="img">
          <img
            srcSet="/images/family-gathering-mobile.jpg 480w,
             /images/family-gathering-tablet.jpg 500w,
             /images/family-gathering-desktop.jpg 992w"
            sizes="(max-width: 499px) 480px,
            (max-width: 992px)  500px, 991px"
            src="/images/family-gathering-tablet.jpg"
            alt="family gathering"
          />
        </div>
        <FiveLines />
        <div className="content">
          <p>
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>
          <Link href={`/reservations`}>
            <button className="btn">Book a table</button>
          </Link>
        </div>

        <EventCategories />
      </div>
    </section>
  );
};
export default FamilyGathering;
