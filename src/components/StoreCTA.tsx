import React from "react";
import RegisterForm from "./RegisterForm";

const StoreCTA: React.FC = () => {
  return (
    <div className="bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="text-center lg:text-left flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-primary leading-tight">
            Register Your Store to Get Started
          </h1>
          <p className="text-lg text-gray-600">
            Start by entering your business owner details, then provide information for your first shop.
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};

export default StoreCTA;
