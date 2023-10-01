This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Other cli commands

Run a lint check:

```bash
pnpm lint
```

Run Playwright tests:

```bash
pnpm test
```

## Deployed on Vercel

This app is deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

You can visit it and try it out [here](https://nextjs-tester-two.vercel.app/).

## Warning

The app uses verious environment settings to utilize the [Postgres](https://www.postgresql.org/) database with [Prisma](https://www.prisma.io/), as well as the [Next Auth](https://next-auth.js.org/) login functionality. If you want to use the app locally, you will have to set up your own deployments. Otherwise, you can still try the app at the current vercel site.
