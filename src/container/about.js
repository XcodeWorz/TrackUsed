import React from 'react';
import image1 from '../images/image1.jpg'

const About = () => {
  return (
    <div className="container">
    <div className="row">
    <section className="content-section section-south-africa">
      <div className="col-xs-12">
        <h1>COURIER SERVICES WORLDLWIDE</h1>
      </div>
      <div className="col-xs-12">
        <div className="content-section-body text-left">
          <p>
          When you send a parcel abroad, you need an international courier you can trust. At Eata, we have the experience and expertise to offer parcel delivery services that reach over 99% of the world’s population. We can help make the process easier by guiding you through the restrictions, customs charges and drop off options for each and every country.
          You can choose to book online, by phone or in person and we will collect from your door or you can drop off at any of our depots and over 11,000 Post Office® branches across the country. Our range of international services offer the perfect balance of speed and price for every parcel delivery and most services even include insurance as standard. When it comes to parcel delivery, we deliver. <br />
          </p>
        </div>
      </div>
      <div className="col-xs-12 col-md-5">
        {/* <div className="page-right-side">
          <div className="page-cta nh-cta">
            <a href="#quote-tool" className="red-button">
              Get a quote
            </a>
          </div>
          <div className="clearfix" />
        </div> */}
      </div>
      <div className="col-xs-12">
        <div className=" ">
          <div className="national-holidays">
            <img
              src={image1}
              alt="i"
              style={{width: '50%', height: '50%'}}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="widget-do-you-have-any-questions---widget">
  <hr className="hidden-md hidden-lg" style={{ marginBottom: 0 }} />
  <div className="row">
    <section>
      <div className="col-xs-12">
        <div className="white-widget">
          <div className="white-title">DO YOU HAVE ANY QUESTIONS?</div>
          <div className="white-text">
            <p>
              We will be happy to answer any questions or concerns you may have.
              Please call us on:
            </p>
          </div>
          <div className="white-red-text" style={{ fontSize: 30 }}>
            <span data-nosnippet>
              <strong>+44771514411</strong>
            </span>
          </div>
          <div className="white-text">
            <p>
              Our opening hours are <br /><br />
              07:30 - 20:00 Monday to Friday <br /><br />
              08:00 - 14:00 on Saturday.
              <br />
            </p>
          </div>
          <div className="clearfix">&nbsp;</div>
        </div>
        <div className="clearfix">&nbsp;</div>
      </div>
    </section>
  </div>
</div>
  </div>
  );
};

export default About;