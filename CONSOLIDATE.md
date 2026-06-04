# Consolidated repository snapshot

This file consolidates the main files and source code from the project for quick reference.

## Included files
- package.json
- index.html
- README.md
- vite.config.js
- eslint.config.js
- src/main.jsx
- src/pages/Home.jsx
- src/styles/index.css

---

## package.json
```json
{
  "name": "template-repo-2",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "lucide-react": "^1.17.0",
    "motion": "^12.40.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwindcss": "^4.1.18"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.7.4",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "vite": "^7.2.4"
  }
}
```

## index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Caffeineate</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## README.md
```md
# ⚡ Caffeinate — Automated Social Content Engine

A hyper-performing, high-converting Neo-Brutalist campaign landing page engineered to turn cold marketing traffic into high-intent waitlist leads. Built to showcase clean component sequencing, radical light-mode visual design, and structured context ingestion architecture.

## 🎯 The Product & Conversion Funnel

Caffeinate solves a painful problem for solo builders, developers, and teams: the cognitive overhead of creating consistent social media content. The application uses a strict 7-section structured pipeline to maximize user registrations:

1. **The Split-Grid Hero Layer**: Instantly hooks user focus using sharp typography parameters and an interactive generation simulator widget.
2. **The Dynamic Marquee Trust Banner**: Drives continuous animation momentum across viewports to demonstrate social proof validation metrics.
3. **The Asymmetrical Bento Grid**: Showcases core user outcomes (Benefits Over Tech Specs) inside neon color-blocked surfaces.
4. **The "How It Works" 1-2-3 Guide**: Removes systemic ambiguity with large, highly readable linear timeline phases.
5. **Interactive Output Previews**: Validates core output quality with real-world, human-cadence mockups for LinkedIn and X.
6. **Objection-Crusher Grid**: An interactive spring-based accordion layer designed to reduce user friction and risk anxiety.
7. **Inverted-Color Final CTA Block**: An aggressive, single-input focus envelope engineered to capture email leads.

---

## 🛠️ Tech Stack & Compiler Tokens

- **UI Library**: React 19 & Vite
- **Animation System**: Motion (`motion/react` official v19 production library)
- **Styling Framework**: Tailwind CSS v4 (Using compiler-native `@theme` directives for custom properties)
- **Icon Engine**: Lucide React

---

## 🏗️ Architectural Styles & Standards

### 1. Unified Single-File Component Sequencing

Adhering to strict codebase clean principles, the entire core landing page engine lives cleanly inside `src/pages/Home.jsx`. Every functional segment is built as an isolated child hook component compiled sequentially in the exact chronological order in which it mounts to the screen layout.

### 2. Tailwind v4 Compiler Token Injection

Custom color blocks and hard-brutalist shadows are exposed directly to the Tailwind v4 compilation engine using proper `@theme` definitions, guaranteeing zero-clutter style classes:

- Neon Alert Yellow: `bg-brand-yellow`
- Speed Cyan: `bg-brand-cyan`
- Action Green: `bg-brand-green`
- Heavy Structural Shadows: `shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`

### 3. Absolute Performance Optimization

State parameters are isolated locally inside the input and accordion components. This setup prevents unneeded root re-renders across parent nodes, keeping performance high on mobile, tablet, and desktop screens.

## Getting Started

To run this project locally:

1. Clone the repository: `git clone git@github.com:YuzStack/70_Caffeinate.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
```

## vite.config.js
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## eslint.config.js
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

## src/main.jsx
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
```

