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
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-between p-64">
      {cardSide === CardSides.Front ? (
        <dd className="text-xl">{Cards[currentCard].question}</dd>
      ) : (
        <dt className="text-xl">{Cards[currentCard].answer}</dt>
      )}
      {cardSide === CardSides.Back ? (
        <p className="text-yellow-200 text-sm">
          Season {Cards[currentCard].season}, Match Day{" "}
          {Cards[currentCard].match}
        </p>
      ) : (
        <></>
      )}
      <div className="flex flex-row justify-between w-48">
        <button className="p-2 rounded-md bg-blue-500" onClick={toggleCardSide}>
          Turn
        </button>
        <button className="p-2 rounded-md bg-blue-500" onClick={nextCard}>
          Next
        </button>
      </div>
    </main>
  );
}
