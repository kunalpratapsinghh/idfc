"use client";

export function IDFCFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bottom-0 left-0 w-full mt-8">
      {/* Section 1: nav links — gray bg */}
      <div className="footer-container-1 px-4">
        <div className="footer-border">
          <div className="footer-nav py-4 grid grid-col-1 md:grid-col-2 gap-4 md:flex">
            <a
              className="order-1 md:order-none"
              href="https://firstrewards.in/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms &amp; Condition
            </a>
            <a
              className="order-1 md:order-none"
              href="https://firstrewards.in/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              className="order-1 md:order-none"
              href="https://firstrewards.in/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: disclaimer — light gray bg */}
      <div className="footer-container-mid px-4">
        <div className="footer-border">
          <div className="footer-nav py-4 grid grid-col-1 md:grid-col-2 gap-4 md:flex">
            <div className="mid-text">
              <div>
                IDFC FIRST Bank Rewards &amp; Deals is a platform for
                communication of personalized offers extended by Merchants to
                IDFC FIRST Bank&apos;s Customers.
                <br />
                <br />
                IDFC FIRST Bank is only communicating the offers extended by
                Merchants to its Customers and not Selling/Rendering any of
                these Products/Services. IDFC FIRST Bank is neither guaranteeing
                nor making any representation. IDFC FIRST Bank is not
                responsible for Sale/Quality/Features of the Products/Services
                under the offers. The trademarks and brand logos are owned by
                the respective Sponsors/Suppliers/Retailers and are authorized
                for their use in India.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: copyright — dark bg */}
      <div>
        <div className="footer-container-2 py-4 text-center">
          <span className="footer-span">
            Copyright @ {year} CustCap Solutions Private Limited. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default IDFCFooter;
