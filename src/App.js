import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcards(
        res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer,
          ];
          return {
            id: `${index} - ${Date.now()}`,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
      //console.log(res.data.results);
    });
  }, []);

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

function decodeString(str) {
  const textArea = document.createElement("textArea");
  textArea.innerHTML = str;
  return textArea.value;
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
