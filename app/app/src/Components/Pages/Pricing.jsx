import React from 'react';

const Pricing = () => {
  const plans = [
    { name: 'Basic', price: '$9/month', features: ['Feature 1', 'Feature 2'] },
    { name: 'Pro', price: '$19/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Enterprise', price: '$49/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pricing Plans</h2>
      <div className="flex justify-center gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-gray-700">{plan.name}</h3>
            <p className="text-2xl font-bold text-teal-500 mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="mt-4 bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
