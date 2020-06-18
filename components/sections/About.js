import AbstactLine from '../visual/AbstactLine';
import FiveLines from '../visual/FiveLines';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <AbstactLine />
          <h2>Enjoyable place for all the family</h2>
          <p className="text">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
        <div className="img">
          <img
            srcSet="/images/enjoyable-place-mobile.jpg 480w,
             /images/enjoyable-place-tablet.jpg 500w,
             /images/enjoyable-place-desktop.jpg 992w"
            sizes="(max-width: 499px) 480px,
            (max-width: 992px)  500px, 991px"
            src="/images/enjoyable-place-desktop.jpg"
            alt="enjoyable place"
          />
        </div>
      </div>
      <div className="container">
        <div className="about__intro">
          <AbstactLine />
          <h2>The most locally sourced food</h2>
          <p className="text">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
        <div className="img">
          <img
            srcSet="/images/locally-sourced-mobile.jpg 480w,
             /images/locally-sourced-tablet.jpg 500w,
             /images/locally-sourced-desktop.jpg 992w"
            sizes="(max-width: 499px) 480px,
            (max-width: 992px)  500px, 991px"
            src="/images/locally-sourced-desktop.jpg"
            alt="family gathering"
          />
          <FiveLines />
        </div>
      </div>
    </section>
  );
};
export default About;
