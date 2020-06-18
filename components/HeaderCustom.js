import Logo from './visual/Logo';

export default function HeaderCustom() {
  return (
    <header className="custom">
      <div className="container">
        <Logo />
        <div className="reservations-content">
          <h1 className="title">Reservations</h1>
          <p>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
        <form>
          <input type="text" placeholder="John Apples" />
          <input type="email" placeholder="Email" />
          <select name="people-count">
            <option value="1">1 person</option>
            <option value="2" selected>
              2 persons
            </option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
          </select>
          <button type="submit" className="btn btn--outline">
            MAKE RESERVATION
          </button>
        </form>
      </div>
    </header>
  );
}
