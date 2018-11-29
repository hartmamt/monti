import React from "react";
import { graphql, StaticQuery } from "gatsby";
//import { Slide } from "react-slideshow-image";
//import ImageGallery from "react-image-gallery";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
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
        allContentfulNews {
          edges {
            node {
              name
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
                  data {
                    target {
                      fields {
                        title {
                          en_US
                        }
                        description {
                          en_US
                        }
                        file {
                          en_US {
                            url
                            details {
                              size
                              image {
                                width
                                height
                              }
                            }
                          }
                        }
                      }
                      sys {
                        space {
                          sys {
                            type
                          }
                        }
                      }
                    }
                  }
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
                          __html: documentToHtmlString(node.details)
                        }}
                      />

                      <strong>
                        <a
                          href="https://www.d2p.com/contact-us"
                          target="_blank"
                        />
                        <a
                          className="btn btn-lg btn-red"
                          href="/news/come-visit-monti-inc-at-the-akron-design-2-part-show-oct-24-25/"
                        >
                          Read More...
                        </a>
                        {/*  <a href="/news/come-visit-monti-inc-at-the-akron-design-2-part-show-oct-24-25/"><img class="img-responsive" src="img/general-3.jpg" alt="..."></a> */}
                      </strong>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <ul>
                  <li className="active">
                    <a href="/news/">1</a>
                  </li>
                  <li>
                    <a href="/news/page-2/">2</a>
                  </li>
                  <li>
                    <a href="/news/page-3/">3</a>
                  </li>
                  <li>
                    <a href="/news/page-2/">»</a>
                  </li>
                </ul>
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
