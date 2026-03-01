interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-bg">
      <div className="text-center max-w-sm w-full">
        {/* Coffee icon */}
        <div className="text-6xl mb-4">☕</div>

        <h1 className="font-display text-5xl font-black text-[#2c1810] mb-1 leading-tight tracking-tight">
          Soc Ops
        </h1>
        <p className="text-[#8b5e3c] mb-8 italic text-base">Social Bingo</p>

        {/* How to play — parchment card */}
        <div className="bg-surface rounded-2xl p-6 shadow-[0_4px_24px_rgba(74,44,23,0.15)] border border-[#d4b896] mb-8">
          <h2 className="font-display font-bold text-[#2c1810] mb-4 text-lg">How to play</h2>
          <ul className="text-left text-[#5c3d2e] text-sm space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-bingo mt-0.5 shrink-0">◆</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bingo mt-0.5 shrink-0">◆</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bingo mt-0.5 shrink-0">◆</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-[#fffcf5] font-display font-bold py-4 px-8 rounded-xl text-xl shadow-[0_4px_16px_rgba(74,44,23,0.3)] active:bg-accent-light active:shadow-none active:scale-95 transition-all duration-150"
        >
          Start Game
        </button>
        <p className="mt-4 text-[#b8935a] text-xs italic">Grab a cup and let&apos;s mingle ☕</p>
      </div>
    </div>
  );
}
