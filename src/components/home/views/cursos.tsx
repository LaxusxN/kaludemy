import { FC } from "react";
import { CoursesList } from "../../../reports/courses";
import aritmetica from "../../../assets/aritmetica.png";
import algebra from "../../../assets/algebra.jpg";
import geometria from "../../../assets/geometria.png";
import trigonometria from "../../../assets/trigonometria.jpg";
import fisica from "../../../assets/fisica.jpeg";
import python from "../../../assets/python.jpg";

interface CursosProps {
  prop?: string;
}
const courses = [
  {
    id: 1,
    name: "Aritmética",
    image: aritmetica,
    topics: [
      "Razones y Proporciones",
      "Magnitudes proporcionales",
      "Promedios",
      "Regla del tanto por ciento",
      "Regla de interés",
      "Teoría de conjuntos",
      "Numeración",
      "Operaciones fundamentales en Z+",
      "Sucesiones numéricas",
      "Teoría de divisibilidad",
      "Clasificación de los números enteros positivos",
      "Estadística",
      "Analisis combinatorio",
      "Teoria de probabilidades",
    ],
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
      "Polinomios 1",
      "Polinomios 2",
      "División de Polinomios",
      "Factorización",
      "Ecuaciones",
      "Ecuaciones de 2do grado",
      "Ecuación de grado superior",
      "Desigualdades",
      "Inecuaciones",
      "Inecuaciones cuadráticas",
      "Inecuaciones de grado superior",
      "Expresiones Irracionales",
      "Valor Absoluto",
      "Ecuaciones con Valor Absoluto",
      "Inecuaciones con Valor Absoluto",
      "Logaritmos",
      "Funciones",
      "Gráfica de Funciones",
      "Composición de Funciones",
      "Función Inversa",
      "Programación Lineal",
    ],
  },
  {
    id: 3,
    name: "Geometría",
    image: geometria,
    topics: [
      "Triángulos ",
      "Líneas Notables asociadas a los triángulos",
      "Triángulos Rectángulos",
      "Congruencia de Triángulos",
      "Aplicaciones de la congruencia",
      "Polígonos",
      "Cuadriláteros I: Trapezoides y Trapecios",
      "CUadriláteros II: Paralelogramos",
      "Circunferencia I: Elementos y Propiedades",
      "Circunferencia II: Ángulos asociados a la circunferencia",
      "Circunferencia III: Posición relativa entre circunferencias",
      "Circunferencia IV: Cuadriláteros Inscriptibles y figuras Circunscritas",
      "Puntos Notables",
      "Proporcionalidad",
      "Semejanza de Triángulos",
      "Relaciones métricas en el triángulo rectángulo",
      "Relaciones métricas en la circunferencia",
      "Relaciones métricas en el triángulo oblicuángulo",
      "Áreas de regiones triángulares",
      "Áreas de regiones cuadrangulares",
      "Áreas de regiones circulares",
      "Geometría del Espacio",
      "Śolidos Geométricos",
    ],
  },
  {
    id: 4,
    name: "Trigonometría",
    image: trigonometria,
    topics: [
      "Sistema de medición angular",
      "Sector Circular",
      "Razones trigonométricas de un ángulo agudo",
      "Resolución de un triángulo rectángulo",
      "Ángulos Vérticales",
      "Introducción a la geometría analítica",
      "Razones trigonométricas de un ángulo en posición normal",
      "Identidades trigonométricas fundamentales",
      "Identidades trigonométricas de arcos compuestos",
      "Identidades trigonométricas de arcos dobles",
      "Identidades trigonométricas de arcos triples",
      "Reducción al primer cuadrante",
      "Transformaciones trigonométricas",
      "Circunferencia trigonométrica",
      "Ecuaciones trigonométricas",
      "Funciones trigonométricas",
    ],
  },
  {
    id: 5,
    name: "Física",
    image: fisica,
    topics: [
      "Analisis Dimensional",
      "Vectores",
      "Cinemática I: Movimiento rectilíneo uniforme (M.R.U)",
      "Cinemática II: Movimiento rectilíneo uniformemente Variado (M.R.U.V) ",
      "Cinemática III: Movimiento vertical de caída libre (M.V.C.L) ",
      "Cinemática IV: Movimiento Parábolico",
      "Cinemática V: Movimiento circular uniforme (M.C.U) ",
      "Cinemática VI: Movimiento circular uniformemente variado (M.C.U.V)",
      "Estática I: Fuerzas  ",
      "Estática II: Fuerza de Rozamiento ",
      "Estática III: Momentos de una fuerza",
      "Dinámica lineal ",
      "Dinámica circunferencial ",
      "Trabajo ",
      "Energía ",
      "Choques e Impulso ",
      "Gravitación Universal ",
      "Hidrostática ",
      "Calor ",
      "Transferencia de calor ",
      "Electrostática I: Fuerza eléctrica ",
      "ELectrostática II: Campo eléctrico ",
      "Electrostática III: Potencial eléctrico ",
      "Electrodinámica ",
      "Electromágnetismo ",
      "Óptica ",
      "Física Moderna: ",
    ],
  },
  {
    id: 6,
    name: "Programación básica: Python",
    image: python,
    topics: [
      "Declaración y tipos de variables",
      "Números en Python",
      "Strings en Python",
      "Operadores de decisión I: Operadores de comparación",
      "Operadores de decisión II: if, else, elif",
      "Operadores de decisión III: if y else anidados",
      "Operadores de iteración I: El bucle while y el comando break",
      "Operadores de iteración II: El bucle for y el comando continue",
      "Operadores de iteración III: Bucles anidados",
    ],
  },
];
export const Cursos: FC<CursosProps> = () => {
  return (
    <div className="p-16">
      <h1 className="text-6xl font-bold mb-8">Cursos:</h1>
      <CoursesList rows={courses} />
    </div>
  );
};

export default Cursos;
