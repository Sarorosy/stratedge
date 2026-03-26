import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Menu, X, Phone, Mail, MapPin,
  Clock, Star, Quote, CheckCircle, TrendingUp, Users,
  Award, Target, Zap, Search, BarChart2, Share2, Globe,
  Layers, Calendar, ChevronDown, MessageCircle, Send,
  Facebook, Instagram, Youtube, Play
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WA = "https://wa.me/918122652903";

/* ── Google Fonts injected once ── */
function useGoogleFonts() {
  useEffect(() => {
    const id = "gf-stratedgee";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}



/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      background: "var(--color-bg)",
      color: "var(--color-text)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
    }}>
      {/* BG texture grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(212,175,80,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,80,0.04) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      {/* Gold glow top-right */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 700, height: 700,
        background: "radial-gradient(circle,rgba(212,175,80,0.12) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Thin diagonal accent */}
      <div style={{
        position: "absolute", top: 0, right: "35%", bottom: 0,
        width: 1, background: "linear-gradient(to bottom,transparent,rgba(212,175,80,0.3),transparent)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "140px 40px 100px", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32,
              border: "1px solid rgba(212,175,80,0.35)", padding: "8px 18px",
            }}>
              <span style={{ width: 6, height: 6, background: "var(--color-accent)", display: "block" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
                Chennai's #1 Digital Agency
              </span>
            </div>

              <h1 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(48px,6vw,80px)",
              fontWeight: 900, color: "var(--color-text-strong)",
              lineHeight: 1.05, marginBottom: 28, letterSpacing: -1,
            }}>
              We Drive<br />
              <span style={{ color: "var(--color-accent)" }}>Digital</span><br />
              Growth.
            </h1>

            <p style={{ color: "var(--color-text-soft)", fontSize: 16, lineHeight: 1.85, maxWidth: 460, marginBottom: 44, fontWeight: 300 }}>
              Stratedgee delivers impactful campaigns that accelerate growth, engagement, and measurable success for ambitious brands.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                color: "var(--color-accent-contrast)", padding: "16px 36px",
                fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 700,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 10,
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Start Your Growth <ArrowRight size={15} />
              </a>
              <a href="#services" style={{
                color: "var(--color-text-strong)", padding: "16px 36px",
                fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "border-color 0.2s,color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-soft)"; e.currentTarget.style.color = "var(--color-text-strong)"; }}
              >
                <Play size={13} fill="currentColor" /> See Our Work
              </a>
            </div>
          </div>

          {/* Right – stats card cluster */}
          <div style={{ position: "relative" }}>
            {/* Main card */}
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "40px", position: "relative",
            }}>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
                Performance Snapshot
              </div>

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--color-accent-soft)" }}>
                {[
                  { n: "50+", l: "Projects\nCompleted", icon: Award },
                  { n: "30+", l: "Satisfied\nClients", icon: Users },
                  { n: "90%+", l: "Retention\nRate", icon: TrendingUp },
                  { n: "4+", l: "Years\nExperience", icon: Target },
                ].map(({ n, l, icon: Icon }) => (
                  <div key={n} style={{
                    background: "var(--color-surface-strong)", padding: "28px 24px",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--color-surface)"}
                    onMouseLeave={e => e.currentTarget.style.background = "var(--color-surface-strong)"}
                  >
                    <Icon size={18} color="var(--color-accent)" style={{ marginBottom: 12, display: "block" }} />
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1 }}>{n}</div>
                    <div style={{ color: "var(--color-text-faint)", fontSize: 12, marginTop: 6, lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 400 }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--color-accent-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>Trusted across Chennai & Tamil Nadu</span>
                <div style={{ display: "flex", gap: 0 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: -20, left: -20,
              background: "var(--color-accent)", padding: "12px 20px",
              fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700,
              color: "var(--color-accent-contrast)", letterSpacing: 1.5, textTransform: "uppercase",
            }}>
              🏆 Top Agency 2024
            </div>
          </div>
        </div>

        
      </div>

      <style>{`@media(max-width:900px){section>div>div{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE / TICKER
═══════════════════════════════════════════════ */
function Marquee() {
  const items = ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Web Design", "Branding", "Event Management", "Digital Academy"];

  return (
      <div style={{ background: "var(--color-accent)", overflow: "hidden", padding: "14px 0", position: "relative" }}>
      <div style={{
        display: "flex", gap: 0, animation: "marquee 28s linear infinite", whiteSpace: "nowrap",
      }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700,
            color: "var(--color-accent-contrast)", letterSpacing: 3, textTransform: "uppercase",
            padding: "0 40px", display: "inline-flex", alignItems: "center", gap: 16,
          }}>
            {item}
            <span style={{ width: 4, height: 4, background: "var(--color-accent-contrast)", display: "inline-block", opacity: 0.4 }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT SECTION
═══════════════════════════════════════════════ */
function About() {
  const points = [
    "World-class Search Engine Optimization",
    "Creative & Professional Content Writing",
    "Optimize Your Business to the Next Level",
  ];

  return (
    <section id="about" style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>About Company</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(36px,4vw,52px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 28, letterSpacing: -0.5,
            }}>
              Proven Expertise.<br />
              <span style={{ color: "var(--color-accent)" }}>Real Results.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 32, fontWeight: 300 }}>
              As a leading digital marketing agency in Chennai, Stratedgee combines creativity with technology to deliver end-to-end solutions. Whether you are a startup or an enterprise, our services are built to engage your audience and optimize your brand's digital presence.
            </p>

            <div style={{ marginBottom: 40 }}>
              {points.map((p) => (
                <div key={p} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 18, height: 18, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={10} color="var(--color-accent)" />
                  </div>
                  <span style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>

            {/* Mission quote */}
            <div style={{ borderLeft: "2px solid var(--color-accent)", paddingLeft: 24, marginBottom: 36 }}>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontStyle: "italic", fontFamily: "'Playfair Display',serif" }}>
                "We create results-driven strategies that elevate your brand, connect with your audience, and drive sustainable growth."
              </p>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              color: "var(--color-accent)", textDecoration: "none", fontSize: 12,
              fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
              borderBottom: "1px solid var(--color-accent-soft)", paddingBottom: 4,
              transition: "gap 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.gap = "18px"}
              onMouseLeave={e => e.currentTarget.style.gap = "10px"}
            >
              Get Free Consultation <ArrowRight size={14} />
            </a>
          </div>

          {/* Right – experience badge + sub-stats */}
          <div>
            {/* Badge */}
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "50px 40px", textAlign: "center", marginBottom: 3,
            }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 80, fontWeight: 900, color: "var(--color-accent)", lineHeight: 1 }}>4+</div>
              <div style={{ color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginTop: 8 }}>Years of Excellence</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {[
                { n: "50+", l: "Projects" }, { n: "30+", l: "Clients" },
                { n: "15", l: "Team Members" }, { n: "Chennai", l: "Headquarters" },
              ].map(({ n, l }) => (
                <div key={l} style={{ background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)", padding: "24px 20px" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)" }}>{n}</div>
                  <div style={{ color: "var(--color-text-faint)", fontSize: 12, marginTop: 4, letterSpacing: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════ */
function Services() {
  const services = [
    { icon: Search, num: "01", title: "Search Engine Optimization", short: "SEO", desc: "Rank higher on Google and drive organic traffic with strategic keyword research, technical SEO, and local optimization." },
    { icon: Share2, num: "02", title: "Social Media Marketing", short: "SMM", desc: "Build and manage your brand presence across Facebook, Instagram, LinkedIn with content creation and paid campaigns." },
    { icon: BarChart2, num: "03", title: "Performance Marketing", short: "Paid Ads", desc: "Data-driven paid advertising on Google Ads, Meta Ads, and YouTube Ads. Maximum ROI with A/B testing." },
    { icon: Globe, num: "04", title: "Web Design & Development", short: "Web", desc: "Fast, mobile-responsive, conversion-optimized websites built with WordPress and modern frameworks." },
    { icon: Layers, num: "05", title: "Branding & Identity", short: "Brand", desc: "Build a powerful brand identity with logo design, brand guidelines, visual identity and strategy." },
    { icon: Calendar, num: "06", title: "Event Management", short: "Events", desc: "Full-cycle event planning for corporate events, product launches, conferences, and exhibitions." },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 70, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>What We Do</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
              Comprehensive<br />Digital Services
            </h2>
          </div>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 2,
            textTransform: "uppercase", textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-soft)"}
          >
            View All Services <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
          {services.map(({ icon: Icon, num, title, short, desc }) => (
            <div
              key={num}
              onMouseEnter={() => setHovered(num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === num ? "var(--color-surface-strong)" : "var(--color-surface-alt)",
                border: hovered === num ? '1px solid var(--color-border-strong)' : '1px solid var(--color-border-soft)',
                padding: "40px 32px",
                cursor: "default",
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: hovered === num ? 60 : 0, height: 3,
                background: "var(--color-accent)", transition: "width 0.3s",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                <div style={{
                  width: 48, height: 48,
                  border: hovered === num ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "border-color 0.25s",
                }}>
                  <Icon size={20} color="var(--color-accent)" />
                </div>
                <span style={{ color: "rgba(255,255,255,0.12)", fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700 }}>{num}</span>
              </div>

              <div style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>{short}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "var(--color-text-strong)", fontSize: 20, fontWeight: 600, marginBottom: 14, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>

              <div style={{
                marginTop: 28, display: "flex", alignItems: "center", gap: 8,
                color: hovered === num ? "var(--color-accent)" : "var(--color-text-faint)",
                fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600,
                transition: "color 0.25s",
              }}>
                Learn More <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <div style={{ display: "inline-block", border: "1px solid var(--color-border)", padding: "30px 50px", background: "var(--color-surface-alt)" }}>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, marginBottom: 18, fontWeight: 300 }}>
              Not sure which service fits your business?
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
              padding: "13px 32px", fontSize: 12, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            }}>
              <MessageCircle size={14} /> Get Free Strategy Call
            </a>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){section>div>div:nth-child(2){grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY CHOOSE US
═══════════════════════════════════════════════ */
function WhyUs() {
  const reasons = [
    { icon: Target, title: "Results-Driven Approach", desc: "Every campaign is built around measurable KPIs. We don't just run campaigns — we engineer growth." },
    { icon: TrendingUp, title: "90%+ Retention Rate", desc: "Our client retention speaks louder than any award. Trust earned through consistent performance." },
    { icon: Zap, title: "AI-Powered Strategies", desc: "We leverage cutting-edge AI tools to stay ahead of the curve and deliver smarter outcomes." },
    { icon: Award, title: "Transparent Reporting", desc: "Monthly detailed performance reports. No fluff, no jargon — just clear data and insights." },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          {/* Left text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,4vw,52px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 24 }}>
              The Agency<br />That <span style={{ color: "var(--color-accent)" }}>Performs.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.9, maxWidth: 420, fontWeight: 300 }}>
              Our marketing agency delivers proven strategies, creative solutions, and measurable results to help your business grow, boost visibility, and outperform competition.
            </p>

            {/* Marketing skill bar */}
            <div style={{ marginTop: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Marketing Excellence</span>
                <span style={{ color: "var(--color-accent)", fontFamily: "'Playfair Display',serif", fontWeight: 600 }}>95%</span>
              </div>
              <div style={{ height: 2, background: "var(--color-border-soft)" }}>
                <div style={{ width: "95%", height: "100%", background: "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))", transition: "width 1s ease" }} />
              </div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 44,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
              padding: "14px 32px", fontSize: 12, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            }}>
              Contact Us <ArrowRight size={14} />
            </a>
          </div>

          {/* Right – reasons list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{
                background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                padding: "28px 28px", display: "flex", gap: 24, alignItems: "flex-start",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
              >
                <div style={{ width: 44, height: 44, border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size={18} color="var(--color-accent)" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", color: "var(--color-text-strong)", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{title}</div>
                  <div style={{ color: "var(--color-text-faint)", fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FOUNDER + TEAM
═══════════════════════════════════════════════ */
function Team() {
  const team = [
    { name: "Rajendra Prasad", role: "Founder & Digital Strategist", initial: "R", accent: "#D4AF50" },
    { name: "RenukaDevi", role: "Digital Marketing Manager", initial: "R", accent: "#8BA0B4" },
    { name: "Kavya", role: "Business Dev Manager", initial: "K", accent: "#9B8AB4" },
    { name: "Diana", role: "Client Sourcing Executive", initial: "D", accent: "#8AB4A0" },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>The People</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Founder bio */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,3.5vw,46px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 6, letterSpacing: -0.5 }}>
              Mr. Rajendra Prasad
            </h2>
            <div style={{ color: "var(--color-accent)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 24 }}>
              Founder & Digital Strategist
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.95, fontWeight: 300, marginBottom: 20 }}>
              Rajendra Prasad holds a Bachelor's degree in Electronics & Communication Engineering from Vel Tech Technical University. With over 5 years of extensive experience in digital marketing, he combines analytical precision with creative storytelling to excel in the digital space.
            </p>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.95, fontWeight: 300 }}>
              His visionary leadership at The Stratedgee turns market insights into impactful campaigns. Committed to innovation, Rajendra continuously leverages AI-driven solutions to ensure clients stay ahead.
            </p>
          </div>

          {/* Team grid */}
          <div>
            <div style={{ color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 24 }}>
              Our Team of 15 Experts
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {team.map(({ name, role, initial, accent }) => (
                <div key={name} style={{
                  background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                  padding: "28px 24px",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
                >
                  <div style={{
                    width: 46, height: 46,
                    background: `${accent}18`, border: `1px solid ${accent}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700,
                    color: accent, marginBottom: 16,
                  }}>{initial}</div>
                  <div style={{ color: "var(--color-text-strong)", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{name}</div>
                  <div style={{ color: "var(--color-text-faint)", fontSize: 12, lineHeight: 1.5 }}>{role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    { name: "Kanimozhi K.", text: "Helped run social media campaigns with real results. Totally recommended if you're looking to learn digital marketing.", stars: 5 },
    { name: "Kavya Mani", text: "Very professional and supportive. Strategies helped gain more visibility and engagement. Highly recommended to any business.", stars: 5 },
    { name: "Sobana S.", text: "Young and energetic digital marketing team. Creative, responsive and deliver great results. Perfect choice for any brand.", stars: 5 },
    { name: "Ishu Mithra", text: "Best digital marketing agency in Chennai. Social media campaigns brought real results. Highly recommend their branding services.", stars: 5 },
    { name: "Keerthi S.", text: "Incredibly informative and engaging course. Clear and concise teaching style — complex topics made easy to understand.", stars: 5 },
    { name: "P Kaviya", text: "Super interactive course. SEO, social media, and Google Ads explained simply. Very useful — totally recommend.", stars: 5 },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Client Testimonials</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
            What Our Clients<br />Say About Us
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 8 }}>
            <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>
              Real words from real clients. We measure success by the growth of the brands we partner with.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 50 }}>
          {reviews.map(({ name, text, stars }) => (
            <div key={name} style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
              padding: "36px 32px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
            >
              <Quote size={22} color="var(--color-accent-glow)" style={{ marginBottom: 20 }} />
              <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.85, fontWeight: 300, marginBottom: 24, fontStyle: "italic" }}>
                "{text}"
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "var(--color-text-strong)", fontSize: 13, fontWeight: 600 }}>{name}</div>
                  <div style={{ display: "flex", gap: 3, marginTop: 5 }}>
                    {[...Array(stars)].map((_, i) => <Star key={i} size={11} fill="var(--color-accent)" color="var(--color-accent)" />)}
                  </div>
                </div>
                <div style={{ width: 32, height: 32, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "var(--color-accent)", fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700 }}>
                    {name[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ACADEMY PROMO
═══════════════════════════════════════════════ */
function AcademyPromo() {
  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
          padding: "70px 60px", position: "relative", overflow: "hidden",
        }}>
          {/* BG text */}
          <div style={{
            position: "absolute", top: -20, right: -20, fontFamily: "'Playfair Display',serif",
            fontSize: 160, fontWeight: 900, color: "var(--color-accent-glow)", lineHeight: 1,
            userSelect: "none", pointerEvents: "none",
          }}>ACADEMY</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ background: "var(--color-accent)", padding: "4px 12px" }}>
                  <span style={{ color: "var(--color-accent-contrast)", fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Digital Academy</span>
                </div>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.2, marginBottom: 16, letterSpacing: -0.5 }}>
                Launch Your Digital<br />Marketing Career
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.8, maxWidth: 500, fontWeight: 300 }}>
                Expert-led courses with hands-on training, real-world strategies, and industry-recognized certifications. Offline, Online & Self-paced.
              </p>

              <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
                {["8 Modules", "3 Formats", "Certified", "Job Assist"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, background: "var(--color-accent)" }} />
                    <span style={{ color: "var(--color-text-soft)", fontSize: 13 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
                padding: "15px 28px", fontSize: 12, fontWeight: 700,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
              }}>
                Enroll Now <ArrowRight size={14} />
              </a>
              <button style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                background: "transparent", border: "1px solid var(--color-border)",
                color: "var(--color-accent)", padding: "15px 28px", fontSize: 12, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", cursor: "pointer",
              }}>
                View Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section style={{ background: "var(--color-accent)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden" }}>
      {/* BG text */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontFamily: "'Playfair Display',serif", fontSize: 220, fontWeight: 900,
        color: "var(--color-accent-contrast)", lineHeight: 1, whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none",
        opacity: 0.08,
      }}>GROW</div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
          <span style={{ color: "var(--color-text-faint)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Let's Work Together</span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Ready to Transform<br />Your Digital Game?
        </h2>
        <p style={{ color: "var(--color-text-soft)", fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
          Partner with the leading Digital Marketing Agency in Chennai.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--color-accent-contrast)", color: "var(--color-accent)",
            padding: "16px 40px", fontSize: 12, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.85)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--color-accent-contrast)"}
          >
            <MessageCircle size={15} /> Free Consultation
          </a>
          <a href="tel:+918122652903" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(0,0,0,0.3)", color: "var(--color-accent-contrast)",
            padding: "16px 40px", fontSize: 12, fontWeight: 600,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
          }}>
            <Phone size={14} /> +91 8122652903
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FLOATING WHATSAPP
═══════════════════════════════════════════════ */
function WhatsAppFloat() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 200,
      background: "var(--color-accent)", color: "var(--color-accent-contrast)",
      width: 54, height: 54,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "var(--color-shadow)",
      transition: "transform 0.2s, box-shadow 0.2s",
      textDecoration: "none",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "var(--color-shadow)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "var(--color-shadow)"; }}
    >
      <MessageCircle size={24} fill="currentColor" />
    </a>
  );
}

/* ═══════════════════════════════════════════════
   APP
═══════════════════════════════════════════════ */
export default function Home() {
  useGoogleFonts();

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <AcademyPromo />
      <CTA />
      <WhatsAppFloat />
    </div>
  );
}

/* Responsive Enhancements */
<style>{`
  @media (max-width: 900px) {
    /* Hero Section */
    section > div > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    h1 {
      font-size: clamp(32px, 5vw, 60px) !important;
    }

    /* About Section */
    #about > div > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    /* Services Section */
    #services > div > div:last-child {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    .service-card {
      padding: 20px !important;
    }
  }

  @media (max-width: 600px) {
    /* General Adjustments */
    body {
      font-size: 14px !important;
    }
    h1, h2 {
      font-size: clamp(24px, 4vw, 40px) !important;
    }
    p {
      font-size: 14px !important;
    }
  }
`}</style>