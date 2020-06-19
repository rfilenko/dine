import Logo from './visual/Logo';
import ReservationForm from './ReservationForm';

export default function HeaderCustom() {
  return (
    <header className="custom-header">
      <div className="container">
        <Logo />
        <div className="reservations-content">
          <h1 className="title">Reservations</h1>
          <p>
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
          <button className="btn btn--dark">RESERVE PLACE</button>
        </div>
        <ReservationForm />
      </div>
    </header>
  );
}
