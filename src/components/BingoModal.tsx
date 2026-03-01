interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-2xl p-8 max-w-xs w-full text-center shadow-[0_8px_48px_rgba(74,44,23,0.35)] border border-[#d4b896] animate-[warm-pop_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
        <div className="text-5xl mb-4">☕</div>
        <h2 className="font-display text-3xl font-black text-bingo mb-2">BINGO!</h2>
        <p className="text-[#5c3d2e] mb-6 italic text-sm">You completed a line! Cheers! 🥂</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-[#fffcf5] font-display font-bold py-3 px-6 rounded-xl text-lg shadow-[0_4px_16px_rgba(74,44,23,0.3)] active:bg-accent-light active:shadow-none active:scale-95 transition-all duration-150"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
