import React from "react";

const CampaignCard = ({ title, amount, goal, timeLeft }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>Raised: {amount} ICP / {goal} ICP</p>
      <p>Time Left: {timeLeft} days</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md">
        Fund Now
      </button>
    </div>
  );
};

export default CampaignCard;
