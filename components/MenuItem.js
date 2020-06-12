const MenuItem = ({ item }) => {
  return (
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
  );
};

export default MenuItem;
