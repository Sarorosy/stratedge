import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Menu, X, Phone, Mail, MapPin,
  Clock, Star, Quote, CheckCircle, TrendingUp, Users,
  Award, Target, Zap, Search, BarChart2, Share2, Globe,
  Layers, Calendar, ChevronDown, MessageCircle, Send,
  Facebook, Instagram, Youtube, Play, ExternalLink
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlurText from "../../components/BlurText";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";
import WhatsappFloat from "../../components/WhatsappFloat";
import useSEO from "../../hooks/useSEO";
import LightRays from "../../components/LightRays";

const WA = "https://wa.me/918122652903";

/* ──────────────────────────────────────────── */
/* ANIMATED COUNTER COMPONENT */
/* ──────────────────────────────────────────── */
function AnimatedCounter({ end, suffix = "", duration = 2500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (typeof end === "number") {
              setCount(Math.floor(progress * end));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} style={{ fontSize: 38, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

/* ── Google Fonts injected once ── */




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

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(60px, 10vw, 140px) clamp(16px, 5vw, 40px) clamp(60px, 8vw, 100px)", width: "100%", position: "relative", zIndex: 2 }}>
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

              <BlurText
                text="We Drive Digital Growth"
                className="h1-blur"
                animateBy="words"
                direction="top"
                delay={200}
                onAnimationComplete={() => {}}
              />
              <style>{`
                .h1-blur {
                  font-size: clamp(48px, 6vw, 80px) !important;
                  font-weight: 900 !important;
                  color: var(--color-text-strong) !important;
                  line-height: 1.05 !important;
                  margin-bottom: 28px !important;
                  letter-spacing: -1px !important;
                  display: block !important;
                }
                .h1-blur .word:nth-child(3) {
                  color: var(--color-accent) !important;
                }
              `}</style>

            <p style={{ color: "var(--color-text-soft)", fontSize: 16, lineHeight: 1.85, maxWidth: 460, marginBottom: 44, fontWeight: 300 }}>
              Stratedgee delivers impactful campaigns that accelerate growth, engagement, and measurable success for ambitious brands.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                color: "var(--color-accent-contrast)", padding: "16px 36px",
                fontSize: 12, fontWeight: 700,
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
                fontSize: 12, fontWeight: 600,
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
                  { n: 50, l: "Projects\nCompleted", icon: Award, suffix: "+" },
                  { n: 30, l: "Satisfied\nClients", icon: Users, suffix: "+" },
                  { n: 90, l: "Retention\nRate", icon: TrendingUp, suffix: "%+" },
                  { n: 4, l: "Years\nExperience", icon: Target, suffix: "+" },
                ].map(({ n, l, icon: Icon, suffix }) => (
                  <div key={n} style={{
                    background: "var(--color-surface-strong)", padding: "28px 24px",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--color-surface)"}
                    onMouseLeave={e => e.currentTarget.style.background = "var(--color-surface-strong)"}
                  >
                    <Icon size={18} color="var(--color-accent)" style={{ marginBottom: 12, display: "block" }} />
                    <AnimatedCounter end={n} suffix={suffix} duration={2000} />
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
              fontSize: 11, fontWeight: 700,
              color: "var(--color-accent-contrast)", letterSpacing: 1.5, textTransform: "uppercase",
            }}>
              🏆 Top Agency 2024
            </div>
          </div>
        </div>

        
      </div>

      <style>{`@media(max-width:900px){section>div>div{grid-template-columns:1fr!important;gap:40px!important;}section>div{padding-top:clamp(100px,15vw,180px)!important;}}`}</style>
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
            fontSize: 11, fontWeight: 700,
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
    <section id="about" style={{ background: "var(--color-surface-alt)", padding: "clamp(40px, 8vw, 80px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px, 5vw, 40px)" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>About Company</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          {/* Left */}
          <div>
            <BlurText
              text="Proven Expertise Real Results"
              className="h2-blur-about"
              animateBy="words"
              direction="top"
              delay={200}
            />
            <style>{`
              .h2-blur-about {
                font-size: clamp(36px, 4vw, 52px) !important;
                font-weight: 700 !important;
                color: var(--color-text-strong) !important;
                line-height: 1.15 !important;
                margin-bottom: 28px !important;
                letter-spacing: -0.5px !important;
              }
              .h2-blur-about .word:last-child {
                color: var(--color-accent) !important;
              }
            `}</style>
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
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontStyle: "italic" }}>
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
              <div style={{ fontSize: 80, fontWeight: 900, color: "var(--color-accent)", lineHeight: 1 }}>4+</div>
              <div style={{ color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginTop: 8 }}>Years of Excellence</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
              {[
                { n: "50+", l: "Projects" }, { n: "30+", l: "Clients" },
                { n: "15", l: "Team Members" }, { n: "Chennai", l: "Headquarters" },
              ].map(({ n, l }) => (
                <div key={l} style={{ background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)", padding: "24px 20px" }}>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)" }}>{n}</div>
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
    { 
      id: "web", icon: Globe, num: "01", title: "Web Design & Development", short: "Web",
      desc: "Fast, mobile-responsive, conversion-optimized websites built with WordPress and modern frameworks.",
      features: ["UI UX Design", "Custom Website Design", "E-Commerce Development", "Content Management Systems (CMS)", "Website Maintenance and Support"]
    },
    { 
      id: "seo", icon: Search, num: "02", title: "Search Engine Optimization", short: "SEO",
      desc: "Rank higher on Google and drive organic traffic with strategic keyword research, technical SEO, and local optimization.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO"]
    },
    { 
      id: "smm", icon: Share2, num: "03", title: "Social Media Marketing", short: "SMM",
      desc: "Build and manage your brand presence across Facebook, Instagram, LinkedIn with content creation and paid campaigns.",
      features: ["Content Creation", "Community Management", "Paid Social Campaigns", "Influencer Partnerships", "Analytics & Reporting"]
    },
    { 
      id: "ads", icon: BarChart2, num: "04", title: "Performance Marketing", short: "Paid Ads",
      desc: "Data-driven paid advertising on Google Ads, Meta Ads, and YouTube Ads. Maximum ROI with A/B testing.",
      features: ["Google Ads", "Meta Ads", "YouTube Ads", "A/B Testing", "Conversion Optimization"]
    },
    { 
      id: "brand", icon: Layers, num: "05", title: "Branding & Identity", short: "Brand",
      desc: "Build a powerful brand identity with logo design, brand guidelines, visual identity and strategy.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Packaging Design"]
    },
    { 
      id: "events", icon: Calendar, num: "06", title: "Event Management", short: "Events",
      desc: "Full-cycle event planning for corporate events, product launches, conferences, and exhibitions.",
      features: ["Event Planning", "Venue Management", "Vendor Coordination", "Marketing & Promotion", "Post-Event Analysis"]
    },
  ];

  const [activeService, setActiveService] = useState("web");
  const refs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-150px 0px -500px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveService(entry.target.dataset.serviceId);
        }
      });
    }, observerOptions);

    Object.values(refs.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(refs.current).forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="services" style={{ background: "var(--color-surface-alt)", padding: "clamp(40px, 8vw, 80px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px, 5vw, 40px)" }}>
        {/* Header - Top Center */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>What We Do</span>
            <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          </div>
          <BlurText
            text="Stratedge services that turn brands into leaders"
            className="h2-blur-services"
            animateBy="words"
            direction="top"
            delay={200}
          />
          <style>{`
            .h2-blur-services {
              font-size: clamp(32px, 4vw, 48px) !important;
              font-weight: 700 !important;
              color: var(--color-text-strong) !important;
              line-height: 1.15 !important;
              letter-spacing: -0.5px !important;
            }
          `}</style>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "flex-start" }}>
          
          {/* LEFT - Sticky Sidebar */}
          <div style={{ position: "sticky", top: "100px", height: "fit-content" }}>

            {/* Service List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#service-${service.id}`}
                  style={{
                    background: activeService === service.id ? "var(--color-surface-strong)" : "transparent",
                    border: activeService === service.id ? "1px solid var(--color-accent)" : "1px solid var(--color-border-soft)",
                    padding: "18px 20px",
                    textAlign: "left", textDecoration: "none",
                    cursor: "pointer", transition: "all 0.25s",
                    position: "relative",
                    display: "flex", alignItems: "center", gap: 12,
                  }}
                  onMouseEnter={e => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.background = "rgba(212,175,80,0.05)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeService !== service.id) {
                      e.currentTarget.style.borderColor = "var(--color-border-soft)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {/* Accent bar for active */}
                  {activeService === service.id && (
                    <div style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: 3, background: "var(--color-accent)"
                    }} />
                  )}

                  <service.icon size={18} color={activeService === service.id ? "var(--color-accent)" : "var(--color-text-soft)"} />
                  <div>
                    <div style={{ color: activeService === service.id ? "var(--color-accent)" : "var(--color-text-soft)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
                      {service.short}
                    </div>
                    <div style={{ color: "var(--color-text-strong)", fontSize: 13, fontWeight: 500, marginTop: 2 }}>
                      {service.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - All Service Details Scrollable */}
          <div style={{ minHeight: "400px" }}>
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                ref={el => refs.current[service.id] = el}
                data-service-id={service.id}
                style={{ marginBottom: 0, scrollMarginTop: "60px" }}
              >
                {/* Service Hero Card */}
                <div style={{
                  background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
                  padding: "50px 40px", marginBottom: 40,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                    <div>
                      <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 12 }}>
                        {service.short}
                      </div>
                      <h3 style={{ color: "var(--color-text-strong)", fontSize: "clamp(28px,3vw,36px)", fontWeight: 600, lineHeight: 1.3 }}>
                        {service.title}
                      </h3>
                    </div>
                    <div style={{
                      width: 64, height: 64,
                      border: "2px solid var(--color-accent)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <service.icon size={28} color="var(--color-accent)" />
                    </div>
                  </div>

                  <p style={{ color: "var(--color-text-faint)", fontSize: 15, lineHeight: 1.8, fontWeight: 300 }}>
                    {service.desc}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
                      Key Features
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                          padding: "24px 20px", display: "flex", alignItems: "center", gap: 12,
                          transition: "border-color 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-accent)"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
                      >
                        <div style={{ width: 4, height: 4, background: "var(--color-accent)", borderRadius: "50%", flexShrink: 0 }} />
                        <div style={{ color: "var(--color-text-soft)", fontSize: 13, fontWeight: 500 }}>
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA for each service */}
                <div style={{ marginTop: 40 }}>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
                    padding: "14px 32px", fontSize: 12, fontWeight: 700,
                    letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
                    transition: "transform 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    Get Free Strategy Call <ArrowRight size={14} />
                  </a>
                </div>

                {/* Divider between services */}
                {services.indexOf(service) < services.length - 1 && (
                  <div style={{ marginTop: 80, paddingTop: 80, borderTop: "1px solid var(--color-border-soft)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          section>div>div{
            grid-template-columns:1fr!important;
            gap:40px!important;
          }
          section>div>div>div:first-child{
            position:static!important;
            margin-bottom:20px;
          }
          section>div>div>div:first-child>div:last-child{
            display:grid;
            grid-template-columns:repeat(2,1fr);
            gap:8px;
          }
          section>div>div>div:first-child>div:last-child>a{
            padding:12px!important;
          }
        }
        @media(max-width:640px){
          section>div>div>div:first-child>div:last-child{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
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
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          {/* Left text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Why Choose Us</span>
            </div>
            <BlurText
              text="The Agency That Performs"
              className="h2-blur-whyus"
              animateBy="words"
              direction="top"
              delay={200}
            />
            <style>{`
              .h2-blur-whyus {
                font-size: clamp(36px, 4vw, 52px) !important;
                font-weight: 700 !important;
                color: var(--color-text-strong) !important;
                line-height: 1.15 !important;
                letter-spacing: -0.5px !important;
                margin-bottom: 24px !important;
              }
              .h2-blur-whyus .word:last-child {
                color: var(--color-accent) !important;
              }
            `}</style>
            <p style={{ fontSize: 15, lineHeight: 1.9, maxWidth: 420, fontWeight: 300 }}>
              Our marketing agency delivers proven strategies, creative solutions, and measurable results to help your business grow, boost visibility, and outperform competition.
            </p>

            {/* Marketing skill bar */}
            <div style={{ marginTop: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ color: "var(--color-text-soft)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Marketing Excellence</span>
                <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>95%</span>
              </div>
              <div style={{ height: 2, background: "var(--color-border-soft)" }}>
                <div style={{ width: "95%", height: "100%", background: "linear-gradient(90deg,var(--color-accent),var(--color-accent-strong))", transition: "width 1s ease" }} />
              </div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 44,
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))", color: "var(--color-accent-contrast)",
              padding: "14px 32px", fontSize: 12, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", textDecoration: "none"
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
                  <div style={{ color: "var(--color-text-strong)", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{title}</div>
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
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>The People</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Founder bio */}
          <div>
            <BlurText
              text="Mr Rajendra Prasad"
              className="h2-blur-founder"
              animateBy="words"
              direction="top"
              delay={200}
            />
            <style>{`
              .h2-blur-founder {
                font-size: clamp(32px, 3.5vw, 46px) !important;
                font-weight: 700 !important;
                color: var(--color-text-strong) !important;
                line-height: 1.15 !important;
                margin-bottom: 6px !important;
                letter-spacing: -0.5px !important;
              }
            `}</style>
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
                    fontSize: 20, fontWeight: 700,
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
    <section style={{ background: "var(--color-surface-alt)", padding: "30px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Client Testimonials</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
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
                  <span style={{ color: "var(--color-accent)", fontSize: 16, fontWeight: 700 }}>
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
   CLIENTS
═══════════════════════════════════════════════ */
function Clients() {
  const clients = [
    { id: 1, name: "Client 1", img: "/clients/1.png", web: "https://www.instagram.com/dr.rahmans_physio_clinic" },
    { id: 2, name: "Client 2", img: "/clients/2.png", web: "https://www.instagram.com/pyro_interiors" },
    { id: 3, name: "Client 3", img: "/clients/3.png", web: "https://www.instagram.com/big_brains_cdc" },
    { id: 4, name: "Client 4", img: "/clients/4.png", web: "https://www.jnphysio.in/" },
    { id: 5, name: "Client 5", img: "/clients/5.png", web: "https://periyarschool.com/" },
    { id: 6, name: "Client 6", img: "/clients/6.png", web: "https://www.taxlaservices.com/" },
    { id: 7, name: "Client 7", img: "/clients/7.png", web: "https://drnavinsdiabetescare.com/" },
  ];

  const [activeClient, setActiveClient] = useState(null);
  const [iframeError, setIframeError] = useState(false);

  const openModal = (client) => {
    setActiveClient(client);
    setIframeError(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveClient(null);
    setIframeError(false);
    document.body.style.overflow = "";
  };

  return (
    <section style={{
      background: "var(--color-bg)",
      padding: "40px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Content wrapper */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", marginBottom: 80 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
            <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
            <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Our Trusted Partners</span>
            <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          </div>
          <h2 style={{
            fontSize: "clamp(36px,5vw,56px)",
            fontWeight: 900,
            color: "var(--color-text-strong)",
            lineHeight: 1.1,
            letterSpacing: -1,
            maxWidth: 700,
            margin: "0 auto",
          }}>
            We Don't Just Work Together,<br />
            We <span style={{ color: "var(--color-accent)" }}>GROW</span> Together.
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--color-surface-alt)",
        border: "1px solid var(--color-border-soft)",
        borderTop: "1px solid var(--color-border-soft)",
        borderBottom: "1px solid var(--color-border-soft)",
      }}>
        {/* Gradient overlays for fade effect */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0, right: 0,
          background: "linear-gradient(90deg, var(--color-surface-alt) 0%, transparent 10%, transparent 90%, var(--color-surface-alt) 100%)",
          zIndex: 10,
          pointerEvents: "none",
        }} />

        {/* Marquee content */}
        <div style={{
          display: "flex",
          gap: 60,
          animation: "clientMarquee 30s linear infinite",
          padding: "50px 40px",
          width: "fit-content",
        }}>
          {[...clients, ...clients, ...clients].map((client, i) => (
            <button
              key={i}
              onClick={() => openModal(client)}
              title={`View ${client.name}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 180,
                height: 100,
                background: "var(--color-surface-strong)",
                border: "1px solid var(--color-border)",
                padding: "20px",
                flexShrink: 0,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.background = "var(--color-surface)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.background = "var(--color-surface-strong)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img
                src={client.img}
                alt={client.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              />
            </button>
          ))}
        </div>

        <style>{`
          @keyframes clientMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-180px * 5 - 60px * 5)); }
          }
          @media (max-width: 900px) {
            [style*="animation: clientMarquee"] {
              animation: clientMarquee 20s linear infinite !important;
              padding: 40px 20px !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </div>

      {/* iframe Modal */}
      {activeClient && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 1100,
              height: "85vh",
              background: "var(--color-surface-strong)",
              border: "1px solid var(--color-accent)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Modal header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderBottom: "1px solid var(--color-border)",
              background: "var(--color-surface-alt)",
              flexShrink: 0,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={activeClient.img}
                  alt={activeClient.name}
                  style={{ height: 28, objectFit: "contain", opacity: 0.9 }}
                />
                <span style={{
                  color: "var(--color-text-faint)",
                  fontSize: 12,
                  letterSpacing: 1,
                  maxWidth: 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                  {activeClient.web}
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <a
                  href={activeClient.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "var(--color-accent)", fontSize: 11, fontWeight: 600,
                    letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none",
                    border: "1px solid var(--color-accent)", padding: "6px 14px",
                  }}
                >
                  <ExternalLink size={12} /> Open Tab
                </a>
                <button
                  onClick={closeModal}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-soft)",
                    cursor: "pointer",
                    width: 32, height: 32,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, lineHeight: 1,
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* iframe / blocked fallback */}
            {iframeError ? (
              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                padding: 40,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 48 }}>🚫</div>
                <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.7 }}>
                  This website doesn't allow embedding inside a frame.
                </p>
                <a
                  href={activeClient.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                    color: "var(--color-accent-contrast)",
                    padding: "12px 28px", fontSize: 12, fontWeight: 700,
                    letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
                  }}
                >
                  <ExternalLink size={14} /> Open in New Tab
                </a>
              </div>
            ) : (
              <iframe
                src={activeClient.web}
                title={activeClient.name}
                style={{ flex: 1, border: "none", width: "100%" }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onError={() => setIframeError(true)}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   ACADEMY PROMO
═══════════════════════════════════════════════ */
function AcademyPromo() {
  return (
    <section style={{
      background: "var(--color-surface-alt)",
      padding: "60px 16px"
    }}>
      <div style={{
        maxWidth: 1280,
        margin: "0 auto"
      }}>
        <div style={{
          background: "var(--color-surface-strong)",
          border: "1px solid var(--color-border)",
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden"
        }}>

          {/* BG TEXT */}
          <div style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            fontSize: "clamp(60px, 20vw, 160px)",
            fontWeight: 900,
            color: "var(--color-accent-glow)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none"
          }}>
            ACADEMY
          </div>

          {/* GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 30
          }}
          className="academy-grid">

            {/* LEFT CONTENT */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16
              }}>
                <div style={{
                  background: "var(--color-accent)",
                  padding: "4px 10px"
                }}>
                  <span style={{
                    color: "var(--color-accent-contrast)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase"
                  }}>
                    Digital Academy
                  </span>
                </div>
              </div>

              <h2 style={{
                fontSize: "clamp(24px, 6vw, 44px)",
                fontWeight: 700,
                color: "var(--color-text-strong)",
                lineHeight: 1.3,
                marginBottom: 12
              }}>
                Launch Your Digital<br />Marketing Career
              </h2>

              <p style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 500
              }}>
                Expert-led courses with hands-on training, real-world strategies, and industry-recognized certifications. Offline, Online & Self-paced.
              </p>

              {/* FEATURES */}
              <div style={{
                display: "flex",
                gap: 16,
                marginTop: 24,
                flexWrap: "wrap"
              }}>
                {["8 Modules", "3 Formats", "Certified", "Job Assist"].map(f => (
                  <div key={f} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  }}>
                    <div style={{
                      width: 6,
                      height: 6,
                      background: "var(--color-accent)"
                    }} />
                    <span style={{
                      color: "var(--color-text-soft)",
                      fontSize: 13
                    }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "100%"
            }}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
                  color: "var(--color-accent-contrast)",
                  padding: "14px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  width: "100%"
                }}
              >
                Enroll Now <ArrowRight size={14} />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP GRID OVERRIDE */}
      <style jsx>{`
        @media (min-width: 768px) {
          .academy-grid {
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 60px;
          }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FINAL CTA
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section style={{ background: "var(--color-accent)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* BG text */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontSize: 220, fontWeight: 900,
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
        <h2 style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
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
            transition: "background 0.2s"
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


/* ═══════════════════════════════════════════════
   APP
═══════════════════════════════════════════════ */
export default function Home() {
  const { component: seoComponent } = useSEO('home');

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      {seoComponent}
      
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      {/* <Testimonials /> */}
      <TestimonialsCarousel />
      <Clients />
      <AcademyPromo />
      <CTA />
      <WhatsappFloat />
    </div>
  );
}

/* Responsive Enhancements */
<style>{`
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-accent);
    border-radius: 4px;
  }

  @media (max-width: 1024px) {
    /* Tablet adjustments */
    section {
      padding: 20px 0 !important;
    }
  }

  @media (max-width: 900px) {
    /* Hero Section */
    section > div > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }
    
    section > div {
      padding: 80px 20px 60px !important;
    }

    h1 {
      font-size: clamp(32px, 5vw, 60px) !important;
    }

    h2 {
      font-size: clamp(28px, 4vw, 44px) !important;
    }

    /* About Section */
    #about > div > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    /* Services Section */
    #services > div > div:last-child {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }

    /* Stats display */
    [style*="gridTemplateColumns: \"1fr 1fr\""] {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }

    /* Button responsive */
    a[style*="padding: \"16px"], button[style*="padding: \""] {
      font-size: 11px !important;
      padding: 12px 24px !important;
    }

    .service-card {
      padding: 20px !important;
    }

    /* Floating WhatsApp button */
    a[style*="position: \"fixed\""] {
      bottom: 20px !important;
      right: 20px !important;
      width: 48px !important;
      height: 48px !important;
    }
  }

  @media (max-width: 768px) {
    /* Mobile adjustments */
    section > div {
      padding: 60px 16px !important;
      max-width: 100% !important;
    }

    h1 {
      font-size: clamp(28px, 4vw, 50px) !important;
      margin-bottom: 20px !important;
    }

    h2 {
      font-size: clamp(24px, 3.5vw, 36px) !important;
      margin-bottom: 16px !important;
    }

    p {
      font-size: 14px !important;
      margin-bottom: 20px !important;
    }

    /* Grid adjustments */
    div[style*="gridTemplateColumns: \"repeat(3"] {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }

    /* Margin/Padding adjustments */
    div[style*="marginBottom: 70"] {
      margin-bottom: 40px !important;
    }

    div[style*="gap: 100"] {
      gap: 30px !important;
    }

    div[style*="gap: 80"] {
      gap: 30px !important;
    }

    /* Button improvements */
    a[style*="padding: \"16px 36px"], a[style*="padding: \"14px 32px"] {
      font-size: 11px !important;
      padding: 12px 20px !important;
      width: 100%;
      text-align: center;
    }

    /* CTA buttons */
    div[style*="display: \"flex\""][style*="gap: 14"] {
      flex-direction: column !important;
      gap: 10px !important;
    }

    /* Marquee adjustments */
    div[style*="animation: marquee"] {
      padding: 0 20px !important;
      gap: 20px !important;
    }

    /* Team grid */
    div[style*="gridTemplateColumns: \"1fr 1fr\""] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }

    /* Badge adjustments */
    div[style*="width: 700"][style*="height: 700"] {
      width: 400px !important;
      height: 400px !important;
      top: -150px !important;
      right: -150px !important;
    }

    /* Stats card improvements */
    div[style*="padding: \"28px 24px\""] {
      padding: 20px 16px !important;
    }

    /* Testimonial grid */
    div[style*="gridTemplateColumns: \"repeat(3"] {
      grid-template-columns: 1fr !important;
    }

    /* Footer padding */
    div[style*="padding: \"100px 0\""] {
      padding: 60px 0 !important;
    }
  }

  @media (max-width: 600px) {
    /* Small mobile adjustments */
    section > div {
      padding: 40px 12px !important;
    }

    h1 {
      font-size: clamp(24px, 3.5vw, 40px) !important;
      line-height: 1.2 !important;
    }

    h2 {
      font-size: clamp(20px, 3vw, 32px) !important;
    }

    h3 {
      font-size: 16px !important;
    }

    p {
      font-size: 13px !important;
      line-height: 1.6 !important;
    }

    /* Stats counter size */
    div[style*="fontSize: 38"] {
      font-size: 32px !important;
    }

    /* Icon sizes */
    svg {
      size: 16px !important;
    }

    /* Grid gaps */
    div[style*="gap: 60"] {
      gap: 16px !important;
    }

    /* Padding for cards */
    div[style*="padding: \"40px\""] {
      padding: 20px !important;
    }

    div[style*="padding: \"50px 40px\""] {
      padding: 30px 20px !important;
    }

    /* Text centering for mobile */
    section {
      text-align: center !important;
    }

    /* Floating button positioning */
    a[style*="position: \"fixed\""] {
      bottom: 16px !important;
      right: 16px !important;
    }

    /* Full width buttons */
    a[href*="wa.me"], a[href*="tel:"] {
      width: 100% !important;
    }

    /* Section labels */
    span[style*="fontSize: 10"] {
      font-size: 9px !important;
    }

    /* Reduce letter spacing on mobile */
    *[style*="letterSpacing"] {
      letter-spacing: 1px !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`}</style>