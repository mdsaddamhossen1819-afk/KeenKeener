import React from 'react';

const Selectcard = () => {
     const cards = [
    {
      id: 1,
      number: 10,
      title: "Total Friends",
    },
    {
      id: 2,
      number: 3,
      title: "On Track",
    },
    {
      id: 3,
      number: 6,
      title: "Need Attention",
    },
    {
      id: 4,
      number: 12,
      title: "Interactions This Month",
    },
  ];

  return (
    <div className="max-w-10/12 mx-auto my-15">

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md p-8 text-center"
          >
            <h1 className="text-4xl font-bold text-green-900">
              {card.number}
            </h1>

            <p className="text-gray-500 mt-3 text-sm">
              {card.title}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Selectcard;