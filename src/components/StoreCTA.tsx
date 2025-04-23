import React from "react";

const StoreCTA: React.FC = () => {
  return (
    <div className="bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Left Column - Text Content */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-primary leading-tight">
            Register Your Store to Get Started
          </h1>
          <p className="text-lg text-gray-600">
            Provide your store details and owner credentials to create an account and start managing your store on our portal.
            Securely access your store dashboard and all available features.
          </p>
        </div>

        {/* Right Column - Form */}
        <div className="card bg-white w-full max-w-md shadow-lg rounded-lg">
          <div className="card-body px-8 py-6">
            <fieldset className="space-y-4">
              <div>
                <label className="label text-sm font-medium">Store Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your store name"
                />
              </div>

              <div>
                <label className="label text-sm font-medium">Owner's Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter owner's name"
                />
              </div>

              <div>
                <label className="label text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  className="input input-bordered w-full p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="label text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label className="label text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full p-3 text-base rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="mt-6">
                <button className="btn btn-primary w-full py-3 rounded-md text-lg font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
                  Register Store
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCTA;
