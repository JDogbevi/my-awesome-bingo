interface StartScreenProps {
  onStart: () => void;
}

interface MiniSquare {
  text: string;
  marked: boolean;
  free?: boolean;
}

const MINI_BOARD: MiniSquare[] = [
  { text: 'bikes to work', marked: false },
  { text: 'has a pet', marked: true },
  { text: 'speaks 2+ langs', marked: false },
  { text: 'plays music', marked: true },
  { text: 'loves cooking', marked: false },
  { text: 'has a garden', marked: true },
  { text: 'traveled to Asia', marked: false },
  { text: 'left-handed', marked: false },
  { text: 'does yoga', marked: true },
  { text: 'hidden talent', marked: false },
  { text: 'loves spicy food', marked: false },
  { text: 'been on TV', marked: true },
  { text: '⭐ FREE', marked: true, free: true },
  { text: 'collects something', marked: false },
  { text: 'read a book', marked: true },
  { text: 'sign language', marked: false },
  { text: 'ran a marathon', marked: false },
  { text: 'met a celebrity', marked: true },
  { text: 'been skydiving', marked: false },
  { text: 'has a twin', marked: false },
  { text: 'can juggle', marked: true },
  { text: 'video games', marked: false },
  { text: 'born abroad', marked: true },
  { text: 'lived abroad', marked: false },
  { text: 'prefers tea', marked: false },
];

const STEPS = [
  { icon: '🎯', text: 'Find people who match the squares' },
  { icon: '👆', text: 'Tap a square when you spot a match' },
  { icon: '🏆', text: 'Get 5 in a row to win!' },
];

const CARD_ROTATIONS = [1, -1, 0];

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div
      className="flex flex-col items-center min-h-full overflow-auto font-body"
      style={{
        background: 'linear-gradient(160deg, #fdf6ec 0%, #f5e8d0 60%, #ede0c8 100%)',
      }}
    >
      {/* Section 1: Hero with mini bingo board preview */}
      <section
        className="w-full max-w-sm px-4 pt-10 pb-4 text-center"
        style={{
          animation: 'deal-in 0.5s ease-out both',
          animationDelay: '0ms',
        }}
      >
        <h1
          className="text-5xl font-bold mb-2 font-display text-warm-dark"
          style={{
            textShadow: '2px 2px 0 rgba(74,44,23,0.15)',
          }}
        >
          Ready to Mingle?
        </h1>
        <p className="text-base mb-6 text-warm-mid">
          Find your people, one square at a time.
        </p>

        {/* Decorative 5×5 bingo board preview */}
        <div className="relative mx-auto inline-block">
          <div
            className="relative grid gap-1 p-2 rounded-xl overflow-hidden"
            style={{
              gridTemplateColumns: 'repeat(5, 2.5rem)',
              background: 'rgba(200, 144, 42, 0.1)',
              border: '1px solid rgba(200, 144, 42, 0.25)',
              boxShadow: '0 4px 20px rgba(200, 144, 42, 0.15)',
            }}
          >
            {/* Shimmer sweep overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2.5s linear infinite',
                zIndex: 1,
              }}
            />
            {MINI_BOARD.map((sq, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded text-center leading-tight font-body"
                style={{
                  fontSize: '6.5px',
                  backgroundColor: sq.marked
                    ? 'var(--color-marked)'
                    : 'rgba(255,255,255,0.8)',
                  border: `1px solid ${
                    sq.marked
                      ? 'var(--color-marked-border)'
                      : 'rgba(184, 147, 90, 0.25)'
                  }`,
                  color: sq.free
                    ? 'var(--color-bingo)'
                    : sq.marked
                    ? 'var(--color-warm-dark)'
                    : 'var(--color-warm-mid)',
                  fontWeight: sq.free ? 700 : sq.marked ? 600 : 400,
                  opacity: sq.marked || sq.free ? 1 : 0.75,
                  padding: '2px',
                  wordBreak: 'break-word',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 0,
                }}
              >
                {sq.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: How to Play — step cards */}
      <section
        className="w-full max-w-sm px-4 py-4"
        style={{
          animation: 'deal-in 0.5s ease-out both',
          animationDelay: '150ms',
        }}
      >
        <h2
          className="text-2xl font-bold text-center mb-4 font-display text-warm-dark"
          style={{
            textShadow: '2px 2px 0 rgba(74,44,23,0.15)',
          }}
        >
          How to Play
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 flex-1"
              style={{
                border: '1px solid rgba(184, 147, 90, 0.3)',
                transform: `rotate(${CARD_ROTATIONS[i]}deg)`,
                boxShadow: '0 2px 8px rgba(200, 144, 42, 0.1)',
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-2"
                style={{
                  backgroundColor: 'var(--color-bingo)',
                  color: 'white',
                }}
              >
                {i + 1}
              </div>
              <div className="text-2xl mb-1">{step.icon}</div>
              <p className="text-xs text-warm-mid">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Social proof */}
      <section
        className="w-full max-w-sm px-4 py-2 text-center"
        style={{
          animation: 'deal-in 0.5s ease-out both',
          animationDelay: '300ms',
        }}
      >
        <p className="text-sm text-warm-mid">
          ☕☕☕☕☕&nbsp;&nbsp;Trusted at 50+ events
        </p>
      </section>

      {/* Section 4: CTA */}
      <section
        className="w-full max-w-sm px-4 pb-10 pt-3"
        style={{
          animation: 'deal-in 0.5s ease-out both',
          animationDelay: '450ms',
        }}
      >
        <button
          onClick={onStart}
          className="w-full font-semibold py-4 px-8 rounded-xl text-lg font-display"
          style={{
            backgroundColor: 'var(--color-bingo)',
            color: 'white',
            animation: 'bounce-ready 2s ease-in-out infinite',
            border: '2px solid rgba(74, 44, 23, 0.15)',
            boxShadow: '0 4px 16px rgba(200, 144, 42, 0.35)',
            textShadow: '1px 1px 0 rgba(74, 44, 23, 0.25)',
          }}
        >
          Start Game
        </button>
        <p className="text-center text-sm mt-3 text-warm-mid">
          Grab a cup and let's mingle ☕
        </p>
      </section>
    </div>
  );
}
