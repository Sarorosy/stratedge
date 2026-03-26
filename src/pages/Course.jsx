import { useState, useEffect } from "react";
import {
  ArrowRight, CheckCircle, Star, Quote, BookOpen,
  Users, Award, Clock, Play, MessageCircle, Phone,
  Monitor, Wifi, Video, ChevronDown, ChevronUp
} from "lucide-react";

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
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
    }}>
      {/* BG texture grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />
      {/* Accent glow top-right */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 700, height: 700,
        background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Thin diagonal accent */}
      <div style={{
        position: "absolute", top: 0, right: "35%", bottom: 0,
        width: 1, background: "linear-gradient(to bottom,transparent,rgba(139,92,246,0.3),transparent)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "140px 40px 100px", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32,
              border: "1px solid var(--color-border)", padding: "8px 18px",
            }}>
              <span style={{ width: 6, height: 6, background: "var(--color-accent)", display: "block" }} />
              <span style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>
                Stratedgee Digital Academy
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(40px,5vw,68px)",
              fontWeight: 900, color: "var(--color-text-strong)",
              lineHeight: 1.08, marginBottom: 28, letterSpacing: -1,
            }}>
              Learn. Practice.<br />
              <span style={{ color: "var(--color-accent)" }}>Get Certified.</span><br />
              Launch Your Career.
            </h1>

            <p style={{ color: "var(--color-text-soft)", fontSize: 16, lineHeight: 1.85, maxWidth: 460, marginBottom: 44, fontWeight: 300 }}>
              Expert-led digital marketing courses with hands-on training, real-world strategies, and industry-recognized certifications. Offline, Online & Self-paced.
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
                Enroll Now <ArrowRight size={15} />
              </a>
              <a href="#curriculum" style={{
                color: "var(--color-text-strong)", padding: "16px 36px",
                fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
                border: "1px solid var(--color-border-soft)",
                display: "inline-flex", alignItems: "center", gap: 8,
                transition: "border-color 0.2s,color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-soft)"; e.currentTarget.style.color = "var(--color-text-strong)"; }}
              >
                <BookOpen size={13} /> View Curriculum
              </a>
            </div>
          </div>

          {/* Right – course stats card */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border)",
              padding: "40px", position: "relative",
            }}>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
                Course At a Glance
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--color-accent-soft)" }}>
                {[
                  { n: "8", l: "Core\nModules", icon: BookOpen },
                  { n: "3", l: "Learning\nFormats", icon: Monitor },
                  { n: "5+", l: "Years Expert\nTrainers", icon: Award },
                  { n: "100%", l: "Job Placement\nAssist", icon: Users },
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

              <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--color-accent-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>Offline · Online · Self-Paced</span>
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
              🎓 Certified Program
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
  const items = ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing", "Email Marketing", "Analytics", "Branding", "Freelancing & Career"];

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
   ABOUT THE ACADEMY
═══════════════════════════════════════════════ */
function AboutAcademy() {
  const who = [
    "Students looking to build a career in digital marketing",
    "Entrepreneurs wanting to market their own business",
    "Working professionals seeking to upskill",
    "Freelancers looking to offer digital marketing services",
    "Small business owners wanting to go digital",
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "110px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>About the Academy</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,50px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 28, letterSpacing: -0.5,
            }}>
              Your Digital Career<br />
              <span style={{ color: "var(--color-accent)" }}>Starts Here.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 36, fontWeight: 300 }}>
              At Stratedgee, we specialize in equipping students, entrepreneurs, and professionals with the skills needed to thrive in digital marketing. Our expert-led courses deliver hands-on training, real-world strategies, and industry-recognized certifications.
            </p>

            <div style={{ borderLeft: "2px solid var(--color-accent)", paddingLeft: 24, marginBottom: 36 }}>
              <p style={{ color: "var(--color-text-faint)", fontSize: 14, lineHeight: 1.8, fontStyle: "italic", fontFamily: "'Playfair Display',serif" }}>
                "Whether you're starting from scratch or looking to advance your career, our courses are built for results."
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
              Enquire Now <ArrowRight size={14} />
            </a>
          </div>

          {/* Right – who should enroll */}
          <div>
            <div style={{ color: "var(--color-text-soft)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 24 }}>
              Who Should Enroll
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {who.map((item) => (
                <div key={item} style={{
                  background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
                  padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
                >
                  <div style={{ width: 18, height: 18, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={10} color="var(--color-accent)" />
                  </div>
                  <span style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.6 }}>{item}</span>
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
   CURRICULUM
═══════════════════════════════════════════════ */
function Curriculum() {
  const [openIdx, setOpenIdx] = useState(null);
  const modules = [
    { num: "01", title: "Introduction to Digital Marketing", desc: "Overview of digital marketing landscape, key channels, and how they work together to build an integrated strategy for modern businesses." },
    { num: "02", title: "Search Engine Optimization (SEO)", desc: "Keyword research, on-page and technical SEO, link building, local SEO, and how to rank higher on Google for sustainable organic traffic." },
    { num: "03", title: "Social Media Marketing", desc: "Platform strategy for Facebook, Instagram, and LinkedIn — content creation, community management, paid social campaigns, and analytics." },
    { num: "04", title: "Google Ads & PPC", desc: "Setting up and managing Search, Display, and Shopping campaigns. Keyword bidding, A/B testing, Quality Score, and maximizing ROI." },
    { num: "05", title: "Content Marketing & Blogging", desc: "Creating SEO-optimized content, blog writing, brand storytelling, editorial planning, and repurposing content across channels." },
    { num: "06", title: "Email Marketing", desc: "Building email lists, crafting campaigns, automation workflows, segmentation, open rate optimization, and tools like Mailchimp." },
    { num: "07", title: "Analytics & Reporting (Google Analytics)", desc: "Setting up GA4, understanding key metrics, creating reports, tracking conversions, and making data-driven decisions." },
    { num: "08", title: "Freelancing & Career Guidance", desc: "Building your portfolio, finding clients, pricing your services, managing projects, and launching your digital marketing career." },
  ];

  return (
    <section id="curriculum" style={{ background: "var(--color-bg)", padding: "110px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Course Curriculum</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,50px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 20 }}>
              8 Modules.<br />
              <span style={{ color: "var(--color-accent)" }}>Career-Ready Skills.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", fontSize: 15, lineHeight: 1.85, fontWeight: 300, marginBottom: 40, maxWidth: 400 }}>
              A structured, comprehensive curriculum covering every pillar of modern digital marketing — from fundamentals to advanced execution.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              background: "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))",
              color: "var(--color-accent-contrast)", padding: "16px 36px",
              fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10,
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Enroll Now <ArrowRight size={14} />
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {modules.map(({ num, title, desc }, idx) => (
              <div
                key={num}
                style={{
                  background: openIdx === idx ? "var(--color-surface)" : "var(--color-surface-strong)",
                  border: "1px solid",
                  borderColor: openIdx === idx ? "var(--color-border)" : "var(--color-border-soft)",
                  transition: "all 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  style={{
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    padding: "20px 24px", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 16, textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 700, color: "var(--color-accent)", flexShrink: 0 }}>{num}</span>
                    <span style={{ color: "var(--color-text-strong)", fontSize: 14, fontWeight: 500 }}>{title}</span>
                  </div>
                  {openIdx === idx
                    ? <ChevronUp size={16} color="var(--color-accent)" />
                    : <ChevronDown size={16} color="var(--color-text-faint)" />
                  }
                </button>
                {openIdx === idx && (
                  <div style={{ padding: "0 24px 20px 56px" }}>
                    <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   COURSE FORMATS
═══════════════════════════════════════════════ */
function Formats() {
  const formats = [
    {
      icon: Users,
      label: "Offline",
      sub: "In-Person, Chennai",
      desc: "Classroom-based training at our Chennai centre with direct mentor access, peer learning, and hands-on lab sessions.",
      tag: "Most Popular",
    },
    {
      icon: Wifi,
      label: "Online Live",
      sub: "Live Zoom Sessions",
      desc: "Real-time classes with live Q&A, trainer interaction, and the same curriculum as offline — from anywhere in India.",
      tag: null,
    },
    {
      icon: Video,
      label: "Self-Paced",
      sub: "Recorded Videos",
      desc: "Learn at your own pace with recorded video lessons, lifetime access to materials, and flexible scheduling.",
      tag: null,
    },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "110px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Learning Formats</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
            Three Ways to<br />Learn With Us
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 8 }}>
            <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>
              Choose the format that fits your lifestyle — all three follow the same expert curriculum and lead to the same industry-recognized certification.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 50 }}>
          {formats.map(({ icon: Icon, label, sub, desc, tag }) => (
            <div key={label} style={{
              background: "var(--color-surface-strong)", border: "1px solid var(--color-border-soft)",
              padding: "40px 32px", position: "relative",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-soft)"}
            >
              {tag && (
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  background: "var(--color-accent)", padding: "4px 14px",
                  fontSize: 10, fontWeight: 700, color: "var(--color-accent-contrast)",
                  letterSpacing: 2, textTransform: "uppercase",
                }}>{tag}</div>
              )}
              <div style={{ width: 48, height: 48, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <Icon size={20} color="var(--color-accent)" />
              </div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 6 }}>{label}</div>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>{sub}</div>
              <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   WHY LEARN WITH STRATEDGEE
═══════════════════════════════════════════════ */
function WhyUs() {
  const benefits = [
    { n: "5+", l: "Years Expert\nTrainers", icon: Award },
    { n: "Real", l: "Project\nAssignments", icon: BookOpen },
    { n: "Small", l: "Batch — Personal\nAttention", icon: Users },
    { n: "∞", l: "Lifetime Course\nAccess", icon: Clock },
  ];

  const features = [
    "Hands-on practical assignments on real projects",
    "Industry-recognized certification upon completion",
    "Job placement assistance",
    "Lifetime access to course materials",
    "Small batch size for personalized attention",
    "Expert trainers with 5+ years of industry experience",
  ];

  return (
    <section style={{ background: "var(--color-bg)", padding: "110px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Why Stratedgee Academy</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,50px)", fontWeight: 700,
              color: "var(--color-text-strong)", lineHeight: 1.15, marginBottom: 28, letterSpacing: -0.5,
            }}>
              Learn from the<br />
              <span style={{ color: "var(--color-accent)" }}>Best in Chennai.</span>
            </h2>
            <p style={{ color: "var(--color-text-soft)", lineHeight: 1.9, fontSize: 15, marginBottom: 36, fontWeight: 300 }}>
              We don't just teach theory — we train you with real campaigns, live tools, and practical projects the same way our agency team works every day.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {features.map((f) => (
                <div key={f} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 18, height: 18, background: "var(--color-accent-soft)", border: "1px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <CheckCircle size={10} color="var(--color-accent)" />
                  </div>
                  <span style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div style={{ background: "var(--color-surface-strong)", border: "1px solid var(--color-border)", padding: "40px" }}>
              <div style={{ color: "var(--color-accent)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600, marginBottom: 28 }}>
                Academy Highlights
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--color-accent-soft)" }}>
                {benefits.map(({ n, l, icon: Icon }) => (
                  <div key={n} style={{
                    background: "var(--color-surface-strong)", padding: "28px 24px",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--color-surface)"}
                    onMouseLeave={e => e.currentTarget.style.background = "var(--color-surface-strong)"}
                  >
                    <Icon size={18} color="var(--color-accent)" style={{ marginBottom: 12, display: "block" }} />
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1 }}>{n}</div>
                    <div style={{ color: "var(--color-text-faint)", fontSize: 12, marginTop: 6, lineHeight: 1.5, whiteSpace: "pre-line", fontWeight: 400 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    { name: "P Kaviya", text: "Super interactive course. SEO, social media, and Google Ads explained simply. Very useful — totally recommend.", stars: 5 },
    { name: "Keerthi S.", text: "Incredibly informative and engaging course. Clear and concise teaching style — complex topics made easy to understand.", stars: 5 },
    { name: "Pugal", text: "Well structured class. Some topics could have been covered in more depth. Overall a very valuable learning experience.", stars: 5 },
  ];

  return (
    <section style={{ background: "var(--color-surface-alt)", padding: "110px 0", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 70 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Student Reviews</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.15, letterSpacing: -0.5 }}>
            What Our Students<br />Say About the Course
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: 8 }}>
            <p style={{ color: "var(--color-text-soft)", fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>
              Real feedback from real learners. Our students go on to build careers, grow businesses, and land jobs in digital marketing.
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
   FINAL CTA
═══════════════════════════════════════════════ */
function CTA() {
  return (
    <section style={{ background: "var(--color-accent)", padding: "100px 0", fontFamily: "'DM Sans',sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontFamily: "'Playfair Display',serif", fontSize: 220, fontWeight: 900,
        color: "var(--color-accent-contrast)", lineHeight: 1, whiteSpace: "nowrap",
        userSelect: "none", pointerEvents: "none",
        opacity: 0.08,
      }}>LEARN</div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 24 }}>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>Start Your Journey</span>
          <div style={{ width: 40, height: 1, background: "var(--color-accent-contrast)" }} />
        </div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900, color: "var(--color-accent-contrast)", lineHeight: 1.1, marginBottom: 20, letterSpacing: -1 }}>
          Start Your Digital<br />Marketing Journey Today
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
          Enroll in Stratedgee's Digital Marketing Academy — Chennai's most practical course.
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
            <MessageCircle size={15} /> Enroll Now
          </a>
          <a href="tel:+918122652903" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(255,255,255,0.4)", color: "var(--color-accent-contrast)",
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
      transition: "transform 0.2s",
      textDecoration: "none",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <MessageCircle size={24} fill="currentColor" />
    </a>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════ */
export default function Course() {
  useGoogleFonts();

  return (
    <div style={{ background: "transparent", minHeight: "100vh" }}>
      <Hero />
      <Marquee />
      <AboutAcademy />
      <Curriculum />
      <Formats />
      <WhyUs />
      <Testimonials />
      <CTA />
      <WhatsAppFloat />
    </div>
  );
}