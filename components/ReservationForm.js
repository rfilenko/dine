import { useForm } from 'react-hook-form';
import Router from 'next/router';

const ReservationForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      Router.push('/');
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Enter your name</label>
      <input ref={register} type="text" name="name" placeholder="John Apples" />

      <label htmlFor="email">Enter email</label>
      <input ref={register} type="email" name="email" placeholder="Email" />

      <label htmlFor="people-count" defaultValue="2">
        How many people
      </label>
      <select ref={register} name="people-count">
        <option value="1">1 person</option>
        <option value="2">2 persons</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
      </select>

      <button type="submit" className="btn btn--outline">
        MAKE RESERVATION
      </button>
    </form>
  );
};

export default ReservationForm;
