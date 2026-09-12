import React from "react";
import { Link } from "react-router-dom";
import { packageData } from "../data/packageData";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-background">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-heading mb-2">Package or Page Not Found</h2>
      <p className="text-body max-w-md mb-8">
        The requested Yatra package or route could not be found. Explore our complete list of Adi Kailash packages.
      </p>
      <Link
        to="/packages"
        className="px-6 py-3 bg-accent text-white font-bold rounded-xl shadow-md hover:bg-accent-light transition-all"
      >
        View All Yatra Packages
      </Link>
    </div>
  );
}
