import { FC } from "react";
import { Course } from "../../../types";

export type ICardCourseProps = Course;

export const CardCourse: FC<ICardCourseProps> = ({ name, image, topics }) => {
  return (
    <div className="border-2 border-black w-full">
      <div className="flex justify-center items-center gap-8 py-4">
        <h1 className="font-bold  text-4xl">{name}</h1>
        <img src={image} width={300} className="hidden sm:block" />
      </div>
      <hr className="color-black" />
      <div
        className="
        flex flex-col p-4  
        sm:grid sm:grid-cols-2"
      >
        {topics.map((item, index) => (
          <h1
            key={index}
            className=" cursor-pointer hover:border-b hover:font-bold"
          >
            {index + 1}. {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default CardCourse;
