# Wallpay

Wallpay is a **Next.js** app that simulates a wallet application, built with **Next.js 15**, **TailwindCSS v4**, and **shadcn/ui**.

## ✨ Features

- Displays dummy wallets, bank accounts, and transactions
- Dark mode toggle
- Husky and commitlint configured for commit message linting

## 📂 Project Structure

```
/
├── components/            # UI components
├── data/                  # dummy data for accounts, wallets, transactions
├── lib/
│   └── utils.ts           # utility functions
├── providers/
│   └── theme-provider.tsx # dark mode theme provider
├── hooks/
│   └── useTimeOfDay.ts    # hook to find time of day
├── types/                 # TypeScript types
├── pages/
│   ├── user/
│   │   ├── my-wallet/page.tsx
│   │   └── my-wallet/[walletId]/page.tsx
│   └── page.tsx         # homepage
```

## 🗝 Pages

- `/` — homepage
- `/user/my-wallet` — view your wallets
- `/user/my-wallet/[walletId]` — view specific wallet

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Husky](https://typicode.github.io/husky) & [commitlint](https://commitlint.js.org/) — for git hooks and commit linting

## 🚀 Running Locally

Clone the project and install dependencies:

```bash
git clone https://github.com/thecodingmontana/wallpay.git
cd wallpay
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

Feel free to contribute or open issues!
