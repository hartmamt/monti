import React from "react";
import { Location } from "@reach/router";

import { Link, StaticQuery, graphql } from "gatsby";
import theme from "../style/theme.css";
import main from "../style/main.css";
import logo from "../../static/logo.jpg";

//import bootstrap from "bootstrap";

import "semantic-ui-css/semantic.min.css";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulServices {
          services {
            name
            slug
          }
        }
        contentfulLocations {
          locations {
            name
            shortName
            city
            state
            address1
            zipCode
            phoneNumber
            faxNumber
            emailAddress
            slug
            iso {
              title
              file {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ margin: `0 auto` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <img
            src={logo}
            style={{ marginTop: "-15px", marginRight: "-15px", height: "65px" }}
          />
          {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>MySweetSite</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul> */}

          <div
            className="navbar navbar-default navbar-fixed-top"
            role="navigation"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">
                  <img
                    src={logo}
                    alt="Monti - Manufacturer of Industrial Electrical Conductors & Insulators"
                    style={{
                      marginTop: "-15px",
                      marginRight: "-15px",
                      height: 65
                    }}
                  />
                  {/*span class="monti-logo">Monti</span*/}
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <a
                  target="_new"
                  href="https://vimeo.com/251159201"
                  className="navbar-btn btn btn-theme-primary pull-right hidden-sm hidden-xs"
                  style={{ margin: 15 }}
                >
                  Check out Monti's History
                </a>
                <a
                  href="/quote"
                  className="navbar-btn btn btn-theme-primary pull-right hidden-sm hidden-xs"
                  style={{ margin: 15 }}
                >
                  Request Quote
                </a>

                <Location>
                  {({ location }) => {
                    console.log(location);
                    return (
                      <ul className="nav navbar-nav navbar-right">
                        <li
                          className={location.pathname == "/" ? "active" : ""}
                        >
                          <a href="/">Home</a>
                        </li>
                        <li
                          className={
                            location.pathname.startsWith("/service")
                              ? "active hiddensm"
                              : "hiddensm"
                          }
                        >
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Services
                            <b className="caret" />
                          </a>
                          <ul className="dropdown-menu">
                            {data.contentfulServices.services.map(
                              (node, counter) => (
                                <li key={"service -" + counter}>
                                  <a href={"/services/" + node.slug + "/"}>
                                    <div>{node.name}</div>
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                        <li
                          className={
                            location.pathname.startsWith("/locations")
                              ? "active"
                              : ""
                          }
                        >
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Locations
                            <b className="caret" />
                          </a>
                          <ul className="dropdown-menu">
                            {data.contentfulLocations.locations.map(
                              (node, counter) => (
                                <li key={"location-" + counter}>
                                  <a href={`/locations/${node.slug}/`}>
                                    <div>{node.name}</div>
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                        <li
                          className={
                            location.pathname.startsWith("/news")
                              ? "active"
                              : ""
                          }
                        >
                          <a href="/news">News</a>
                        </li>
                        <li
                          className={
                            location.pathname.startsWith("/equipment")
                              ? "active"
                              : ""
                          }
                        >
                          <a href="/equipmentlist">Equipment</a>
                        </li>
                        <li
                          className={
                            location.pathname.startsWith("/materiallist")
                              ? "active"
                              : ""
                          }
                        >
                          <a href="/materiallist">Materials</a>
                        </li>
                        {/*                   
                      <li
                        className={
                          window.location.pathname.startsWith("/purchasing")
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Purchasing
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/purchasing">Purchasing</a>
                          </li>
                          <li>
                            <a href="/vendor">Vendor Login</a>
                          </li>
                        </ul>
                      </li> */}
                        <li
                          className={
                            location.pathname.startsWith("/employment")
                              ? "active"
                              : ""
                          }
                        >
                          <a href="/employment">Jobs</a>
                        </li>
                      </ul>
                    );
                  }}
                </Location>

                {/* Mobile Search */}
                <form
                  className="navbar-form navbar-right visible-xs"
                  role="search"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-theme-primary" type="button">
                        Search!
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              {/*/.nav-collapse */}
            </div>
          </div>
          {/* / .navigation */}
        </header>
        {children}
        <div>
          {/* Footer */}
          <footer>
            <div className="container">
              <div className="row">
                {data.contentfulLocations.locations.map((node, counter) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    style={{ whiteSpace: "nowrap" }}
                    key={"location-footer-" + counter}
                  >
                    <h4>
                      <i className="fa fa-map-marker text-theme-primary" />{" "}
                      {node.name}
                    </h4>
                    <p>
                      {node.address1}
                      <br /> {node.city}, {node.state}, {node.zipCode}
                      <br />
                      <br /> Phone: {node.phoneNumber}
                      <br /> Fax: {node.faxNumber}
                      <br /> Email: {node.emailAddress}
                      <br />
                      {node.iso ? (
                        <a
                          href={node.iso.file.url}
                          target="_blank"
                          rel="noopener"
                        >
                          {node.iso.title}
                        </a>
                      ) : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </footer>
          {/* Copyright */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright">
                  Copyright 2018 - Monti Incorporated | All Rights Reserved
                </div>
              </div>
            </div>
            {/* / .row */}
          </div>
          {/* / .container */}
          {/* Global site tag (gtag.js) - Google Analytics */}
          {/* END Global site tag (gtag.js) - Google Analytics */}
        </div>
      </div>
    )}
  />
);
