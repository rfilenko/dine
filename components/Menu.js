import { menuList } from '../data/menu';
import MenuItem from './MenuItem';
import AbstactLine from './AbstactLine';

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
        <AbstactLine />
        <ul className="menu-list">
          {menuList.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
