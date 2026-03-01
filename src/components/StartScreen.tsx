interface StartScreenProps {
  onStart: () => void;
  onCardDeck: () => void;
}

export function StartScreen({ onStart, onCardDeck }: StartScreenProps) {
  return (
    <div className="min-h-full bg-bg font-body overflow-y-auto">

      {/* ── 1. HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[45vh] px-6 py-14 overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 65% 35%, color-mix(in srgb, var(--color-bingo) 32%, transparent) 0%, color-mix(in srgb, var(--color-marked-border) 14%, transparent) 45%, var(--color-bg) 78%)',
          animation: 'fade-up 0.6s ease-out both',
        }}
      >
        {/* Coffee mug + steam */}
        <div className="relative mb-5 select-none">
          <div
            className="absolute bottom-full left-1/2 flex gap-[6px]"
            style={{ transform: 'translateX(-50%)', paddingBottom: '4px' }}
          >
            <div
              className="w-[3px] h-7 rounded-full bg-marked-border/60"
              style={{ animation: 'steam 2s ease-out infinite', animationDelay: '0.7s' }}
            />
            <div
              className="w-[3px] h-6 rounded-full bg-marked-border/60"
              style={{ animation: 'steam 2s ease-out infinite', animationDelay: '1.3s' }}
            />
            <div
              className="w-[3px] h-7 rounded-full bg-marked-border/60"
              style={{ animation: 'steam 2s ease-out infinite', animationDelay: '1.9s' }}
            />
          </div>
          <span className="text-6xl leading-none">☕</span>
        </div>
      </section>

        <h1
          className="font-display font-bold text-accent text-center tracking-tight leading-none"
          style={{
            fontSize: '5rem',
            animation: 'fade-up 0.6s ease-out both',
            animationDelay: '100ms',
          }}
        >
          Soc Ops
        </h1>
        <p
          className="font-display italic text-bingo text-xl text-center mt-3 max-w-xs leading-snug"
          style={{ animation: 'fade-up 0.6s ease-out both', animationDelay: '200ms' }}
        >
          The social bingo that gets people talking
        </p>
      </section>

      {/* ── 2. SOCIAL PROOF STRIP ── */}
      <div
        className="flex items-center gap-4 px-6 py-4"
        style={{ animation: 'fade-up 0.6s ease-out both', animationDelay: '200ms' }}
      >
        <div className="flex-1 h-px bg-divider" />
        <p className="italic text-bingo text-sm whitespace-nowrap">
          ☕ Played at 50+ team events and counting
        </p>
        <div className="flex-1 h-px bg-divider" />
      </div>

      {/* ── 3. FEATURE CARDS ── */}
      <div
        className="flex gap-3 overflow-x-auto px-6 pb-4 snap-x"
        style={{ animation: 'fade-up 0.6s ease-out both', animationDelay: '200ms' }}
      >
        {features.map(({ icon, label, desc }) => (
          <div
            key={label}
            className="bg-surface border border-divider rounded-2xl p-4 min-w-[140px] snap-start flex-shrink-0"
          >
            <div className="text-3xl mb-2">{icon}</div>
            <p className="font-semibold text-accent text-sm leading-tight mb-1">{label}</p>
            <p className="text-xs text-accent/65 leading-snug">{desc}</p>
          </div>
        ))}
      </div>

      {/* ── 4. HOW TO PLAY ── */}
      <div
        className="px-6 mt-1"
        style={{ animation: 'fade-up 0.6s ease-out both', animationDelay: '300ms' }}
      >
        <div
          className="bg-surface border border-divider rounded-2xl py-6 px-5"
          style={{ borderLeftWidth: '4px', borderLeftColor: 'var(--color-bingo)' }}
        >
          <h2 className="font-display font-semibold text-accent text-lg mb-4">How to Play</h2>
          <ol className="space-y-3">
            {steps.map(({ step, text }) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bingo text-surface text-xs font-bold flex items-center justify-center">
                  {step}
                </span>
                <span className="text-sm pt-[1px] text-accent/80">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── 5. CTA ── */}
      <div
        className="px-6 pb-10 mt-6"
        style={{ animation: 'fade-up 0.6s ease-out both', animationDelay: '400ms' }}
      >
        <button
          onClick={onStart}
          className="w-full bg-accent text-bg font-display font-bold py-4 px-8 rounded-xl text-lg tracking-wide active:opacity-90 transition-opacity shadow-[0_8px_32px_rgba(200,144,42,0.4)]"
          style={{ animation: 'pulse-warm 2.5s ease-in-out infinite' }}
        >
          Start Game
        </button>

        <button
          onClick={onCardDeck}
          className="w-full bg-surface text-[#4a2c17] font-display font-bold py-3.5 px-8 rounded-xl text-lg border-2 border-[#d4b896] shadow-[0_2px_8px_rgba(74,44,23,0.12)] active:bg-marked active:shadow-none active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
        >
          <span>🃏</span> Card Deck Shuffle
        </button>
        <p className="mt-4 text-[#b8935a] text-xs italic">Grab a cup and let&apos;s mingle ☕</p>
      </div>

    </div>
  );
}
