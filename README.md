# Premium Fitness Gym

Website lokal me React, Vite, Tailwind CSS dhe Lucide React.

## Zhvillimi

```sh
npm install
npm run dev
npm run lint
npm run build
```

## Struktura

- `src/components/`: logoja, navigimi, footer dhe titujt e seksioneve.
- `src/sections/`: Hero, About, Services, Gallery, Hours dhe Contact.
- `src/data/site.js`: informacionet e konfirmuara dhe konfigurimi i materialeve.
- `public/images/`: logoja transparente dhe fotografitë e autorizuara.
- `src/assets/`: materialet vizuale që importohen nga komponentët.

Logoja është nxjerrë nga fotografia e ofruar, pa rindërtuar simbolin ose tekstin. Cilësia kufizohet nga rezolucioni i fotografisë origjinale.

Shtatë fotografitë e ofruara nga pronari i projektit janë optimizuar në WebP dhe përdoren në hero, prezantim, shërbime dhe galeri. Galeria ka filtra dhe hapje në modal. Fotografitë vertikale shfaqen të plota, duke ruajtur tekstet brenda tyre. Shërbimet e tjera duhen konfirmuar para shtimit në `services`. Numri i telefonit është `null`; kur konfirmohet, vendoset në `site.phone`.

Orari është e hënë–e shtunë 09:00–23:00; orari i së dielës nuk është konfirmuar. Informacionet bazohen në të dhënat e dhëna nga pronari i projektit. Nuk është nxjerrë datë themelimi nga përvjetori.

SEO përfshin titull, përshkrim, Open Graph dhe të dhëna të strukturuara. URL-ja canonical dhe URL-të absolute të imazheve sociale duhen shtuar pasi të konfirmohet domain-i publik. Nuk ka backend ose pagesa.

Asnjë push ose deployment nuk kryhet automatikisht.
