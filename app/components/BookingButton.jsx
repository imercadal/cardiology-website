'use client';

import { useRef, useState } from 'react';
import BookingModal from './BookingModal';

export default function BookingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleClose = () => {
    setIsModalOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsModalOpen(true)}
        aria-label="Reservar hora en línea"
        className="rectangulo bg-darker w-full sm:w-[80%] transition-all duration-700 ease-in-out hover:bg-rojoReserva animate-card m-0 gap-0"
        style={{ animationDelay: '0.1s' }}
      >
        <span className="absolute inset-0" aria-hidden="true" />
        <h5>RESERVA TU HORA <br /> en línea</h5>
      </button>
      <BookingModal isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
}
