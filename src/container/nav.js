import React from 'react';
import logo from '../images/logo.png'

const loggedIn = sessionStorage.getItem('data')

const Nav = () => {

  const logOut = () => {
    sessionStorage.removeItem('data')
  }

  return (
    <div className="container main-container">
      <div className="row">
        <header>
          <div className="header-container">
            <div className="menu-container">
              <div className="logo no-side-padding">
                <a href="/" title="Home">
                  <img
                    src={logo}
                    alt="Logo"
                  />
                </a>{" "}
              </div>
              <div className="navigation no-side-padding">
                <nav className="navbar navbar-dhl">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="collapse navbar-collapse main-menu">
                    <ul className="nav navbar-nav">
                    <li className="level level0">
                        <a
                          href="/"
                          title
                          className
                          data-cta-parent
                          data-cta-subparent
                          data-cta-type
                        >
                          Home
                        </a>
                      </li>
                      <li className="level level0">
                        <a
                          href="/service"
                          title
                          className
                          data-cta-parent
                          data-cta-subparent
                          data-cta-type
                        >
                          Services
                        </a>
                      </li>
                      <li className="level level0">
                        <a
                          href="/track"
                          title
                          className
                          data-cta-parent="main-nav-bar"
                          data-cta-subparent="help-&-advice"
                          data-cta-type="navigation-link"
                        >
                          Track your parcel
                        </a>
                      </li>
                      <li className="level level0">
                        <a
                          href="/contact"
                          title
                          className
                          data-cta-parent="main-nav-bar"
                          data-cta-subparent="blog"
                          data-cta-type="navigation-link"
                        >
                          Contact
                        </a>
                      </li>
                      {loggedIn &&
                      (
                        <>
                        <li className="level level0">
                        <a
                          href="/list"
                          title
                          className
                          data-cta-parent="main-nav-bar"
                          data-cta-subparent="blog"
                          data-cta-type="navigation-link"
                        >
                          List
                        </a>
                      </li>
                        <li className="level level0">
                        <a
                          href="/create"
                          title
                          className
                          data-cta-parent="main-nav-bar"
                          data-cta-subparent="blog"
                          data-cta-type="navigation-link"
                        >
                          Create
                        </a>
                      </li>
                      <li onClick ={logOut} className="level level0">
                        <a
                          href="/"
                          title
                          className
                          data-cta-parent="main-nav-bar"
                          data-cta-subparent="blog"
                          data-cta-type="navigation-link"
                        >
                          Log Out
                        </a>
                      </li>
                      </>
                      )}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Nav;