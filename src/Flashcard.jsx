import React from 'react';
import './Flashcard.css';

const Flashcard = ({question, answer, isFlipped, handleClick}) => {
    return (
        <div
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleClick}
        >
          <div className="flashcard-content">
            <p>{isFlipped ? answer : question}</p>
          </div>
        </div>
      );
    };


export default Flashcard;