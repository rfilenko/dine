import Modal from 'react-modal';
Modal.setAppElement('.address');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    maxHeight: '300px',
    width: '90%',
    maxWidth: '575px',
    overflow: 'hidden',
    background: '#ffffff',
    borderRadius: 'none',
    padding: '2rem',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 75px 100px -50px #384255',
    backgroundColor: '#111111',
    color: '#ffffff',
    backgroundImage: `url(/images/hero-bg-mobile.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'contain',
    border: 'none',
  },
};
const ModalReservation = ({ personName, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Confirmation Modal"
    >
      <p>
        Thank you for your reservation, {personName.split(' ')[0]} 🙂. <br />{' '}
        <br />
        You will be redirected to Home Page
      </p>
    </Modal>
  );
};

export default ModalReservation;
