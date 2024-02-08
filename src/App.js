import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS); 
  return (
    <FlashcardList flashcards= {flashcards}/>
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is wawa?",
    answer: "cat",
    options: ["dog", "elephant", "cat", "otter"],
  },
  {
    id: 2,
    question: "what is 2*2+2 ?",
    answer: "6",
    options: ["8", "6", "4", "2"],
  },
  {
    id: 3,
    question: "what is  freetato?",
    answer: "dish",
    options: ["phonk", "music", "kitchen", "Claude Monet"],
  },
];

export default App;
