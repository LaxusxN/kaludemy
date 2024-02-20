import { FC } from "react";
import { Course } from "../../types";
import { CardCourse } from "./src/card-course";

interface CoursesListProps {
  rows: Course[];
}

export const CoursesList: FC<CoursesListProps> = ({ rows = [] }) => {
  return (
    <div className="flex  justify-between flex-wrap gap-16">
      {rows.map((item) => (
        <CardCourse key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CoursesList;
