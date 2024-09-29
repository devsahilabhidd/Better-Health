'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants/constants";
import Header from "@/components/header";
import FeatureCard from "@/components/feature-card";

const FEATURE_CARDS = [
  {
    description: "Food AI",
    id: '1',
    route: ROUTES.FOOD_AI,
  },
  {
    description: "Personal Care AI",
    id: '2',
    route: ROUTES.PERSONAL_CARE_AI,
  },
  {
    description: "Chats",
    id: '3',
    route: ROUTES.CHATS,
  },
  {
    description: "User Settings",
    id: '4',
    route: ROUTES.USER_SETTINGS,
  },
];

type FeatureCard = {
  description: string;
  id: string;
  route: string;
}

const Dashboard = () => {
  const router = useRouter();

  const handleCardSelection = (card: FeatureCard) => {
    router.push(`${card.route}`);
  }

  return (
    <div className="flex p-8 gap-4 h-screen bg-app-dark">
      <div className="flex flex-col items-center w-2/3 gap-36 mx-auto">
        <div className="w-full flex flex-1 flex-col items-center gap-16">
          <Header />

          <div className="w-2/3 grid grid-cols-2 gap-6 items-center justify-center">
            {
              FEATURE_CARDS.map((card) => (
                <FeatureCard
                  key={card.id}
                  onClick={() => handleCardSelection(card)}
                >
                  <p className="text-center text-base">{card.description}</p>
                </FeatureCard>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
