import CourseSideBar from "@/components/CourseSideBar";
import MainVideoSummary from "@/components/MainVideoSummary";
import QuizCard from "@/components/QuizCard";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

const CoursePage = async ({ params: { slug } }: Props) => {
  const [courseId, unitIndexParam, chapterIndexParams] = slug;
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      units: {
        include: {
          chapters: {
            include: { questions: true },
          },
        },
      },
    },
  });
  if (!course) {
    return redirect("/gallery");
  }
  let unitIndex = parseInt(unitIndexParam);
  let chapterIndex = parseInt(chapterIndexParams);

  const unit = course.units[unitIndex];
  if (!unit) {
    return redirect("/gallery");
  }

  const chapter = unit.chapters[chapterIndex];
  if (!chapter) {
    return redirect("/gallery");
  }
  return (
    <div>
      <CourseSideBar course={course} currentChapterId={chapter.id} />
      <div>
        <div className="ml-[400px] px-8">
          <div className="flex">
            <MainVideoSummary
              chapter={chapter}
              unit={unit}
              chapterIndex={chapterIndex}
              unitIndex={unitIndex}
            />
            <QuizCard chapter={chapter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
