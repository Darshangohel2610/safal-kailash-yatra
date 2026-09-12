import React from "react";

export default function PlacesToVisit({ places = [] }) {
  if (!places.length) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-4">
      <h2 className="text-xl font-extrabold text-heading">Places to Visit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.map((place, idx) => (
          <div
            key={idx}
            className="group rounded-2xl overflow-hidden border border-border bg-background hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-40 w-full overflow-hidden bg-gray-200 relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-heading mb-1 group-hover:text-primary transition-colors">{place.name}</h3>
                <p className="text-xs text-body font-light line-clamp-2 leading-relaxed">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
