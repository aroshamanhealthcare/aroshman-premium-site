import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export default function SurgicalProductsPage() {
  return (
    <Suspense fallback={<main className="catalogue-page">Loading products...</main>}>
      <ProductsClient />
    </Suspense>
  );
}
