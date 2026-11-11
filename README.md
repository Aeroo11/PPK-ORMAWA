# ITS STAY — Pencarian Kos di Sekitar Kampus ITS

Prototipe web untuk mencari hunian (kos dan asrama) di sekitar kampus ITS, dibuat
untuk program **PPK ORMAWA**.

## Fitur
- Beranda dengan pencarian hunian
- Daftar kos (`/housing`)
- Halaman detail kos (`/housing/[id]`)

## Teknologi
- **Versi Next.js** (`app/`): Next.js App Router · React · TypeScript
- **Versi statis** (`index.html`, `kosan.html`, `detail-kosan.html`): HTML · CSS · JavaScript

## Cara menjalankan
```bash
cd "Web KOs"
npm install
npm run dev        # http://localhost:3000
```
Versi statis cukup dibuka lewat `Web KOs/index.html`.

## Struktur
```
Web KOs/
├── app/            # halaman Next.js (beranda, housing, housing/[id])
├── assets/         # foto hunian & logo
├── public/         # CSS/JS untuk versi statis
├── css/, js/       # aset versi statis
└── *.html          # prototipe statis
```
