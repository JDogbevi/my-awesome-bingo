import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="bg-surface rounded-2xl p-3 shadow-[0_4px_24px_rgba(74,44,23,0.15)] border border-[#d4b896] w-full max-w-md mx-auto">
      <div className="grid grid-cols-5 gap-1.5 aspect-square">
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}      </div>    </div>
  );
}
