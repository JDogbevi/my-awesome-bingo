import { useState, useCallback } from 'react';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
  onExit: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function CardDeckScreen({ onExit }: CardDeckScreenProps) {
  const [deck, setDeck] = useState<string[]>(() => shuffle(questions));
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = questions.length;
  const currentQuestion = deck[cardIndex] ?? null;

  const handleTap = useCallback(() => {
    if (isAnimating || isDone) return;

    setIsAnimating(true);

    if (!isFlipped) {
      // Flip to reveal
      setIsFlipped(true);
      setTimeout(() => setIsAnimating(false), 450);
    } else {
      // Flip back, then advance
      setIsFlipped(false);
      setTimeout(() => {
        const nextIndex = cardIndex + 1;
        if (nextIndex >= deck.length) {
          setIsDone(true);
        } else {
          setCardIndex(nextIndex);
        }
        setIsAnimating(false);
      }, 450);
    }
  }, [isAnimating, isDone, isFlipped, cardIndex, deck]);

  const handleRestart = useCallback(() => {
    const reshuffled = shuffle(questions);
    setDeck(reshuffled);
    setCardIndex(0);
    setIsFlipped(false);
    setIsDone(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-full p-6 bg-bg">
      {/* Header */}
      <div className="w-full max-w-sm flex items-center justify-between pt-2">
        <button
          onClick={onExit}
          className="text-[#8b5e3c] text-sm font-medium flex items-center gap-1 active:opacity-60 transition-opacity"
        >
          ← Back
        </button>
        <div className="text-center">
          <h1 className="font-display font-bold text-[#2c1810] text-lg leading-none">Card Shuffle</h1>
          <p className="text-[#b8935a] text-xs italic mt-0.5">Draw a card, find a match</p>
        </div>
        <div className="text-[#8b5e3c] text-sm font-medium tabular-nums w-12 text-right">
          {!isDone ? `${cardIndex + 1}/${total}` : '✓'}
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm gap-6">

        {/* Progress dots */}
        <div className="flex gap-1 flex-wrap justify-center max-w-[240px]">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < cardIndex ? 'bg-bingo' :
                i === cardIndex && !isDone ? 'bg-accent scale-125' :
                'bg-[#d4b896]'
              }`}
            />
          ))}
        </div>

        {/* Card with 3D flip */}
        <div
          className="w-72 h-96 cursor-pointer select-none"
          style={{ perspective: '1000px' }}
          onClick={handleTap}
        >
          <div
            className="relative w-full h-full transition-transform duration-[420ms]"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Card Back */}
            <div
              className="absolute inset-0 rounded-3xl bg-accent shadow-[0_8px_40px_rgba(74,44,23,0.35)] flex flex-col items-center justify-center gap-4 overflow-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Decorative pattern */}
              <div className="absolute inset-3 rounded-2xl border-2 border-[#c8902a]/40 pointer-events-none" />
              <div className="absolute inset-6 rounded-xl border border-[#c8902a]/20 pointer-events-none" />
              {/* Diamond grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #c8902a 0px, #c8902a 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, #c8902a 0px, #c8902a 1px, transparent 1px, transparent 20px)',
                }}
              />
              <div className="relative z-10 text-5xl">☕</div>
              <p className="relative z-10 text-[#c8902a] font-display font-bold text-xl tracking-wide">Tap to draw</p>
              <p className="relative z-10 text-[#c8902a]/60 text-sm italic">find someone who…</p>
            </div>

            {/* Card Front */}
            <div
              className="absolute inset-0 rounded-3xl bg-surface shadow-[0_8px_40px_rgba(74,44,23,0.25)] flex flex-col items-center justify-center gap-6 p-8 overflow-hidden border border-[#d4b896]"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="absolute inset-3 rounded-2xl border-2 border-[#d4b896]/60 pointer-events-none" />
              <p className="text-[#8b5e3c] text-xs font-medium uppercase tracking-widest relative z-10">Find someone who…</p>
              <p className="relative z-10 font-display font-bold text-[#2c1810] text-2xl text-center leading-snug">
                {currentQuestion}
              </p>
              <div className="relative z-10 flex items-center gap-2 text-[#b8935a] text-sm italic">
                <span>Tap to continue</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Done state overlay message */}
        {isDone && (
          <div className="text-center animate-[warm-pop_0.4s_ease-out]">
            <p className="text-[#2c1810] font-display font-bold text-xl mb-1">All cards played! 🎉</p>
            <p className="text-[#8b5e3c] text-sm italic">Great mingling session</p>
          </div>
        )}
      </div>

      {/* Bottom actions */}
      <div className="w-full max-w-sm flex flex-col gap-3 pb-2">
        {isDone ? (
          <button
            onClick={handleRestart}
            className="w-full bg-accent text-[#fffcf5] font-display font-bold py-4 px-8 rounded-xl text-lg shadow-[0_4px_16px_rgba(74,44,23,0.3)] active:bg-accent-light active:shadow-none active:scale-95 transition-all duration-150"
          >
            Shuffle Again ↺
          </button>
        ) : (
          <p className="text-center text-[#b8935a] text-xs italic">
            {isFlipped ? 'Tap card to draw next' : 'Tap the card to reveal a question'}
          </p>
        )}
      </div>
    </div>
  );
}
