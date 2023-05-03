import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import styles from "../index.css";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
    <br />
      <div className={`container ${styles.contactus}`}>
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
            <p className="text-justify mt-2">
              Any query and info about product feel free to call anytime we are
              available 24X7.
            </p>
            <p className="mt-3">
              <BiMailSend /> : www.help@WondrShop.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> : 012-3456789
            </p>
            <p className="mt-3">
              <BiSupport /> : 1800-0000-0000 (toll free)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
