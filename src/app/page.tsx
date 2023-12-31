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
      <h1>Test</h1>
    </main>
  );
}
