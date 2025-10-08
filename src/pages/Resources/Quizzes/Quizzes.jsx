import React, { useState } from "react";
import "./Quizzes.css";
const QuizPage = () => {
  const quizData = {
    react: [
      {
        q: "What is React primarily used for?",
        options: [
          "Database Management",
          "Building User Interfaces",
          "Operating Systems",
          "Networking",
        ],
        correct: "Building User Interfaces",
      },
      {
        q: "Which hook is used for state management in React?",
        options: ["useFetch", "useEffect", "useState", "useContext"],
        correct: "useState",
      },
    ],
    javascript: [
      {
        q: "Which keyword is used to declare a variable in ES6?",
        options: ["var", "let", "const", "define"],
        correct: "let",
      },
      {
        q: "What is the output of `typeof null`?",
        options: ["object", "null", "undefined", "number"],
        correct: "object",
      },
    ],
    python: [
      {
        q: "Which data type is immutable in Python?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        correct: "Tuple",
      },
      {
        q: "What does PEP stand for in Python?",
        options: [
          "Python Enhancement Proposal",
          "Programming Easy Process",
          "Python Execution Plan",
          "Project Extension Protocol",
        ],
        correct: "Python Enhancement Proposal",
      },
    ],
  };

  const [topic, setTopic] = useState("");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let count = 0;
    quizData[topic].forEach((item, index) => {
      if (answers[index] === item.correct) {
        count++;
      }
    });
    setScore((count / quizData[topic].length) * 100);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };

  return (
    <div className="quizzes-page">
      {!topic ? (
        <div className="quiz-topic-select">
          <h2 className="quiz-title">Select a Topic</h2>
          <div className="quiz-topic-list">
            {Object.keys(quizData).map((t) => (
              <button
                key={t}
                className="quiz-topic-btn"
                onClick={() => setTopic(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      ) : !submitted ? (
        <form
          className="quiz-list"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h2 className="quiz-title">
            Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </h2>
          {quizData[topic].map((item, index) => (
            <div key={index} className="quiz-card">
              <p className="quiz-question">
                {index + 1}. {item.q}
              </p>
              <div className="quiz-options">
                {item.options.map((option, i) => (
                  <label key={i} className="quiz-option-label">
                    <input
                      type="radio"
                      name={`q${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      className="quiz-option-radio"
                    />
                    <span className="quiz-option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className="quiz-submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="quiz-result">
          <h2>Your Score: {score}%</h2>
          {score >= 70 ? (
            <p>✅ Passed!</p>
          ) : (
            <>
              <p>❌ Failed, you need at least 70% to pass.</p>
              <button className="quiz-submit" onClick={handleRetry}>
                Retry
              </button>
            </>
          )}
          <div style={{ marginTop: "1rem" }}>
            <button
              className="quiz-topic-btn"
              onClick={() => {
                setTopic("");
                setAnswers({});
                setSubmitted(false);
              }}
            >
              Choose Another Topic
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
