# Linee guida articoli (per autori umani e AI)

## Formato file
- IT: `content/it/articoli/<slug>.md`, EN: `content/en/articles/<slug-en>.md`
- Front matter YAML:
```yaml
---
title: "..."                # max ~65 caratteri
description: "..."          # meta description 140-160 caratteri, unica
date: 2026-11-22
slug: "slug-in-kebab-case"  # = nome file senza .md
translationKey: "k-001"     # stesso valore per IT e EN dello stesso articolo
categories: ["casi-uso"]    # IT: casi-uso | vantaggi | guide ; EN: use-cases | advantages | guides
tags: ["sviluppatori", "clienti-usa"]
faq:                        # 2-4 domande, opzionale ma consigliato (genera FAQPage)
  - q: "..."
    a: "..."
---
```
- Corpo: Markdown, 600-1000 parole, H2/H3 (niente H1), un esempio concreto con persona di FANTASIA dichiarata ("Esempio: immaginiamo Marta, ..."), una sezione "Come funziona con la cooperativa" a passi, chiusura con invito a contattarci (link `/it/contatti/` o `/en/contact/`).
- Usare il nome brand tramite shortcode `{{< brand >}}` (non scrivere "Tesla3000" a mano).

## Fatti verificati da usare (formulazione prudente)
- Socio lavoratore di cooperativa: L. 3 aprile 2001 n. 142. Il socio, oltre al rapporto associativo, instaura un "ulteriore e distinto rapporto di lavoro" (subordinato, autonomo o altra forma) (art. 1 c. 3). La cooperativa deve avere un regolamento interno depositato (art. 6).
- Lavoro subordinato del socio: contributi INPS (FPLD) versati dalla cooperativa, assicurazione INAIL, ferie, malattia, maternità/paternità, TFR, NASpI in caso di perdita involontaria del lavoro alle condizioni di legge, busta paga mensile, CU. Il lavoratore non deve aprire partita IVA e non tiene contabilità.
- Imposte: il reddito da lavoro dipendente è soggetto a IRPEF progressiva con ritenute alla fonte e conguaglio; addizionali regionali e comunali. NON citare percentuali di aliquote né importi netti precisi; niente simulazioni numeriche di netto.
- Partita IVA in alternativa: regime forfettario (soglia ricavi 85.000 euro, imposta sostitutiva 15%, 5% primi 5 anni con requisiti), contributi a carico del professionista (es. Gestione Separata INPS o Artigiani/Commercianti), adempimenti (fatturazione elettronica, dichiarazioni, commercialista). Presentarla in modo equo, senza denigrare.
- Clienti esteri: la cooperativa emette fattura al cliente (UE: reverse charge/servizi B2B art. 7-ter DPR 633/72; extra-UE: operazione non soggetta a IVA in Italia per servizi generici B2B). Formulare in modo generale e rinviare a verifica caso per caso.
- Il lavoratore resta fiscalmente residente in Italia di norma; per chi vive all'estero (nomadi digitali) la residenza fiscale e le convenzioni contro le doppie imposizioni vanno valutate caso per caso: dirlo esplicitamente, non promettere.
- Diritti d'autore/opere artistiche, agenti di commercio (Enasarco) e professioni ordinistiche (avvocati, medici, ingegneri iscritti) hanno regole specifiche: dire che vanno verificate; le professioni con albo ed esclusiva NON sono gestibili così.
- Mutualità: la cooperativa può distribuire ristorni ai soci se ci sono avanzi (art. 2545-sexies c.c.), non promettere importi.
- Il cliente estero firma un contratto commerciale (commessa) con la cooperativa, non con il lavoratore; il socio negozia di fatto il proprio lavoro e la propria tariffa.
- Il socio sottoscrive una quota di capitale sociale (rimborsabile all'uscita secondo statuto).

## Vietato
- Statistiche inventate, testimonianze presentate come reali, nomi di clienti reali, promesse di netto/risparmi in cifre, citare autorizzazioni/agenzie per il lavoro/somministrazione/decreti di autorizzazione.
- Menzionare EmployItaly o altri brand del proprietario. Citare competitor per nome.
- Testo duplicato: ogni articolo ha angolo, esempio e FAQ propri.

## Servizi della cooperativa (da citare)
Piattaforma digitale per il socio (commesse, presenze/attività, note spese, buste paga, documenti, firma), supporto WhatsApp ed email, gestione contratto di lavoro e busta paga, contratto commerciale con il cliente, fatturazione e incasso (anche in valuta), rimborsi spese, copertura INAIL, assicurazione RC professionale (inclusa nel pacchetto), anticipo pagamenti tramite fondo, formazione, community dei soci.
