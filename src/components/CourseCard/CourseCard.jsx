import React from "react";
import "./CourseCard.css";
const CourseCard = (course) => {
  return (
    <>
      <div className="course-card card">
        <div>
          <img src={course.image} alt="Course_Image" />
        </div>
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button className="course-card-btn" onClick={course.link}>Enroll Now</button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
