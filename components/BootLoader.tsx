"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "initializing profile.sys ...",
  "mounting /experience ...",
  "mounting /projects ...",
  "loading skills.db ...",
  "connecting to linkedin.com/in/aprmswra ...",
  "rendering portfolio.tsx ...",
  "boot sequence complete.",
];

export default function BootLoader({ onDone }: { onDone: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(finish, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 220);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex]);

  function finish() {
    setVisible(false);
    setTimeout(onDone, 200);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center px-8"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="w-full max-w-xl text-left">
        <div className="flex flex-col gap-1 text-[0.85rem]">
          {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
            <div key={i} className="flex items-center text-fg-dim">
              <span className="mr-2 text-accent">&gt;</span>
              <span>{line}</span>
            </div>
          ))}
          <div className="flex items-center text-[0.85rem]">
            <span className="mr-2 text-accent">&gt;</span>
            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
      <button
        onClick={finish}
        className="tui-button absolute bottom-8 right-8 border border-border px-3 py-1.5 text-xs text-fg-dim"
      >
        [SKIP BOOT LOAD]
      </button>
    </div>
  );
}
