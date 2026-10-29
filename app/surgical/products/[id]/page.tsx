
import Link from "next/link";
import productsData from "../../data/products.json";
import ProductImageGallery from "./ProductImageGallery";

type Product = {
  id: number;
  name: string;
};

const products = productsData as Product[];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="catalogue-page">
        <h1>Product not found</h1>
        <Link href="/surgical/products">← Back to catalogue</Link>
      </main>
    );
  }

  return (
    <main className="catalogue-page">
      <div>
        <Link href="/surgical/products" className="product-back-link">
          ← Back to product catalogue
        </Link>

        <p className="product-eyebrow">
          AROSHAMAN HEALTHCARE · SURGICAL DIVISION
        </p>

        <div className="product-detail-layout">
          <div className="product-detail-image">
            <ProductImageGallery name={product.name} />
          </div>

          <div className="product-detail-info">
            <p className="product-reference">PRODUCT ID: {product.id}</p>

            <h1>{product.name}</h1>

            <div className="product-detail-divider" />

            <h2>Product Overview</h2>
            <p>
              Contact our team for verified product specifications,
              available sizes and further information.
            </p>

            <h2>Product Details</h2>
            <ul>
              <li>Product name: {product.name}</li>
              <li>Product reference: {product.id}</li>
              <li>Specifications: To be confirmed</li>
              <li>Availability: Contact us for details</li>
            </ul>

            <Link className="product-enquiry-button" href="/contact">
              Enquire About This Product →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
