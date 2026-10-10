"use client";

import { useState } from "react";
import Link from "next/link";

export default function MoventisPage() {
  const [selectedImage, setSelectedImage] = useState(
    "/products/moventis/box-front.png"
  );

  const images = [
    "/products/moventis/box-front.png",
    "/products/moventis/box-back.png",
    "/products/moventis/strip-front.png",
    "/products/moventis/strip-back.png",
  ];

  return (
    <main className="product-detail-page">

      {/* TOP BAR */}
      <div className="container product-topbar">
        <Link href="/#products" className="product-back">
          ← Back to Products
        </Link>
      </div>


      {/* PRODUCT MAIN SECTION */}
      <section className="product-main-section">

        <div className="container product-main-grid">

          {/* =====================================================
              LEFT SIDE - PRODUCT IMAGES
          ===================================================== */}

          <div className="product-view-area">

            {/* MAIN IMAGE */}
            <div className="product-image-main">

              <img
                src={selectedImage}
                alt="MOVENTIS"
              />

            </div>


            {/* THUMBNAILS */}
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
                    alt={`MOVENTIS view ${index + 1}`}
                  />

                </button>

              ))}

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE - PRODUCT INFORMATION
          ===================================================== */}

          <div className="product-info">

            <span className="product-category">
              Pain Management
            </span>


            <h1>
              MOVENTIS
            </h1>


            <p className="product-composition">
              Aceclofenac 100 mg + Paracetamol 325 mg
            </p>


            {/* PRICE / PACK */}
            <div className="product-price-grid">

              <div className="product-price-card">
                <span>
                  MRP
                </span>

                <strong>
                  ₹78.90
                </strong>
              </div>


              <div className="product-price-card">
                <span>
                  PACK SIZE
                </span>

                <strong>
                  10 × 10 Tablets
                </strong>
              </div>

            </div>


            <div className="product-divider" />


            {/* OVERVIEW */}
            <h2>
              Product Overview
            </h2>


            <p className="product-description">
              MOVENTIS combines Aceclofenac and Paracetamol and is
              positioned in the pain management segment. It is part of
              the Aroshaman Healthcare product portfolio, developed
              with a focus on dependable pharmaceutical solutions.
            </p>


            {/* KEY INFORMATION */}
            <h2>
              Product Information
            </h2>


            <div className="product-key-info">

              <div className="product-info-row">
                <span>
                  Composition
                </span>

                <strong>
                  Aceclofenac 100 mg + Paracetamol 325 mg
                </strong>
              </div>


              <div className="product-info-row">
                <span>
                  Dosage Form
                </span>

                <strong>
                  Tablets
                </strong>
              </div>


              <div className="product-info-row">
                <span>
                  Therapeutic Category
                </span>

                <strong>
                  Pain Management
                </strong>
              </div>


              <div className="product-info-row">
                <span>
                  Pack Size
                </span>

                <strong>
                  10 × 10 Tablets
                </strong>
              </div>


              <div className="product-info-row">
                <span>
                  MRP
                </span>

                <strong>
                  ₹78.90
                </strong>
              </div>


              <div className="product-info-row">
                <span>
                  Prescription Status
                </span>

                <strong>
                  Schedule H Prescription Drug
                </strong>
              </div>


              <div className="product-info-row">
                <span>
                  Storage
                </span>

                <strong>
                  Store in a cool, dry & dark place at a temperature
                  not exceeding 30°C.
                </strong>
              </div>

            </div>


            {/* NOTE */}
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