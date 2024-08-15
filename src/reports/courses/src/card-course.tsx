import { FC } from "react";
import { Course } from "../../../types";

export type ICardCourseProps = Course;

export const CardCourse: FC<ICardCourseProps> = ({ name, image, topics }) => {
  return (
    <div className="border-2 w-full">
      <div className="flex justify-center items-center gap-8 py-4">
        <h1 className="font-bold  text-4xl">{name}</h1>
        <img src={image} width={300} />
      </div>
      <hr />
      <div className="grid grid-cols-2">
        {topics.map((item) => (
          <h1 className=" cursor-pointer hover:border-b ">{item}</h1>
        ))}
      </div>
    </div>
  );
};

export default CardCourse;
