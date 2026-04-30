import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { blogs } from "../data/blogs";
import { useSEO } from "../hooks/useSEO";

export default function Blogs() {
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  const { component: helmetComponent } = useSEO("blogs");

  return (
    <>
      {helmetComponent}

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "140px 24px 100px" }}>
        {/* Hero Section */}
        <div style={{
          marginBottom: 100,
          textAlign: "center",
        }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(var(--color-accent-rgb), 0.08)",
            border: "1px solid rgba(var(--color-accent-rgb), 0.2)",
            padding: "8px 16px",
            borderRadius: 32,
            marginBottom: 24,
          }}>
            <Sparkles size={16} style={{ color: "var(--color-accent)" }} />
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--color-accent)",
              letterSpacing: 0.5,
            }}>
              INSIGHTS & STRATEGIES
            </span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 800,
            color: "var(--color-text-strong)",
            marginBottom: 20,
            letterSpacing: -1.5,
            lineHeight: 1.1,
          }}>
            Business Growth Through<br />
            <span style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Strategic Insights
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--color-text-soft)",
            maxWidth: 600,
            margin: "0 auto",
            fontWeight: 400,
            lineHeight: 1.7,
          }}>
            Discover proven digital marketing strategies, AI optimization techniques, and actionable insights to help your business thrive online.
          </p>
        </div>

        {/* Blog Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 40,
          marginBottom: 100,
        }}>
          {sortedBlogs.map((blog, index) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.04)";
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: "relative",
                  background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))",
                  height: 220,
                  overflow: "hidden",
                }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.15) 100%)",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }} />
                </div>

                {/* Content */}
                <div style={{
                  padding: "32px 28px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}>
                  {/* Category */}
                  <div style={{
                    display: "inline-flex",
                    background: "linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.1), rgba(var(--color-accent-rgb), 0.05))",
                    border: "1px solid rgba(var(--color-accent-rgb), 0.15)",
                    padding: "6px 14px",
                    borderRadius: 8,
                    marginBottom: 16,
                    width: "fit-content",
                  }}>
                    <span style={{
                      color: "var(--color-accent)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                    }}>
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text-strong)",
                    marginBottom: 12,
                    lineHeight: 1.35,
                    transition: "color 0.3s ease",
                  }}>
                    {blog.title}
                  </h2>

                  {/* Subtitle */}
                  <p style={{
                    fontSize: 15,
                    color: "var(--color-text-soft)",
                    marginBottom: 20,
                    lineHeight: 1.6,
                    flex: 1,
                    fontWeight: 400,
                  }}>
                    {blog.subtitle}
                  </p>

                  {/* Meta */}
                  <div style={{
                    display: "flex",
                    gap: 20,
                    paddingTop: 18,
                    borderTop: "1px solid var(--color-border)",
                    fontSize: 13,
                    color: "var(--color-text-faint)",
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontWeight: 500,
                    }}>
                      <Calendar size={16} style={{ opacity: 0.6 }} />
                      {blog.date}
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontWeight: 500,
                    }}>
                      <Clock size={16} style={{ opacity: 0.6 }} />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--color-accent)",
                    fontSize: 14,
                    fontWeight: 700,
                    transition: "gap 0.3s ease, color 0.3s ease",
                  }}>
                    Read Article
                    <ArrowRight
                      size={18}
                      style={{
                        transition: "transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
                      }}
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-alt) 100%)",
          border: "1px solid var(--color-border)",
          borderRadius: 20,
          padding: "60px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Background Gradient */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(600px circle at 50% 50%, rgba(var(--color-accent-rgb), 0.08) 0%, transparent 80%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              color: "var(--color-text-strong)",
              marginBottom: 16,
              letterSpacing: -0.5,
            }}>
              Ready to Transform Your Business?
            </h3>

            <p style={{
              color: "var(--color-text-soft)",
              marginBottom: 32,
              fontSize: 17,
              maxWidth: 550,
              margin: "0 auto 32px",
              fontWeight: 400,
              lineHeight: 1.7,
            }}>
              Let us help you build the content infrastructure that gets you cited by ChatGPT, Gemini, and Perplexity. Start your AI-powered growth journey today.
            </p>

            <a
              href="https://wa.me/919361110910"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))",
                color: "var(--color-accent-contrast)",
                padding: "14px 40px",
                textDecoration: "none",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
              }}
            >
              Schedule Consultation
              <ArrowRight size={18} style={{ transition: "transform 0.3s ease" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
