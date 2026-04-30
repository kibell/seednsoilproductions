import { socialLinks } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="page-wrapper contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Reach Out</span>
          <h1>Contact</h1>
          <div className="divider divider-center" />
          <p className="page-hero-desc">
            For bookings, collaborations, media inquiries, or just to connect —
            reach out below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-section">
              <span className="section-label">Send a Message</span>
              <h2>Get in Touch</h2>
              <div className="divider" />

              <form className="contact-form" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Full name" autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="">Select a topic...</option>
                    <option value="booking">Booking / Performance</option>
                    <option value="collab">Collaboration</option>
                    <option value="media">Media / Press Inquiry</option>
                    <option value="music">Music Licensing</option>
                    <option value="general">General Message</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Send Message
                </button>
                <p className="form-disclaimer">
                  I read every message. Response time is usually within 48 hours.
                </p>
              </form>
            </div>

            {/* Sidebar info */}
            <aside className="contact-sidebar">
              {/* Booking */}
              <div className="contact-widget">
                <h4>Booking & Collaborations</h4>
                <p>
                  Available for live performances, speaking engagements, podcast
                  features, music collaborations, and ministry events. Use the
                  contact form with subject "Booking / Performance."
                </p>
              </div>

              {/* Social links */}
              <div className="contact-widget">
                <h4>Follow Along</h4>
                <div className="contact-socials">
                  {[
                    { href: socialLinks.instagram, label: "Instagram" },
                    { href: socialLinks.youtube, label: "YouTube" },
                    { href: socialLinks.tiktok, label: "TikTok" },
                    { href: socialLinks.spotify, label: "Spotify" },
                    { href: socialLinks.appleMusic, label: "Apple Music" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} className="contact-social-link">
                      {s.label} →
                    </a>
                  ))}
                </div>
              </div>

              {/* Email signup */}
              <div className="contact-widget email-signup-widget">
                <h4>✦ Stay Connected</h4>
                <p>
                  Get updates on new music, episodes, and devotionals. No spam,
                  ever.
                </p>
                <div className="email-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="email-input"
                    aria-label="Email address for newsletter"
                  />
                  <button className="btn btn-primary" style={{ width: "100%" }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
