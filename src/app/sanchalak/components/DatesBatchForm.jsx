"use client";

import React, { useState } from "react";
import { Plus, Trash2, Calendar, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

const MONTH_NAMES = [
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
];

const YEAR_OPTIONS = [2026, 2027, 2028];

// Map month name to 2-digit month number for HTML date input bounds
const MONTH_NUMBER_MAP = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

/**
 * Visual Form for Fixed Departure Dates & Batches with Month & Year Dropdowns.
 * Data shape: Object keyed by Month/Year label:
 * {
 *   "May 2026": [
 *     { "date": "2026-05-15", "status": "available" },
 *     { "date": "2026-05-25", "status": "limited" }
 *   ],
 *   "June 2026": [
 *     { "date": "2026-06-05", "status": "soldout" }
 *   ]
 * }
 */
export default function DatesBatchForm({ value, onChange }) {
  // Normalize value to object format { MonthLabel: [{ date, status }] }
  const getNormalizedDates = () => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value;
    }
    return {
      "May 2026": [
        { date: "2026-05-15", status: "available" },
        { date: "2026-05-25", status: "limited" },
      ],
      "June 2026": [
        { date: "2026-06-05", status: "available" },
      ],
    };
  };

  const datesData = getNormalizedDates();
  const monthsList = Object.keys(datesData);

  const [selectedMonth, setSelectedMonth] = useState("May");
  const [selectedYear, setSelectedYear] = useState(2026);
  const [showAddMonthModal, setShowAddMonthModal] = useState(false);

  const updateMonthDates = (monthKey, newDates) => {
    onChange({
      ...datesData,
      [monthKey]: newDates,
    });
  };

  const addMonthSection = () => {
    const monthKey = `${selectedMonth} ${selectedYear}`;
    if (!datesData[monthKey]) {
      // Default first date prefilled to mid-month
      const monthNum = MONTH_NUMBER_MAP[selectedMonth] || "05";
      const defaultDate = `${selectedYear}-${monthNum}-15`;

      onChange({
        ...datesData,
        [monthKey]: [{ date: defaultDate, status: "available" }],
      });
    }
    setShowAddMonthModal(false);
  };

  const removeMonthSection = (monthKey) => {
    const next = { ...datesData };
    delete next[monthKey];
    onChange(next);
  };

  const addDateToMonth = (monthKey) => {
    const currentList = datesData[monthKey] || [];
    // Infer year and month number from key if possible
    const parts = monthKey.split(" ");
    const mName = parts[0];
    const yr = parts[1] || "2026";
    const mNum = MONTH_NUMBER_MAP[mName] || "05";
    const defaultDate = `${yr}-${mNum}-20`;

    updateMonthDates(monthKey, [...currentList, { date: defaultDate, status: "available" }]);
  };

  const updateDateItem = (monthKey, index, fields) => {
    const currentList = [...(datesData[monthKey] || [])];
    currentList[index] = { ...currentList[index], ...fields };
    updateMonthDates(monthKey, currentList);
  };

  const removeDateFromMonth = (monthKey, index) => {
    const currentList = (datesData[monthKey] || []).filter((_, i) => i !== index);
    updateMonthDates(monthKey, currentList);
  };

  // Helper to calculate min and max bounds for HTML date picker
  const getDateBounds = (monthKey) => {
    const parts = monthKey.split(" ");
    const mName = parts[0];
    const yr = parts[1] || "2026";
    const mNum = MONTH_NUMBER_MAP[mName];
    if (!mNum) return {};
    const min = `${yr}-${mNum}-01`;
    // Approximate month end
    const max = `${yr}-${mNum}-31`;
    return { min, max };
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Add Month Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="block text-sm font-bold text-heading uppercase tracking-wider flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          Yatra Departure Batches & Dates ({monthsList.length} Months)
        </label>

        {!showAddMonthModal ? (
          <button
            type="button"
            onClick={() => setShowAddMonthModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Departure Month
          </button>
        ) : (
          <div className="flex flex-wrap items-center gap-2 bg-purple-surface/60 p-2 border border-purple-surface rounded-2xl">
            {/* Month Dropdown */}
            <div>
              <label className="block text-[10px] font-bold text-text-muted uppercase mb-0.5">Month</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-2.5 py-1.5 bg-purple-surface/80 border border-purple-surface rounded-xl text-xs font-bold text-text-light focus:outline-none focus:border-accent"
              >
                {MONTH_NAMES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Dropdown */}
            <div>
              <label className="block text-[10px] font-bold text-text-muted uppercase mb-0.5">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="px-2.5 py-1.5 bg-purple-surface/80 border border-purple-surface rounded-xl text-xs font-bold text-text-light focus:outline-none focus:border-accent"
              >
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1 self-end pb-0.5">
              <button
                type="button"
                onClick={addMonthSection}
                className="px-3 py-1.5 bg-accent text-primary text-xs font-bold rounded-xl hover:bg-accent-hover transition-colors"
              >
                Add Month
              </button>
              <button
                type="button"
                onClick={() => setShowAddMonthModal(false)}
                className="px-2 py-1.5 text-xs text-text-muted hover:text-text-light"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {monthsList.length === 0 ? (
        <div className="p-6 text-center border border-dashed border-purple-surface rounded-2xl bg-purple-surface/30">
          <p className="text-sm text-text-muted mb-3">No departure months configured yet.</p>
          <button
            type="button"
            onClick={() => setShowAddMonthModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-primary font-bold hover:bg-accent-hover transition-all"
          >
            <Plus className="w-4 h-4" />
            Add First Departure Month
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {monthsList.map((monthKey) => {
            const dateItems = Array.isArray(datesData[monthKey]) ? datesData[monthKey] : [];
            const bounds = getDateBounds(monthKey);

            return (
              <div
                key={monthKey}
                className="bg-purple-surface/30 border border-purple-surface rounded-2xl p-4 sm:p-5 space-y-4"
              >
                {/* Month Section Bar */}
                <div className="flex items-center justify-between border-b border-purple-surface/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    <h4 className="text-base font-extrabold text-heading">
                      {monthKey} Batches ({dateItems.length})
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => addDateToMonth(monthKey)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
                    >
                      <Plus className="w-3 h-3" />
                      Add Date
                    </button>
                    <button
                      type="button"
                      onClick={() => removeMonthSection(monthKey)}
                      className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
                      title={`Remove ${monthKey}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Batch Date Cards */}
                {dateItems.length === 0 ? (
                  <p className="text-xs text-text-muted italic py-2">
                    No departure dates added for {monthKey}. Click "Add Date" above.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {dateItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-purple-surface/60 border border-purple-surface rounded-xl p-3.5 space-y-3 relative"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                            Batch #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeDateFromMonth(monthKey, idx)}
                            className="p-1 rounded text-text-muted hover:text-red-400"
                            title="Remove Date"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-text-muted uppercase mb-1">
                            Departure Date
                          </label>
                          <input
                            type="date"
                            min={bounds.min}
                            max={bounds.max}
                            value={item.date || ""}
                            onChange={(e) => updateDateItem(monthKey, idx, { date: e.target.value })}
                            className="w-full px-3 py-2 bg-purple-surface/80 border border-purple-surface rounded-xl text-xs font-semibold text-text-light focus:outline-none focus:border-accent"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-text-muted uppercase mb-1">
                            Status Badge
                          </label>
                          <select
                            value={item.status || "available"}
                            onChange={(e) => updateDateItem(monthKey, idx, { status: e.target.value })}
                            className="w-full px-2.5 py-2 bg-purple-surface/80 border border-purple-surface rounded-xl text-xs font-semibold text-text-light focus:outline-none focus:border-accent"
                          >
                            <option value="available">🟢 Available</option>
                            <option value="limited">🟡 Limited Seats</option>
                            <option value="soldout">🔴 Sold Out</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
