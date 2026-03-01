# 🎉 Soc Ops — Social Bingo

> **Break the ice. Make connections. Win bingo.**

Soc Ops is a mobile-first social bingo game designed for in-person mixers, team events, and conferences. Mingle with the crowd, find people who match the prompts on your card, and be the first to get **5 in a row!**

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🃏 **Randomised 5×5 bingo board** — a fresh card every game
- 🆓 **Free space** in the centre — everyone gets a head start
- 🏆 **Instant win detection** — rows, columns, and diagonals
- 💾 **Auto-save** — progress persists in `localStorage` so you never lose your card
- 📱 **Mobile-first design** — optimised for phones at live events
- ✏️ **Fully customisable prompts** — swap in your own questions in one file

---

## 🎮 How to Play

1. Hit **Start Game** to receive your randomised bingo card.
2. Mingle with the crowd and find people who match the squares.
3. Tap a square when you find a match to mark it off.
4. Get **5 in a row** — horizontally, vertically, or diagonally — to win!

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The project deploys automatically to **GitHub Pages** on every push to `main`.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| UI Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Bundler | Vite 7 |
| Testing | Vitest 4 + Testing Library |

---

## 📝 Customising the Prompts

Edit [`src/data/questions.ts`](src/data/questions.ts) to replace the default prompts with anything that fits your event:

```ts
export const questions: string[] = [
  "has lived in another country",
  "plays an instrument",
  // add your own…
];
```

Keep at least **24 entries** so every card gets a full set of unique squares.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
