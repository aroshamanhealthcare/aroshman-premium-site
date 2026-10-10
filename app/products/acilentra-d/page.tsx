"use client";

import { useState } from "react";
import Link from "next/link";

export default function AcilentraDPage() {
  const [selectedImage, setSelectedImage] = useState(
    "/products/acilentra%20d/acilentra.png"
  );

  const images = [
    "/products/acilentra%20d/acilentra.png",
    "/products/acilentra%20d/box-back.png",
    "/products/acilentra%20d/strip-front.png",
    "/products/acilentra%20d/strip-back.png",
  ];

  return (
    <main className="product-detail-page">

      {/* TOP BAR */}
      <div className="container product-topbar">
        <Link href="/#products" className="product-back">
          ← Back to Products
        </Link>
      </div>

      {/* PRODUCT */}
      <section className="product-main-section">
        <div className="container product-main-grid">

          {/* LEFT SIDE */}
          <div className="product-view-area">

            {/* MAIN IMAGE */}
            <div className="product-image-main">
              <img
                src={selectedImage}
                alt="ACILENTRA-D Pantoprazole Sodium 40 mg Domperidone 10 mg"
              />
            </div>

            {/* PRODUCT THUMBNAILS */}
            <div className="product-thumbnails">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={
                    selectedImage === image
                      ? "product-thumb active"
                      : "product-thumb"
                  }
                >
                  <img
                    src={image}
                    alt={`ACILENTRA-D product view ${index + 1}`}
                  />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="product-info">

            <span className="product-category">
              Gastro Care
            </span>

            <h1>ACILENTRA-D</h1>

            <p className="product-composition">
              Pantoprazole Sodium 40 mg + Domperidone 10 mg
            </p>

            {/* PRICE / PACK */}
            <div className="product-price-grid">

              <div className="product-price-card">
                <span>MRP</span>
                <strong>₹190.30</strong>
              </div>

              <div className="product-price-card">
                <span>PACK SIZE</span>
                <strong>10 × 10 Tablets</strong>
              </div>

            </div>

            <div className="product-divider" />

            {/* OVERVIEW */}
            <h2>Product Overview</h2>

            <p className="product-description">
              ACILENTRA-D is a combination pharmaceutical product
              containing Pantoprazole Sodium and Domperidone. It is
              positioned within the gastro-care segment and is designed
              as part of Aroshaman Healthcare&apos;s pharmaceutical
              product portfolio.
            </p>

            {/* PRODUCT DETAILS */}
            <h2>Product Details</h2>

            <div className="product-key-info">

              <div className="product-detail-row">
                <span>Composition</span>
                <strong>
                  Pantoprazole Sodium 40 mg + Domperidone 10 mg
                </strong>
              </div>

              <div className="product-detail-row">
                <span>Dosage Form</span>
                <strong>Enteric Coated Tablets</strong>
              </div>

              <div className="product-detail-row">
                <span>Therapeutic Category</span>
                <strong>Gastro Care</strong>
              </div>

              <div className="product-detail-row">
                <span>Pack Size</span>
                <strong>10 × 10 Tablets</strong>
              </div>

              <div className="product-detail-row">
                <span>MRP</span>
                <strong>₹190.30</strong>
              </div>

              <div className="product-detail-row">
                <span>Prescription Status</span>
                <strong>Schedule H Prescription Drug</strong>
              </div>

              <div className="product-detail-row">
                <span>Storage</span>
                <strong>
                  Store in a cool, dry &amp; dark place at a
                  temperature not exceeding 30°C.
                </strong>
              </div>

            </div>

            {/* PRODUCT NOTE */}
            <div className="product-note">
              Product information is provided for informational and
              professional purposes. Medicines should be used under
              appropriate medical guidance.
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}