## src/pages/Home.jsx
```jsx
import { useState } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Link2,
  Globe,
  Cpu,
  Zap,
  CheckCircle,
} from 'lucide-react';

export default function Home() {
  const scrollToCTA = () => {
    document
      .getElementById('conversion-portal')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-bg selection:bg-brand-yellow min-h-screen w-full overflow-x-hidden pb-24 selection:text-black'>
      <HeaderWrapper onCtaClick={scrollToCTA} />
      <HeroSplitGridSection onCtaClick={scrollToCTA} />
      <MarqueeTrustTickerSection />

      <BentoFeatureShowcaseSection />
      <HowItWorksSection />
      <InteractivePrevisualizationSection />

      <ObjectionCrusherFaqSection />
      <ConversionCapturePortalSection />
    </div>
  );
}

// ==========================================
// 1. HEADER NAVIGATION WRAPPER (Conversion Safe)
// ==========================================
function HeaderWrapper({ onCtaClick }) {
  return (
    <header className='sticky top-0 z-50 border-b-4 border-black bg-white px-6 py-4 transition-all duration-200 md:px-12'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        {/* Brand Logo Block */}
        <div className='bg-brand-yellow flex items-center gap-2 rounded-md border-2 border-black px-3 py-1.5 text-sm font-black tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:text-base'>
          <Zap size={18} fill='black' />
          <span>
            CAFFEINE
            <span className='ml-0.5 border border-black bg-white px-1'>
              ATE
            </span>
          </span>
        </div>

        {/* Minimalist Micro-Proof Announcement Card (Desktop Only) */}
        <div className='bg-surface hidden items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-xs font-medium lg:flex'>
          <span className='bg-brand-green flex h-2 w-2 animate-pulse rounded-full' />
          <span>
            V3.0 Engine Live: Transforming landing pages into rich content
            assets
          </span>
        </div>

        {/* Focused Conversion Action Hook */}
        <button
          onClick={onCtaClick}
          className='hover:bg-brand-orange cursor-pointer rounded-lg border-2 border-black bg-black px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:text-black hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 sm:text-sm'
        >
          Claim Free Pack
        </button>
      </div>
    </header>
  );
}

// ==========================================
// 2. THE SPLIT-GRID HERO LAYER (Attention Phase)
// ==========================================
function HeroSplitGridSection({ onCtaClick }) {
  const [inputUrl, setInputUrl] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('YES');
    if (inputUrl) onCtaClick();
  };

  return (
    <section className='mx-auto max-w-7xl px-6 py-12 md:px-12 lg:py-20'>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center'>
        {/* Left Column: Aggressive Copy & Input Hooks (7-Cols) */}
        <div className='space-y-6 text-left lg:col-span-7'>
          <div className='bg-brand-cyan inline-flex items-center gap-2 rounded-md border-2 border-black px-4 py-1.5 text-xs font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
            <Sparkles size={14} fill='black' />
            <span>Automated Context Engineering</span>
          </div>

          <h1 className='text-4xl leading-[1.05] font-black tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl'>
            Stop Staring at a Blank Screen. Get Content in 60s.
          </h1>

          <p className='text-text-muted max-w-2xl text-base leading-relaxed font-medium sm:text-lg md:text-xl'>
            Drop your landing page or project URL below. Caffeinate instantly
            extracts your core user benefits and architectures a complete week
            of structured, conversion-ready social posts.
          </p>

          {/* Hyper-Focused URL Capture Box */}
          <form onSubmit={handleFormSubmit} className='max-w-xl pt-4'>
            <div className='flex flex-col items-center gap-3 rounded-2xl border-4 border-black bg-white p-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow focus-within:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:flex-row'>
              <div className='relative flex w-full items-center pl-2 text-gray-400 focus-within:text-black'>
                <Link2 size={20} className='absolute left-2 shrink-0' />
                <input
                  type='url'
                  placeholder='Paste your product or repository URL...'
                  value={inputUrl}
                  onChange={e => setInputUrl(e.target.value)}
                  className='w-full bg-transparent py-2.5 pr-4 pl-10 text-sm font-medium text-black placeholder-gray-400 focus:outline-none sm:text-base'
                  required
                />
              </div>
              <button
                type='submit'
                className='bg-brand-green flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-black px-6 py-3 text-sm font-black tracking-wide text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-white hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 sm:w-auto'
              >
                <span>Generate Pack</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Interactive Neo-Brutalist Dashboard Widget (5-Cols) */}
        <div className='flex w-full items-center justify-center lg:col-span-5'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className='relative w-full space-y-6 overflow-hidden rounded-3xl border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
          >
            {/* Window Decorative Tabs */}
            <div className='flex items-center justify-between border-b-2 border-black bg-white pb-4'>
              <div className='flex gap-2'>
                <span className='bg-brand-orange h-3.5 w-3.5 rounded-full border border-black' />
                <span className='bg-brand-yellow h-3.5 w-3.5 rounded-full border border-black' />
                <span className='bg-brand-cyan h-3.5 w-3.5 rounded-full border border-black' />
              </div>
              <span className='bg-surface rounded-md border border-black px-2.5 py-1 font-mono text-xs font-bold'>
                engine_status: active
              </span>
            </div>

            {/* Dashboard Mock Processing Row */}
            <div className='space-y-4'>
              <div className='bg-surface flex items-start gap-3 rounded-xl border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
                <div className='bg-brand-cyan shrink-0 rounded-lg border-2 border-black p-2'>
                  <Globe size={18} />
                </div>
                <div className='w-full space-y-1 text-xs sm:text-sm'>
                  <div className='font-black text-black'>
                    Target URL Ingested
                  </div>
                  <div className='text-text-muted max-w-55 truncate font-mono font-medium sm:max-w-xs'>
                    https://yuzstack.com/skillsync
                  </div>
                </div>
              </div>

              <div className='bg-surface flex items-start gap-3 rounded-xl border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
                <div className='bg-brand-orange shrink-0 rounded-lg border-2 border-black p-2'>
                  <Cpu size={18} />
                </div>
                <div className='w-full space-y-1 text-xs sm:text-sm'>
                  <div className='font-black text-black'>
                    Context Analysis Complete
                  </div>
                  <div className='text-brand-orange inline-block rounded border border-black bg-white px-1.5 py-0.5 font-mono text-[11px] font-bold'>
                    Extracted: 4 Key User Benefits
                  </div>
                </div>
              </div>

              {/* Final Asset Generation Mock Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className='bg-brand-yellow/10 relative rounded-xl border-2 border-dashed border-black p-4'
              >
                <div className='mb-1.5 flex items-center gap-2 text-xs font-black text-black'>
                  <CheckCircle
                    size={14}
                    className='text-brand-green'
                    fill='black'
                  />
                  <span>LinkedIn & Twitter Blueprint Ready</span>
                </div>
                <div className='mb-2 h-2 w-5/6 rounded bg-black/10' />
                <div className='mb-2 h-2 w-full rounded bg-black/10' />
                <div className='h-2 w-2/3 rounded bg-black/10' />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2.5 THE DYNAMIC MARQUEE TRUST BANNER (Interest Phase)
// ==========================================
function MarqueeTrustTickerSection() {
  const tickerItems = [
    '🔥 145,210+ POSTS GENERATED',
    '⚡ 3.4M+ IMPRESSIONS DELIVERED',
    '🚀 4,200+ CONSISTENT CREATORS',
    '🛠️ ZERO MANUAL BRAINSTORMING',
    '💎 HIGH-CONVERSION BLUEPRINTS',
  ];

  // Double items array to ensure looping covers viewport gap cleanly
  const continuousList = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className='bg-brand-yellow relative flex w-full overflow-hidden border-y-4 border-black py-4 select-none'>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          ease: 'linear',
          duration: 22,
          repeat: Infinity,
        }}
        className='flex items-center gap-12 whitespace-nowrap'
      >
        {continuousList.map((text, idx) => (
          <span
            key={idx}
            className='flex shrink-0 items-center text-sm font-black tracking-wider text-black sm:text-base md:text-lg'
          >
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

// ==========================================
// 3. THE ASYMMETRICAL BENTO GRID (Desire / Benefits Phase)
// ==========================================
function BentoFeatureShowcaseSection() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-12 md:px-12'>
      <div className='mb-12 max-w-2xl space-y-2 text-left'>
        <span className='text-brand-orange font-mono text-xs font-black tracking-wider uppercase'>
          // Outpace The Competition
        </span>
        <h2 className='text-brand-main text-3xl font-black tracking-tight sm:text-4xl md:text-5xl'>
          Zero Manual Friction. Pure Operational Velocity.
        </h2>
      </div>

      {/* Asymmetrical Bento Grid Grid */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {/* Card 1: Neon Cyan Accent Fill (Large) */}
        <div className='border-brand-border bg-brand-cyan flex min-h-65 flex-col items-start justify-between gap-8 rounded-2xl border-4 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:col-span-2'>
          <div className='border-brand-border rounded-xl border-2 bg-white p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
            <Link2 size={24} />
          </div>
          <div className='space-y-2'>
            <h3 className='text-brand-main text-2xl font-black tracking-tight'>
              1. Drop Any Landing Page URL
            </h3>
            <p className='text-brand-main/80 max-w-xl text-sm leading-relaxed font-medium sm:text-base'>
              No more staring at empty text fields wondering where to start.
              Paste a website link, a documentation folder, or a deep GitHub
              repository README file. Our parser extracts the exact functional
              essence of your tool instantly.
            </p>
          </div>
        </div>

        {/* Card 2: Neon Orange Accent Fill (Small) */}
        <div className='border-brand-border bg-brand-orange flex min-h-65 flex-col items-start justify-between gap-8 rounded-2xl border-4 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-8'>
          <div className='border-brand-border rounded-xl border-2 bg-white p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
            <Globe size={24} />
          </div>
          <div className='space-y-2'>
            <h3 className='text-brand-main text-2xl font-black tracking-tight'>
              2. Human-First Copy
            </h3>
            <p className='text-brand-main/80 text-sm leading-relaxed font-medium'>
              We strip away technical jargon. Caffeinate converts dense logic
              hooks directly into clear user benefits that your targets can
              easily read and engage with.
            </p>
          </div>
        </div>

        {/* Card 3: Neon Yellow Accent Fill (Full Row on Small / Balanced Large) */}
        <div className='border-brand-border bg-brand-yellow flex flex-col items-start justify-between gap-6 rounded-2xl border-4 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:flex-row sm:items-center sm:p-8 md:col-span-3'>
          <div className='max-w-2xl space-y-2'>
            <h3 className='text-brand-main text-2xl font-black tracking-tight'>
              3. Structured Multi-Channel Outputs Ready To Ship
            </h3>
            <p className='text-brand-main/80 text-sm leading-relaxed font-medium sm:text-base'>
              Get formatted LinkedIn authority posts, concise X threads, and
              pure markdown summaries delivered directly onto your dashboard
              framework layout within single-minute execution cycles.
            </p>
          </div>
          <div className='border-brand-border shrink-0 rounded-lg border-2 bg-white px-4 py-2.5 font-mono text-xs font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
            pipeline_mode: multi_channel
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. THE "HOW IT WORKS" 1-2-3 GUIDE (Clarity Phase)
// ==========================================
function HowItWorksSection() {
  const workflowSteps = [
    {
      num: '01',
      title: 'Context Link Ingestion',
      body: 'Paste your URL parameters. Our system performs deep web crawling routines to collect operational asset variables under 10 seconds.',
    },
    {
      num: '02',
      title: 'Tone Vector Tuning',
      body: 'Select customized marketing personas like "Relatable Solo Builder" or "Confident Technical Architect" to target specific customer niches perfectly.',
    },
    {
      num: '03',
      title: 'Deploy Content Streams',
      body: 'Review and copy clean content packs directly to your social feeds. Keep consistency high and conversion pipelines active.',
    },
  ];

  return (
    <section className='border-brand-border bg-surface border-y-4 px-6 py-16 md:px-12'>
      <div className='mx-auto max-w-7xl space-y-12'>
        <div className='mx-auto max-w-xl space-y-2 text-center'>
          <h2 className='text-brand-main text-3xl font-black tracking-tight sm:text-4xl'>
            Simple Sequencing. Radical Results.
          </h2>
          <p className='text-brand-muted text-sm font-medium sm:text-base'>
            From bare URL coordinates to active context assets in three linear
            phases.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className='border-brand-border group relative rounded-2xl border-4 bg-white p-6 pt-12 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]'
            >
              {/* Massive Structural Floating Numbers */}
              <div className='border-brand-border bg-brand-yellow absolute -top-5 left-6 border-4 px-3 py-1 font-mono text-2xl font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-0.5'>
                {step.num}
              </div>
              <div className='space-y-2'>
                <h3 className='text-brand-main text-xl font-black tracking-tight'>
                  {step.title}
                </h3>
                <p className='text-brand-muted text-xs leading-relaxed font-medium sm:text-sm'>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. INTERACTIVE OUTPUT PREVIEWS SECTION (Visual Validation)
// ==========================================
function InteractivePrevisualizationSection() {
  return (
    <section className='mx-auto max-w-7xl space-y-12 px-6 py-12 md:px-12'>
      <div className='max-w-2xl space-y-2 text-left'>
        <span className='text-brand-green font-mono text-xs font-black tracking-wider uppercase'>
          // Structural Asset Previews
        </span>
        <h2 className='text-brand-main text-3xl font-black tracking-tight sm:text-4xl md:text-5xl'>
          Real Copies. Human Cadence.
        </h2>
        <p className='text-brand-muted text-sm font-medium sm:text-base'>
          This is exactly what the engine produces based on your product
          features. No fluff, no robotic filler.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* Mock Content Layout Asset 1: LinkedIn Interface Frame */}
        <div className='border-brand-border space-y-4 rounded-2xl border-4 bg-white p-6 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
          <div className='border-brand-border flex items-center gap-3 border-b-2 pb-3'>
            <div className='border-brand-border bg-brand-orange flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
              YO
            </div>
            <div>
              <div className='text-brand-main text-sm font-black tracking-wide'>
                Yusuf Oyinlola
              </div>
              <div className='text-brand-muted font-mono text-xs font-bold'>
                Frontend Architect • 1m ago
              </div>
            </div>
          </div>
          <div className='text-brand-main space-y-3 text-xs leading-relaxed font-medium sm:text-sm'>
            <p className='text-brand-orange font-bold'>
              Stop wasting weeks wrestling with payment integrations and web
              route setups. 🛠️
            </p>
            <p>
              I built SkillSync to solve my own problem as a developer. Instead
              of configuring databases from scratch, I wanted a boilerplate that
              ships in seconds.
            </p>
            <p className='bg-brand-cyan/10 border-brand-border/40 rounded-lg border p-2.5 font-mono text-xs font-bold text-black/70'>
              👉 Join the product waitlist today for discounted early-bird
              parameters.
            </p>
          </div>
        </div>

        {/* Mock Content Layout Asset 2: X Thread Post Frame */}
        <div className='border-brand-border relative space-y-4 rounded-2xl border-4 bg-white p-6 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
          <div className='bg-brand-green border-brand-border absolute top-4 right-4 border-2 px-2 py-0.5 font-mono text-[9px] font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
            X_THREAD_PERSONA
          </div>
          <div className='border-brand-border flex items-center gap-3 border-b-2 pb-3'>
            <div className='border-brand-border bg-brand-yellow flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
              ZZ
            </div>
            <div>
              <div className='text-brand-main text-sm font-black tracking-wide'>
                @yuzstack_engine
              </div>
              <div className='text-brand-muted font-mono text-xs font-bold'>
                Active Thread Vector
              </div>
            </div>
          </div>
          <div className='text-brand-main space-y-4 text-xs leading-relaxed font-medium sm:text-sm'>
            <div className='space-y-1'>
              <div className='font-black text-black'>
                1/3 • The Developer Trap 🪤
              </div>
              <p className='text-brand-brand-muted'>
                We spend 80% of our production timeline config-matching state
                trees instead of polishing features. Let's flip that ratio
                completely.
              </p>
            </div>
            <div className='h-px bg-black/10' />
            <div className='space-y-1'>
              <div className='font-black text-black'>
                2/3 • Automated Synchronization
              </div>
              <p className='text-brand-brand-muted'>
                Caffeinate acts as an isolated context bridge, converting plain
                technical code parameters into high-intent benefit assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. ACCORDION OBJECTION-CRUSHER GRID (FAQ Phase)
// ==========================================
function ObjectionCrusherFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Does the output sound like a robotic AI wrote it?',
      answer:
        'Absolutely not. Standard LLMs output generic academic text. Caffeinate is built with context-matching tone modules specifically engineered around real builder cadences, ensuring your posts sound organic, concise, and human-friendly.',
    },
    {
      question: 'What platforms are supported by the generation engine?',
      answer:
        'We offer tailored layouts optimized explicitly for LinkedIn and Twitter/X feeds, alongside clean Markdown summaries perfect for technical README documentation frameworks.',
    },
    {
      question: 'Is it completely free to try?',
      answer:
        'Yes. Your first complete multi-channel content pack is entirely on the house. No credit card required. Input your URL parameters and evaluate the output quality instantly.',
    },
  ];

  return (
    <section className='mx-auto max-w-4xl space-y-12 px-6 py-12 md:px-12'>
      <div className='mx-auto max-w-xl space-y-2 text-center'>
        <span className='text-brand-cyan font-mono text-xs font-black tracking-wider uppercase'>
          // Risk Mitigation
        </span>
        <h2 className='text-brand-main text-3xl font-black tracking-tight sm:text-4xl'>
          Objections, Crushed.
        </h2>
      </div>

      {/* Accordion Layout Shell */}
      <div className='space-y-4 text-left'>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className='border-brand-border overflow-hidden rounded-2xl border-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all'
            >
              {/* Accordion Header Action Bar */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className='hover:bg-surface text-brand-main flex w-full cursor-pointer items-center justify-between bg-white px-6 py-5 text-left text-sm font-black select-none focus:outline-none sm:text-base'
              >
                <span>{faq.question}</span>
                <span
                  className={`transform font-mono text-xl transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                >
                  ＋
                </span>
              </button>

              {/* Dynamic Animated Body Block */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className='border-brand-border bg-surface overflow-hidden'
                style={{ borderTopWidth: isOpen ? '2px' : '0px' }}
              >
                <div className='text-brand-muted bg-white p-6 text-xs leading-relaxed font-medium sm:text-sm'>
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ==========================================
// 7. INVERTED-COLOR FINAL CTA BLOCK (Action / Capture Phase)
// ==========================================
function ConversionCapturePortalSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCaptureSubmit = e => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section
      id='conversion-portal'
      className='mx-auto max-w-7xl px-6 py-12 md:px-12'
    >
      {/* Inverted Brutalist Block: Swapping Background for High-Contrast Impact */}
      <div className='border-brand-border bg-brand-main relative overflow-hidden rounded-3xl border-4 p-8 text-center text-white shadow-[10px_10px_0px_0px_#facc15] sm:p-12 lg:p-16'>
        {/* Background Subtle Mesh Accent Graphic */}
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,transparent_70%)]' />

        <div className='mx-auto flex max-w-2xl flex-col items-center justify-center space-y-6'>
          <h2 className='text-3xl leading-none font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl'>
            Claim Your Free Content Pack.
          </h2>
          <p className='max-w-md text-sm leading-relaxed font-medium text-white/80 sm:text-base md:text-lg'>
            Join the automated content movement today. Secure high-converting
            visibility and stay consistent across networks without lifting a
            finger.
          </p>

          <AnimatePresence mode='wait'>
            {!isSubmitted ? (
              <motion.form
                key='form'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleCaptureSubmit}
                className='w-full max-w-md pt-4'
              >
                <div className='border-brand-border flex flex-col items-center gap-3 rounded-2xl border-4 bg-white p-2 shadow-[4px_4px_0px_0px_#22d3ee] sm:flex-row'>
                  <input
                    type='email'
                    placeholder='Enter your routing email...'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='w-full bg-transparent px-4 py-2.5 text-sm font-bold text-black placeholder-gray-400 focus:outline-none sm:text-base'
                    required
                  />
                  <button
                    type='submit'
                    className='border-brand-border bg-brand-yellow w-full shrink-0 cursor-pointer rounded-xl border-2 px-6 py-3 text-xs font-black tracking-wide text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-white hover:shadow-none sm:w-auto sm:text-sm'
                  >
                    Get Early Access
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Callback State Wrapper */
              <motion.div
                key='success'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='border-brand-border bg-brand-green rounded-2xl border-4 p-6 text-sm font-black tracking-wide text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:text-base'
              >
                🎉 Pack Sucessfully Claimed! Check your email for the next
                steps.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
```

## src/styles/index.css
```css
@import 'tailwindcss';

@theme {
  --color-bg: #ffffff;
  --color-surface: #f9fafb;

  /* Remapped text keys to prevent native layout overrides */
  --color-brand-main: #000000;
  --color-brand-muted: #4b5563;
  --color-brand-border: #000000;

  /* High-Contrast Neo-Brutalist Palette Blocks */
  --color-brand-yellow: #facc15;
  --color-brand-orange: #fb923c;
  --color-brand-cyan: #22d3ee;
  --color-brand-green: #4ade80;
}

@layer base {
  body {
    background-color: var(--color-bg);
    color: var(--color-brand-main);
    font-family: 'Space Grotesk', system-ui, sans-serif;
    overflow-x: hidden;
  }
}
```

---

Generated on: 2026-06-04
