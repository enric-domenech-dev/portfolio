# Roadmap — Anàlisi d'arquitectura, estructura, funcionalitats i UI/UX

> Generat el 2026-09-05. Anàlisi de l'estat del portfolio per continuar-hi en properes sessions. Cap fitxer de codi s'ha modificat en generar aquest document — és només diagnòstic i propostes.

## Context

El portfolio (Astro 4 + Tailwind, arquitectura neta amb mòduls `core/{experience,education,skills,projects,cv}` + `presentation/`) ha crescut molt durant la sessió anterior: s'hi ha afegit i18n complet (es/ca/en) amb JSON per idioma, tabs de Skills (Dev/Hard/Soft), projectes reals, i s'han corregit dos bugs de CSS (hover trencat per `animation-fill-mode`, i `hidden` neutralitzat per `display:grid`). Amb el sistema ja força madur, toca fer un pas enrere: on l'arquitectura actual paga el seu cost i on no, què falta perquè el lloc sigui robust i trobable (SEO/a11y/perf), i quines millores de UI/UX tindrien més impacte ara que hi ha contingut real i seguirà creixent.

---

## 1. Arquitectura

### 1.1 Ceremònia de capes excessiva per mòdul
Cada mòdul (`experience`, `education`, `skills`, `projects`) repeteix: `domain/models`, `domain/repository` (interfície), `infrastructure/dto`, `infrastructure/mapper`, `infrastructure/repository` (impl), `infrastructure/datasource`, `application/usecases` — **7 fitxers** per exposar, en la pràctica, "llegeix un JSON local i retorna'l tipat per idioma". Ho vam viure directament: afegir el camp `company` a `Project` va requerir tocar model + DTO + mapper + 3 JSON + UI; el DTO i el Domain model són gairebé sempre idèntics.

Aquesta abstracció (Repository interface ⟷ implementació intercanviable) es paga quan hi ha **més d'una implementació** o **tests** que mockegen la interfície. Cap de les dues coses existeix (0 tests al repo). Ara mateix la indirecció és pur cost.

**Proposta:** mantenir els `domain/models` (donen un contracte estable per a la UI), però col·lapsar DTO + Mapper + DataSource + RepositoryImpl en un sol fitxer `xxx.repository.ts` per mòdul quan DTO i Domain coincideixen. Redueix 7 fitxers a 3-4 sense perdre testabilitat real.

### 1.2 i18n manual en lloc del suport natiu d'Astro
`astro.config.mjs` **ja declara** `i18n: { defaultLocale: 'es', locales: ['es','ca','en'], routing: { prefixDefaultLocale: false } }`, però el projecte no aprofita les utilitats natives d'Astro i18n (`getRelativeLocaleUrl`, middleware de detecció de locale) — en el seu lloc hi ha `resolveLocale`/`localizedPath`/`canonicalPath` fets a mà a `core/shared/i18n/locale.ts`, cridats manualment a cada pàgina.

**Proposta:** avaluar migrar a les helpers natives `astro:i18n`, i/o extreure un helper `getPageContext(Astro)` que retorni `{ locale, dict, siteDefaults }` en una sola crida per reduir el boilerplate repetit a cada pàgina.

