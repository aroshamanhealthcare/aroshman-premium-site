
import Link from "next/link";
import Reveal from "../components/Reveal";

const services = [
  {
    number: "01",
    title: "Pharmaceutical Products",
    text: "A focused portfolio of pharmaceutical products across multiple healthcare segments.",
  },
  {
    number: "02",
    title: "Healthcare Distribution",
    text: "Structured distribution and professional market relationships designed around dependable product availability.",
  },
  {
    number: "03",
    title: "Market Development",
    text: "Building long-term healthcare networks through responsible market development and customer relationships.",
  },
  {
    number: "04",
    title: "Quality Focus",
    text: "A quality-first approach to product selection, presentation, documentation and business operations.",
  },
];

export default function Services() {
  return (
    <div className="inner-page">
      {/* PAGE HERO */}
      <section className="page-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">OUR SERVICES</span>

            <h1>
              Healthcare solutions
              <br />
              built around <span>reliability.</span>
            </h1>

            <p>
              From pharmaceutical products to market development, our
              services are designed to create dependable healthcare
              partnerships.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section">
        <div className="container service-list">
          {services.map((service, index) => (
            <Reveal
              key={service.number}
              className="service-row"
              delay={index * 80}
            >
              <span>{service.number}</span>

              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>

              <div className="service-arrow">↗</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL RELATIONSHIPS WITH IMAGE */}
      <section className="section">
        <div className="container">
          <Reveal className="service-feature">
            <div
              className="service-feature-image"
              style={{
                position: "relative",
                width: "100%",
                minWidth: 0,
                minHeight: "320px",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "24px",
                background: "#e8f2f8",
                border: "1px solid rgba(198,157,70,.25)",
                boxShadow: "0 20px 50px rgba(16,35,55,.10)",
              }}
            >
              <img
                src="/images/professional-relationships.png"
                alt="Healthcare professionals collaborating in a clinical setting"
                style={{
                  display: "block",
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            <div>
              <span className="eyebrow">OUR APPROACH</span>

              <h2>
                Professional relationships.
                <br />
                <span>Long-term value.</span>
              </h2>

              <p>
                We believe sustainable healthcare growth comes from
                consistency, transparent communication, reliable
                operations and strong professional relationships.
              </p>

              <Link href="/contact" className="text-link">
                Discuss a partnership →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
