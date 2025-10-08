import React from "react";
import { Link } from "react-router-dom";
import "./QuickCard.css";

const QuickCard = (props) => {
  return (
    <div className="quick-card card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.link ? (
        <Link to={props.link} className="quick-card-btn">
          {props.title}
        </Link>
      ) : (
        <button className="quick-card-btn">{props.title}</button>
      )}
    </div>
  );
};

export default QuickCard;
