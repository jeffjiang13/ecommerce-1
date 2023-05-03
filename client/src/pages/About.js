import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - WondrShop"}>
      <br />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="about"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p className="text-justify mt-2">
              Welcome to WondrShop, the online destination for unique and exciting
              products that will add wonder to your life! Our store is dedicated
              to bringing you the latest and greatest in fashion, home decor,
              electronics, gadgets, and more, all in one convenient place.
            </p>
            <p className="text-justify mt-2">
              At WondrShop, we believe that shopping should be a fun and enjoyable
              experience. That's why we handpick every product in our store to
              make sure it's not just practical, but also inspires a sense of joy,
              awe, and wonder. Our team is always on the lookout for new and
              exciting items, so you can always find something fresh and unique on
              our virtual shelves.
            </p>
            <p className="text-justify mt-2">
              Whether you're looking for the perfect gift for a loved one, or just
              want to treat yourself to something special, WondrShop has got you
              covered. We pride ourselves on providing excellent customer service
              and fast shipping, so you can start enjoying your new purchase as
              soon as possible.
            </p>
            <p className="text-justify mt-2">
              So go ahead, browse our collection of amazing products, and
              experience the wonder of WondrShop!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
