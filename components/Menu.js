import { menuList } from '../data/menu';

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
          {menuList.map((item) => (
            <li className="menu-item" key={item.id}>
              <div className="menu-item__img">
                <img
                  srcSet={`/images/${item.imgName}-mobile.jpg 327w,
               /images/${item.imgName}-desktop-tablet.jpg 128w"
                  sizes="(max-width: 499px) 327px, 128px"
                  src="/images/${item.imgName}-mobile.jpg"
                  alt=${item.title}`}
                />
              </div>
              <div className="menu-item__content">
                <h4 className="menu-item__title">{item.title}</h4>
                <p className="menu-item__desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
