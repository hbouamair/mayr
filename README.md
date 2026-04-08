# Marrakech Alchemy Yoga Retreats — website

Next.js (App Router) marketing and booking inquiry site: room offers, Terms & Privacy, and a form that opens WhatsApp (`+21261695998`) and optionally emails `Marrakech.alchemy@gmail.com` via [Resend](https://resend.com).

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | No | If set, sends a copy of each inquiry to `BOOKING_NOTIFY_EMAIL`. |
| `BOOKING_NOTIFY_EMAIL` | No | Defaults to `Marrakech.alchemy@gmail.com`. |
| `BOOKING_FROM_EMAIL` | No | Verified Resend sender, e.g. `MAYR Bookings <onboarding@resend.dev>`. |

## Content updates

- **Rooms / prices:** edit [`src/lib/offers.ts`](src/lib/offers.ts).
- **Logos:** replace [`public/logo-full.png`](public/logo-full.png) and [`public/logo-mayr.png`](public/logo-mayr.png).

## Scripts

- `npm run dev` — development server  
- `npm run build` — production build  
- `npm run start` — run production build  
- `npm run lint` — ESLint  
