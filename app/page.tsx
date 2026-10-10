
"use client";

import Link from "next/link";

type Product = {
  slug: string;
  name: string;
  category: string;
  composition: string;
  image: string;
};

const products: Product[] = [
  {
    slug: "moventis",
    name: "MOVENTIS",
    category: "Pain Management",
    composition: "Aceclofenac & Paracetamol Tablets IP",
    image: "/products/moventis/box-front.png",
  },
  {
    slug: "acilentra-d",
    name: "ACILENTRA-D",
    category: "Gastro Care",
    composition: "Pantoprazole Sodium 40 mg + Domperidone 10 mg",
    image: "/products/acilentra%20d/acilentra.png",
  },
  {
    slug: "zycefon",
    name: "ZYCEFON",
    category: "Anti-Infective",
    composition: "Cefixime 200 mg + Ofloxacin 200 mg",
    image: "/products/zycefon/box-front.png",
  },
  {
    slug: "nutravion",
    name: "NUTRAVION",
    category: "Nutraceutical",
    composition:
      "Multivitamins, Minerals, Grape Seed Extract & Antioxidants",
    image: "/products/nutravion/box-front.png",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
      style={{
        animation: `fadeUp 0.8s ease ${delay}ms both`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="home-hero">
          <div className="hero-background-orb orb-a" />
          <div className="hero-background-orb orb-b" />

          <div className="container hero-grid">
            <Reveal className="hero-content">
              <span className="eyebrow">
                AROSHAMAN HEALTHCARE
              </span>

              <h1>
                Healthcare
                <br />
                <span>with purpose.</span>
              </h1>

              <p>
                A pharmaceutical healthcare company focused on dependable
                products, responsible growth and accessible healthcare
                solutions.
              </p>

              <div className="hero-actions">
                <Link href="#products" className="button-primary">
                  Explore Products →
                </Link>

                <Link href="/about" className="button-glass">
                  Discover Aroshaman
                </Link>
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={180}>
              <div
                className="hero-logo-orb"
                style={{
                  position: "relative",
                  width: "360px",
                  height: "360px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "88%",
                    height: "88%",
                    border: "1px solid rgba(198,157,70,.65)",
                    borderRadius: "50%",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: "1px solid rgba(198,157,70,.50)",
                    borderRadius: "50%",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "112%",
                    height: "112%",
                    border: "1px solid rgba(198,157,70,.38)",
                    borderRadius: "50%",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: "124%",
                    height: "124%",
                    border: "1px solid rgba(198,157,70,.25)",
                    borderRadius: "50%",
                  }}
                />

                <img
                  src="/logo/icon.png"
                  alt="Aroshaman Healthcare"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    width: "190px",
                    height: "190px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="floating-pill pill-one">
                QUALITY
              </div>

              <div className="floating-pill pill-two">
                CARE
              </div>

              <div className="floating-pill pill-three">
                TRUST
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="section intro-section">
          <div className="container split-grid">
            <Reveal>
              <span className="eyebrow">
                WHO WE ARE
              </span>

              <h2>
                Pharmaceutical thinking.
                <br />
                <span>Human purpose.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="large-text">
                Aroshaman Healthcare Private Limited is built around
                a simple principle: healthcare products should combine
                quality, reliability and accessibility.
              </p>

              <Link href="/about" className="text-link">
                Learn more about us →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <section id="products" className="section products-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="eyebrow">
                OUR PRODUCTS
              </span>

              <h2>
                Our healthcare
                <br />
                <span>portfolio.</span>
              </h2>

              <p>
                Explore our current product portfolio and detailed
                product information.
              </p>
            </Reveal>

            <div className="product-grid">
              {products.map((product, index) => (
                <Reveal
                  key={product.slug}
                  className="home-product-card"
                  delay={index * 90}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {/* PRODUCT IMAGE */}

                    <div className="card-image-space">
                      <img
                        src={product.image}
                        alt={`${product.name} box`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>

                    {/* PRODUCT INFORMATION */}

                    <div className="product-card-body">
                      <span>{product.category}</span>

                      <h3>{product.name}</h3>

                      <p>{product.composition}</p>

                      <div
                        style={{
                          display: "inline-block",
                          marginTop: "12px",
                          fontSize: "12px",
                          fontWeight: 900,
                          color: "#102337",
                        }}
                      >
                        View Product <span>↗</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROFESSIONAL RELATIONSHIPS — WITH IMAGE
        ===================================================== */}

        <section className="section philosophy-section">
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              alignItems: "center",
              gap: "48px",
            }}
          >
            <Reveal>
              <span className="eyebrow">
                OUR APPROACH
              </span>

              <h2>
                Professional relationships.
                <br />
                <span>Long-term value.</span>
              </h2>

              <p
                className="large-text"
                style={{
                  marginTop: "20px",
                  lineHeight: 1.8,
                  maxWidth: "540px",
                }}
              >
                We believe meaningful healthcare partnerships are built
                on trust, responsible practices and a shared commitment
                to quality. Our focus is on creating lasting relationships
                that deliver value to healthcare professionals and the
                communities they serve.
              </p>

              <Link
                href="/about"
                className="text-link"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                }}
              >
                Discover Aroshaman →
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "24px",
                  border: "1px solid rgba(198,157,70,.35)",
                  boxShadow: "0 24px 60px rgba(16,35,55,.12)",
                  background: "#f4f7f9",
                  aspectRatio: "4 / 3",
                }}
              >
                <img
                  src="/images/professional-relationships.png"
                  alt="Healthcare professionals collaborating in a clinical setting"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
