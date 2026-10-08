"use client";

import React from "react";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

/**
 * Visual editor for Package Itinerary.
 * Data structure: Array of objects:
 * [
 *   {
 *     day: 1,
 *     title: "Arrival in Kathgodam - Drive to Dharchula",
 *     distance: "280 km",
 *     altitude: "915m",
 *     description: "Brief overview of the day",
 *     activities: ["Activity 1", "Activity 2"]
 *   }
 * ]
 */
export default function ItineraryForm({ value, onChange }) {
  const itinerary = Array.isArray(value) ? value : [];
  const [openIndex, setOpenIndex] = React.useState(0);

  const updateDay = (index, updatedFields) => {
    const next = [...itinerary];
    next[index] = { ...next[index], ...updatedFields };
    onChange(next);
  };

  const addDay = () => {
    const nextDayNum = itinerary.length + 1;
    const newDay = {
      day: nextDayNum,
      title: "",
      distance: "",
      altitude: "",
      description: "",
      activities: [""]
    };
    const next = [...itinerary, newDay];
    onChange(next);
    setOpenIndex(next.length - 1);
  };

  const removeDay = (index) => {
    const next = itinerary
      .filter((_, i) => i !== index)
      .map((day, idx) => ({ ...day, day: idx + 1 }));
    onChange(next);
    if (openIndex >= next.length) {
      setOpenIndex(Math.max(0, next.length - 1));
    }
  };

  const updateActivity = (dayIndex, actIndex, val) => {
    const currentActivities = itinerary[dayIndex]?.activities || [];
    const nextActivities = [...currentActivities];
    nextActivities[actIndex] = val;
    updateDay(dayIndex, { activities: nextActivities });
  };

  const addActivity = (dayIndex) => {
    const currentActivities = itinerary[dayIndex]?.activities || [];
    updateDay(dayIndex, { activities: [...currentActivities, ""] });
  };

  const removeActivity = (dayIndex, actIndex) => {
    const currentActivities = itinerary[dayIndex]?.activities || [];
    const nextActivities = currentActivities.filter((_, i) => i !== actIndex);
    updateDay(dayIndex, { activities: nextActivities });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-text-muted uppercase tracking-wider">
          Itinerary Days ({itinerary.length})
        </label>
        <button
          type="button"
          onClick={addDay}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Day
        </button>
      </div>

      {itinerary.length === 0 ? (
        <div className="p-6 text-center border border-dashed border-purple-surface rounded-2xl bg-purple-surface/30">
          <p className="text-sm text-text-muted mb-3">No itinerary days added yet.</p>
          <button
            type="button"
            onClick={addDay}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-primary font-bold hover:bg-accent-hover transition-all"
          >
            <Plus className="w-4 h-4" />
            Add First Day
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {itinerary.map((item, index) => {
            const isOpen = openIndex === index;
            const dayNum = item.day || index + 1;

            return (
              <div
                key={index}
                className="bg-purple-surface/40 border border-purple-surface rounded-2xl overflow-hidden transition-all"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-purple-surface/60 transition-colors select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 text-accent font-bold text-xs flex items-center justify-center">
                      D{dayNum}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-text-light">
                        {item.title || `Day ${dayNum} (Untitled)`}
                      </h4>
                      {(item.distance || item.altitude) && (
                        <p className="text-xs text-text-muted flex items-center gap-3 mt-0.5">
                          {item.distance && <span>📍 {item.distance}</span>}
                          {item.altitude && <span>🏔️ {item.altitude}</span>}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => removeDay(index)}
                      className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
                      title="Delete Day"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="p-1.5 rounded-lg text-text-muted hover:text-text-light transition-colors"
                    >
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="p-4 pt-0 border-t border-purple-surface/50 space-y-4 mt-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-3">
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                          Day Title
                        </label>
                        <input
                          type="text"
                          value={item.title || ""}
                          onChange={(e) => updateDay(index, { title: e.target.value })}
                          placeholder="e.g. Kathgodam to Dharchula Drive"
                          className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                          Distance / Drive
                        </label>
                        <input
                          type="text"
                          value={item.distance || ""}
                          onChange={(e) => updateDay(index, { distance: e.target.value })}
                          placeholder="e.g. 280 km / 9 hrs"
                          className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                          Altitude
                        </label>
                        <input
                          type="text"
                          value={item.altitude || ""}
                          onChange={(e) => updateDay(index, { altitude: e.target.value })}
                          placeholder="e.g. 915 meters"
                          className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                          Day Number
                        </label>
                        <input
                          type="number"
                          value={item.day || index + 1}
                          onChange={(e) => updateDay(index, { day: parseInt(e.target.value) || index + 1 })}
                          className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
                        Description / Overview
                      </label>
                      <textarea
                        rows={3}
                        value={item.description || ""}
                        onChange={(e) => updateDay(index, { description: e.target.value })}
                        placeholder="Detailed description of activities for this day..."
                        className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent resize-y"
                      />
                    </div>

                    {/* Activities List */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider">
                          Key Activities / Highlights
                        </label>
                        <button
                          type="button"
                          onClick={() => addActivity(index)}
                          className="text-xs text-accent hover:underline flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" /> Add Activity
                        </button>
                      </div>

                      {(item.activities || []).map((act, actIdx) => (
                        <div key={actIdx} className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-text-muted">
                            {actIdx + 1}.
                          </span>
                          <input
                            type="text"
                            value={act}
                            onChange={(e) => updateActivity(index, actIdx, e.target.value)}
                            placeholder="e.g. Scenic drive along Kali River"
                            className="flex-1 px-3 py-1.5 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
                          />
                          <button
                            type="button"
                            onClick={() => removeActivity(index, actIdx)}
                            className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
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
