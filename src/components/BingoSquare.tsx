import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border rounded transition-all duration-200 select-none min-h-[60px] text-xs leading-tight active:scale-95';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-bingo/30 border-bingo text-[#4a2c17] ring-1 ring-bingo shadow-[inset_0_1px_4px_rgba(200,144,42,0.2)]'
      : 'bg-marked border-marked-border text-[#4a2c17]'
    : square.isFreeSpace
      ? 'bg-bingo/20 border-bingo/40 text-[#4a2c17]'
      : 'bg-surface border-[#d4b896] text-[#2c1810] active:bg-[#e8d4c0]';

  const freeSpaceClasses = square.isFreeSpace ? 'font-display font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-[#b8935a] text-xs">✓</span>
      )}
    </button>
  );
}
