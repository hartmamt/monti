import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";
import image1 from "../../static/homepage-1.jpg";
import image2 from "../../static/home-pano.jpg";
import image3 from "../../static/homepage-4.jpg";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulServices {
          services {
            name
            slug
            thumbnail {
              file {
                url
              }
            }
          }
        }
        allContentfulFeedback {
          edges {
            node {
              name
              quote {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        allContentfulNews(
          limit: 2
          sort: { fields: [dateAndTime], order: DESC }
        ) {
          edges {
            node {
              name
              frontPageText {
                childMarkdownRemark {
                  html
                }
              }
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {/* Wrapper */}
        <div className="wrapper" style={{ paddingTop: "0px" }}>
          <div className="row">
            {/* Home Slider */}
            <div
              className="home-slider col-sm-9"
              style={{
                marginTop: 35,
                padding: 1,
                paddingLeft: 0,
                paddingBottom: 22
              }}
            >
              {/* Carousel */}
              <div
                id="home-slider"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#home-slider"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#home-slider" data-slide-to={1} />
                  <li data-target="#home-slider" data-slide-to={2} />
                  <li data-target="#home-slider" data-slide-to={3} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  {/* Slide #1 */}
                  <div className="item active" id="item-1">
                    <div>
                      {/* <div class="container"> */}
                      <div className="row">
                        <div>
                          <div
                            className="home-slider__content"
                            style={{
                              paddingTop: 20,
                              textAlign: "center",
                              width: "100%"
                            }}
                          >
                            <iframe
                              src="https://player.vimeo.com/video/271329952?autoplay=1&loop=0&automute=0"
                              width={640}
                              height={360}
                              frameBorder={0}
                              webkitallowfullscreen
                              mozallowfullscreen
                              allowFullScreen
                            />
                            <p>
                              <a href="https://vimeo.com/271329952">
                                Monti's Capabilities/Facilities
                              </a>{" "}
                              from
                              <a href="https://vimeo.com/user51614319">
                                Monti Incorporated
                              </a>{" "}
                              on
                              <a href="https://vimeo.com">Vimeo</a>.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* / .row */}
                    </div>
                    {/* / .container */}
                  </div>
                  {/* / .item */}
                  {/* Slide #2 */}
                  <div className="item" id="item-2">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="home-slider__content">
                            <h2 className="first-child animated slideInDown delay-2">
                              Monti’s Blueprint to Customer Satisfaction
                            </h2>
                            <h3 className="animated slideInDown delay-3 headline second-child">
                              As Electrical Equipment Manufacturers
                            </h3>
                            <p className="text-muted animated slideInLeft delay-4">
                              continue to outsource production to qualified
                              suppliers, they require those suppliers to meet
                              their individual needs. We at Monti Inc attribute
                              our success and continued growth to our ability to
                              recognize and then adapt our services to those
                              unique requirements.
                            </p>
                            {/* <a href="#" class="btn btn-lg btn-theme-primary animated fadeInUpBig delay-5">Discover More</a> */}
                          </div>
                        </div>
                      </div>
                      {/* / .row */}
                    </div>
                    {/* / .container */}
                    <div className="bg-img hidden-xs">
                      <img
                        src={image1}
                        alt="Electrical Conductor and Insulator Customer Satisfaction"
                      />
                    </div>
                  </div>
                  {/* / .item */}
                  {/* Slide #3 */}
                  <div className="item" id="item-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="home-slider__content">
                            <h2 className="first-child animated slideInDown delay-2">
                              Monti’s Blueprint to Customer Satisfaction
                            </h2>
                            <h3 className="animated slideInDown delay-3 headline second-child">
                              Monti Inc offers its customers superior service
                              levels
                            </h3>
                            <p className="text-muted animated slideInLeft delay-4">
                              {" "}
                              by maintaining extensive raw material inventories,
                              utilizing the latest software and manufacturing
                              equipment and the most stringent quality
                              procedures to produce product on time and at
                              globally competitive pricing.
                            </p>
                            {/* <a href="#" class="btn btn-lg btn-theme-primary animated fadeInUpBig delay-5">Discover More</a> */}
                          </div>
                        </div>
                      </div>
                      {/* / .row */}
                    </div>
                    {/* / .container */}
                    <div className="bg-img hidden-xs">
                      <img
                        src={image2}
                        alt="Electrical Conductor and Insulator Customer Satisfaction"
                      />
                    </div>
                  </div>
                  {/* / .item */}
                  {/* Slide #4 */}
                  <div className="item" id="item-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="home-slider__content">
                            <h1 className="first-child animated slideInDown delay-2 shrink">
                              Impeccable Quality Manufacturing
                            </h1>
                            <h3 className="animated slideInDown delay-3">
                              in materials such as
                            </h3>
                            <ul>
                              <li className="animated slideInLeft delay-4">
                                <i className="fa fa-chevron-circle-right fa-fw" />{" "}
                                Copper
                              </li>
                              <li className="animated slideInLeft delay-5">
                                <i className="fa fa-chevron-circle-right fa-fw" />{" "}
                                Insulation
                              </li>
                              <li className="animated slideInLeft delay-6">
                                <i className="fa fa-chevron-circle-right fa-fw" />{" "}
                                Steel
                              </li>
                              <li className="animated slideInLeft delay-7">
                                <i className="fa fa-chevron-circle-right fa-fw" />{" "}
                                Aluminum
                              </li>
                            </ul>
                            <a
                              href="/materiallist/"
                              className="btn btn-lg btn-theme-primary animated fadeInUpBig delay-8"
                            >
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* / .row */}
                    </div>
                    {/* / .container */}
                    <div className="bg-img hidden-xs">
                      <img
                        src={image3}
                        alt="Copper, Steel and Aluminum Electrical Conductors and Insulators"
                      />
                    </div>
                  </div>
                  {/* / .item */}
                </div>
                {/* / .carousel */}
                {/* Controls */}
                <a
                  className="carousel-arrow carousel-arrow-prev"
                  href="#home-slider"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="carousel-arrow carousel-arrow-next"
                  href="#home-slider"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            {/* / .home-slider */}
            {/* Home Slider */}
            <div
              className="home-slider col-sm-3"
              style={{
                marginTop: 35,
                padding: 1,
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              {/* Carousel */}
              <div
                id="home-slider2"
                className="carousel slide"
                data-ride="carousel"
                data-interval={5000}
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#home-slider2"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#home-slider2" data-slide-to={1} />
                  <li data-target="#home-slider2" data-slide-to={2} />
                  <li data-target="#home-slider2" data-slide-to={3} />
                  <li data-target="#home-slider2" data-slide-to={4} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  {/* Slide  */}

                  {data.allContentfulFeedback.edges.map(({ node }, counter) => (
                    <div
                      className={`item ${counter === 0 ? "active" : ""}`}
                      id="item-9"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-3">
                            <div className="home-slider__content">
                              <p className="text-muted animated slideInLeft delay-4">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: node.quote.childMarkdownRemark.html
                                  }}
                                />
                              </p>
                              <p className="text-muted animated slideInLeft delay-4">
                                {node.name}
                              </p>
                              {/* <a href="#" class="btn btn-lg btn-theme-primary animated fadeInUpBig delay-5">Discover More</a> */}
                            </div>
                          </div>
                        </div>
                        {/* / .row */}
                      </div>
                      {/* / .container */}
                    </div>
                  ))}
                </div>
                {/* / .carousel */}
              </div>
            </div>
            {/* / .home-slider */}
          </div>
        </div>
        <div>
          {/* Services */}
          <div className="home-services">
            <div className="container">
              <div className="row">
                {/* <div class="col-sm-12 col-md-7">
              &nbsp;
            </div> */}
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
          </div>
          {/* / .services */}

          {/* Main Services */}
          <div className="main-services">
            <div className="container">
              <div className="row">
                {data.contentfulServices.services.map((node, counter) => (
                  <div className="col-sm-6 col-lg-4">
                    <div className="services">
                      <div className="service-item">
                        {/* <i class="fa fa-gear"></i> */}
                        <div className="service-desc text-center">
                          <h4>
                            <a href={`/services/${node.slug}/`}>{node.name}</a>
                          </h4>
                          <img
                            src={node.thumbnail.file.url}
                            width={300}
                            className="img-thumbnail"
                            alt={node.name}
                          />
                        </div>
                      </div>
                    </div>
                    {/* / .services */}
                  </div>
                ))}
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
            {/* Recent Blog Posts */}
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="headline-lg">Recent News</h2>
                </div>
              </div>
              {/* / .row */}
              <div className="row">
                {data.allContentfulNews.edges.map(({ node }, counter) => (
                  <div className="col-sm-6">
                    <div className="blog">
                      {/* <img src="img/photo-1.jpg" alt="..."> */}
                      <div className="blog-desc">
                        <h3>
                          <a href={`/news/${node.slug}`}>{node.name}</a>
                        </h3>
                        <hr />
                        <p />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: node.frontPageText.childMarkdownRemark.html
                          }}
                        />
                        <a
                          className="btn btn-lg btn-theme-primary"
                          href={`/news/${node.slug}`}
                        >
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
            {/* / .wrapper */}
          </div>
          {/* / .main-services */}
        </div>
      </Layout>
    )}
  />
);
