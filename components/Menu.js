export default function Menu() {
  return (
    <section className="menu">
      <div className="container">
        <div className="menu__intro">
          <h2>A few highlights from our menu</h2>
          <p className="text">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="line">
          <span></span>
        </div>
        <ul className="menu-list">
          <li className="menu-item">
            <img
              srcSet="/images/salmon-mobile.jpg 327w,
               /images/salmon-desktop-tablet.jpg 128w"
              sizes="(max-width: 499px) 327px, 128px"
              src="/images/salmon-mobile.jpg"
              alt="Seared Salmon Fillet"
            />
            <div className="menu-item__content">
              <h4 className="menu-item__title">Seared Salmon Fillet</h4>
              <p className="menu-item__desc">
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </li>
          <li className="menu-item">
            <img
              srcSet="/images/beef-mobile.jpg 327w,
               /images/beef-desktop-tablet.jpg 128w"
              sizes="(max-width: 499px) 327px, 128px"
              src="/images/beef-mobile.jpg"
              alt="Rosemary Filet Mignon"
            />
            <div className="menu-item__content">
              <h4 className="menu-item__title">Rosemary Filet Mignon</h4>
              <p className="menu-item__desc">
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </li>
          <li className="menu-item">
            <img
              srcSet="/images/chocolate-mobile.jpg 327w,
               /images/chocolate-desktop-tablet.jpg 128w"
              sizes="(max-width: 499px) 327px, 128px"
              src="/images/chocolate-mobile.jpg"
              alt="Summer Fruit Chocolate Mousse"
            />
            <div className="menu-item__content">
              <h4 className="menu-item__title">
                Summer Fruit Chocolate Mousse{' '}
              </h4>
              <p className="menu-item__desc">
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
