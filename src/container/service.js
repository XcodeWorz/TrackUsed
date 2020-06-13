import React from 'react';
import box from '../images/box.png'
import people from '../images/people.png'
import car from '../images/car.png'
import doc from '../images/doc.png'
import track from '../images/track.png'
import world from '../images/world.png'

const Service = () => {
  return (
    <div className="widget-all-dhl-services-offer">
    <div className="row">
      <section>
        <div className="icon-box">
          <div className="col-xs-12">
            <div className="title">OUR OFFERINGS</div>
          </div>
          <div className="clearfix">&nbsp;</div>
          <div className="grid">
            <div className="col-xs-6 col-xs-offset-0 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1">
              <div className="grid-item">
                <img
                  alt="Next possible working day delivery"
                  src={box}
                />
                <p>Next possible working day delivery</p>
              </div>
            </div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-offset-0 col-sm-4 no-side-padding-md col-md-2 col-md-offset-1">
              <div className="grid-item">
                <img
                  alt="Fast and secure parcel delivery "
                  src={car}
                />
                <p>Fast and secure parcel delivery&nbsp;</p>
              </div>
            </div>
            <div className="clearfix hidden-sm hidden-md hidden-lg">&nbsp;</div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-offset-0 col-sm-4  col-md-3 col-md-offset-1">
              <div className="grid-item">
                <img
                  alt="Door-to-door delivery"
                  src={people}
                />
                <p>Door-to-door delivery</p>
              </div>
            </div>
            <div className="clearfix hidden-xs">&nbsp;</div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1">
              <div className="grid-item">
                <img
                  alt="Signature on delivery (where available)"
                  src={doc}
                />
                <p>Signature on delivery (where available)</p>
              </div>
            </div>
            <div className="clearfix hidden-sm hidden-md hidden-lg">&nbsp;</div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-offset-0 col-sm-4 no-side-padding-md col-md-2 col-md-offset-1">
              <div className="grid-item">
                <img
                  alt="Free tracking by text, phone, online"
                  src={track}
                />
                <p>Free tracking online</p>
              </div>
            </div>
            <div className="col-xs-6 col-xs-offset-0 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1">
              <div className="grid-item">
                <img
                  alt="UK and international delivery"
                  src={world}
                />
                <p>UK and international delivery</p>
              </div>
            </div>
            <div className="clearfix">&nbsp;</div>
          </div>
          {/* <div className="col-xs-12">
            <p className="container">
              DHL Express is the global market leader in the international express
              courier&nbsp;business. DHL specialises in the door-to-door delivery
              of documents and parcels worldwide and has more than 100,000
              employees operating in more than 220 countries and
              territories.&nbsp;
            </p>
            <p>&nbsp;</p>
          </div> */}
        </div>
      </section>
    </div>
  </div>
  );
};

export default Service;