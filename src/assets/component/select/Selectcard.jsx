import React from 'react';

const Selectcard = () => {
  const stats = [
    { label: 'Total Friends', value: 10 },
    { label: 'On Track', value: 3 },
    { label: 'Need Attention', value: 6 },
    { label: 'Interactions This Month', value: 12 },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-1">
              {item.value}
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
  );
};
export default Selectcard;