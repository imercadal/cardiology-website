const BOOKING_URL = 'https://api.icardiologia.ziz.cl/widget/agenda/reserva';

export default function BookingButton() {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar hora en línea (abre en nueva ventana)"
      className="rectangulo bg-darker w-full sm:w-[80%] transition-all duration-700 ease-in-out hover:bg-rojoReserva animate-card m-0 gap-0"
      style={{ animationDelay: '0.1s' }}
    >
      <span className="absolute inset-0" aria-hidden="true" />
      <h5>RESERVA TU HORA <br /> en línea</h5>
    </a>
  );
}
