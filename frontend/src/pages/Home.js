import React from "react";
import Navbar from "../components/Navbar";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";

const Home = () => {
  const campaigns = [
    { title: "Water for Africa", amount: 120, goal: 500, timeLeft: 10 },
    { title: "Tech Education", amount: 300, goal: 1000, timeLeft: 15 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600">Crowdfund on ICP</h1>
        <p className="mt-4 text-lg">Decentralized crowdfunding with zero gas fees!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
        {campaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
