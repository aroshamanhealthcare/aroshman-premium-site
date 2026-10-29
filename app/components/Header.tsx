
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [launching, setLaunching] = useState(false);

 function openSurgical() {
  if (launching || pathname === "/surgical") return;

  setOpen(false);
  setLaunching(true);

  window.setTimeout(() => {
    router.replace("/surgical");
  }, 800);
}

  return (
    <>
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

          <button
            type="button"
            className="nav-cta"
            onClick={openSurgical}
            disabled={launching}
          >
            SURGICAL ↗
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
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

            <button
              type="button"
              onClick={openSurgical}
              disabled={launching}
              style={{
                border: 0,
                background: "transparent",
                textAlign: "left",
                padding: "16px",
                fontWeight: 800,
                color: "#102337",
                cursor: "pointer",
              }}
            >
              SURGICAL →
            </button>
          </div>
        </div>
      </header>

      {launching && (
        <div className="surgical-launch" role="status" aria-live="polite">
          <div className="launch-light launch-light-one" />
          <div className="launch-light launch-light-two" />

          <div className="launch-crosshair">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="launch-instrument launch-instrument-back">
            <div className="launch-handle" />
            <div className="launch-joint" />
            <div className="launch-blade" />
          </div>

          <div className="launch-instrument launch-instrument-front">
            <div className="launch-handle" />
            <div className="launch-joint" />
            <div className="launch-blade" />
          </div>

          <div className="launch-copy">
            <span>AROSHAMAN HEALTHCARE</span>
            <strong>SURGICAL</strong>
            <small>PREPARING YOUR EXPERIENCE</small>
          </div>

          <div className="launch-progress">
            <span />
          </div>
        </div>
      )}
    </>
  );
}
