
"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import productsData from "../data/products.json";

const categories = [
  {
    name: "Surgical Instruments",
    description: "Precision tools for clinical practice",
    keywords: [
      "FORCEPS", "SCISSOR", "SCISSORS", "RETRACTOR", "NEEDLE HOLDER",
      "SURGICAL BLADE", "SCALPEL", "CLAMP", "SPECULUM", "CURETTE",
      "TOWEL CLIP", "PROBE", "DILATOR", "DISSECTOR", "SURGICAL INSTRUMENT",
    ],
  },
  {
    name: "Medical Disposables",
    description: "Everyday essential medical supplies",
    keywords: [
      "SYRINGE", "GLOVE", "GLOVES", "MASK", "NEBULIZER", "OXYGEN MASK",
      "OXYGEN TUBE", "CATHETER", "IV SET", "INFUSION SET", "URINE BAG",
      "DISPOSABLE", "PULSE OXIMETER", "WRIST BAND", "NEEDLE", "SPOON",
    ],
  },
  {
    name: "Wound Care",
    description: "Dressings and wound-care essentials",
    keywords: [
      "BANDAGE", "DRESSING", "GAUZE", "COTTON", "WOUND", "GAUZE ROLL",
      "ADHESIVE TAPE", "SURGICAL TAPE", "ABDOMINAL PAD", "BURN DRESSING",
      "CREPE", "MICROPORE",
    ],
  },
  {
    name: "Surgical Consumables",
    description: "Essential supplies for healthcare professionals",
    keywords: [],
  },
];

type Product = {
  id: number;
  name: string;
};

const products = productsData as Product[];

function getCategory(product: Product) {
  const name = product.name.toUpperCase();

  for (const category of categories) {
    if (
      category.keywords.length > 0 &&
      category.keywords.some((keyword) => name.includes(keyword))
    ) {
      return category.name;
    }
  }

  return "Surgical Consumables";
}

function ProductCardPhoto({ name }: { name: string }) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);

  const safeName = name
    .replace(/[<>:"/\\|?*\u0000-\u001F]/g, "")
    .replace(/[. ]+$/, "")
    .trim();

  const extensions = [".jpg", ".jpeg", ".png", ".avif"];

  const filenames = [
    safeName,
    `${safeName} 2`,
    `${safeName} 3`,
  ].flatMap((base) =>
    extensions.map((extension) => `${base}${extension}`)
  );

  const imagePaths = filenames.map(
    (filename) =>
      `/images/surgical/products/${encodeURIComponent(filename)}`
  );

  if (failed) {
    return (
      <span
        className="catalogue-product-placeholder"
        aria-label="Product image unavailable"
      >
        ✚
      </span>
    );
  }

  return (
    <img
      key={name}
      src={imagePaths[attempt]}
      alt={name}
      loading="lazy"
      onError={() => {
        if (attempt < imagePaths.length - 1) {
          setAttempt((current) => current + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

export default function SurgicalProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory || getCategory(product) === selectedCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <main className="catalogue-page">
      <div className="mx-auto max-w-7xl">
        <a
          href="/surgical"
          className="mb-8 inline-flex text-sm font-medium text-[#52677f] transition-colors duration-300 hover:text-[#087f8c]"
        >
          ← Back to Surgical Division
        </a>

        <header className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#087f8c]">
            Aroshaman Healthcare
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Surgical Product Catalogue
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#657186]">
            Explore our product range by category and search for the items you
            need.
          </p>
        </header>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => {
            const isSelected = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setSelectedCategory(isSelected ? "" : category.name);
                  setSearch("");
                }}
                className={`rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36e5ff] ${
                  isSelected
                    ? "border-[#087f8c] bg-[#e9f6f6] shadow-md"
                    : "border-[#e5e9ef] bg-white hover:border-[#a9d7da]"
                }`}
              >
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3f5] text-sm font-semibold text-[#087f8c]">
                  0{index + 1}
                </span>

                <h2 className="text-lg font-semibold">{category.name}</h2>

                <p className="mt-2 text-sm leading-6 text-[#657186]">
                  {category.description}
                </p>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#087f8c]">
                  {isSelected ? "Selected ✓" : "Explore products →"}
                </p>
              </button>
            );
          })}
        </div>

        <section className="rounded-2xl border border-[#e5e9ef] bg-white p-5 sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {selectedCategory || "All Products"}
              </h2>

              <p className="mt-2 text-sm text-[#657186]">
                {filteredProducts.length} products found
              </p>
            </div>

            {selectedCategory && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("");
                  setSearch("");
                }}
                className="self-start text-sm font-medium text-[#087f8c] transition-colors hover:underline"
              >
                View all categories
              </button>
            )}
          </div>

          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>

          <div className="relative mb-8">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#8793a5]">
              ⌕
            </span>

            <input
              id="product-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={
                selectedCategory
                  ? `Search in ${selectedCategory}...`
                  : "Search products by name..."
              }
              className="w-full rounded-xl border border-[#dfe5ec] bg-[#fafbfd] py-4 pl-12 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-[#929dad] focus:border-[#087f8c] focus:ring-2 focus:ring-[#087f8c]/10"
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/surgical/products/${product.id}`}
                  className="catalogue-product-card"
                >
                  <div className="catalogue-product-image">
                    <ProductCardPhoto name={product.name} />
                  </div>

                  <div className="catalogue-product-info">
                    <p>{getCategory(product)}</p>
                    <h3>{product.name}</h3>

                    <span className="catalogue-product-link">
                      View product details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-[#f7f9fb] px-5 py-14 text-center">
              <p className="text-lg font-semibold">No products found</p>
              <p className="mt-2 text-sm text-[#657186]">
                Try another product name or select a different category.
              </p>
            </div>
          )}
        </section>

        <p className="mt-8 text-center text-xs leading-6 text-[#8793a5]">
          Product images and specifications will be added when verified details
          are available.
        </p>
      </div>
    </main>
  );
}
