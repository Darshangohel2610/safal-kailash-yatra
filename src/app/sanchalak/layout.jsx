import Link from "next/link";
import { Plus, LayoutDashboard, ExternalLink } from "lucide-react";
import LogoutButton from "./components/LogoutButton";

export const metadata = {
  title: "Sanchalak Admin Portal | Safal Kailash Yatra",
  description: "Package and operational management portal for Safal Kailash Yatra.",
};

export default function SanchalakLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-heading font-sans">
      {/* Top Admin Header Bar */}
      <header className="bg-footer text-white border-b border-white/10 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white">Sanchalak Admin Portal</h1>
              <p className="text-[10px] text-gray-400">Package & Operations Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/sanchalak"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/sanchalak/packages/new"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-accent hover:bg-accent-light text-white shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Package</span>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
