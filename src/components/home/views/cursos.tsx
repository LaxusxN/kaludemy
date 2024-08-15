import { FC } from "react";
import { CoursesList } from "../../../reports/courses";
import aritmetica from "../../../assets/aritmetica.png";
import algebra from "../../../assets/algebra.jpg";
import geometria from "../../../assets/geometria.png";
import trigonometria from "../../../assets/trigonometria.jpg";
import fisica from "../../../assets/fisica.jpeg";

interface CursosProps {
  prop?: string;
}
const courses = [
  {
    id: 1,
    name: "Aritmética",
    image: aritmetica,
    topics: ["hola", "bebe"],
  },
  {
    id: 2,
    name: "Álgebra",
    image: algebra,
    topics: [
      "Leyes de Exponentes 1",
      "Leyes de Exponentes 2",
      "Productos Notables 1",
      "Productos Notables 2",
      "Polnomios 1",
      "Polinomios 2",
      "División de Polinomios",
      "Factorización",
      "Ecuaciones",
      "Ecuaciones de 2do grado",
      "Ecuación de grado superior",
      "Desigualdades",
      "Inecuaciones",
      "Inecuaciones cuadráticas",
    ],
  },
  {
    id: 3,
    name: "Geometría",
    image: geometria,
    topics: ["hola", "bebe"],
  },
  {
    id: 4,
    name: "Trigonometría",
    image: trigonometria,
    topics: ["hola", "bebe"],
  },
  {
    id: 5,
    name: "Física",
    image: fisica,
    topics: ["hola", "bebe"],
  },
];
export const Cursos: FC<CursosProps> = () => {
  return (
    <div className="p-16 bg-[#8DA8BF]">
      <h1 className="text-6xl font-bold mb-8">Cursos:</h1>
      <CoursesList rows={courses} />
    </div>
  );
};

export default Cursos;
