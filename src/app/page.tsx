"use client";
import { useState } from "react";
import { CardSides } from "./lib/utils";
import Cards from "@/cards.json";
export default function Home() {
  const [cardSide, setCardSide] = useState(CardSides.Front);
  const [currentCard, setCurrentCard] = useState<number>(0);

  const toggleCardSide = () => {
    if (cardSide) {
      setCardSide(CardSides.Front);
    } else if (!cardSide) {
      setCardSide(CardSides.Back);
    }
  };

  const nextCard = () => {
    setCurrentCard(Math.floor(Math.random() * Cards.length));
  };
  return (
    <main className="bg-black text-white min-h-screen">
      {cardSide === CardSides.Front ? (
        <dd>{Cards[currentCard].question}</dd>
      ) : (
        <dt>{Cards[currentCard].answer}</dt>
      )}
      <button className="p-2 rounded-md bg-blue-500" onClick={toggleCardSide}>
        +
      </button>
      <button className="p-2 rounded-md bg-blue-500" onClick={nextCard}>
        Next
      </button>
    </main>
  );
}
