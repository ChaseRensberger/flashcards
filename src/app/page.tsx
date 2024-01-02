"use client";
import { useState } from "react";
import { CardSides } from "./lib/utils";
export default function Home() {
  const [cardSide, setCardSide] = useState(CardSides.Front);

  const toggleCardSide = () => {
    if (cardSide) {
      setCardSide(CardSides.Front);
    } else if (!cardSide) {
      setCardSide(CardSides.Back);
    }
  };
  return (
    <main className="bg-black text-white min-h-screen">
      {cardSide === CardSides.Front ? <dd>Question</dd> : <dt>Answer</dt>}
      <button className="p-2 rounded-md bg-blue-500" onClick={toggleCardSide}>
        +
      </button>
      <button className="p-2 rounded-md bg-blue-500">Next</button>
    </main>
  );
}
