
"use client";

import { useState } from "react";

const extensions = [".jpg", ".jpeg", ".png", ".avif"];

const arrowImages = [
  "ARROW (CV12702) CVC SET 2-LUMEN 7FR16CM.jpg",
  "ARROW (CV12702) CVC SET 2-LUMEN 7FR16CM 2.jpg",
  "ARROW (CV12702) CVC SET 2-LUMEN 7FR16CM 3.png",
];

function getSafeName(name: string) {
  return name
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "")
    .replace(/[. ]+$/, "")
    .trim();
}

function ProductPhoto({
  name,
  number,
}: {
  name: string;
  number: number;
}) {
  const [extensionIndex, setExtensionIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const isArrow = name.includes("CV12702");
  const exactArrowPath = isArrow
    ? `/images/surgical/products/${encodeURIComponent(arrowImages[number - 1])}`
    : "";

  const safeName = getSafeName(name);
  const suffix = number === 1 ? "" : ` ${number}`;
  const fallbackPath = `/images/surgical/products/${encodeURIComponent(
    `${safeName}${suffix}${extensions[extensionIndex]}`
  )}`;

  if (failed) {
    return (
      <div className="product-gallery-item product-gallery-placeholder">
        Image unavailable
      </div>
    );
  }

  return (
    <div className="product-gallery-item">
      <img
        src={isArrow ? exactArrowPath : fallbackPath}
        alt={`${name} image ${number}`}
        onError={() => {
          if (!isArrow && extensionIndex < extensions.length - 1) {
            setExtensionIndex((current) => current + 1);
          } else {
            setFailed(true);
          }
        }}
      />
    </div>
  );
}

export default function ProductImageGallery({
  name,
}: {
  name: string;
}) {
  return (
    <div className="product-detail-gallery">
      {[1, 2, 3].map((number) => (
        <ProductPhoto key={number} name={name} number={number} />
      ))}
    </div>
  );
}
