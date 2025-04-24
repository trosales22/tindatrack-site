import React, { useState } from "react";
import { Input, Select } from "components/ui/components";

const StoreCTA: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log("Form submitted!");
  };

  return (
    <div className="bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Column */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-primary leading-tight">
            Register Your Store to Get Started
          </h1>
          <p className="text-lg text-gray-600">
            Start by entering your business owner details, then provide information for your first shop.
          </p>
        </div>

        {/* Right Column - Form */}
        <div className="card bg-white w-full max-w-md shadow-lg rounded-lg">
          <div className="card-body px-8 py-6">
            <div className="mb-6">
              <ul className="steps w-full">
                <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Owner</li>
                <li className={`step ${step === 2 ? "step-primary" : ""}`}>Store</li>
              </ul>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <Input
                    type="text"
                    label="Owner's Full Name"
                    placeholder="e.g., Juan Dela Cruz"
                  />
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="e.g., you@example.com"
                  />
                  <Input
                    type="password"
                    label="Password"
                    placeholder="Create a password"
                  />
                  <Input
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <Input
                    type="text"
                    label="Store Name"
                    placeholder="e.g., Juan's Shop"
                  />

                  <Select
                    label="Store Type"
                    options={[
                      { label: "Select type", value: "", disabled: true },
                      { label: "Retail Store", value: "retail" },
                      { label: "Food Stall / Vendor", value: "food-stall" },
                      { label: "Eatery / Carinderia", value: "eatery" },
                      { label: "Grocery / Mini Mart", value: "grocery" },
                      { label: "Kiosk", value: "kiosk" },
                      { label: "Market Vendor", value: "market-vendor" },
                      { label: "Other", value: "other" }
                    ]}
                  />
                </>
              )}

              <div className="flex justify-between items-center pt-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 2 ? (
                  <button type="button" onClick={nextStep} className="btn btn-primary">
                    Next
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Register Store
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCTA;
