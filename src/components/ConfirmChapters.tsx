import { Chapter, Course, Unit } from "@prisma/client";
import React from "react";

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
};

const ConfirmChapters = ({ course }: Props) => {
  return <div>ConfirmChapters</div>;
};

export default ConfirmChapters;
