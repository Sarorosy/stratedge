import { Zap, Facebook, Instagram, Youtube, Linkedin, Send } from "lucide-react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
export default function Footer() {
  const WA = "https://wa.me/919361110910";
  const brandGradient = "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))";

  const theme = document.documentElement.getAttribute("data-theme");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("theme", theme);
      }, [theme]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thestratedgee.com/#localbusiness",
    "name": "The Stratedge Digital Marketing & Event Management Agency",
    "url": "https://thestratedgee.com/",
    "telephone": "9361110910",
    "email": "info@thestratedgee.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4/34, D type, Sidco Nagar, 40th street, Villivakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600049",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.1070841,
      "longitude": 80.2033821
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": "India",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "63"
    },
    "review": [{
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rajendra Prasad" },
      "datePublished": "2025-01-15",
      "reviewBody": "The Stratedge team helped us grow our brand visibility...",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }],
    "sameAs": [
      "https://youtube.com/shorts/YF5ibYMuUig",
      "https://www.facebook.com/reel/1386312546160620",
      "https://x.com/thestratedge",
      "https://www.linkedin.com/company/thestratedge",
      "https://www.instagram.com/the_stratedge/"
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <footer style={{ background: "var(--color-surface-alt)", borderTop: "1px solid var(--color-border)", fontFamily: "'DM Sans',sans-serif" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 20px 0" }}>
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 40,
          paddingBottom: 60,
          borderBottom: "1px solid var(--color-border-soft)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Link to="/">
                <img
                  src="/logo.png"
                  className="h-15"
                  style={{
                    filter: theme === "light"
                      ? "invert(1) brightness(0.2)"
                      : "none"
                  }}
                  alt="Stratedge Logo"
                />
              </Link>
            </div>
            <p style={{ color: "var(--color-text-soft)", fontSize: 13, lineHeight: 1.8, maxWidth: 280, fontWeight: 300, marginBottom: 24 }}>
              Digital Marketing Solution for Your Business — Chennai's trusted growth partner since 2020.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[{ icon: Facebook, href: "https://www.facebook.com/reel/1386312546160620" },
              { icon: Instagram, href: "https://www.instagram.com/the_stratedge/" },
              { icon: Linkedin, href: "https://www.linkedin.com/feed/update/urn:li:activity:7379807340633546753" },
              { icon: Twitter, href: "https://x.com/thestratedge/status/1974041702210896056" },
              { icon: Youtube, href: "https://youtube.com/shorts/YF5ibYMuUig?feature=share" },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                  width: 36, height: 36, border: "1px solid var(--color-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--color-text-soft)", textDecoration: "none", transition: "all 0.2s",
                  background: "var(--color-surface)",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-soft)"; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: "var(--color-text-strong)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Services</div>
            {"SEO,Social Media,Paid Ads,Content,Web Design,Branding,Events".split(",").map(s => (
              <div key={s} style={{ marginBottom: 12 }}>
                <Link to="/services" style={{ color: "var(--color-text-soft)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-soft)"}
                >{s}</Link>
              </div>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{ color: "var(--color-text-strong)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Company</div>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Academy', to: '/course' },
              { label: 'Contact', to: '/contact-us' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
              { label: 'Terms', to: '/terms' },
            ].map(({ label, to }) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <Link to={to} style={{ color: "var(--color-text-soft)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--color-text-soft)"}
                >{label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: "var(--color-text-strong)", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Contact</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ icon: MapPin, text: "4/34, D type, Sidco Nagar, 40th Street, Villivakkam, Chennai — 600049, Tamil Nadu, IN" },
              { icon: Phone, text: "+91 9361110910" },
              { icon: Mail, text: "info@thestratedgee.com" },
              { icon: Clock, text: "Open 24/7\n00:00–23:59 All days" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon size={14} color="var(--color-accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "var(--color-text-soft)", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-line", fontWeight: 300 }}>{text}</span>
                </div>
              ))}
            </div>

           
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>© 2026 The Stratedgee. All rights reserved.</span>
          <span style={{ color: "var(--color-text-faint)", fontSize: 12 }}>Made in Chennai with ❤️</span>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          footer div { padding: 0 10px; }
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
    </>
  );
}