### 1.3 Encadenament de `locale` per paràmetre — fràgil per oblit
`execute(locale)`, `getAll(locale)`, `getById(index, locale)` és correcte però depèn que cada pàgina calculi `locale` **abans** de cridar el use case (ho vam haver de corregir a mà a 6 pàgines perquè l'ordre estava capgirat). Relacionat amb 1.2: un helper central de context de pàgina resoldria també això.

---

## 2. Capa de dades (JSON)

### 2.1 Duplicació real a `cv.es/ca/en.json`
Els arrays d'stack tecnològic (`mobile`, `backend`, `frontend`, `databases`, `gamedev`, `tools`, `other`) són **idèntics** als 3 fitxers — només `personal.bio`, `education`, `experience` i `soft` necessiten traducció real. Cada canvi a l'stack tècnic implica editar 3 fitxers amb el mateix contingut, amb risc de divergència silenciosa.

**Proposta:** separar un `skills-stack.json` **no localitzat** (categories tècniques) del contingut que sí varia per idioma, fusionant-los en llegir. No canvia el domini públic (`SkillCategory[]`).

### 2.2 Sense validació d'esquema entre idiomes
No hi ha res que garanteixi que `cv.es.json`, `cv.ca.json` i `cv.en.json` (o `projects.*.json`) tinguin la mateixa forma — un camp oblidat en un idioma renderitza `undefined` en producció sense avís.

**Proposta:** un esquema **Zod** compartit (`CVDataSchema`, `ProjectSchema`) validat als `LocalDataSource` perquè un desajust entre idiomes trenqui el build en comptes de colar-se a producció.

### 2.3 Creixement de contingut via JSON pla té sostre
S'aniran afegint més projectes. Editar arrays JSON a mà (cometes, ordre, sincronitzar 3 idiomes) escala malament, i barreja contingut llarg (descripcions) amb dades estructurades.

**Proposta (la de més recorregut):** migrar `projects` (i potencialment `experience`) a **Astro Content Collections** amb `.md`/`.mdx` per entrada i per idioma, amb `schema` Zod integrat nativament (`defineCollection`). Resol 2.2 i 2.3 alhora per aquest mòdul.

---

## 3. Funcionalitats

### 3.1 SEO — pràcticament absent
- **Sense** `og:image`/Open Graph, **sense** `twitter:card`, **sense** `rel="canonical"`, **sense** JSON-LD (schema.org `Person`/`ProfilePage` seria natural aquí).
- **Sense** `sitemap.xml` (no hi ha `@astrojs/sitemap`, tot i que `site` ja està configurat a `astro.config.mjs`).
- **Sense** `robots.txt`.
- **Sense** favicon real (només `profile.jpg` a `public/`) — el navegador demanarà `/favicon.ico` i rebrà 404.

**Impacte:** per un portfolio pensat perquè el trobin i el comparteixin (LinkedIn, etc.), l'absència d'OG image fa que qualsevol link compartit es vegi sense preview — probablement l'ítem SEO de més impacte immediat.

### 3.2 Sense pàgina 404 personalitzada
Trivial d'afegir amb el mateix `Layout` i navegació coherent.

### 3.3 Sense analítica
Cap script d'analítica — a decidir conscientment (opció respectuosa amb privacitat com Plausible/Fathom, donat que és un portfolio personal).

### 3.4 Contacte només via `mailto:`/`tel:`
Decisió vàlida (evita backend), però en desktop molts usuaris no tenen client de correu configurat. Una alternativa lleugera (Formspree/endpoint serverless) convertiria millor sense necessitar backend propi.

### 3.5 Sense filtre per stack a Proyectos
Amb 6 targetes ja (3 reals + 3 placeholder) i més previstes, no hi ha manera de filtrar per tecnologia. Un filtre client-side per tag (reutilitzant el patró de tabs de Skills) seria senzill.

### 3.6 Placeholders "TODO" ja visibles en producció
Els 3 projectes placeholder (`TODO: Nombre del proyecto 4/5/6`) es renderitzen tal qual. Decisió pendent: amagar-los condicionalment (no renderitzar entrades amb `title` que comenci per `TODO:`) fins que hi hagi contingut real, o no desplegar fins llavors.

### 3.7 Sense CI ni script `lint`/`test`/`check`
`package.json` només té `dev`/`build`/`preview`/`astro`. `@astrojs/check` ja és dependència (usada manualment tota la sessió) però no enganxada a cap script ni CI. Tampoc hi ha `package-lock.json` (ignorat explícitament a `.gitignore`) — instal·lacions no reproduïbles.

**Proposta:** afegir `"check": "astro check"` a `package.json`, un workflow mínim de GitHub Actions (`astro check` + `astro build` en cada PR), i deixar de ignorar `package-lock.json`.

---

## 4. Accessibilitat

En general **notablement millor del que és habitual**: `Drawer`/`TopBar` tenen focus-trap manual correcte, `role="dialog"`/`aria-modal`, `inert` al fons, `aria-expanded`/`aria-selected` ben usats, i el patró Card+`<a class="block">` a `QuickAccess` és segur (sense elements interactius niats). Punts a millorar:

- **Sense skip-to-content link** — navegant amb teclat, cal passar pel TopBar/Drawer toggle abans d'arribar al contingut.
- **Sense estil `:focus-visible` genèric** — només existeix per `.animated-underline` (que, a més, **no s'utilitza enlloc** — CSS mort a `global.css`). La resta depèn del focus ring per defecte del navegador, que amb `rounded-full`/`glass-card` translúcids pot ser poc visible.
- Revisar contrast de color en mode fosc per `text-slate-400`/`text-slate-500` sobre `--surface` translúcid (no verificat quantitativament).

---

## 5. Rendiment

### 5.1 Fonts amb `@import` a `global.css` — render-blocking
`global.css:1` — `@import url('https://fonts.googleapis.com/css2?family=Inter...')`. Un `@import` de CSS és seqüencial i bloqueja el render; un `<link rel="preconnect">` + `<link rel="stylesheet">` a `Layout.astro` es descarrega en paral·lel i és estrictament més ràpid. **Fix de rendiment més senzill i d'impacte més clar del repo.**

### 5.2 `html2pdf.js` — confirmat correctament aïllat
El `<script src="...html2pdf.bundle.min.js">` només es carrega a `CVSection.astro` (només `/cv`) — no penalitza la resta del lloc. Cap acció necessària.

### 5.3 Sense `astro:assets`/`<Image>`
`profile.jpg` (100KB) es serveix tal qual des de `public/`, sense el pipeline d'optimització d'Astro. Amb una sola imatge l'impacte és petit, però si s'afegeixen captures de projectes val la pena fer-ho amb `<Image>` des del principi.

---

## 6. UI/UX

### 6.1 Proyectos és 100% text — cap imatge/captura (la millora visual de més impacte)
Amb contingut real (Imagin Bank, Voluntarios de la Caixa, Filmaps) i més projectes previstos, les targetes són només títol+empresa+descripció+chips. Una miniatura/captura per projecte trencaria la monotonia visual i donaria molta més credibilitat immediata. Combina bé amb 5.3.

### 6.2 `.neo-panel` (neumorfisme) no té variant fosca
El shadow neumòrfic (`10px 10px 20px rgba(148,163,184,.25), -10px -10px 20px rgba(255,255,255,.95)`) està pensat per a fons clars — la resplendor blanca es nota com un halo estrany en mode fosc. Val la pena una variant `dark:` pròpia (shadow més subtil, sense el component blanc).

### 6.3 Format de dates d'Educació poc convencional
`"23' - 25'"` / `"15' - 3 de 4 anys cursats"` és una abreviatura poc habitual, especialment per a un CV en anglès per a audiència internacional. `"2023 - 2025"` és inequívoc i més professional.

### 6.4 Tabs de Skills sense pista de contingut
No hi ha manera de saber què conté cada tab (Dev/Hard/Soft) abans de fer clic. Un comptador al costat de l'etiqueta (`Dev Skills · 6`) ajudaria a orientar-se.

### 6.5 CSS mort: `.animated-underline`
Definit a `global.css` però no usat enlloc (confirmat per grep). O es reaprofita (podria ser un bon efecte per als links del `Drawer`/nav) o s'elimina.

### 6.6 Sense transicions de pàgina (Astro View Transitions)
Navegar entre rutes és un reload complet. `astro:transitions` donaria una sensació més "app-like". **Avís:** vigilar que no reintrodueixi el mateix patró de bug que `animation-fill-mode` (ja corregit), ja que les View Transitions també usen animacions CSS que poden interactuar amb els `:hover` existents.

### 6.7 Cosa que ja està bé i NO cal "arreglar"
El selector d'idioma mostra codis de text (`ES`/`CA`/`EN`) en lloc de banderes — és la decisió correcta (el català no té una bandera de país unívoca).

---

## Prioritzat — "quick wins" (baix esforç, alt impacte)

1. **Fonts sense render-block** (§5.1) — canviar `@import` per `<link>` a `Layout.astro`. Minuts.
2. **Favicon + `og:image` + `twitter:card`** (§3.1) — actiu que falta del tot; impacte immediat en com es comparteix el lloc.
3. **`robots.txt` + `@astrojs/sitemap`** (§3.1) — `site` ja està configurat, només falta la integració.
4. **`404.astro`** (§3.2).
5. **Amagar/filtrar projectes `TODO:`** (§3.6) abans de desplegar.
6. **`"check": "astro check"` a `package.json`** + treure `package-lock.json` de `.gitignore` (§3.7).
7. **Eliminar `.animated-underline` mort o reutilitzar-lo** (§6.5).
8. **Format de dates d'Educació a "2023 - 2025"** (§6.3).

## Mitjà abast (requereix disseny/decisió)

- Zod per validar `cv.*.json`/`projects.*.json` entre idiomes (§2.2).
- Separar l'stack tècnic (no localitzat) de la resta de `cv.*.json` (§2.1).
- Skip-to-content link + `:focus-visible` genèric (§4).
- Imatge/captura per projecte amb `astro:assets` (§6.1 + §5.3).
- CI mínima amb GitHub Actions (§3.7).

## Llarg abast (canvi estructural)

- Migrar `projects` a Astro Content Collections amb Zod schema (§2.3) — la inversió de més recorregut si es continuen afegint projectes sovint.
- Col·lapsar DTO+Mapper+DataSource+RepositoryImpl per mòdul (§1.1).
- Migrar a helpers natius `astro:i18n` (§1.2).
- View Transitions (§6.6).

---

*Nota per a la propera sessió: cap d'aquests punts s'ha implementat encara. Comença triant quins ítems abordar (es recomana començar pels "quick wins").*
