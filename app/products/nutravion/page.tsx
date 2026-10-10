"use client";

import { useState } from "react";
import Link from "next/link";

export default function NutravionPage() {
  const [selectedImage, setSelectedImage] = useState(
    "/products/nutravion/box-front.png"
  );

  const images = [
    "/products/nutravion/box-front.png",
    "/products/nutravion/strip-front.png",
    "/products/nutravion/box-back.png",
    "/products/nutravion/strip-back.png",
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
                alt="NUTRAVION"
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
                    alt={`NUTRAVION view ${index + 1}`}
                  />

                </button>

              ))}

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="product-info">

            <span className="product-category">
              Nutraceutical
            </span>


            <h1>
              NUTRAVION
            </h1>


            <p className="product-composition">
              Vitamins, Minerals, Grape Seed Extract & Antioxidant
              Tablets
            </p>


            {/* PRICE / PACK */}
            <div className="product-price-grid">

              <div className="product-price-card">

                <span>
                  MRP
                </span>

                <strong>
                  ₹292.37
                </strong>

              </div>


              <div className="product-price-card">

                <span>
                  PACK SIZE
                </span>

                <strong>
                  1 × 15 Tablets
                </strong>

              </div>

            </div>


            <div className="product-divider" />


            {/* OVERVIEW */}
            <h2>
              Product Overview
            </h2>


            <p className="product-description">
              NUTRAVION is a nutritional formulation combining
              vitamins, minerals, grape seed extract and antioxidant
              ingredients. It is positioned in the nutraceutical
              segment as part of the Aroshaman Healthcare portfolio.
            </p>


            {/* PRODUCT INFORMATION */}
            <h2>
              Product Information
            </h2>


            <div className="product-key-info">

              <div className="product-info-row">

                <span>
                  Composition
                </span>

                <strong>
                  Vitamins, Minerals, Grape Seed Extract &
                  Antioxidants
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
                  Nutraceutical
                </strong>

              </div>


              <div className="product-info-row">

                <span>
                  Pack Size
                </span>

                <strong>
                  1 × 15 Tablets
                </strong>

              </div>


              <div className="product-info-row">

                <span>
                  MRP
                </span>

                <strong>
                  ₹292.37
                </strong>

              </div>


              <div className="product-info-row">

                <span>
                  Product Type
                </span>

                <strong>
                  Nutraceutical / Nutritional Supplement
                </strong>

              </div>


              <div className="product-info-row">

                <span>
                  Storage
                </span>

                <strong>
                  Store in a cool, dry & dark place. Protect from
                  light, heat & moisture.
                </strong>

              </div>

            </div>


            {/* NOTE */}
            <div className="product-note">

              Product information is provided for informational and
              professional purposes. Use according to appropriate
              professional guidance.

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}