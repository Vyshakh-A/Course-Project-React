import React from "react";
import "./Resources.css";
import QuickCard from "../../components/QuickCard/QuickCard";
const Resources = () => {
  const cardData = [
    {
      id: 1,
      title: "Notes",
      description:
        "Concise study notes covering core concepts for quick review.",
      link: "/resources/notes",
    },
    {
      id: 2,
      title: "Quizzes",
      description:
        "Test your knowledge with practice questions and challenges.",
      link: "/resources/quizzes",
    },
    
  ];

  return (
    <>
      <div className="resources-card">
        {cardData.map((card) => (
          <QuickCard key={card.id} {...card} />
        ))}
      </div>
    </>
  );
};

export default Resources;
