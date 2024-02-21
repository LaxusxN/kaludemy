import { FC } from "react";
import { Course } from "../../../types";

export type ICardCourseProps = Course;

export const CardCourse: FC<ICardCourseProps> = ({ name, image }) => {
  return (
    <div
      className="relative cursor-pointer
      hover: shadow-lg hover: scale-105 transition duration-300
      w-auto sm:w-[350px]
      "
    >
      <h1
        className="block md:hidden
        text-center text-white text-lg md:text-2xl font-bold"
      >
        {name}
      </h1>
      <img
        src={image}
        className="rounded-lg cursor-pointer 
        h-[150px] w-[150px] md:h-[350px] md:w-[350px]"
      />
      <div
        className="opacity-0 hover:opacity-100 duration-300 absolute cursor-pointer
        inset-0 z-10 flex justify-center items-center text-5xl text-white font-bold"
      >
        {name}
      </div>
    </div>
  );
};

export default CardCourse;
