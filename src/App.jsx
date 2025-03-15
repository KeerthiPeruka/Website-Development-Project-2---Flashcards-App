import React, {useState} from 'react';
import './App.css'; 
import Flashcard from './Flashcard';

const App = () => {
  const flashcards = [
    {question: "What fruit is known for having seeds on the outside?", answer: "Strawberry" },
    {question: "Is tomato a fruit or vegetable?", answer: "Fruit" },
    {question: "Which fruit is known for its high vitamin C content?", answer: "Orange" },
    {question: "What is the world's most expensive spice?", answer: "Saffron" },
    {question: "Which country has developed French Fries?", answer: "Beligum" },
    {question: "Which country is the biggest exporter of coffee beans worldwide?", answer: "Brazil" },
    {question: "In which Italian city did Tiramisu originate?", answer: "Treviso" },
    {question: "What type of nut is used to make Marzipan?", answer: "Almond" },
    {question: "What type of cheese is traditionally used in a classic Greek salad?", answer: "Feta" },
    {question: "What type of nut is used to make Nutella?", answer: "Hazelnuts" },

  ];

  //current card index value
  const[currentIndex, setCurrentIndex] = useState(0);

  //flip state of the card
  const[isFlipped, setIsFlipped] = useState(false);

  //user answer
  const[answer, setAnswer] = useState("");

  //user feedback 
  const[feedback, setFeedback] = useState("");

  //move to the next card
  const handleNextCard = () => {
    if(currentIndex < flashcards.length - 1)
    {
      setCurrentIndex(currentIndex + 1);
    }
    else
    {
      setCurrentIndex(0);
    }
    setIsFlipped(false);
    setAnswer("");
    setFeedback("");
  };

  //move to the previous card 
  const handlePreviousCard = () => {
    if(currentIndex > 0)
    {
      setCurrentIndex(currentIndex - 1); 
    }
    else
    {
      setCurrentIndex(flashcards.length - 1);
    }
    setIsFlipped(false);
    setAnswer("");
    setFeedback("");
  };

  //flip the card

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCheckAnswer = () => {
    if (answer.trim().toLowerCase() === flashcards[currentIndex].answer.toLowerCase())
    {
      setFeedback("Correct!");
    }
    else
    {
      setFeedback("Incorrect! Try again.");
    }
  }

  return (
    <div className = "app">
      <h1> Let's Explore Food Trivia Flashcards</h1>
      <p> Test your knowledge about food facts and learn new information through the flashcards below!</p>

      <p> Number of flashcards : {flashcards.length}</p>

      <div className = "flashcard-container">
        <Flashcard
          question = {flashcards[currentIndex].question}
          answer = {flashcards[currentIndex].answer}
          isFlipped = {isFlipped}
          handleClick = {handleCardClick}
        />
      </div>

      <p> Guess the answer here : </p>

      <input
        type = "text"
        placeholder="Type your answer..."
        value ={answer}
        onChange = {(e) => setAnswer(e.target.value)}
      />

      <button onClick = {handleCheckAnswer} className="check-button">Check Answer</button>

      <p>{feedback}</p>

      <div className = "arrows">
        <button onClick={handlePreviousCard} className ="arrow-button">Previous</button>
        <button onClick={handleNextCard} className = "arrow-button">Next</button>
      </div>
    </div>
  );
};

export default App;