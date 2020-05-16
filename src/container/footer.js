import React from 'react';

const Footer = () => {
  return (
    <div className="row">
  <footer>
    <div className="footer-container">
      <div className="col-xs-12">
      </div>
      <div className="col-xs-12">
        <div className="footer-menu-container last-footer-menu-container" style={{padding: '5px'}}>
          <div className="footer-bottom-col">
            <div className="logo" />
            <div className="copy-text no-side-padding col-xs-12 col-md-10 col-md-offset-1">
              © 2020 | EATA Courier Limited | All Rights Reserved{" "}
              <br />
              Office: 71 BEAK STREET, LONDON,
              <br />
              W1F 9DB, UNITED KINGDOM <br />
              Company No. 1183288 | VAT No. 751812344
            </div>
            <div className="clearfix" />
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  </footer>
</div>
  );
};

export default Footer;