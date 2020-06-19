import React, { useState } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import ModalReservation from './ModalReservation';

const ReservationForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [personName, setPersonName] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setModalIsOpen(true);
    setPersonName(data.name);
    setTimeout(() => {
      Router.push('/');
    }, 5000);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={errors.name ? 'form-group error' : 'form-group'}>
          <label htmlFor="name">
            <span className="sr-only">Enter your name</span>
            <input
              ref={register({ required: true })}
              type="text"
              name="name"
              placeholder="John Apples"
            />

            {errors.name && <p className="form-error">Name is required</p>}
          </label>
        </div>
        <div className={errors.email ? 'form-group error' : 'form-group'}>
          <label htmlFor="email">
            <span className="sr-only">Enter email</span>
            <input
              ref={register({ required: true })}
              type="email"
              name="email"
              placeholder="Email"
            />

            {errors.email && <p className="form-error">Email is required</p>}
          </label>
        </div>

        <div className={errors.peopleCount ? 'form-group error' : 'form-group'}>
          <label htmlFor="peopleCount">
            <span className="sr-only"> How many people</span>
            <select ref={register} name="peopleCount" defaultValue="2">
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
            </select>
          </label>
        </div>

        <button type="submit" className="btn btn--black">
          MAKE RESERVATION
        </button>
      </form>
      <ModalReservation modalIsOpen={modalIsOpen} personName={personName} />
    </>
  );
};

export default ReservationForm;
