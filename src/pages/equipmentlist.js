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
        allContentfulEquipmentList {
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
      <Layout>
        {/* wrapper */}
        <div className="wrapper">
          {/* Topic Header */}
          <div className="topic">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <h3>Equipment List</h3>
                </div>
                <div className="col-sm-8">
                  <ol className="breadcrumb pull-right hidden-xs">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="active">Equipment</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {data.allContentfulEquipmentList.edges.map(
                ({ node }, counter) => (
                  <div className="col-sm-6 col-md-3">
                    <div className="pricing-option">
                      <div className="pricing-inner">
                        <div className="pricing-header">
                          <h5>{node.name}</h5>
                        </div>
                        <div className="pricing-body">
                          <a href={`/equipmentlist/${node.slug}/`}>
                            View details
                          </a>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .pricing-option */}
                  </div>
                )
              )}
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .container */}
        </div>{" "}
        {/* / .wrapper */}
      </Layout>
    )}
  />
);
