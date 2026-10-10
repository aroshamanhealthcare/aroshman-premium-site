
import Link from "next/link";
import Reveal from "../components/Reveal";

type SocialType = "instagram" | "whatsapp" | "linkedin" | "facebook";

function SocialIcon({ type }: { type: SocialType }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 11.6a8.2 8.2 0 0 1-12.1 7.2L3 20l1.3-4.8a8.2 8.2 0 1 1 15.9-3.6Z" />
        <path d="M8.4 7.8c-.4 0-.8.5-.9 1-.2 1.1.6 2.8 2.1 4.3 1.5 1.5 3.5 2.7 4.8 2.6.6-.1 1.3-.8 1.4-1.3l-2.1-1-1.1 1c-1.3-.5-2.4-1.5-3.1-2.7l.8-1.1-1-2.3Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9v10M5 5v.1M10 19v-6a3 3 0 0 1 6 0v6M10 10v9M16 13v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5A20 20 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8Z" />
    </svg>
  );
}

function SocialLinks({
  name,
  networks,
}: {
  name: string;
  networks: { type: SocialType; url: string }[];
}) {
  return (
    <div className="social-links">
      {networks.map(({ type, url }) => (
        <a
          key={type}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} ${type}`}
          title={type.charAt(0).toUpperCase() + type.slice(1)}
        >
          <SocialIcon type={type} />
        </a>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="inner-page">
      {/* PAGE HERO */}
      <section className="page-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">ABOUT AROSHAMAN</span>
            <h1>
              Building a healthcare
              <br />
              company with <span>purpose.</span>
            </h1>
            <p>
              Aroshaman Healthcare Private Limited is focused on building
              reliable pharmaceutical and healthcare solutions with a
              long-term approach to quality and partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container split-grid">
          <Reveal>
            <span className="eyebrow">OUR STORY</span>
            <h2>
              Focused on
              <br />
              <span>meaningful healthcare.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="large-text">
              Our approach combines pharmaceutical product development,
              professional distribution and strong business relationships
              to create a dependable healthcare platform.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section leadership-section">
        <div className="container">
          <Reveal className="section-heading center">
            <span className="eyebrow">LEADERSHIP</span>
            <h2>
              People behind
              <br />
              <span>the vision.</span>
            </h2>
          </Reveal>

          <div className="leadership-grid">
            {/* SHIVAM YADAV */}
            <Reveal className="person-card" delay={0}>
              <div className="person-image">
                <img
                  src="/leadership/shivam-yadav.png"
                  alt="Shivam Yadav - Director"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              <span className="eyebrow">DIRECTOR</span>
              <h3>Shivam Yadav</h3>
              <p>Experienced from Breach Candy Hospital, Mumbai.</p>

              <SocialLinks
                name="Shivam"
                networks={[
                  {
                    type: "instagram",
                    url: "https://www.instagram.com/in_the_lab_of_own_growth/",
                  },
                  {
                    type: "whatsapp",
                    url: "https://wa.me/919699058817",
                  },
                  {
                    type: "linkedin",
                    url: "https://www.linkedin.com/in/shivam-yadav-aroshaman/",
                  },
                ]}
              />
            </Reveal>

            {/* RAMESHWAR SINGH */}
            <Reveal className="person-card" delay={100}>
              <div className="person-image">
                <img
                  src="/leadership/rameshwar-singh.png"
                  alt="Rameshwar Singh - Director"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              <span className="eyebrow">DIRECTOR</span>
              <h3>Rameshwar Singh</h3>
              <p>Experienced from Atharva Hospital, Mumbai.</p>

              <SocialLinks
                name="Rameshwar"
                networks={[
                  {
                    type: "instagram",
                    url: "https://www.instagram.com/theyhates.rameshwar/",
                  },
                  {
                    type: "whatsapp",
                    url: "https://wa.me/918992957982",
                  },
                  {
                    type: "linkedin",
                    url: "https://www.linkedin.com/aroshaman-healthcare-pvt-ltd",
                  },
                ]}
              />
            </Reveal>

            {/* VINOD YADAV */}
            <Reveal className="person-card" delay={200}>
              <div className="person-image">
                <img
                  src="/leadership/vinod-yadav.png"
                  alt="Vinod Yadav - Chief Executive Officer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              <span className="eyebrow">CEO</span>
              <h3>Vinod Yadav</h3>
              <p>15+ Years Experience from Insight Eye Clinic, Mumbai.</p>

              <SocialLinks
                name="Vinod"
                networks={[
                  {
                    type: "facebook",
                    url: "https://www.facebook.com/share/19gmyAiWLA/",
                  },
                  {
                    type: "whatsapp",
                    url: "https://wa.me/918655188689",
                  },
                  {
                    type: "linkedin",
                    url: "https://www.linkedin.com/aroshaman-healthcare-pvt-ltd",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section">
        <div className="container">
          <Reveal className="vision-card">
            <div>
              <span className="eyebrow">VISION</span>
              <h2>Grow responsibly. Serve reliably.</h2>
            </div>
            <p>
              We aim to develop a trusted healthcare organization through
              product quality, professional relationships, operational
              discipline and continuous improvement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-card">
            <span className="eyebrow">WORK WITH US</span>
            <h2>Let&apos;s create stronger healthcare partnerships.</h2>
            <Link href="/contact" className="button-primary">
              Contact Us →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
