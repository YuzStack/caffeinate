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
		<!-- <link rel="icon" type="image/svg+xml" href="/vite.svg" /> -->
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
# React + Tailwind +  Vite

This template provides a minimal setup to get React and Tailwind working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
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
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]'}],
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
import { motion } from 'motion/react';
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

			{/* Remaining sections will mount sequentially here */}
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
```

## src/styles/index.css
```css
@import 'tailwindcss';

@layer base {
	:root {
		/* Playful Neo-Brutalist Light Mode Colors */
		--color-bg: #ffffff;
		--color-surface: #f9fafb;
		--color-text-main: #000000;
		--color-text-muted: #4b5563;

		/* Global Structural Borders and Solid Shadows */
		--color-border: #000000;

		/* High-Contrast Vibrant Color Palette Blocks */
		--color-brand-yellow: #facc15;
		--color-brand-orange: #fb923c;
		--color-brand-cyan: #22d3ee;
		--color-brand-green: #4ade80;
	}

	body {
		background-color: var(--color-bg);
		color: var(--color-text-main);
		font-family: 'Space Grotesk', system-ui, sans-serif;
		overflow-x: hidden;
	}
}
```

---

Generated on: 2026-05-30

If you'd like this consolidated file to include additional files, smaller excerpts, or a shorter summary version, tell me which files or sections to include.

