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
        allContentfulMaterialList {
          edges {
            node {
              name
              materials
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        {/* Wrapper */}
        <div className="wrapper">
          {/* Topic Header */}
          <div className="topic">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <h3>Material List</h3>
                </div>
                <div className="col-sm-8">
                  <ol className="breadcrumb pull-right hidden-xs">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="active">Materials</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="headline first-child">
                  <span>
                    Click{" "}
                    <a href="/Monti_Material_List.pdf" target="_blank">
                      here
                    </a>{" "}
                    for a printable .pdf (80KB) of the Material List
                  </span>
                </h3>
                <p>
                  Adobe® Reader® is required to view PDF (Portable Document
                  Format) files.
                </p>
              </div>
            </div>{" "}
            {data.allContentfulMaterialList.edges.map(({ node }, counter) => (
              <div
                className="col-sm-6 col-md-3"
                key={`materiallist-${counter}`}
              >
                <div className="pricing-option">
                  <div className="pricing-inner">
                    <div className="pricing-header">
                      <h5>{node.name}</h5>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style-none">
                        {node.materials.map(material => (
                          <li>{material}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* / .pricing-option */}
              </div>
            ))}
          </div>{" "}
          {/* / .container */}
        </div>{" "}
        {/* / .wrapper */}
      </Layout>
    )}
  />
);
