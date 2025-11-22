import Image from "next/image";
import RectangleCard from "./components/RectangleCard";
import { CopyLinkButton } from "./components/CopyLinkButton";

export default function Home() {
  return (
    <main className="bg-primary overflow-x-hidden">
      <section className="flex flex-col sm:flex-row px-6 sm:min-h-screen mx-auto max-w-6xl items-center">
        <div className="mx-auto md:w-1/2 justify-end grid gap-4 py-6 md:p-8 lg:p-12 md:mr-6 xl:mr-24 mt-6 md:mt-12 lg:mt-16">

          <div className="pt-8 md:pt-0 mb-0 sm:mb-8">
            <h1>Dr. Enrique Mercadal Calaf</h1>
            <h3 className="text-darker text-base">Cardiólogo clínico</h3>
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
            href="https://api.icardiologia.ziz.cl/widget/agenda/reserva"
            isExternal
            className="rectangulo w-full bg-dark transition-all duration-500 ease-in-out hover:bg-rojoReserva"
          >
            <h5>
              RESERVA TU HORA <br /> en línea
            </h5>
          </RectangleCard>

          <RectangleCard
            href="https://icardiologia.cl/"
            isExternal
            className="rectangulo bg-darker w-full sm:w-[80%] transition-all duration-500 ease-in-out hover:opacity-50"
          >
            <h5>Ir a la consulta</h5>
          </RectangleCard>

          <RectangleCard
            href="#informacion"
            className="rectangulo bg-darkest w-full sm:w-[60%] transition-all duration-500 ease-in-out"
          >
            <h5>Más información</h5>
          </RectangleCard>
        </div>

        <div className="hidden md:block flex sm:w-1/2 sm:p-6 justify-end lg:p-16 sm:-translate-y-24">
          <div
            className="w-96 h-80 rounded-2xl shadow-2xl bg-no-repeat bg-center"
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

      <div className="md:hidden w-full p-6 flex items-center justify-center sm:my-6">
        <Image
          src="/Instituto-cardiologia.jpg"
          alt="Exterior Instituto de Cardiología de Talca"
          height={300}
          width={300}
          className="w-full object-cover rounded-2xl shadow-2xl"
        />
      </div>

      <section id="informacion" className="px-6 md:px-10 max-w-5xl mx-auto">
        <div className="w-full mb-8 md:mb-16">
          <h1>📍 Ubicación de la consulta</h1>
          <p className="pt-6 text-center font-bold">
            Instituto de Cardiología de Talca
          </p>
          <p className="pb-6 text-center">
            Calle 30 Oriente #1420, Talca
            <br />
            Edificio Plaza Oriente, Local 1
          </p>

          <div className="flex justify-center gap-2">
            <button>
              <a
                href="https://maps.app.goo.gl/HaE2BCa5m1cY5ZaU6"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Abrir en Google Maps
              </a>
            </button>

            <CopyLinkButton />
          </div>
        </div>

        <div id="horario" className="w-full mt-10">
          <h1>🕒 Horario de atención</h1>
          <p className="py-4 text-center">
            Lunes, Martes y Jueves <br /> 10 a 13 hrs
          </p>
        </div>
      </section>

      <section
        id="antecedentes"
        className="px-6 md:px-10 mx-auto mt-8 md:mt-16 max-w-5xl min-h-80"
      >
        <h1 className="mb-4">📘 Antecedentes</h1>
        <div className="px-6 md:px-20 py-4">
          <div className="pb-4">
            <h2>Áreas de interés</h2>
            <p>
              Cardiología Clínica, Ecocardiografía, Insuficiencia cardíaca,
              Fibrilación Auricular
            </p>
          </div>

          <div className="pb-4">
            <h2>Estudios</h2>
            <p>Médico Cirujano Universidad de Chile.</p>
            <p>Especialidad de Medicina Interna Universidad de Chile.</p>
            <p>Especialidad de Cardiología Pontificia Universidad Católica de Chile.</p>
            <p>
              Máster en Ecocardiografía Clínica Avanzada, Universidad Francisco
              de Vitoria, Madrid, España.
            </p>
          </div>

          <div className="pb-4">
            <h2>Miembro de Sociedades</h2>
            <p>Sociedad Médica del Centro.</p>
            <p>Sociedad Médica de Santiago.</p>
            <p>Sociedad Chilena de Cardiología y Cirugía Cardiovascular.</p>
          </div>

          <div className="pb-4">
            <h2>Cargos actuales</h2>
            <p>Director Médico del Instituto de Cardiología de Talca.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


/*

"use client"

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CopyLinkButton } from './components/CopyLinkButton';

const transition = {
  duration: 0.8,
  ease: [0, 0.71, 0.2, 1.01],
};

export default function Home() {
  return (
    <main className="bg-primary overflow-x-hidden">
      <section className='flex flex-col sm:flex-row px-6 min-h-screen mx-auto max-w-6xl items-center'>
          <div className="mx-auto md:w-1/2 justify-end grid gap-4 md:p-8 lg:p-12 md:mr-6 xl:mr-24 mt-6 md:mt-12 lg:mt-16">
            <div className="pt-8 md:pt-0 mb-0 sm:mb-8">
              <h1>Dr. Enrique Mercadal Calaf</h1>
              <h3 className="text-darker text-base">Cardiólogo clínico</h3>
            </div>
            <div className='md:hidden flex items-center justify-center my-4 sm:my-6'> 
                <Image
                src="/ejmercadal-azul.png"
                alt="Foto de perfil Dr. Enrique Mercadal Calaf"
                height={300}
                width={300}
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
              className='rectangulo w-full bg-dark transition-all duration-500 ease-in-out hover:bg-rojoReserva'
            >
              <a
                href='https://api.icardiologia.ziz.cl/widget/agenda/reserva' 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0"></span>
                <h5>RESERVA TU HORA <br/> en línea</h5>
              </a>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
              className='rectangulo bg-darker w-full sm:w-[80%] transition-all duration-500 ease-in-out hover:opacity-50'
            >
              <a 
                href='https://icardiologia.cl/'
                rel='noopener noreferrer'
                target='_blank'
                className=''
              >
                <span className="absolute inset-0 rounded-lg hover:bg-white hover:opacity-25"></span>
                <h5>Ir a la consulta</h5>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
              className='rectangulo bg-darkest w-full sm:w-[60%] transition-all duration-500 ease-in-out transition-opacity'
            >
              <Link href='#informacion'>
                <span className="absolute inset-0 rounded-lg hover:bg-white hover:opacity-25"></span>
                <h5>Más información</h5>
              </Link>
            </motion.div>
          </div>
          <div className="hidden md:block flex sm:w-1/2 sm:p-6 justify-end lg:p-16 sm:-translate-y-24">
            <div
              className="w-96 h-80 rounded-2xl shadow-2xl bg-no-repeat bg-center"
              style={{ backgroundImage: `url('/Instituto-cardiologia.jpg')`, backgroundSize: 'auto 100%' }}
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
          <div className='md:hidden w-full p-6 flex items-center justify-center sm:my-6'> 
              <Image
              src="/Instituto-cardiologia.jpg"
              alt="Exterior Instituto de Cardiología de Talca"
              height={300}
              width={300}
              className="w-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
      <section id='informacion' className='px-6 md:px-10 max-w-5xl mx-auto'>
          <div className='w-full mb-8 md:mb-16'>
            <h1>📍 Ubicación de la consulta</h1>
            <p className='pt-6 text-center font-bold'>Instituto de Cardiología de Talca</p>
            <p className='pb-6 text-center'>
                  Calle 30 Oriente {"#"}1420, Talca<br />
                  Edificio Plaza Oriente, Local 1
            </p>
            <div className='flex justify-center'>
              <button>
                <a href='https://maps.app.goo.gl/HaE2BCa5m1cY5ZaU6' target='_blank' rel='noopener noreferrer'>Abrir en Google Maps</a>
              </button>
              <CopyLinkButton />
            </div>
          </div>
          <div id='horario' className='w-full mt-10'>
            <h1>🕒 Horario de atención</h1>
            <p className='py-4 text-center'>Lunes, Martes y Jueves <br /> 10 a 13 hrs</p>
          </div>
      </section>
      <section id='antecedentes' className='px-6 md:px-10 mx-auto mt-8 md:mt-16 max-w-5xl min-h-80'>
        <h1 className='mb-4'>📘 Antecedentes</h1>
        <div className='px-6 md:px-20 py-4'>
          <div className='pb-4'>
            <h2>Áreas de interés</h2>
            <p>Cardiología Clínica, Ecocardiografía, Insuficiencia cardíaca, Fibrilación Auricular</p>
          </div>
          <div className='pb-4'>
            <h2>Estudios</h2>
            <p>Médico Cirujano Universidad de Chile.</p>
            <p>Especialidad de Medicina Interna Universidad de Chile.</p>
            <p>Especialidad de Cardiología Pontificia Universidad Católica de Chile.</p>
            <p>Máster en Ecocardiografía Clínica Avanzada, Universidad Francisco de Vitoria, Madrid, España.</p>
          </div>
          <div className='pb-4'>
            <h2>Miembro de Sociedades</h2>
            <p>Sociedad Médica del Centro.</p>
            <p>Sociedad Médica de Santiago.</p>
            <p>Sociedad Chilena de Cardiología y Cirugía Cardiovascular.</p>
          </div>
          <div className='pb-4'>
            <h2>Cargos actuales</h2>
            <p>Director Médico del Instituto de Cardiología de Talca.</p>
          </div>
        </div>
      </section>


    </main>
  );
}

*/