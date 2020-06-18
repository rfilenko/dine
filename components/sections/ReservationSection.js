import Link from 'next/link';

const ReservationSection = () => {
  return (
    <section className="reservation">
      <div className="container">
        <h3>Ready to make a reservation?</h3>
        <Link href={`/reservations`}>
          <button className="btn btn--dark">Book a table</button>
        </Link>
      </div>
    </section>
  );
};
export default ReservationSection;
