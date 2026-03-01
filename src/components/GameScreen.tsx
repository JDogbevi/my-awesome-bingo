import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-bg">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-surface border-b border-[#d4b896] shadow-[0_1px_8px_rgba(74,44,23,0.08)]">
        <button
          onClick={onReset}
          className="text-[#8b5e3c] text-sm px-3 py-1.5 rounded-lg active:bg-[#e8d0b0] transition-colors"
        >
          ← Back
        </button>
        <h1 className="font-display font-bold text-[#2c1810] text-lg">Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-[#8b5e3c] text-xs py-2 px-4 italic">
        Find someone who matches each square ☕
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo/20 border-y border-bingo/40 text-[#4a2c17] text-center py-2 font-display font-bold text-sm animate-[slide-down_0.3s_ease-out]">
          ☕ BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
