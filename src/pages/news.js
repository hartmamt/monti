import React from "react";
import { graphql, StaticQuery } from "gatsby";
//import { Slide } from "react-slideshow-image";
//import ImageGallery from "react-image-gallery";
import { documentToHtmlString } from "@hartmamt/rich-text-html-renderer";
import Layout from "../components/layout";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulNewsletter {
          edges {
            node {
              name
              otherFile {
                file {
                  url
                  fileName
                }
              }
            }
          }
        }
        allContentfulNews(sort: { fields: [dateAndTime], order: DESC }) {
          edges {
            node {
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
              teaser {
                nodeType
                content {
                  content {
                    nodeType
                    value
                  }
                  nodeType
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
        }
      }
    `}
    render={data => (
      <Layout>
        <div>
          {/* Wrapper */}
          <div className="wrapper newspage">
            {/* Topic Header */}
            <div className="topic">
              <div className="container">
                <div className="row">
                  <div className="col-sm-7">
                    <h1>Manufacturing, Fabrication, and Assembly News</h1>
                  </div>
                  <div className="col-sm-5">
                    <ol className="breadcrumb pull-right hidden-xs">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">News</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="col-sm-3">
                <div className="row" style={{ marginTop: 0 }}>
                  <h4>Monti Company Newsletter</h4>
                </div>
                <div className="row">
                  <div className="blog">
                    <div className="blog-desc">
                      <ul>
                        {data.allContentfulNewsletter.edges.map(
                          ({ node }, counter) => (
                            <li key={"newsletter -" + counter}>
                              <a href={node.otherFile.file.url}>{node.name}</a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-9">
                {data.allContentfulNews.edges.map(({ node }, counter) => (
                  <div className="blog" key={`newsitem-${counter}`}>
                    <img
                      src={node.featuredImage.file.url}
                      alt={node.imageAltTag}
                    />
                    <div className="blog-desc">
                      <h2>
                        <a href={`/news/${node.slug}`}>{node.seoTitle1}</a>
                      </h2>
                      <hr />
                      {/* <p class="text-muted">on March 25, 2014</p> */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: node.description.childMarkdownRemark.html
                        }}
                      />

                      <strong>
                        {/* <a
                          href="https://www.d2p.com/contact-us"
                          target="_blank"
                        /> */}
                        <a
                          className="btn btn-lg btn-red"
                          href={`/news/${node.slug}/`}
                        >
                          Read More...
                        </a>
                        {/*  <a href="/news/come-visit-monti-inc-at-the-akron-design-2-part-show-oct-24-25/"><img class="img-responsive" src="img/general-3.jpg" alt="..."></a> */}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* / .container */}
          {/* / .wrapper */}
        </div>
      </Layout>
    )}
  />
);
