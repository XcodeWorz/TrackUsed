import React, { Component } from "react";
import axios from "axios";

class Track extends Component {
  state = {
    series: [],
    query: "",
    loading: false,
  };

  inputChange = (e) => {
    this.setState({ query: e.target.value });
    console.log(e.target.value);
  };

  reset = (e) => {
    this.setState({ series: "" });
  };

  getShow = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    axios
      .get(
        `https://5d245031e39785001406ecde.mockapi.io/track?search=${this.state.query}`,
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then((res) => {
        this.setState({ series: res.data, loading: false });
        console.log("..", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="clearfix" />
        </div>
        <div className="widget-track-a-parcel-box---online">
          <div className="container">
            <section>
              <div className="grey-box first">
                <div className="grey-box-container">
                  <div className="title">Track Your Parcel</div>
                  <p>
                    EATA tracking online platform is a preferred way to find out
                    where your parcel is. <br /> There's no need to call
                    Customer Service when we can offer you real-time details of
                    your parcel's progress as it goes through the way to its
                    destination.
                  </p>
                  <p />
                  <div className="container no-side-margin">
                    <form>
                      {" "}
                      <div className="quote-tool-form-container">
                        <div className="col-xs-offset-0 col-sm-12 col-md-offset-4 col-md-4">
                          <div className="form-group field-trackaparcelform-number">
                            <label
                              className="control-label"
                              htmlFor="trackaparcelform-number"
                            >
                              Track a parcel
                            </label>
                            <div className="input-group">
                              <input
                                type="name"
                                className="form-control"
                                onChange={this.inputChange}
                                value={this.state.query}
                                placeholder="tracking number"
                              />
                              <span
                                onClick={this.getShow}
                                className="submit-arrow-container input-group-addon"
                              >
                                <span className="submit-arrow" />
                              </span>
                            </div>
                            <div className="help-block" />
                          </div>{" "}
                        </div>
                      </div>
                    </form>{" "}
                    <div className="clearfix" />
                  </div>
                  <p />
                  {this.state.loading && (
                    <i
                      className="fa fa-spinner fa-spin"
                      style={{ fontSize: "24px" }}
                    ></i>
                  )}
                  {this.state.series.map((item) => {
                    return (
                      <div key={item.id}>
                        <label
                          className="control-label"
                          htmlFor="trackaparcelform-number"
                        >
                          Hello {item.owner}
                          <br />
                          <br />
                          {item.transit && (
                            <p>
                              Enroute - {item.transit}{" "}
                              <i
                                style={{ color: "red" }}
                                className="fa fa-diamond"
                                aria-hidden="true"
                              ></i>{" "}
                            </p>
                          )}
                        </label>
                        <br />
                        <div className="grey-box first">
                          <div className="grey-box-container">
                            <label className="control-label">
                              {item.start}
                            </label>{" "}
                            <i
                              style={{ color: "red" }}
                              className="fa fa-diamond"
                              aria-hidden="true"
                            ></i>{" "}
                            ----------------------{" "}
                            <i
                              style={{ color: "red" }}
                              className="fa fa-diamond"
                              aria-hidden="true"
                            ></i>{" "}
                            ----------------------{" "}
                            <i
                              style={{ color: "red" }}
                              className="fa fa-diamond"
                              aria-hidden="true"
                            ></i>{" "}
                            <label className="control-label">
                              {item.destination}
                            </label>
                          </div>
                        </div>
                        <br />
                        <br />
                        {item.arrived === "Yes" ? (
                          <li>
                            <a href="/" target="_blank">
                              Parcel Status
                            </a>
                            &nbsp; Parcel arrived {item.destination}
                          </li>
                        ) : (
                          <li>
                            <a href="/" target="_blank">
                              Parcel Status
                            </a>
                            &nbsp; Bag out and enroute to {item.destination}
                          </li>
                        )}
                        <br />
                        <p>&nbsp;</p>
                        <ul className="text-left">
                          <li>
                            <a href="/" target="_blank">
                              Phone Number
                            </a>
                            &nbsp;{item.phone}
                          </li>
                          <br />
                          <li>
                            <a href="/" target="_blank">
                              Email
                            </a>
                            &nbsp;{item.email}
                          </li>
                          <br />
                          <li>
                            <a href="/" target="_blank">
                              Address
                            </a>
                            &nbsp; {item.address}
                          </li>
                          <br />
                          <li>
                            <a href="/" target="_blank">
                              ID Number
                            </a>
                            &nbsp; {item.Id_document}
                          </li>
                          <br />
                          <li>
                            <a href="/" target="_blank">
                              Sender
                            </a>
                            &nbsp; {item.sender}
                          </li>
                          <br />
                          <li>
                            <a href="/" target="_blank">
                              Parcel Description
                            </a>
                            &nbsp; {item.parcel_description}
                          </li>
                          <br />
                          <li>
                            <a href="/" target="_blank">
                              Courier Agent
                            </a>
                            &nbsp; {item.agent}
                          </li>
                        </ul>
                        {item.arrived === "Yes" && (
                          <div className="grey-box first">
                            <div className="grey-box-container">
                              <div className="title">
                                Parcel arrived {item.destination} awaiting
                                collection
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;