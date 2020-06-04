export default function FamilyGathering() {
  return (
    <section className="family-gathering">
      <h2> Family Gathering</h2>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        srcSet="/images/family-gathering-mobile.jpg 480w,
             /images/family-gathering-tablet.jpg 500w,
             /images/family-gathering-desktop.jpg 992w"
        sizes="(max-width: 499px) 480px,
            (max-width: 992px)  500px, 991px"
        src="/images/family-gathering-tablet.jpg"
        alt="family gathering"
      ></img>
      <div className="content">
        <p>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
        <button className="btn">Book a table</button>
      </div>

      <ul className="categories">
        <li className="active">
          <a href="#">Family Gathering</a>
        </li>
        <li>
          <a href="#">Special Events</a>
        </li>
        <li>
          <a href="#">Social Events</a>
        </li>
      </ul>
    </section>
  );
}
