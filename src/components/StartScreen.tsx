interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-full overflow-x-hidden">
      {/* ── 1. Dark Hero Band ── */}
      <section className="bg-[#2c1810] px-6 py-16 md:py-24 [animation:reveal-mask_0.7s_ease_both]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Giant editorial type */}
          <div className="flex-1">
            <p
              className="font-playfair font-black text-[#fffcf5] leading-[0.88] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(5rem, 12vw, 10rem)' }}
            >
              SOC
            </p>
            <div className="h-px bg-bingo my-3 w-full" />
            <p
              className="font-playfair font-black text-[#fffcf5] leading-[0.88] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(5rem, 12vw, 10rem)' }}
            >
              OPS
            </p>
            <p className="mt-5 font-lora text-[#fffcf5]/60 text-xs tracking-[0.4em] [font-variant-caps:all-small-caps] uppercase">
              Social Bingo
            </p>
          </div>

          {/* CSS Coffee Cup */}
          <div className="flex-shrink-0 flex justify-center items-end pb-4">
            <div className="relative">
              {/* Steam wisps */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex gap-4 items-end">
                <div
                  className="w-1 h-10 bg-[#fffcf5]/30 rounded-full"
                  style={{ animation: 'steam 2.6s ease-in infinite' }}
                />
                <div
                  className="w-1 h-14 bg-[#fffcf5]/30 rounded-full"
                  style={{ animation: 'steam 2.6s ease-in 0.85s infinite' }}
                />
                <div
                  className="w-1 h-10 bg-[#fffcf5]/30 rounded-full"
                  style={{ animation: 'steam 2.6s ease-in 1.7s infinite' }}
                />
              </div>
              {/* Cup body + handle */}
              <div className="flex items-center">
                <div className="w-28 h-24 bg-[#fffcf5]/10 border-2 border-[#fffcf5]/40 rounded-t-sm rounded-b-[2rem] relative overflow-hidden">
                  <div className="absolute top-3 left-3 right-3 h-2 rounded-full bg-[#c17f50]/50" />
                </div>
                <div className="w-5 h-12 border-2 border-[#fffcf5]/40 border-l-0 rounded-r-xl -ml-px" />
              </div>
              {/* Saucer */}
              <div className="mt-1 h-2 bg-[#fffcf5]/20 rounded-full w-36 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Pull Quote Strip ── */}
      <section className="bg-surface py-16 px-6 text-center [animation:reveal-mask_0.7s_ease_120ms_both]">
        <blockquote className="max-w-xl mx-auto font-lora italic text-xl leading-relaxed text-[#5c3d2e]">
          "The quickest way to break the ice with 25 strangers."
        </blockquote>
      </section>

      {/* ── 3. Three-Stat Row ── */}
      <section className="bg-surface border-t border-accent/10 py-14 px-6 [animation:reveal-mask_0.7s_ease_240ms_both]">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { stat: '50+', label: 'Events' },
            { stat: '5', label: 'Squares to win' },
            { stat: '0', label: 'Apps needed' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="font-playfair font-black text-5xl md:text-6xl text-bingo">
                {stat}
              </div>
              <div className="font-lora text-[10px] uppercase tracking-widest text-[#5c3d2e] mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. How to Play ── */}
      <section className="bg-[#fdf6e8] py-14 px-6 [animation:reveal-mask_0.7s_ease_360ms_both]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair font-bold text-2xl text-[#4a2c17] mb-10 tracking-tight">
            How to play
          </h2>
          <div className="space-y-8">
            {[
              'Find someone in the room who matches a square.',
              'Tap the square to mark it.',
              'Get five in a row — and win!',
            ].map((step, i) => (
              <div key={i} className="relative min-h-[4rem] pl-20 flex items-center">
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 font-playfair font-black text-7xl text-[#e8d0b0] leading-none select-none"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className="font-lora text-[#5c3d2e] text-base leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA Band ── */}
      <section className="bg-accent py-14 px-6 [animation:reveal-mask_0.7s_ease_480ms_both]">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onStart}
            className="w-full bg-bingo text-[#fffcf5] font-playfair font-black text-xl py-5 rounded-lg tracking-wide active:opacity-90 transition-opacity"
          >
            Start Game
          </button>
        </div>
      </section>
    </div>
  );
}
