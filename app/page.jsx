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
            href="#informacion"
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

      <section id="informacion" 
        className="section"
      
      >
        <div className="w-full mb-8 md:mb-16">
          <h1>Dirección de la consulta</h1>
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
              className="px-3 py-2 m-2 rounded-xl flex items-center gap-2 text-sm font-bold bg-dark text-gray-100 tracking-wider hover:bg-opacity-75"
            >
              Abrir en Google Maps
            </a>

            <CopyLinkButton />
          </div>
        </div>
      </section>
        <section id="horario" 
          className="section"
        >
          <h1>Horario de atención</h1>
          <p className="py-4 text-center">
            Lunes, Martes y Jueves <br /> 10 a 13 hrs
          </p>
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