import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./CourseCard.module.css";

const CourseCard = (course) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <>
      <div className={style.courseCard} onClick={handleClick}>
        <div className={style.courseCardImage}>
          <img src={course.image} alt="Course_Image" />
        </div>
        <div className={style.courseCardContent}>
          <h2>{course.title}</h2>
          <p>
            <span className={style.label}>Skills you'll gain:</span>{" "}
            {course.skills}
          </p>
          <p>
            ⭐ {course.rating} • {course.reviews} reviews
          </p>
          <p>
            {course.level} • {course.certificate} • {course.duration}
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
