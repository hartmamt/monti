import React from "react";
import { graphql } from "gatsby";
//import { Slide } from "react-slideshow-image";
//import ImageGallery from "react-image-gallery";
//import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Topic Header */}
        <div className="topic">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h3>{data.contentfulEquipmentList.name}</h3>
              </div>
              <div className="col-sm-8">
                <ol className="breadcrumb pull-right hidden-xs">
                  <li>
                    <a href="/equipmentlist/">All Equipment</a>
                  </li>
                  <li className="active">
                    {data.contentfulEquipmentList.name}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1>{data.contentfulEquipmentList.name}</h1>
            <hr />
            <a
              href={data.contentfulEquipmentList.listPdf.file.url}
              className="btn btn-primary pull-right"
            >
              Click to download PDF
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulEquipmentList.description.childMarkdownRemark
                    .html
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulEquipmentList(slug: { eq: $slug }) {
      name
      slug
      listPdf {
        title
        file {
          url
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
