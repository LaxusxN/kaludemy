import { FC } from "react";
import { CoursesList } from "../../../reports/courses";
import aritmetica from "../../../assets/aritmetica.png";
import algebra from "../../../assets/algebra.png";
import geometria from "../../../assets/geometria.png";
import trigonometria from "../../../assets/trigonometria.jpg";
import fisica from "../../../assets/fisica.jpg";

interface CursosProps {
  prop?: string;
}
const courses = [
  {
    id: 1,
    name: "Aritmética",
    image: aritmetica,
  },
  {
    id: 2,
    name: "Álgebra",
    image: algebra,
  },
  {
    id: 3,
    name: "Geometría",
    image: geometria,
  },
  {
    id: 4,
    name: "Trigonometría",
    image: trigonometria,
  },
  {
    id: 5,
    name: "Física",
    image: fisica,
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
