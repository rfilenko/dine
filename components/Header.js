import styles from './Header.module.scss';
import Logo from './Logo';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="hero-content">
          <Logo />
          <h2 className="subtitle">Exquisite dining since 1989</h2>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <button className="btn btn--dark">Book a table</button>
        </div>
      </div>
    </header>
  );
}
