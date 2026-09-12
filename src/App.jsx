import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import { Loader2 } from "lucide-react";

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-20 text-primary">
      <Loader2 className="w-10 h-10 animate-spin mb-3" />
      <span className="text-sm font-semibold text-body">Loading Yatra details...</span>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-heading flex flex-col font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:slug" element={<PackageDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
