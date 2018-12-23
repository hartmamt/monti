import React from "react";
import { graphql } from "gatsby";
import { Slide } from "react-slideshow-image";
import ImageGallery from "react-image-gallery";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Topic Header */}
        <div className="topic">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h2>Manufacturing News</h2>
              </div>
              <div className="col-sm-8">
                <ol className="breadcrumb pull-right hidden-xs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/news">Manufacturing News</a>
                  </li>
                  <li className="active">{data.contentfulNews.seoTitle1}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {/* Blog Post #1 */}
              <div className="blog">
                <img
                  src={data.contentfulNews.featuredImage.file.url}
                  alt={data.contentfulNews.imageAltTag}
                />
                <div className="blog-desc">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulNews.fullDetails.childMarkdownRemark.html
                    }}
                  />
                </div>
              </div>
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
    contentfulNews(slug: { eq: $slug }) {
      name
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      contentful_id
      imageAltTag
      slug
      seoTitle1
      dateAndTime
      seoDescription1
      featuredImage {
        title
        file {
          url
        }
      }
      fullDetails {
        childMarkdownRemark {
          html
        }
      }
      details {
        nodeType
        content {
          content {
            nodeType
            marks {
              type
            }
            data {
              uri
            }
            value
            content {
              marks {
                type
              }
              value
              nodeType
            }
          }
          nodeType
        }
      }
    }
  }
`;
