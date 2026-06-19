// app/services/[slug]/page.tsx — Server Component
import { notFound } from "next/navigation";
import Link from "next/link";
import ServiceHero from "./ServiceHero";
import ServiceFeatures from "./ServiceFeatures";
import ServiceProcess from "./ServiceProcess";
import OtherServices from "./OtherServices";

export const serviceData = {
  "web-development": {
    title: "Web Dev", fullTitle: "Web Development",
    tagline: "Blazing fast. SEO perfect. Built to convert.",
    description: "We craft world-class web experiences using Next.js, React, and modern stacks — optimized for speed, search engines, and real business results.",
    accent: "#38bdf8", glow: "rgba(56,189,248,0.18)", glowDim: "rgba(56,189,248,0.07)", accent2: "#818cf8", accentRgb: "56,189,248",
    icon: "web", number: "01",
    stats: [{ num: "150+", label: "Sites Launched", icon: "🌐" }, { num: "99%", label: "Uptime SLA", icon: "⚡" }, { num: "< 1s", label: "Load Time", icon: "🚀" }, { num: "100", label: "Lighthouse Score", icon: "💯" }],
    features: [
      { title: "Next.js & React", desc: "SSR, static generation, ISR, and edge functions — the full modern stack.", icon: "⚡", tag: "Core" },
      { title: "SEO Domination", desc: "Structured data, meta tags, sitemaps, and Core Web Vitals tuning baked in.", icon: "🔍", tag: "Growth" },
      { title: "Pixel-Perfect UI", desc: "Figma-to-code with obsessive attention to spacing, type, and motion.", icon: "🎨", tag: "Design" },
      { title: "Performance First", desc: "Image optimization, code splitting, edge caching — every millisecond counts.", icon: "🚀", tag: "Speed" },
      { title: "CMS Integration", desc: "Contentful, Sanity, Strapi — editors update content without touching code.", icon: "📝", tag: "Content" },
      { title: "E-commerce Ready", desc: "Cart, checkout, payments, order management — from zero to revenue.", icon: "🛒", tag: "Revenue" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep-dive into goals, users, and technical requirements." },
      { step: "02", title: "Design", desc: "Wireframes → mockups → interactive Figma prototypes." },
      { step: "03", title: "Build", desc: "Clean, scalable Next.js code with daily progress updates." },
      { step: "04", title: "QA", desc: "Cross-browser, performance, and accessibility testing." },
      { step: "05", title: "Launch", desc: "Zero-downtime deploy with 30 days post-launch support." },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "Figma"],
    cta: "Get Your Website Built",
    quote: { text: "They shipped our entire platform in 6 weeks. Performance went from 45 to 98.", author: "Rohan M.", role: "CTO, FinTech Startup" },
  },
  "mobile-app-development": {
    title: "Mobile Apps", fullTitle: "Mobile App Development",
    tagline: "Native performance. Cross-platform reach.",
    description: "High-performance Android & iOS apps built with Flutter and native technologies — smooth, scalable, and ready for millions of users.",
    accent: "#a78bfa", glow: "rgba(167,139,250,0.18)", glowDim: "rgba(167,139,250,0.07)", accent2: "#f472b6", accentRgb: "167,139,250",
    icon: "mobile", number: "02",
    stats: [{ num: "80+", label: "Apps Shipped", icon: "📱" }, { num: "4.8★", label: "Avg Rating", icon: "⭐" }, { num: "2M+", label: "Downloads", icon: "📥" }, { num: "60fps", label: "Smooth", icon: "🎯" }],
    features: [
      { title: "Flutter First", desc: "One codebase, two stores — pixel-perfect on iOS and Android.", icon: "📱", tag: "Core" },
      { title: "Native Modules", desc: "Camera, biometrics, payments, push notifications — all wired up.", icon: "🔧", tag: "Hardware" },
      { title: "Offline First", desc: "Apps that work without internet and sync seamlessly when back online.", icon: "📡", tag: "Resilience" },
      { title: "App Store Ready", desc: "Metadata, screenshots, review management — end to end.", icon: "🏪", tag: "Launch" },
      { title: "Real-time Features", desc: "WebSockets, Firebase, live chat, and live data sync.", icon: "⚡", tag: "Live" },
      { title: "Analytics Built In", desc: "Crash reporting, behavior tracking, and A/B testing from day one.", icon: "📊", tag: "Insights" },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Map user journeys, define MVP, choose the right stack." },
      { step: "02", title: "Wireframes", desc: "Low-fi to high-fi flows in Figma, validated with real users." },
      { step: "03", title: "UI Design", desc: "Platform-native design with custom motion and microinteractions." },
      { step: "04", title: "Development", desc: "Flutter build with CI/CD pipelines and automated testing." },
      { step: "05", title: "Store Launch", desc: "Submission, review handling, and monitored launch day." },
    ],
    tech: ["Flutter", "Dart", "Firebase", "Swift", "Kotlin", "REST APIs", "WebSockets", "Figma"],
    cta: "Build Your App",
    quote: { text: "Our app hit #3 in the Food category on launch day. Flutter performance is insane.", author: "Sneha K.", role: "Founder, FoodTech" },
  },
  "shopify-development": {
    title: "Shopify", fullTitle: "Shopify Development",
    tagline: "Stores that sell. Themes that convert.",
    description: "Custom Shopify stores, themes, and automation for scaling your ecommerce business — from first sale to 8-figure revenue.",
    accent: "#34d399", glow: "rgba(52,211,153,0.18)", glowDim: "rgba(52,211,153,0.07)", accent2: "#38bdf8", accentRgb: "52,211,153",
    icon: "shopify", number: "03",
    stats: [{ num: "60+", label: "Stores Built", icon: "🏪" }, { num: "3.2×", label: "CVR Lift", icon: "📈" }, { num: "₹10Cr+", label: "Revenue Generated", icon: "💰" }, { num: "100%", label: "On-time Delivery", icon: "✅" }],
    features: [
      { title: "Custom Themes", desc: "Bespoke Liquid themes built for your brand — zero templates, zero compromise.", icon: "🎨", tag: "Brand" },
      { title: "CRO Focused", desc: "Product page, checkout, and cart UX relentlessly tuned to sell more.", icon: "📈", tag: "Revenue" },
      { title: "App Integrations", desc: "Klaviyo, Yotpo, Recharge, Bold — your entire stack wired up perfectly.", icon: "🔌", tag: "Stack" },
      { title: "Shopify Plus", desc: "Scripts, Flows, B2B, and custom checkout for enterprise merchants.", icon: "⭐", tag: "Enterprise" },
      { title: "Speed Optimization", desc: "Sub-2s load times — because every 100ms costs you real revenue.", icon: "⚡", tag: "Speed" },
      { title: "Full Automation", desc: "Order workflows, inventory alerts, email flows — all on autopilot.", icon: "🤖", tag: "Ops" },
    ],
    process: [
      { step: "01", title: "Store Audit", desc: "Full UX and conversion analysis of your existing store." },
      { step: "02", title: "Strategy", desc: "CRO plan, theme architecture, and app stack selection." },
      { step: "03", title: "Development", desc: "Custom Liquid theme with all integrations connected." },
      { step: "04", title: "QA & Launch", desc: "Device testing, speed audit, and monitored go-live." },
      { step: "05", title: "Growth", desc: "Monthly CRO sprints and ongoing optimization support." },
    ],
    tech: ["Shopify Plus", "Liquid", "JavaScript", "Klaviyo", "Recharge", "Bold", "Yotpo", "Figma"],
    cta: "Build My Shopify Store",
    quote: { text: "Revenue went from ₹80L to ₹3Cr in 4 months after the redesign. Best investment we made.", author: "Priya S.", role: "Founder, D2C Brand" },
  },
  "custom-software-development": {
    title: "Software", fullTitle: "Custom Software Development",
    tagline: "Tailored systems. Infinite scale.",
    description: "Bespoke SaaS platforms, dashboards, APIs, and enterprise software — built exactly for your workflow, not the other way around.",
    accent: "#fb923c", glow: "rgba(251,146,60,0.18)", glowDim: "rgba(251,146,60,0.07)", accent2: "#facc15", accentRgb: "251,146,60",
    icon: "code", number: "04",
    stats: [{ num: "40+", label: "Products Shipped", icon: "🛠️" }, { num: "99.9%", label: "Uptime SLA", icon: "🔥" }, { num: "10M+", label: "API Calls/Day", icon: "📡" }, { num: "0", label: "Security Breaches", icon: "🔐" }],
    features: [
      { title: "SaaS Platforms", desc: "Multi-tenant SaaS with auth, billing, roles, and built-in analytics.", icon: "☁️", tag: "Core" },
      { title: "REST & GraphQL", desc: "Scalable, versioned, documented APIs built for seamless integration.", icon: "🔗", tag: "API" },
      { title: "Admin Dashboards", desc: "Internal tools, data dashboards, and back-office systems that scale.", icon: "📊", tag: "Internal" },
      { title: "Enterprise Security", desc: "RBAC, audit logs, SSO, and OWASP-compliant architecture throughout.", icon: "🔐", tag: "Security" },
      { title: "Cloud Native", desc: "Docker, Kubernetes, AWS/GCP deployments with full CI/CD pipelines.", icon: "⚙️", tag: "DevOps" },
      { title: "Data Engineering", desc: "ETL pipelines, data warehousing, and real-time analytics at scale.", icon: "🗄️", tag: "Data" },
    ],
    process: [
      { step: "01", title: "Requirements", desc: "Technical discovery, user stories, and full system design." },
      { step: "02", title: "Architecture", desc: "Database schema, API contracts, and infrastructure planning." },
      { step: "03", title: "Development", desc: "Agile sprints with weekly demos and continuous delivery." },
      { step: "04", title: "Security Review", desc: "Penetration testing, OWASP audit, and compliance checks." },
      { step: "05", title: "Deployment", desc: "Zero-downtime launch with monitoring and alerting live." },
    ],
    tech: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL", "Kubernetes"],
    cta: "Start Your Software Project",
    quote: { text: "They built our entire SaaS in 3 months. Solid architecture — we scaled to 50K users with zero issues.", author: "Arjun T.", role: "CTO, B2B SaaS" },
  },
  "ui-ux-design": {
    title: "UI/UX", fullTitle: "UI/UX Design",
    tagline: "Interfaces people love. Conversions that follow.",
    description: "User-centered interfaces designed to maximize engagement and conversion — from deep research and wireframes to polished, developer-ready design systems.",
    accent: "#f472b6", glow: "rgba(244,114,182,0.18)", glowDim: "rgba(244,114,182,0.07)", accent2: "#a78bfa", accentRgb: "244,114,182",
    icon: "design", number: "05",
    stats: [{ num: "200+", label: "Screens Designed", icon: "🎨" }, { num: "4.9★", label: "Client Rating", icon: "⭐" }, { num: "40%", label: "Avg CVR Lift", icon: "📈" }, { num: "48hr", label: "First Mockup", icon: "⚡" }],
    features: [
      { title: "User Research", desc: "Interviews, surveys, and competitor analysis to ground every decision.", icon: "🔬", tag: "Research" },
      { title: "Wireframes", desc: "Low-fi layouts that validate structure before a pixel is polished.", icon: "✏️", tag: "Structure" },
      { title: "Design Systems", desc: "Scalable Figma component libraries with tokens, variants, and full docs.", icon: "🧩", tag: "Scale" },
      { title: "Prototyping", desc: "Click-through prototypes you can test, share, and validate.", icon: "🖱️", tag: "Test" },
      { title: "Usability Testing", desc: "Real user sessions to catch friction before dev starts.", icon: "👁️", tag: "Validate" },
      { title: "Dev Handoff", desc: "Figma with specs, assets, and annotations — devs start immediately.", icon: "📦", tag: "Handoff" },
    ],
    process: [
      { step: "01", title: "Research", desc: "User interviews, heuristic analysis, and competitor benchmarking." },
      { step: "02", title: "IA", desc: "Information architecture, user flows, and content mapping." },
      { step: "03", title: "Wireframes", desc: "Low-fi screens reviewed and validated with stakeholders." },
      { step: "04", title: "Visual Design", desc: "High-fi mockups with motion specs and a full design system." },
      { step: "05", title: "Handoff", desc: "Figma dev mode, component docs, and all asset exports." },
    ],
    tech: ["Figma", "FigJam", "Framer", "Lottie", "Zeplin", "Maze", "Hotjar", "Miro"],
    cta: "Get a Design Proposal",
    quote: { text: "Our onboarding completion went from 34% to 79% after the UX overhaul. Genuinely incredible work.", author: "Meera L.", role: "Head of Product" },
  },
  "ai-integration": {
    title: "AI", fullTitle: "AI Integration",
    tagline: "Smarter products. Automated futures.",
    description: "Integrate AI, chatbots, and automation into your products — LLM-powered features, RAG pipelines, and intelligent automation that works in production.",
    accent: "#facc15", glow: "rgba(250,204,21,0.16)", glowDim: "rgba(250,204,21,0.06)", accent2: "#fb923c", accentRgb: "250,204,21",
    icon: "ai", number: "06",
    stats: [{ num: "30+", label: "AI Products Built", icon: "🧠" }, { num: "10×", label: "Productivity Gain", icon: "⚡" }, { num: "90%", label: "Accuracy Rate", icon: "🎯" }, { num: "< 200ms", label: "Response Time", icon: "🚀" }],
    features: [
      { title: "LLM Integration", desc: "GPT-4, Claude, Gemini — the right model for your use case, properly wired.", icon: "🧠", tag: "Foundation" },
      { title: "RAG Pipelines", desc: "AI that answers from your actual data, not hallucinations.", icon: "🗂️", tag: "Accuracy" },
      { title: "AI Chatbots", desc: "Intelligent support bots with memory, escalation, and tone alignment.", icon: "💬", tag: "Support" },
      { title: "Workflow Automation", desc: "n8n, Zapier, and custom pipelines that eliminate manual work.", icon: "⚙️", tag: "Ops" },
      { title: "Document AI", desc: "Extract and act on data from PDFs, emails, and web forms.", icon: "📄", tag: "Data" },
      { title: "AI-Powered Search", desc: "Semantic search, vector databases, and recommendation engines.", icon: "🔍", tag: "Discovery" },
    ],
    process: [
      { step: "01", title: "AI Audit", desc: "Map exactly where AI creates the most value in your product." },
      { step: "02", title: "Use Case Design", desc: "Define success metrics, data needs, and model selection." },
      { step: "03", title: "Prototype", desc: "Working proof-of-concept delivered in under 2 weeks." },
      { step: "04", title: "Integration", desc: "Production-grade integration with your existing tech stack." },
      { step: "05", title: "Fine-tuning", desc: "Eval loops, prompt engineering, and continuous improvement." },
    ],
    tech: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python", "FastAPI", "n8n", "Weaviate"],
    cta: "Add AI to My Product",
    quote: { text: "Our AI chatbot handles 70% of support tickets autonomously. ROI was positive in week 3.", author: "Dev P.", role: "VP Operations" },
  },
};

export const OTHER_SERVICES = [
  { slug: "web-development", label: "Web Dev", accent: "#38bdf8", number: "01" },
  { slug: "mobile-app-development", label: "Mobile Apps", accent: "#a78bfa", number: "02" },
  { slug: "shopify-development", label: "Shopify", accent: "#34d399", number: "03" },
  { slug: "custom-software-development", label: "Software", accent: "#fb923c", number: "04" },
  { slug: "ui-ux-design", label: "UI/UX", accent: "#f472b6", number: "05" },
  { slug: "ai-integration", label: "AI", accent: "#facc15", number: "06" },
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceData[slug as keyof typeof serviceData];
  if (!s) return notFound();
  const others = OTHER_SERVICES.filter((o) => o.slug !== slug);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
        .pg{font-family:'Inter',sans-serif;}
        .mn{font-family:'Space Mono',monospace;}
        .dn{font-family:'Syne',sans-serif;}

        @keyframes fade-up   {from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}
        @keyframes breathe   {0%,100%{opacity:.28;transform:scale(1)}50%{opacity:.6;transform:scale(1.12)}}
        @keyframes spin-cw   {to{transform:rotate(360deg)}}
        @keyframes spin-ccw  {to{transform:rotate(-360deg)}}
        @keyframes float-y   {0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes shimmer   {from{background-position:-300% center}to{background-position:300% center}}
        @keyframes pdot      {0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)}55%{box-shadow:0 0 0 8px rgba(74,222,128,0)}}
        @keyframes marquee   {to{transform:translateX(-50%)}}
        @keyframes scan      {0%{top:-20%}100%{top:120%}}
        @keyframes glitch    {0%,88%,100%{clip-path:none;transform:skewX(0)}89%{clip-path:polygon(0 15%,100% 15%,100% 36%,0 36%);transform:skewX(-2deg) translateX(-5px)}91%{clip-path:polygon(0 60%,100% 60%,100% 78%,0 78%);transform:skewX(2deg) translateX(5px)}94%{clip-path:none}}
        @keyframes border-run{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes flicker   {0%,96%,100%{opacity:1}97%{opacity:.5}98%{opacity:1}99%{opacity:.65}}
        @keyframes pop       {from{opacity:0;transform:scale(.85) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}

        .a1{animation:fade-up .85s cubic-bezier(.16,1,.3,1) .05s both}
        .a2{animation:fade-up .85s cubic-bezier(.16,1,.3,1) .2s both}
        .a3{animation:fade-up .85s cubic-bezier(.16,1,.3,1) .35s both}
        .a4{animation:fade-up .85s cubic-bezier(.16,1,.3,1) .5s both}
        .a5{animation:fade-up .85s cubic-bezier(.16,1,.3,1) .65s both}

        .blob   {animation:breathe 7s ease-in-out infinite;filter:blur(36px);pointer-events:none;}
        .r1     {animation:spin-cw  24s linear infinite;}
        .r2     {animation:spin-ccw 36s linear infinite;}
        .r3     {animation:spin-cw  52s linear infinite;}
        .flt    {animation:float-y 5s ease-in-out infinite;}
        .pg-dot {animation:pdot 2.4s ease-in-out infinite;}
        .mq     {animation:marquee 30s linear infinite;}
        .spin   {animation:spin-cw 18s linear infinite;}
        .glitch {animation:glitch 10s ease-in-out infinite;}
        .flicker{animation:flicker 6s ease-in-out infinite;}
        .sh:hover{animation:shimmer 1.8s linear infinite;}

        .scan-host{overflow:hidden;position:relative;}
        .scanner  {position:absolute;left:0;right:0;height:2px;opacity:.5;animation:scan 4s ease-in-out infinite;}

        .dot-grid{background-image:radial-gradient(rgba(255,255,255,.055) 1px,transparent 1px);background-size:28px 28px;}
        .line-grid{background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:60px 60px;}

        .gb::before{content:'';position:absolute;inset:-1px;border-radius:inherit;background:linear-gradient(135deg,var(--a) 0%,var(--a2) 50%,var(--a) 100%);background-size:200% 200%;animation:border-run 4s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;}

        .snum{animation:pop .7s cubic-bezier(.16,1,.3,1) var(--d,0s) both;}

        .tp{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border-radius:9999px;border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.03);font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.3);transition:all .25s cubic-bezier(.16,1,.3,1);cursor:default;}
        .tp:hover{border-color:var(--a);color:var(--a);background:var(--gl);transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px var(--gd);}

        .qc{border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.02);transition:all .3s ease;}
        .qc:hover{border-color:rgba(255,255,255,.13);background:rgba(255,255,255,.04);transform:translateY(-4px);}
      `}</style>

      <div className="pg min-h-screen bg-[#04040c]"
        style={{ "--a": s.accent, "--a2": s.accent2, "--gl": s.glow, "--gd": s.glowDim } as React.CSSProperties}>

        {/* ── Marquee ── */}
        <div className="overflow-hidden border-b border-white/[0.05]"
          style={{ background: `rgba(${s.accentRgb},0.04)` }}>
          <div className="mq flex w-max py-3">
            {Array(20).fill(null).map((_, i) => (
              <div key={i} className="mn flex items-center gap-2 px-6 text-[.52rem] uppercase tracking-[.25em] whitespace-nowrap select-none"
                style={{ color: i%3===0 ? s.accent+"80" : i%3===1 ? "rgba(255,255,255,.08)" : s.accent2+"45" }}>
                <span className="inline-block w-0.5 h-4 rounded-full"
                  style={{ background: i%2===0 ? `linear-gradient(to bottom,${s.accent},transparent)` : "rgba(255,255,255,.1)" }} />
                {s.number} · {s.fullTitle}
              </div>
            ))}
          </div>
        </div>

        <ServiceHero s={s} slug={slug} />

        {/* ── STATS ── */}
        <div className="relative border-y border-white/[0.05] overflow-hidden">
          <div className="dot-grid absolute inset-0 pointer-events-none opacity-60" />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%,rgba(${s.accentRgb},.04),transparent)` }} />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {s.stats.map((st, i) => (
                <div key={st.label}
                  className="group flex flex-col items-center gap-2.5 py-12 px-6 border-r border-white/[0.05] last:border-r-0 hover:bg-white/[0.025] transition-all duration-300 cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 80% 60% at 50% 100%,${s.glowDim},transparent)` }} />
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">{st.icon}</div>
                  <span className="snum dn font-black leading-none relative z-10 transition-all duration-300 group-hover:scale-105"
                    style={{ "--d": `${i*0.1}s`, color: s.accent, fontSize: "clamp(1.8rem,4vw,2.8rem)" } as React.CSSProperties}>
                    {st.num}
                  </span>
                  <span className="mn text-[.54rem] uppercase tracking-[.18em] text-white/22 text-center relative z-10">{st.label}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-2/3 transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(90deg,transparent,${s.accent},transparent)` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <ServiceFeatures s={s} />
        <ServiceProcess s={s} />

        {/* ── TECH STACK ── */}
        <section className="relative py-28 px-6 border-t border-white/[0.04] overflow-hidden">
          <div className="blob absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(circle,${s.glowDim} 0%,transparent 65%)` }} />
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
            <div className="flex flex-col gap-5 lg:max-w-xs">
              <div className="mn text-[.56rem] uppercase tracking-[.24em] flex items-center gap-2 text-white/20">
                <span className="w-8 h-px" style={{ background: `linear-gradient(to right,${s.accent2},transparent)` }} />
                Tech Stack
              </div>
              <h2 className="dn text-[clamp(2rem,4vw,3.2rem)] font-black tracking-tight leading-tight text-white">
                The tools<br /><span style={{ color: s.accent }}>we live by.</span>
              </h2>
              <p className="text-white/25 text-sm leading-relaxed">Carefully chosen, deeply mastered — every tool earns its place.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end max-w-xl">
              {s.tech.map((t) => <span key={t} className="tp">{t}</span>)}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="py-20 px-6 border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto">
            <div className="qc rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle,${s.glowDim} 0%,transparent 65%)`, filter: "blur(20px)" }} />
              <div className="absolute -top-1 -left-1 w-0.5 h-20" style={{ background: `linear-gradient(to bottom,${s.accent},transparent)` }} />
              <div className="absolute -top-1 -left-1 h-0.5 w-20" style={{ background: `linear-gradient(to right,${s.accent},transparent)` }} />
              <div className="dn select-none -mt-6 -mb-10 ml-1" style={{ fontSize:"8rem", lineHeight:1, color: s.accent+"10", WebkitTextStroke:`1px ${s.accent}15`, fontWeight:900 }}>&ldquo;</div>
              <p className="text-white/70 text-xl md:text-2xl leading-relaxed font-medium italic mb-10 relative z-10 max-w-2xl">{s.quote.text}</p>
              <div className="flex items-center justify-between flex-wrap gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center dn font-black text-base border-2"
                    style={{ background: s.glow, borderColor: s.accent+"50", color: s.accent }}>{s.quote.author[0]}</div>
                  <div>
                    <p className="font-semibold text-white text-sm">{s.quote.author}</p>
                    <p className="mn text-[.56rem] uppercase tracking-[.14em] mt-0.5" style={{ color: s.accent+"70" }}>{s.quote.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_,i)=>(
                    <svg key={i} className="w-5 h-5" fill="#facc15" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-36 px-6 border-t border-white/[0.04] overflow-hidden">
          <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(ellipse,${s.glowDim} 0%,transparent 65%)` }} />
          <div className="dot-grid absolute inset-0 opacity-50 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08] flex flex-col items-center text-center gap-9"
              style={{ background:`radial-gradient(ellipse at 50% 0%,rgba(${s.accentRgb},.08),transparent 60%), rgba(255,255,255,.015)`, boxShadow:`0 0 120px ${s.glowDim}, inset 0 1px 0 rgba(255,255,255,.06)`, padding:"80px 48px" }}>
              {["top-0 left-0 h-20 w-px","top-0 left-0 h-px w-20","bottom-0 right-0 h-20 w-px","bottom-0 right-0 h-px w-20"].map((c,i)=>(
                <div key={i} className={`absolute ${c} pointer-events-none opacity-40`}
                  style={{ background: i<2 ? `linear-gradient(${i===0?"to bottom":"to right"},${s.accent},transparent)` : `linear-gradient(${i===2?"to top":"to left"},${s.accent2},transparent)` }} />
              ))}
              <div className="mn text-[.58rem] uppercase tracking-[.24em] flex items-center gap-2.5 text-white/20">
                <span className="pg-dot w-2 h-2 rounded-full bg-green-400" />
                Free 30-min discovery call · No commitment
              </div>
              <div className="dn text-[clamp(2.2rem,6vw,5rem)] font-black leading-[1.02] tracking-tight">
                <span className="text-white">Ready to build</span><br />
                <span className="flicker" style={{ background:`linear-gradient(135deg,${s.accent},${s.accent2},${s.accent})`,backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                  something legendary?
                </span>
              </div>
              <p className="text-white/28 text-base leading-relaxed max-w-md">
                We&apos;ll understand your goals, map the project, and send a detailed proposal — all within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact"
                  className="sh relative gb inline-flex items-center gap-3 rounded-full font-black text-base text-[#04040c] tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.05]"
                  style={{ background:`linear-gradient(135deg,${s.accent},${s.accent2},${s.accent})`,backgroundSize:"300% auto",boxShadow:`0 0 50px ${s.glow},0 16px 50px rgba(0,0,0,.65)`,padding:"18px 44px" }}>
                  <span className="spin absolute inset-[-10px] rounded-full border border-dashed pointer-events-none" style={{ borderColor: s.accent+"18" }} />
                  <span className="relative z-10 flex items-center gap-3">
                    {s.cta}
                    <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                      <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
                <Link href="/services"
                  className="inline-flex items-center gap-2 rounded-full font-semibold text-sm text-white/38 border border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/22 hover:bg-white/[0.07] transition-all duration-200"
                  style={{ padding:"18px 32px" }}>
                  All Services →
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Free Consultation","Reply in 24hrs","No Lock-in Contracts","Pune-based · Global reach"].map((t)=>(
                  <span key={t} className="mn text-[.52rem] uppercase tracking-[.1em] text-white/16 px-3.5 py-1.5 rounded-full border border-white/[0.05]">✓ {t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <OtherServices others={others} />
      </div>
    </>
  );
}