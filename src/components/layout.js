import React from "react";
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
        allContentfulService {
          edges {
            node {
              name
              slug
            }
          }
        }
        allContentfulLocation {
          edges {
            node {
              name
              slug
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
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>MySweetSite</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>

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
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li className="hidden-sm">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Services
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      {data.allContentfulService.edges.map(
                        ({ node }, counter) => (
                          <li key={"service -" + counter}>
                            <a href={"/services/" + node.slug + "/"}>
                              <div>{node.name}</div>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Locations
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      {data.allContentfulLocation.edges.map(
                        ({ node }, counter) => (
                          <li key={"location -" + counter}>
                            <a href={"/locations/" + node.slug + "/"}>
                              <div>{node.name}</div>
                            </a>
                          </li>
                        )
                      )}
                      {/* <li>
                        <a href="/locations/sumter-plant/">Sumter Plant</a>
                      </li>
                      <li>
                        <a href="/locations/greenwood-plant/">
                          Greenwood Plant
                        </a>
                      </li>
                      <li>
                        <a href="/locations/wm-f-mcgraw-co/">
                          Wm. F. McGraw &amp; Co.
                        </a>
                      </li>
                      <li>
                        <a href="/locations/cincinnati-plant/">
                          Cincinnati Plant
                        </a>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <a href="/news">News</a>
                  </li>
                  <li>
                    <a href="/equipmentlist">Equipment</a>
                  </li>
                  <li>
                    <a href="/materiallist">Materials</a>
                  </li>
                  <li>
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
                  </li>
                  <li>
                    <a href="/employment">Jobs</a>
                  </li>
                </ul>
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
      </div>
    )}
  />
);
