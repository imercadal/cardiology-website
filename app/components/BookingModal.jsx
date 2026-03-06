'use client';

import { useEffect, useRef } from 'react';

const BOOKING_URL = 'https://api.icardiologia.ziz.cl/widget/agenda/reserva';

export default function BookingModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Reservar una hora"
        className="relative bg-white rounded-t-2xl sm:rounded-xl shadow-2xl w-full sm:max-w-2xl h-[90dvh] sm:h-[85dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shrink-0">
          <span className="text-darkest font-semibold text-sm tracking-wide">Reserva tu hora en línea</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Cerrar"
            className="m-0 gap-0 bg-transparent text-darkest hover:bg-gray-100 rounded-lg p-2 sm:px-2 sm:py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <iframe
          src={BOOKING_URL}
          title="Formulario de reserva de hora"
          className="w-full flex-1 rounded-b-xl border-0"
          loading="lazy"
        />

        <div className="shrink-0 px-4 py-2 border-t border-gray-100 text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
            aria-label="Abrir reserva en nueva ventana si el formulario no carga"
          >
            ¿No carga el formulario? Abrir en nueva ventana →
          </a>
        </div>
      </div>
    </div>
  );
}
