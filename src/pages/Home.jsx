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

      <BentoFeatureShowcaseSection />
      <HowItWorksSection />
      <InteractivePrevisualizationSection />
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
