# Portfolio Analytics Platform

Advanced real-time portfolio analytics and performance monitoring for institutional investors and fund managers.

## Tech Stack

- **Nuxt.js 2** - Vue.js framework
- **Chart.js** - Untuk grafik pertumbuhan akun
- **Tailwind CSS** - Styling
- **PHP API** - Backend API untuk data trading

## Features

- 📊 Real-time monitoring equity dan balance
- 📈 Grafik pertumbuhan akun berdasarkan trading results
- 🎨 Modern UI dengan responsive design
- ⚡ Auto-update setiap 3 jam
- 🔒 Secure API dengan CORS protection

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

Project sudah siap untuk deploy ke Vercel. Ikuti langkah berikut:

### Via Vercel Dashboard (Recommended)

1. Push code ke GitHub repository: `https://github.com/kkdev20/demo-porto.git`
2. Login ke [Vercel](https://vercel.com)
3. Klik "New Project"
4. Import repository `demo-porto`
5. Vercel akan auto-detect konfigurasi:
   - **Framework Preset:** Other (Static Site)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Klik "Deploy"

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Catatan Penting

- Project ini menggunakan **static generation** (SPA mode)
- API calls akan langsung ke external API (sudah ada fallback di code)
- ServerMiddleware tidak akan bekerja di static deployment, tapi sudah ada fallback ke direct API URL

## API Endpoint

- `/api/history` - Proxy endpoint untuk history transaksi (bypass CORS)
- `api-historytransaksi-uuid.php` - API PHP untuk data trading positions

## Environment Variables

Tidak ada environment variables yang diperlukan untuk development.

## License

Private

