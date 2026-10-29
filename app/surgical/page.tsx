
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  {
    number: "01",
    title: "Surgical Instruments",
    detail: "Precision tools for clinical practice",
    image: "/images/surgical/categories/surgical-instruments-bg.png",
  },
  {
    number: "02",
    title: "Medical Disposables",
    detail: "Everyday essential medical supplies",
    image: "/images/surgical/categories/medical-disposables-bg.png",
  },
  {
    number: "03",
    title: "Wound Care",
    detail: "Dressings and wound-care essentials",
    image: "/images/surgical/categories/wound-care-bg.png",
  },
  {
    number: "04",
    title: "Surgical Consumables",
    detail: "Supplies for healthcare professionals",
    image: "/images/surgical/categories/surgical-consumables-bg.png",
  },
];

export default function SurgicalPage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setEntered(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`future-surgical ${entered ? "future-entered" : ""}`}>
      <section className="future-hero">
        <div className="future-grid-bg" />
        <div className="future-orb future-orb-one" />
        <div className="future-orb future-orb-two" />

        <div className="future-content">
          <div className="future-eyebrow">
            <span className="future-pulse" />
            AROSHAMAN HEALTHCARE
            <span className="future-eyebrow-line" />
            SURGICAL DIVISION
          </div>

          <div className="future-overline">
            NEXT-GENERATION MEDICAL SUPPLIES
          </div>

          <h1>
            Precision
            <br />
            meets <span>care.</span>
          </h1>

          <p className="future-description">
            Explore surgical instruments, medical disposables and essential
            healthcare supplies in one dedicated destination.
          </p>

          <div className="future-actions">
            <Link href="/surgical/products" className="future-button">
              Explore products <span>↗</span>
            </Link>
            <a href="#future-collections" className="future-text-link">
              Discover collections <span>↓</span>
            </a>
          </div>

          <div className="future-trust-line">
            <span className="future-trust-dot" />
            BUILT FOR HEALTHCARE PROFESSIONALS
          </div>
        </div>

        <div
          className="future-visual"
          aria-label="Abstract futuristic medical technology illustration"
        >
          <div className="future-visual-top">
            <span>MEDICAL SYSTEMS</span>
            <span className="future-live">
              <i /> INTERFACE ACTIVE
            </span>
          </div>

          <div className="future-core">
            <div className="future-ring future-ring-outer" />
            <div className="future-ring future-ring-middle" />
            <div className="future-ring future-ring-inner" />

            <div className="future-cross">
              <span />
              <span />
            </div>

            <div className="future-core-center">
              <img
                src="/logo/icon.png"
                alt="Aroshaman Healthcare"
                className="future-core-logo"
              />
            </div>

            <div className="future-node node-one" />
            <div className="future-node node-two" />
            <div className="future-node node-three" />
            <div className="future-node node-four" />

            <div className="future-orbit-label orbit-label-one">
              <span>01</span> PRECISION
            </div>
            <div className="future-orbit-label orbit-label-two">
              <span>02</span> QUALITY FOCUS
            </div>
          </div>

          <div className="future-data-card future-data-left">
            <span className="future-data-icon">+</span>
            <div>
              <small>COLLECTION</small>
              <strong>Surgical essentials</strong>
            </div>
          </div>

          <div className="future-data-card future-data-right">
            <span className="future-data-bars">
              <i />
              <i />
              <i />
              <i />
            </span>
            <div>
              <small>YOUR NEXT STEP</small>
              <strong>Explore catalogue</strong>
            </div>
            <span className="future-card-arrow">↗</span>
          </div>

          <div className="future-visual-bottom">
            <span>DESIGNED AROUND PRECISION</span>
            <span>01 / 04</span>
          </div>
        </div>

        <div className="future-bottom-mark">
          <span>SCROLL TO EXPLORE</span>
          <span className="future-scroll-line" />
        </div>
      </section>

      <section className="future-collections" id="future-collections">
        <div className="future-section-heading">
          <div>
            <span className="future-section-kicker">
              THE SURGICAL COLLECTION
            </span>
            <h2>
              Essential supplies.
              <br />
              <span>One destination.</span>
            </h2>
          </div>
          <p>
            Browse dedicated categories to find the supplies your healthcare
            business needs.
          </p>
        </div>

        <div className="future-category-grid">
          {categories.map((category) => (
            <Link
              href="/surgical/products"
              className="future-category-card"
              key={category.number}
              key={category.number}
            >
              <div className="future-category-top">
                <span>{category.number} / 04</span>
                <span className="future-category-arrow">↗</span>
              </div>

              <div
                className="future-category-image"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(4, 15, 27, 0.12) 0%, rgba(4, 15, 27, 0.32) 42%, rgba(4, 15, 27, 0.88) 100%), url("${category.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden="true"
              >
                <div className="future-category-image-overlay" />
              </div>

              <h3>{category.title}</h3>
              <p>{category.detail}</p>

              <div className="future-category-footer">
                <span>EXPLORE COLLECTION</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="future-catalogue-banner">
          <div>
            <span>READY TO EXPLORE?</span>
            <h3>Your surgical catalogue awaits.</h3>
          </div>
          <Link href="/surgical/products" className="future-button">
            View products <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="future-footer">
        <span>AROSHAMAN HEALTHCARE PRIVATE LIMITED</span>
        <span className="future-footer-tagline">
          SURGICAL DIVISION <i /> PRECISION MEETS CARE
        </span>
      </footer>
    </main>
  );
}
