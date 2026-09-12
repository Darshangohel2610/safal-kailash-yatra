import React from "react";

export default function AboutTrek({ about }) {
  if (!about) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-3 w-full min-w-0">
      <h2 className="text-xl font-extrabold text-heading">About Trek</h2>
      <p className="text-sm sm:text-base text-body font-light leading-relaxed whitespace-pre-line break-words">
        {about}
      </p>
    </div>
  );
}
