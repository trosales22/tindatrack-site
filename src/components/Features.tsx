import React from "react";
import { FeatureCard } from "components/ui/components";
import { BarChart3, Package, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: <BarChart3 />,
    title: "Profit & Loss Summary",
    description: "Understand your earnings daily, weekly, or monthly with clear profit/loss views.",
  },
  {
    icon: <Package />,
    title: "Automatic Inventory Updates",
    description: "Track your stock in real-time. Inventory updates as you log sales—no spreadsheets needed.",
  },
  {
    icon: <DollarSign />,
    title: "Investment Recording",
    description: "Log capital, raw materials, or supplies easily to see how much you’ve invested.",
  },
  {
    icon: <Users />,
    title: "Multiple Business Support",
    description: "Manage more than one tindahan or side hustle from a single account.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose TindaTrack?</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Built for small businesses, crafted for growth. Here's how TindaTrack helps you stay on top.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
