# Wallpay

Wallpay is a **Next.js** app that simulates a wallet application, built with **Next.js 15**, **TailwindCSS v4**, and **shadcn/ui**.

## ✨ Features

- Simulated sign-in page
  - Validates email (must be a valid format)
  - Validates password (minimum 8 characters)
  - On successful validation, creates a dummy user and stores data in cookies using **server actions**
- Displays dummy wallets, bank accounts, and transactions
- Dark mode toggle
- Middleware to protect authenticated routes
- Husky and commitlint configured for commit message linting

## 📂 Project Structure

```
/
├── actions/               # server actions
│   └── auth-actions.ts    # auth-related actions
├── components/            # UI components
├── data/                  # dummy data for accounts, wallets, transactions
├── lib/
│   └── utils.ts           # utility functions
├── middleware.ts          # checks for user authentication
├── providers/
│   └── theme-provider.tsx # dark mode theme provider
├── types/                 # TypeScript types
├── pages/
│   ├── auth/
│   │   └── signin.tsx
│   ├── user/
│   │   ├── my-wallet.tsx
│   │   └── my-wallet/[walletId].tsx
│   └── wallet.tsx         # homepage
```

## 🗝 Pages

- `/auth/signin` — sign in page
- `/wallet` — homepage
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
