import { FC } from "react";
import { Course } from "../../../types";

export type ICardCourseProps = Course;

export const CardCourse: FC<ICardCourseProps> = ({ name, image }) => {
  return (
    <div
      className="relative cursor-pointer
      hover: shadow-lg hover: scale-105 transition duration-300 ease-in-out
      "
    >
      <img
        src={image}
        className="rounded-lg cursor-pointer h-[350px] w-[350px]"
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
