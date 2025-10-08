import React from "react";
import "./CourseList.css";
import  courses  from "../../data/Courses";
import CourseCard from "../CourseCard/CourseCard";
const CourseList = () => {
 
  return (
    <>
      <div className="course-list">
        {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
