import React from "react";
import { graphql } from "gatsby";
//import { Slide } from "react-slideshow-image";
//import ImageGallery from "react-image-gallery";
//import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../components/layout";

export default ({ data }) => {
  //console.log(data.contentfulService.imageGallery);
  const name = data.contentfulLocation.name;

  return (
    <Layout>
      <br />
      <br />
      <div className="container location-single">
        <div className="row">
          <div className="col-sm-6">
            <div className="portfolio-slideshow">
              {/* Image Carousel */}
              <div
                id="portfolio-slideshow"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="item active">
                    <img
                      src={data.contentfulLocation.image.file.url}
                      className="img-responsive"
                      alt={data.contentfulLocation.image.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h3 className="headline second-child">
              <span>{data.contentfulLocation.name}</span>
            </h3>
            <address>
              {data.contentfulLocation.address1}
              <br /> {data.contentfulLocation.city},{" "}
              {data.contentfulLocation.state}. {data.contentfulLocation.zipCode}
            </address>
            <br />
            <h4 className="headline">
              <span>Info</span>
            </h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Phone</td>
                  <td />
                  <td>{data.contentfulLocation.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Fax</td>
                  <td />
                  <td>{data.contentfulLocation.faxNumber}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td />
                  <td>
                    <a
                      href={`https://www.google.com/maps/dir/${
                        data.contentfulLocation.address1
                      }++${data.contentfulLocation.city}+${
                        data.contentfulLocation.state
                      }++`}
                      target="_blank"
                    >
                      Click for Map &amp; Directions
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* / .row */}
        {/* Other locations  */}
        <div className="row">
          <div className="col-sm-12">
            <h3 className="headline">
              <span>Other Locations</span>
            </h3>
          </div>
          <div className="col-sm-3">
            <div className="portfolio-item">
              <div className="portfolio-thumbnail">
                <a href="/locations/sumter-plant/">
                  <img
                    src="https://lh5.ggpht.com/a1yjbt4KtHByH_ZAschIMeKLKrjdnJmGVg7MVpRD4N4x5mE2ILWcirKsHaVI7wTa8SjOfEvUgXKh5KZZsXe_hpG2dVqCoQ=s300"
                    className="img-responsive"
                    alt="Sumter Plant"
                  />
                </a>
                <p className="text-center">
                  <a href="/locations/sumter-plant/">Sumter Plant</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="portfolio-item">
              <div className="portfolio-thumbnail">
                <a href="/locations/greenwood-plant/">
                  <img
                    src="https://lh6.ggpht.com/UdO_UoRE0T-sKe_l3JQzOu7mR8FAY8Oa2tigka8hbiPWzk_lxekBCH_d1Vk6LxqnUdxs5jK_GP2gOvMWps86Ri_K-sFZ=s300"
                    className="img-responsive"
                    alt="Greenwood Plant"
                  />
                </a>
                <p className="text-center">
                  <a href="/locations/greenwood-plant/">Greenwood Plant</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="portfolio-item">
              <div className="portfolio-thumbnail">
                <a href="/locations/wm-f-mcgraw-co/">
                  <img
                    src="https://lh5.ggpht.com/oo65MJOd7WNViQUi4DpX47SPfMCoOMWmTwKIb0kOmY_MjFcZFdrHbFV0npHPdjfdSFe_DSzUg_1_5_uHSYKI4UvtLSALIg=s300"
                    className="img-responsive"
                    alt="Wm. F. McGraw & Co."
                  />
                </a>
                <p className="text-center">
                  <a href="/locations/wm-f-mcgraw-co/">
                    Wm. F. McGraw &amp; Co.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* / .row */}
      {/* / .container */}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulLocation(slug: { eq: $slug }) {
      name
      address1
      city
      state
      zipCode
      emailAddress
      phoneNumber
      faxNumber
      image {
        file {
          url
        }
        title
      }
      location {
        lon
        lat
      }
      iso {
        file {
          url
        }
      }
    }
    allContentfulLocation {
      edges {
        node {
          name
          image {
            file {
              url
            }
            title
          }
        }
      }
    }
  }
`;
