"use client";

import React from "react";
import { Plus, Trash2, Image as ImageIcon, Star } from "lucide-react";

/**
 * Visual Form for Managing Package Photo Gallery & Cover Image.
 * Props:
 *  - images: string[] (array of image URLs)
 *  - onChange: (images: string[]) => void
 */
export default function GalleryImagesForm({ images = [], onChange }) {
  const imageList = Array.isArray(images) ? images : [];

  const addImage = () => {
    onChange([...imageList, ""]);
  };

  const updateImage = (index, url) => {
    const next = [...imageList];
    next[index] = url;
    onChange(next);
  };

  const removeImage = (index) => {
    onChange(imageList.filter((_, i) => i !== index));
  };

  const setCoverImage = (index) => {
    if (index === 0) return;
    const selected = imageList[index];
    const remaining = imageList.filter((_, i) => i !== index);
    onChange([selected, ...remaining]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-bold text-heading uppercase tracking-wider flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-accent" />
          Package Photo Gallery ({imageList.length} Photos)
        </label>
        <button
          type="button"
          onClick={addImage}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Photo URL
        </button>
      </div>

      {imageList.length === 0 ? (
        <div className="p-6 text-center border border-dashed border-purple-surface rounded-2xl bg-purple-surface/30">
          <p className="text-sm text-text-muted mb-3">No gallery images added yet.</p>
          <button
            type="button"
            onClick={addImage}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-primary font-bold hover:bg-accent-hover transition-all"
          >
            <Plus className="w-4 h-4" />
            Add First Photo URL
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {imageList.map((url, idx) => {
            const isCover = idx === 0;

            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border transition-all space-y-3 relative ${
                  isCover
                    ? "bg-purple-surface/60 border-accent/40 shadow-xs"
                    : "bg-purple-surface/30 border-purple-surface"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md flex items-center gap-1 ${
                      isCover
                        ? "bg-accent text-primary"
                        : "bg-purple-surface text-text-muted border border-purple-surface"
                    }`}
                  >
                    {isCover && <Star className="w-3 h-3 fill-primary" />}
                    {isCover ? "Main Cover Photo" : `Gallery Photo #${idx + 1}`}
                  </span>

                  <div className="flex items-center gap-1">
                    {!isCover && (
                      <button
                        type="button"
                        onClick={() => setCoverImage(idx)}
                        className="px-2 py-0.5 text-[10px] font-bold text-accent hover:bg-accent/10 rounded-md transition-colors"
                        title="Set as Cover Photo"
                      >
                        Set as Cover
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
                      className="p-1 rounded text-text-muted hover:text-red-400 hover:bg-red-400/10"
                      title="Remove Photo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Input & Live Preview Thumbnail */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-purple-surface/80 border border-purple-surface flex items-center justify-center overflow-hidden shrink-0">
                    {url ? (
                      <img
                        src={url}
                        alt={`Photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-text-muted/40" />
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => updateImage(idx, e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3 py-2 bg-purple-surface/80 border border-purple-surface rounded-xl text-xs text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent font-mono"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
