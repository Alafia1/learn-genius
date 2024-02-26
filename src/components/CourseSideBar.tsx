import { Chapter, Course, Unit } from "@prisma/client";
import React from "react";

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
};

const CourseSideBar = (props: Props) => {
  return <div>CourseSideBar</div>;
};

export default CourseSideBar;
