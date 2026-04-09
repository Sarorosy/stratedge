import { Zap, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
export default function Footer() {
  const WA = "https://wa.me/918122652903";
  const brandGradient = "linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))";

  const theme = document.documentElement.getAttribute("data-theme");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("theme", theme);
      }, [theme]);

  return (
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
                />
              </Link>
            </div>
            <p style={{ color: "var(--color-text-soft)", fontSize: 13, lineHeight: 1.8, maxWidth: 280, fontWeight: 300, marginBottom: 24 }}>
              Digital Marketing Solution for Your Business — Chennai's trusted growth partner since 2020.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[{ icon: Facebook, href: "https://www.facebook.com/share/v/1Lr5Pty1S8/" },
              { icon: Instagram, href: "https://www.instagram.com/the_stratedge/" },
              { icon: Youtube, href: "https://www.youtube.com/channel/UCCtbaoyWA3y9GB2WFcYDXEQ" },
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
              {[{ icon: MapPin, text: "4/34, 40th St, Sidco Nagar, Villivakkam, Chennai 600049" },
              { icon: Phone, text: "+91 8122652903\n+91 93611 10910" },
              { icon: Mail, text: "admin@thestratedgee.com" },
              { icon: Clock, text: "Mon – Sat\n8:00 AM – 5:00 PM" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Icon size={14} color="var(--color-accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "var(--color-text-soft)", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-line", fontWeight: 300 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: 28 }}>
              <div style={{ color: "var(--color-text-muted)", fontSize: 12, marginBottom: 10 }}>Newsletter</div>
              <div style={{ display: "flex", gap: 0 }}>
                <input type="email" placeholder="Your email" style={{
                  flex: 1, background: "var(--color-surface-muted)", border: "1px solid var(--color-border)",
                  borderRight: "none", color: "var(--color-text-strong)", padding: "10px 14px", fontSize: 13,
                  outline: "none", fontFamily: "'DM Sans',sans-serif",
                }} />
                <button style={{
                  background: brandGradient, border: "none", padding: "10px 14px",
                  cursor: "pointer", display: "flex", alignItems: "center",
                }}>
                  <Send size={14} color="var(--color-accent-contrast)" />
                </button>
              </div>
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
  );
}