
import Header from "./Header";

export default function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          {/* COMPANY BRAND */}
          <div>
            <div className="footer-brand">
              <div className="brand-orb small">
                <img
                  src="/logo/icon.png"
                  alt="Aroshaman Healthcare"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              <div>
                <strong>AROSHAMAN</strong>
                <small>HEALTHCARE PRIVATE LIMITED</small>
              </div>
            </div>

            <p>
              Quality-focused pharmaceutical healthcare solutions built
              around reliability, accessibility and responsible growth.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4>QUICK LINKS</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact Us</a>
          </div>

          {/* CONTACT AND OFFICE LOCATIONS */}
          <div>
            <h4>CONTACT</h4>

            <p>
              142, Sangam Nagar, VIT College, Wadala, Mumbai, Maharashtra
            </p>

            <a
              href="https://www.google.com/maps/place/Aroshaman+Healthcare+Private+Limited/@19.0222899,72.8683393,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cfa960271633:0x7f65db5ff66b63f4!8m2!3d19.0222899!4d72.8709142!16s%2Fg%2F11n9w6vy_3?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              style={{
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              Get Directions →
            </a>

            <p>Sherpur, Nizamabad, Azamgarh, Uttar Pradesh</p>

            <a
              href="https://www.google.com/maps/place/Aroshaman+Healthcare+Private+Limited/@26.0643862,83.0561109,17z/data=!3m1!4b1!4m6!3m5!1s0x3991af2acaf673f1:0x146afa9415d2d245!8m2!3d26.0643862!4d83.0586858!16s%2Fg%2F11z4wlmy0t?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              style={{
                display: "inline-block",
                marginBottom: "16px",
              }}
            >
              Get Directions →
            </a>

            <p>
              <a href="tel:+919699058817">+91 96990 58817</a>
              <br />
              <a href="tel:+919892957982">+91 98929 57982</a>
              <br />
              <a href="tel:+918655188689">+91 86551 88689</a>
            </p>

            <p>
              <a href="mailto:contact@aroshamanhealthcare.com">
                contact@aroshamanhealthcare.com
              </a>
              <br />
              <a href="mailto:azamgarh@aroshamanhealthcare.com">
                azamgarh@aroshamanhealthcare.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Aroshaman Healthcare Private Limited.
          All rights reserved.
        </div>
      </footer>
    </>
  );
}
