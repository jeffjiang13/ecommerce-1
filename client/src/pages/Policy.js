import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <br />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>Privacy Policy</h2>
            <h3>1. Introduction</h3>
            <p>
              Welcome to WondrShop. We respect your privacy and are committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, and share your personal data when you
              visit our website, interact with us, and purchase products from us.
            </p>
            <h3>2. What information we collect</h3>
            <p>
              We collect personal information such as your name, email address,
              phone number, and shipping address when you create an account or
              make a purchase on our website. We also collect usage data such as
              your IP address, browser type, and device information to improve
              your experience on our website.
            </p>
            <h3>3. How we use your information</h3>
            <p>
              We use your personal information to provide you with the products
              and services you request, communicate with you, and personalize
              your experience on our website. We may also use your information to
              send you promotional offers, newsletters, and updates.
            </p>
            <h3>4. Sharing your information</h3>
            <p>
              We may share your personal information with third parties to
              perform services on our behalf, such as payment processing and
              shipping. We require all third parties to respect the security of
              your personal data and to treat it in accordance with the law.
            </p>
            <h3>5. Security of your information</h3>
            <p>
              We take the security of your personal information seriously and use
              appropriate technical and organizational measures to protect it. We
              regularly review our security practices and update them as needed.
            </p>
            <h3>6. Your rights and choices</h3>
            <p>
              You have the right to access, update, or delete your personal
              information at any time. If you have any questions about this
              Privacy Policy or our data practices, please contact us at
              help@WondrShop.com.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
