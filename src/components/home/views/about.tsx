import { FC } from "react";
import about from "../../../assets/about.jpg";
import iam from "../../../assets/Iam.png";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${about})`,
      }}
      className="h-auto xl:h-[550px] px-16 py-8 sm:py-16 
      flex flex-col-reverse xl:flex-row items-center justify-between md:gap-8 
      bg-blend-darken bg-on-secondary-container/20  
        bg-cover
      bg-red-500

      "
    >
      <div
        className="flex flex-col gap-8 w-[250px] sm:w-[600px]
        text-gray-200 font-bold"
      >
        <h1 className="text-2xl md:text-4xl">Sobre mí</h1>
        <p className="text-lg md:text-xl">
          Ingeniero electrónico egresado de la San Marcos de la carrera de
          Ingeniería Electrónica. Apasionado por la educación, las matemáticas y
          la programación. Este un nuevo proyecto, con el que pueda aportar a
          aquellos que esten dispuestos a aprendar y superar sus límites.
        </p>
        <p className="text-xl">
          Clases de Matemáticas, ciencias y programación a nivel escolar o
          universitario
        </p>
      </div>
      <img src={iam} className="hidden sm:block rounded-full h-[330px]" />
    </div>
  );
};

export default About;
