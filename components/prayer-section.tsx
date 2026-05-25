"use client";

import { useState, useEffect, useRef } from "react";
import { Flame, ScrollText } from "lucide-react";

interface Prayer {
  id: number;
  name: string;
  timestamp: string;
  isNew?: boolean;
}

const COOLDOWN_DURATION = 30;

const initialPrayers: Prayer[] = [
  { id: 8, name: "ScarletFan42", timestamp: "2 hours ago" },
  { id: 7, name: "MistyLake", timestamp: "5 hours ago" },
  { id: 6, name: "GensokyoExplorer", timestamp: "1 day ago" },
  { id: 5, name: "LoreKeeper", timestamp: "2 days ago" },
  { id: 4, name: "PatchouliReader", timestamp: "3 days ago" },
  { id: 3, name: "SakuyaIzayoi", timestamp: "4 days ago" },
  { id: 2, name: "FlandreSister", timestamp: "1 week ago" },
  { id: 1, name: "MeilingGuard", timestamp: "2 weeks ago" },
];

export function PrayerSection() {
  const [prayers, setPrayers] = useState<Prayer[]>(initialPrayers);
  const [inputName, setInputName] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [justPrayed, setJustPrayed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cooldown ticker
  useEffect(() => {
    if (cooldown <= 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cooldown > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // Clear "isNew" flag after animation completes
  useEffect(() => {
    if (!prayers[0]?.isNew) return;
    const t = setTimeout(() => {
      setPrayers((prev) =>
        prev.map((p, i) => (i === 0 ? { ...p, isNew: false } : p)),
      );
    }, 600);
    return () => clearTimeout(t);
  }, [prayers]);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const trimmed = inputName.trim();
    if (!trimmed) {
      setErrorMsg("Please enter your name before offering a prayer.");
      return;
    }
    setErrorMsg("");

    const newPrayer: Prayer = {
      id: Date.now(),
      name: trimmed,
      timestamp: "Just now",
      isNew: true,
    };

    setPrayers((prev) => [newPrayer, ...prev]);
    setInputName("");
    setJustPrayed(true);
    setCooldown(COOLDOWN_DURATION);

    setTimeout(() => setJustPrayed(false), 2500);
  };

  const cooldownProgress = (cooldown / COOLDOWN_DURATION) * 100;
  const cooldownDisplay = `00:${String(cooldown).padStart(2, "0")}`;
  const isOnCooldown = cooldown > 0;

  return (
    <div className="space-y-8">
      {/* ── Prayer Form ─────────────────────────────────────────────── */}
      <div
        className={`relative p-6 bg-card border rounded-lg transition-all duration-500 ${
          justPrayed
            ? "border-primary shadow-[0_0_24px_2px_var(--color-primary)/30]"
            : "border-border"
        }`}
      >
        {/* Glow ring on success */}
        {justPrayed && (
          <div className="absolute inset-0 rounded-lg pointer-events-none animate-pulse bg-primary/5" />
        )}

        <h2 className="text-xl font-serif text-foreground mb-1 tracking-wider">
          Offer Your Prayer
        </h2>
        <p className="text-sm text-muted-foreground font-(--font-cormorant) mb-5">
          Speak your name before the Scarlet Devil, and it shall be remembered
          for eternity.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              id="prayer-name-input"
              type="text"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
                setErrorMsg("");
              }}
              disabled={isOnCooldown}
              placeholder="Enter your name…"
              maxLength={48}
              autoComplete="off"
              className={`flex-1 px-4 py-2.5 bg-input border rounded-md text-foreground text-sm font-(--font-cormorant) placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/60 ${
                isOnCooldown
                  ? "border-border opacity-50 cursor-not-allowed"
                  : "border-border hover:border-primary/40"
              }`}
            />
            <button
              type="submit"
              disabled={isOnCooldown}
              id="pray-submit-button"
              className={`px-5 py-2.5 rounded-md text-sm font-serif tracking-wider transition-all duration-200 whitespace-nowrap ${
                isOnCooldown
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-accent active:scale-95"
              }`}
            >
              {isOnCooldown ? `⏳ ${cooldownDisplay}` : "Pray"}
            </button>
          </div>

          {/* Error */}
          {errorMsg && (
            <p className="text-xs text-destructive-foreground font-(--font-cormorant)">
              {errorMsg}
            </p>
          )}

          {/* Success message */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              justPrayed ? "max-h-8 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-xs text-primary font-(--font-cormorant) flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 inline" />
              Your prayer has been received by Lady Remilia.
            </p>
          </div>

          {/* Cooldown progress bar */}
          <div
            className={`overflow-visible transition-all duration-300 ${
              isOnCooldown ? "max-h-4 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${cooldownProgress}%` }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground/60 font-(--font-cormorant) mt-1">
              You may pray again in {cooldownDisplay}
            </p>
          </div>
        </form>
      </div>

      {/* ── Prayer Counter ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="p-4 bg-card border border-border rounded-lg flex items-center gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-serif text-foreground">
              {prayers.length.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">Prayers Offered</p>
          </div>
        </div>
        <div className="p-4 bg-card border border-border rounded-lg flex items-center gap-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
            <ScrollText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-serif text-foreground">∞</p>
            <p className="text-xs text-muted-foreground">Prayers Answered</p>
          </div>
        </div>
      </div>

      {/* ── Prayer List ──────────────────────────────────────────────── */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="text-lg font-serif text-foreground tracking-wider">
            Registry of the Faithful
          </h2>
          <p className="text-xs text-muted-foreground font-(--font-cormorant) mt-0.5">
            All who have knelt before the Scarlet Devil
          </p>
        </div>

        <div className="max-h-112 overflow-y-auto">
          {prayers.map((prayer, index) => (
            <div
              key={prayer.id}
              className={`flex items-center gap-3 px-6 py-3.5 transition-all duration-500 ${
                index < prayers.length - 1 ? "border-b border-border" : ""
              } ${
                prayer.isNew
                  ? "opacity-0 translate-y-[-8px]"
                  : "opacity-100 translate-y-0"
              }`}
              style={
                prayer.isNew
                  ? { animation: "prayer-fade-in 0.5s ease forwards" }
                  : {}
              }
            >
              <Flame
                className={`w-4 h-4 shrink-0 transition-colors ${
                  prayer.isNew
                    ? "text-primary animate-pulse"
                    : "text-primary/50"
                }`}
              />
              <span className="flex-1 text-sm font-(--font-cormorant) text-foreground">
                {prayer.name}
              </span>
              <span className="text-xs text-muted-foreground/60 font-(--font-cormorant) shrink-0">
                {prayer.timestamp}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe definition injected via a style tag */}
      <style>{`
        @keyframes prayer-fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
