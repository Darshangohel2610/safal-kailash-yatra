"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Package,
  CheckCircle2,
  Clock,
  MapPin,
  Loader2,
  RefreshCw,
} from "lucide-react";

export default function SanchalakDashboard() {
  const [packagesList, setPackagesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/packages?admin=true");
      const json = await res.json();
      if (json.success) {
        setPackagesList(json.data);
      }
    } catch (err) {
      console.error("Failed to load admin packages:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    setDeletingId(id);
    try {
      const res = await fetch(`/api/packages/${id}`, { method: "DELETE" });
      const json = await res.json();
      if (json.success) {
        setPackagesList((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert(json.error || "Failed to delete package.");
      }
    } catch (err) {
      alert("Error deleting package.");
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = packagesList.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const publishedCount = packagesList.filter((p) => p.status === "PUBLISHED").length;
  const draftCount = packagesList.filter((p) => p.status === "DRAFT").length;

  return (
    <div className="space-y-6">
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-border shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Packages</p>
            <h2 className="text-3xl font-extrabold text-heading mt-1">{packagesList.length}</h2>
          </div>
          <div className="p-3 bg-purple-surface text-primary rounded-xl">
            <Package className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-border shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Published Active</p>
            <h2 className="text-3xl font-extrabold text-emerald-600 mt-1">{publishedCount}</h2>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-border shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Draft / Internal</p>
            <h2 className="text-3xl font-extrabold text-amber-600 mt-1">{draftCount}</h2>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Action & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search packages by title or slug..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={fetchPackages}
            className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-xl transition-colors"
            title="Refresh List"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <Link
            href="/sanchalak/packages/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Package</span>
          </Link>
        </div>
      </div>

      {/* Packages Data Table */}
      <div className="bg-white rounded-2xl border border-border shadow-xs overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-gray-500 space-y-2">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-xs font-semibold">Loading packages from Neon DB...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-500 space-y-3">
            <Package className="w-12 h-12 text-gray-300 mx-auto" />
            <p className="text-sm font-bold text-heading">No packages found.</p>
            <Link
              href="/sanchalak/packages/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Package</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-surface/50 border-b border-border text-[11px] font-extrabold uppercase tracking-wider text-heading">
                  <th className="py-3.5 px-4">Package</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Duration</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs sm:text-sm">
                {filtered.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        {pkg.images?.[0] && (
                          <img
                            src={pkg.images[0]}
                            alt={pkg.title}
                            className="w-10 h-10 rounded-lg object-cover border border-border flex-shrink-0"
                          />
                        )}
                        <div>
                          <p className="font-extrabold text-heading line-clamp-1">{pkg.title}</p>
                          <span className="text-[11px] font-mono text-gray-400">/{pkg.slug}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 bg-purple-surface text-primary rounded-lg text-xs font-bold">
                        {pkg.category}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-extrabold text-primary">
                      ₹{pkg.startingPrice?.toLocaleString("en-IN")}
                    </td>

                    <td className="py-3.5 px-4 text-body font-medium">
                      {pkg.durationDays}D / {pkg.durationNights}N
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                          pkg.status === "PUBLISHED"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {pkg.status || "PUBLISHED"}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/packages/${pkg.slug}`}
                          target="_blank"
                          className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                          title="View Live Page"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>

                        <Link
                          href={`/sanchalak/packages/${pkg.id}/edit`}
                          className="p-2 text-gray-400 hover:text-accent hover:bg-orange-50 rounded-lg transition-colors"
                          title="Edit Package"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>

                        <button
                          onClick={() => handleDelete(pkg.id, pkg.title)}
                          disabled={deletingId === pkg.id}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete Package"
                        >
                          {deletingId === pkg.id ? (
                            <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
