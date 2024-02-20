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
    name: "Aritmética",
    image: aritmetica,
  },
  {
    name: "Álgebra",
    image: algebra,
  },
  {
    name: "Geometría",
    image: geometria,
  },
  {
    name: "Trigonometría",
    image: trigonometria,
  },
  {
    name: "Física",
    image: fisica,
  },
];
export const Cursos: FC<CursosProps> = () => {
  return (
    <div className="bg-[#8DA8BF]">
      <h1 className="text-6xl font-bold mb-8">Cursos:</h1>
      <CoursesList rows={courses} />
    </div>
  );
};

export default Cursos;
