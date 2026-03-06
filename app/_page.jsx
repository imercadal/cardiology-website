import Image from "next/image";
import RectangleCard from "./components/RectangleCard";
import { CopyLinkButton } from "./components/CopyLinkButton";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://drmercadal.cl';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Enrique Mercadal Calaf',
      honorificPrefix: 'Dr.',
      jobTitle: 'Cardiólogo Clínico',
      worksFor: {
        '@type': 'MedicalOrganization',
        name: 'Instituto de Cardiología de Talca',
      },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Universidad de Chile' },
        { '@type': 'EducationalOrganization', name: 'Pontificia Universidad Católica de Chile' },
        { '@type': 'EducationalOrganization', name: 'Universidad Francisco de Vitoria, Madrid' },
      ],
      knowsAbout: [
        'Cardiología Clínica',
        'Ecocardiografía',
        'Insuficiencia cardíaca',
        'Fibrilación Auricular',
      ],
      url: siteUrl,
    },
    {
      '@type': 'MedicalBusiness',
      name: 'Instituto de Cardiología de Talca — Dr. Enrique Mercadal Calaf',
      description: 'Consulta de cardiología clínica en Talca, Chile',
      url: siteUrl,
      image: `${siteUrl}/ejmercadal-azul.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle 30 Oriente #1420, Edificio Plaza Oriente, Local 1',
        addressLocality: 'Talca',
        addressRegion: 'Maule',
        addressCountry: 'CL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -35.4264,
        longitude: -71.6554,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Thursday'],
          opens: '10:00',
          closes: '13:00',
        },
      ],
      medicalSpecialty: 'Cardiology',
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-primary overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed top-0 left-3/4 -translate-x-1/3 h-screen w-[15px] sm:border-2 border-blue-300 pointer-events-none z-0"></div>
      <section id="hero" className="flex flex-col sm:flex-row px-6 min-h-screen mx-auto max-w-6xl items-center">
        <div className="mx-auto md:w-1/2 justify-end grid gap-4 py-6 md:p-8 lg:p-12 md:mr-6 xl:mr-24 mt-6 md:mt-12 lg:mt-16">

          <div className="pt-8 md:pt-0 mb-0 sm:mb-8">
            <h1 className="md:whitespace-nowrap">Dr. Enrique Mercadal Calaf</h1>
            <h2 className="text-darker text-base lg:text-xl font-normal">Cardiólogo</h2>
            <hr className="absolute hidden sm:block left-1/2 w-screen -translate-x-1/2 border-t border-blue-300 mt-4"/>
          </div>

          <div className="md:hidden flex items-center justify-center my-4 sm:my-6">
            <Image
              src="/ejmercadal-azul.png"
              alt="Foto de perfil Dr. Enrique Mercadal Calaf"
              height={300}
              width={300}
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <RectangleCard
            href="#consulta"
            delay={0}
            className="rectangulo w-full bg-dark transition-all duration-700 ease-in-out"
            ariaLabel="Reservar hora en línea (abre en nueva ventana)"
          >
            <h5>
              Consulta
            </h5>
          </RectangleCard>

          <RectangleCard
            href="https://api.icardiologia.ziz.cl/widget/agenda/reserva"
            isExternal
            delay={0.1}
            className="rectangulo bg-darker w-full sm:w-[80%] transition-all duration-700 ease-in-out hover:bg-rojoReserva"
            ariaLabel="Ir al sitio de la consulta (abre en nueva ventana)"
          >
            <h5>RESERVA TU HORA <br /> en línea</h5>
          </RectangleCard>

          <RectangleCard
            href="#antecedentes"
            delay={0.2}
            className="rectangulo bg-darkest w-full sm:w-[60%] transition-all duration-800 ease-in-out"
            ariaLabel="Ir a la sección de antecedentes profesionales"
          >
            <h5>Antecedentes profesionales</h5>
          </RectangleCard>
        </div>

        <div className="hidden md:flex md:w-1/2 md:p-6 justify-end lg:p-16 md:-translate-y-24">
          <div
            className="w-full max-w-sm h-80 rounded-2xl shadow-2xl bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/Instituto-cardiologia.jpg')`,
              backgroundSize: "auto 100%",
            }}
          >
            <Image
              src="/ejmercadal-azul.png"
              alt="Foto de perfil Dr. Enrique Mercadal Calaf"
              height={300}
              width={300}
              className="-translate-x-10 lg:-translate-x-24 xl:-translate-x-48 translate-y-24 md:translate-y-56 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <div className="md:hidden px-6 py-6 sm:my-2">
        <Image
          src="/Instituto-cardiologia.jpg"
          alt="Exterior Instituto de Cardiología de Talca"
          height={300}
          width={300}
          className="w-full object-cover rounded-2xl shadow-2xl"
        />
      </div>

      <section id="consulta" className="section w-full mb-8 md:mb-12">
          <h1>Consulta</h1>
          <div id="informacion consulta" className="flex flex-col md:flex-row items-center md:items-start justify-around gap-6 md:gap-0 mt-6 md:mt-0">
            <div id="direccion" className="flex-1 flex flex-col items-center">
              <p className="pt-6 text-lg text-center font-bold">
                <a
                  href="https://icardiologia.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  aria-label="Visitar sitio web del Instituto de Cardiología de Talca (abre en nueva ventana)"
                >

                  Instituto de Cardiología de Talca
                </a>
              </p>
              <p className="pb-6 text-center">
                Calle 30 Oriente #1420, Talca
                <br />
                Edificio Plaza Oriente, Local 1
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://maps.app.goo.gl/HaE2BCa5m1cY5ZaU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir ubicación en Google Maps (abre en nueva ventana)"
                  className="px-3 py-2 m-2 rounded-xl flex items-center text-center gap-2 text-sm font-bold bg-dark text-gray-100 tracking-wider hover:bg-opacity-75"
                >
                  Abrir en Google Maps
                </a>
                <CopyLinkButton />  
              </div>
            </div>
            <div id="horario" className="flex-1 flex flex-col items-center gap-1">
              <p className="pt-6 text-lg font-bold">Horario de atención</p>
              <p className="text-center">
                Lunes, Martes y Jueves <br /> 10 a 13 hrs
              </p>
            </div>
            <div id="telefonos" className="flex-1 flex flex-col items-center gap-1">
              <p className="pt-6 text-lg font-bold">Teléfonos</p>
              <div className="flex flex-col items-center flex-wrap justify-center">
                <a
                  href="tel:+56712255203"
                  aria-label="Llamar al 71 2 255203"
                  className="px-3 rounded-xl flex items-center text-sm  tracking-wider hover:bg-opacity-75 transition-colors duration-300"
                >
                  71 2 255203
                </a>
                <a
                  href="tel:+56712255214"
                  aria-label="Llamar al 71 2 255214"
                  className="px-3 rounded-xl flex items-center text-sm tracking-wider hover:bg-opacity-75 transition-colors duration-300"
                >
                  71 2 255214
                </a>
                <a
                  href="https://wa.me/56958599026"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp (abre en nueva ventana)"
                  className="px-3 m-1 rounded-xl flex items-center gap-2 text-sm tracking-wider transition-colors duration-300"
                >
                  WhatsApp
                  <span className="bg-dark text-gray-100 rounded-full p-1.5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
      </section>

      <section
        id="antecedentes"
        className="section"
      >
        {/**rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(60,103,182,0.1)] backdrop-blur-sm p-8 md:p-12 */}
        <h1 className="mb-4">Antecedentes</h1>
       
        <div className="px-6 md:px-20 py-4">
          <div className="pb-4">
            <h3>Áreas de interés</h3>
            <p>
              Cardiología Clínica, Ecocardiografía, Insuficiencia cardíaca,
              Fibrilación Auricular
            </p>
          </div>

          <div className="pb-4">
            <h3>Estudios</h3>
            <p>Médico Cirujano Universidad de Chile.</p>
            <p>Especialidad de Medicina Interna Universidad de Chile.</p>
            <p>Especialidad de Cardiología Pontificia Universidad Católica de Chile.</p>
            <p>
              Máster en Ecocardiografía Clínica Avanzada, Universidad Francisco
              de Vitoria, Madrid, España.
            </p>
          </div>

          <div className="pb-4">
            <h3>Miembro de Sociedades</h3>
            <p>Sociedad Médica del Centro.</p>
            <p>Sociedad Médica de Santiago.</p>
            <p>Sociedad Chilena de Cardiología y Cirugía Cardiovascular.</p>
            <p>Sociedad Europea de Cardiología</p>
          </div>

          <div className="pb-4">
            <h3>Cargos actuales</h3>
            <p>Director Médico del Instituto de Cardiología de Talca.</p>
          </div>
        </div>
      </section>
    </main>
  );
};