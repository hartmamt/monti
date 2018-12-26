import React from "react";
import JotformEmbed from "react-jotform-embed-fork";
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
                  <h3>Request a Quote</h3>
                </div>
                <div className="col-sm-8">
                  <ol className="breadcrumb pull-right hidden-xs">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="active">Request a Quote</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <JotformEmbed
              src="https://form.jotform.com/52692808551159"
              height="6700px"
            />
          </div>{" "}
          {/* / .container */}
        </div>{" "}
        {/* / .wrapper */}
      </Layout>
    )}
  />
);
