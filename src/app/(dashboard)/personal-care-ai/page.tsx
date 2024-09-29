'use client';

import React, { useState } from "react";
import { FaRunning } from "react-icons/fa";
import InputRender from "./input-render";
import { ModeToggle } from "@/components/toogle";
import FeatureCard from "@/components/feature-card";

const PERSONAL_AI_FEATURE_CARDS = [
  {
    id: '1',
    description: "I want to know more about the ingredients in my personal care product.",
  },
  {
    id: '2',
    description: "I want to know a random fact about personal care products.",
  },
];

type FeatureCard = {
  id: string;
  description: string;
}

const PersonalCarePage = () => {
  const [selectedCard, setSelectedCard] = useState<FeatureCard>(PERSONAL_AI_FEATURE_CARDS[0]);

  const handleCardSelection = (card: FeatureCard) => {
    setSelectedCard(card);
  }

  return (
    <div className="flex p-8 gap-4 h-screen bg-app-dark">
      <div className="flex flex-col items-center w-[80%] gap-36 mx-auto">
        <div className="flex flex-1 flex-col items-center gap-16">
          <h1 className="flex gap-3 text-foreground cursor-pointer text-5xl font-secondary">
            Better <span className="text-app-primary flex gap-2 items-center">Health <FaRunning size={48} /></span>
            <ModeToggle /></h1>

          <div className="flex flex-wrap gap-6 items-center justify-center">
            {
              PERSONAL_AI_FEATURE_CARDS.map((card) => (
                <FeatureCard
                  active={selectedCard?.id === card.id}
                  key={card.id}
                  onClick={() => handleCardSelection(card)}
                  width="max-w-96"
                >
                  <p className="text-center text-base">{card.description}</p>
                </FeatureCard>
              ))
            }
          </div>
        </div>
        <div className="w-full flex justify-end items-end gap-4 min-h-64 p-8">
          {
            selectedCard && (
              <InputRender id={selectedCard.id} />
            )
          }
        </div>
      </div>
    </div>
  )
};

export default PersonalCarePage;
