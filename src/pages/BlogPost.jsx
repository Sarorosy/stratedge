import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogs } from "../data/blogs";

// Simple markdown to HTML parser
function SimpleMarkdown({ content }) {
  const parseContent = (text) => {
    return text.split('\n').map((line, index) => {
      // Headings
      if (line.startsWith('# ')) {
        return <h1 key={index} style={{ fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)", margin: "40px 0 16px 0" }}>{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} style={{ fontSize: 24, fontWeight: 700, color: "var(--color-text-strong)", margin: "32px 0 16px 0" }}>{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} style={{ fontSize: 18, fontWeight: 600, color: "var(--color-text-strong)", margin: "24px 0 12px 0" }}>{line.replace('### ', '')}</h3>;
      }
      
      // Bold, italic, links, and code
      let parsedLine = line
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color: var(--color-accent); text-decoration: none; border-bottom: 1px solid var(--color-accent);">$1</a>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\`(.+?)\`/g, '<code>$1</code>');
      
      // Block quotes
      if (line.startsWith('> ')) {
        return <blockquote key={index} style={{
          borderLeft: "4px solid var(--color-accent)",
          padding: "16px 20px",
          background: "var(--color-surface-alt)",
          margin: "24px 0",
          borderRadius: 4,
          fontStyle: "italic",
          color: "var(--color-text-strong)"
        }}>{line.replace('> ', '')}</blockquote>;
      }
      
      // List items
      if (line.startsWith('- ')) {
        return <li key={index} style={{ marginBottom: 8, marginLeft: 20 }}>{line.replace('- ', '')}</li>;
      }
      if (line.match(/^\d+\.\s/)) {
        return <li key={index} style={{ marginBottom: 8, marginLeft: 20 }}>{line.replace(/^\d+\.\s/, '')}</li>;
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} style={{ height: 16 }} />;
      }
      
      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: parsedLine }} />;
      }
    });
  };

  return <>{parseContent(content)}</>;
}

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 20px" }}>
        <h1 style={{ color: "var(--color-text-strong)" }}>Blog post not found</h1>
        <Link to="/blogs" style={{
          color: "var(--color-accent)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 20,
        }}>
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.seoTitle || `${blog.title} | Stratedge Blog`}</title>
        <meta name="description" content={blog.seoDescription || blog.excerpt} />
        {blog.keywords && <meta name="keywords" content={blog.keywords} />}
        <link rel="canonical" href={`https://stratedge.com/blog/${blog.id}`} />
        <meta property="og:title" content={blog.seoTitle || blog.title} />
        <meta property="og:description" content={blog.seoDescription || blog.excerpt} />
        <meta property="og:url" content={`https://stratedge.com/blog/${blog.id}`} />
        {blog.image && <meta property="og:image" content={blog.image} />}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.seoTitle || blog.title} />
        <meta name="twitter:description" content={blog.seoDescription || blog.excerpt} />
        {blog.image && <meta name="twitter:image" content={blog.image} />}
        <meta property="article:published_time" content={new Date(blog.date).toISOString()} />
      </Helmet>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 20px 80px" }}>
        {/* Back button */}
        <Link to="/blogs" style={{
          color: "var(--color-accent)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 40,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "gap 0.2s",
        }}
          onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
          onMouseLeave={(e) => e.currentTarget.style.gap = "8px"}
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          {/* Category badge */}
          <div style={{
            display: "inline-flex",
            background: "var(--color-surface-alt)",
            padding: "8px 16px",
            borderRadius: 8,
            marginBottom: 20,
          }}>
            <span style={{
              color: "var(--color-accent)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}>
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: "clamp(32px, 6vw, 52px)",
            fontWeight: 700,
            color: "var(--color-text-strong)",
            marginBottom: 16,
            letterSpacing: -1,
            lineHeight: 1.2,
          }}>
            {blog.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 20,
            color: "var(--color-text-soft)",
            marginBottom: 24,
            fontWeight: 300,
            lineHeight: 1.6,
          }}>
            {blog.subtitle}
          </p>

          {/* Meta */}
          <div style={{
            display: "flex",
            gap: 24,
            paddingTop: 24,
            borderTop: "1px solid var(--color-border)",
            flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-soft)" }}>
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-soft)" }}>
              <User size={16} />
              <span>{blog.author}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-text-soft)" }}>
              <Clock size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div style={{
          marginBottom: 60,
          borderRadius: 12,
          overflow: "hidden",
          height: 400,
          background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))",
        }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: 40,
          marginBottom: 60,
        }}>
          {/* Main content */}
          <article style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "var(--color-text-soft)",
          }}>
            <style>{`
              .blog-content h1 {
                font-size: 28px;
                font-weight: 700;
                color: var(--color-text-strong);
                margin: 40px 0 16px 0;
              }
              .blog-content h2 {
                font-size: 24px;
                font-weight: 700;
                color: var(--color-text-strong);
                margin: 32px 0 16px 0;
              }
              .blog-content h3 {
                font-size: 18px;
                font-weight: 600;
                color: var(--color-text-strong);
                margin: 24px 0 12px 0;
              }
              .blog-content p {
                margin-bottom: 16px;
              }
              .blog-content ul, .blog-content ol {
                margin-bottom: 16px;
                padding-left: 24px;
              }
              .blog-content li {
                margin-bottom: 8px;
              }
              .blog-content blockquote {
                border-left: 4px solid var(--color-accent);
                padding: 16px 20px;
                background: var(--color-surface-alt);
                margin: 24px 0;
                border-radius: 4px;
                font-style: italic;
                color: var(--color-text-strong);
              }
              .blog-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 24px 0;
              }
              .blog-content table th, .blog-content table td {
                border: 1px solid var(--color-border);
                padding: 12px;
                text-align: left;
              }
              .blog-content table th {
                background: var(--color-surface-alt);
                font-weight: 600;
                color: var(--color-text-strong);
              }
              .blog-content a {
                color: var(--color-accent);
                text-decoration: none;
              }
              .blog-content a:hover {
                text-decoration: underline;
              }
              .blog-content code {
                background: var(--color-surface-alt);
                padding: 2px 6px;
                border-radius: 4px;
                font-family: 'Courier New', monospace;
                font-size: 14px;
              }
              .blog-content pre {
                background: var(--color-surface-alt);
                padding: 16px;
                border-radius: 8px;
                overflow-x: auto;
                margin: 16px 0;
              }
            `}</style>
            <div className="blog-content">
              <SimpleMarkdown content={blog.content} />
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: 100, height: "fit-content" }}>
            {/* CTA Box */}
            <div style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))",
              padding: 24,
              borderRadius: 12,
              color: "var(--color-accent-contrast)",
            }}>
              <h3 style={{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 12,
              }}>
                Ready to Rank in AI Answers?
              </h3>
              <p style={{
                fontSize: 13,
                lineHeight: 1.6,
                marginBottom: 16,
                opacity: 0.95,
              }}>
                Let us help you build the content that gets you cited.
              </p>
              <a href="https://wa.me/919361110910" target="_blank" rel="noopener noreferrer" style={{
                background: "var(--color-accent-contrast)",
                color: "var(--color-accent)",
                padding: "10px 16px",
                borderRadius: 6,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 12,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Contact Us <ArrowRight size={12} />
              </a>
            </div>

            
          </aside>
        </div>

        {/* Related Posts */}
        <div style={{ marginBottom: 60, paddingTop: 40, borderTop: "1px solid var(--color-border)" }}>
          <h2 style={{
            fontSize: 28,
            fontWeight: 700,
            color: "var(--color-text-strong)",
            marginBottom: 32,
          }}>
            Related Posts
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
          }}>
            {blogs
              .filter((b) => b.id !== id)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.id}`}
                  style={{
                    textDecoration: "none",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    background: "var(--color-surface-alt)",
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                    {/* Image */}
                    <div style={{
                      height: 180,
                      background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-strong))",
                      overflow: "hidden",
                    }}>
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                      {/* Category */}
                      <span style={{
                        display: "inline-flex",
                        background: "var(--color-surface)",
                        color: "var(--color-accent)",
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: 6,
                        marginBottom: 12,
                        width: "fit-content",
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                      }}>
                        {relatedBlog.category}
                      </span>

                      {/* Title */}
                      <h3 style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: "var(--color-text-strong)",
                        marginBottom: 12,
                        lineHeight: 1.4,
                        flex: 1,
                      }}>
                        {relatedBlog.title}
                      </h3>

                      {/* Meta */}
                      <div style={{
                        display: "flex",
                        gap: 12,
                        fontSize: 12,
                        color: "var(--color-text-faint)",
                        marginBottom: 12,
                      }}>
                        <span>{relatedBlog.date}</span>
                        <span>•</span>
                        <span>{relatedBlog.readTime}</span>
                      </div>

                      {/* Excerpt */}
                      <p style={{
                        fontSize: 13,
                        color: "var(--color-text-soft)",
                        lineHeight: 1.6,
                        marginBottom: 16,
                      }}>
                        {relatedBlog.excerpt}
                      </p>

                      {/* Read more link */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--color-accent)",
                        fontSize: 13,
                        fontWeight: 600,
                        marginTop: "auto",
                      }}>
                        Read More
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          paddingTop: 40,
          borderTop: "1px solid var(--color-border)",
        }}>
          {/* Previous */}
          <div>
            <p style={{
              fontSize: 12,
              color: "var(--color-text-faint)",
              marginBottom: 12,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              ← Previous Post
            </p>
            <p style={{
              color: "var(--color-text-soft)",
              fontSize: 14,
            }}>
              More articles coming soon
            </p>
          </div>

          {/* Next */}
          <div style={{ textAlign: "right" }}>
            <p style={{
              fontSize: 12,
              color: "var(--color-text-faint)",
              marginBottom: 12,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}>
              Next Post →
            </p>
            <p style={{
              color: "var(--color-text-soft)",
              fontSize: 14,
            }}>
              More articles coming soon
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
