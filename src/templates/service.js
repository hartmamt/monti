import React from "react";
import { graphql } from "gatsby";
import { Slide } from "react-slideshow-image";
import ImageGallery from "react-image-gallery";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../components/layout";

export default ({ data }) => {
  const name = data.contentfulService.name;
  // const images = data.contentfulService.imageGallery.map((node, counter) => (
  //   <div
  //     key={node.title + counter}
  //     className={"item " + (counter === 0 ? "active" : "")}
  //   >
  //     <img src={node.file.url} className="img-responsive" alt={node.title} />
  //   </div>
  // ));
  // const s = data.contentfulService.imageGallery.map((node, counter) => (
  //   <div key={node.title + counter} className="each-slide">
  //     <div
  //       style={{ backgroundImage: `node.file.url` }}
  //       className="img-responsive"
  //       alt={node.title}
  //     >
  //       <span>{node.title}</span>
  //     </div>
  //   </div>
  // ));
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true
  };
  // const images = data.contentfulService.imageGallery.map(node => ({
  //   original: node.file.url,
  //   thumbnail: node.file.url,
  //   originalClass: "img-responsive"
  // }));
  const slides = (
    <Slide {...properties}>
      {data.contentfulService.imageGallery.map((node, counter) => (
        <div key={node.title + counter} className="each-slide">
          <div
            style={{
              height: node.file.details.image.height,
              width: "100%", //node.file.details.image.width,
              backgroundImage: "url(" + node.file.url + ")"
            }}
            className="img-responsive"
            alt={node.title}
          />
        </div>
      ))}
    </Slide>
  );

  return (
    <Layout>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Topic Header */}
        <div className="topic">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h2>{name}</h2>
              </div>
              <div className="col-sm-8">
                <ol className="breadcrumb pull-right hidden-xs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">{name}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="portfolio-slideshow">
                {/* Image Carousel */}
                <div id="portfolio-slideshow">
                  <div className="carousel slide">{slides}</div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 servicesindividual">
              <h1 className="headline second-child">{name}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(data.contentfulService.details)
                }}
              />
            </div>
          </div>{" "}
          {/* / .row */}
        </div>{" "}
        {/* / .container */}
      </div>{" "}
      {/* / .wrapper */}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      name
      imageGallery {
        file {
          url
          details {
            size
            image {
              width
              height
            }
          }
        }
        title
      }
      details {
        nodeType
        content {
          nodeType
          content {
            marks {
              type
            }
            value
            nodeType
            content {
              nodeType
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`;
