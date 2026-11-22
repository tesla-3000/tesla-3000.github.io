# Tesla3000 – sito web

Sito statico Hugo (IT/EN) della cooperativa di lavoro per freelance con clienti esteri.

- Build: `hugo --gc --minify` → `public/`. Anteprima: `hugo server`.
- Nome: `params.brandName` in `hugo.toml` (unico punto; ragione sociale = brandName + legalSuffix). Il logo SVG `static/img/logo*.svg` contiene il nome come testo: aggiornarlo se cambia.
- Dati societari (P.IVA, REA, sede, email, WhatsApp): `hugo.toml` → `[params]`.
- Modulo contatti: `params.formEndpoint` = URL che riceve POST JSON `{name,email,role,clients,message,privacy,lang,page}`; se vuoto apre il client di posta (mailto).
- Prezzi: `data/pricing.yaml`; servizi: `data/services.yaml`; metodo e fonti in `research/`.
- Articoli: `content/it/articoli/`, `content/en/articles/` (regole in `research/article-guidelines.md`).
- Nessun tracker, nessun font o script esterno.
