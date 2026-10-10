"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">

        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            width: "210px",
            height: "52px",
            flexShrink: 0,
          }}
        >
          <img
            src="/logo/logo.png"
            alt="Aroshaman Healthcare Private Limited"
            style={{
              width: "190px",
              height: "48px",
              objectFit: "contain",
              objectPosition: "left center",
              display: "block",
            }}
          />
        </Link>

        <nav className="desktop-nav">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="nav-cta">
          LET&apos;S CONNECT
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={open ? "mobile-nav open" : "mobile-nav"}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" onClick={() => setOpen(false)}>
            LET&apos;S CONNECT →
          </Link>
        </div>

      </div>
    </header>
  );
}