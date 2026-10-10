
"use client";

import { useState, type FormEvent } from "react";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const values = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          phone: values.get("phone"),
          message: values.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send enquiry.");
      }

      setStatus("Enquiry sent successfully!");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="inner-page">
      <section className="page-hero section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">CONTACT US</span>
            <h1>
              Let&apos;s start a
              <br />
              <span>conversation.</span>
            </h1>
            <p>
              For business enquiries, product information, partnerships
              and healthcare opportunities, connect with our team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>
              We&apos;re here
              <br />
              <span>to help.</span>
            </h2>

            <div className="contact-item">
              <span>Email</span>
              <strong>contact@aroshamanhealthcare.com</strong>
            </div>

            <div className="contact-item">
              <span>Mumbai</span>
              <strong>Wadala, Mumbai, Maharashtra</strong>
              <strong>+91 96990 58817</strong>
            </div>

            <div className="contact-item">
              <span>Azamgarh</span>
              <strong>
                Sherpur, Nizamabad, Azamgarh, Uttar Pradesh
              </strong>
              <strong>+91 86551 88689</strong>
            </div>
          </Reveal>

          <Reveal className="contact-form-card" delay={120}>
            <form onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  maxLength={100}
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  maxLength={254}
                />
              </label>

              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  maxLength={30}
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  required
                  maxLength={5000}
                />
              </label>

              <button
                type="submit"
                className="button-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Enquiry →"}
              </button>

              {status && <p role="status">{status}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
