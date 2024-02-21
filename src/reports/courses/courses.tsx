import { FC } from "react";
import { Course } from "../../types";
import { CardCourse } from "./src/card-course";

interface CoursesListProps {
  rows: Course[];
}

export const CoursesList: FC<CoursesListProps> = ({ rows = [] }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {rows.map((item) => (
        <CardCourse key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CoursesList;
