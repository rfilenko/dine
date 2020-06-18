import Logo from './visual/Logo';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Logo />
        <p className="address">
          Marthwaite, Sedbergh <br />
          Cumbria <br />
          +00 44 123 4567
        </p>
        <p className="open-hours">
          Open Times <br />
          Mon - Fri: 09:00 AM - 10:00 PM <br />
          Sat - Sun: 09:00 AM - 11:30 PM
        </p>
      </div>
    </footer>
  );
}
