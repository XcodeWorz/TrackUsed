import React from 'react';
import img from '../images/slider-mainbg-002.jpg'

const Main = () => {
  return (
    <div className="row">
      <section>
        <div className="carousel-dhl-container destination-carousel">
          <div className="row">
            <div
              id="carousel-dhl-w1"
              className="carousel slide carousel-dhl"
              data-ride="carousel"
              data-interval={10000}
            >
              <div className="carousel-inner">
                <div className="item active">
                  <div
                    className="carousel-image"
                    style={ { backgroundImage: `url(${img})` } }
                    title=" COURIER SERVICES  FOR EXPRESS PARCEL DELIVERY WORLDWIDE"
                  />
                  <div className="carousel-content">
                    <div className="col-xs-12 col-xs-offset-0 col-md-6 col-md-offset-1 no-subline-topline no-side-padding">
                      <div className="headline" style={{ color: "#fff", paddingTop: "5px" }}>
                        EFFICIENT PARCEL DELIVERY SERVICES WORLDWIDE{" "}
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </section>
      <div className="clearfix" />
    </div>
  );
};

export default Main;