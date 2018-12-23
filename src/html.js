import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>
            Monti Inc | Electrical Conductor and Insulator Manufacturers
          </title>
          <meta
            name="description"
            content="Leading manufacturer and fabricator of copper &amp; aluminum conductors, electrical insulators, and steel components for the electrical industry."
          />
          <meta
            name="google-site-verification"
            content="5DFZ-73eCW_tHwQh519BOmEtfogGWCYuCAZyhJl4npE"
          />
          <meta name="viewport" content="width=device-width" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:site"
            content="Monti Inc - Metal Manufacturing and Fabrication for the Electrical Industry"
          />
          <meta name="twitter:creator" content="@_industrialweb" />
          <meta
            property="og:site_name"
            content="Monti Inc - Metal Manufacturing and Fabrication for the Electrical Industry"
          />
          <meta
            property="og:title"
            content="Monti Inc | Electrical Conductor and Insulator Manufacturers"
          />
          <meta
            property="og:description"
            content="Leading manufacturer and fabricator of copper &amp; aluminum conductors, electrical insulators, and steel components for the electrical industry."
          />
          <meta
            property="og:image"
            content="//www.monti-inc.com/webhook-uploads/1443261900685/copper-7.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://monti-inc.com/" />
          <link rel="canonical" href="http://monti-inc.com/" />
          {this.props.headComponents}
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <script
            src="//code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossOrigin="anonymous"
          />
          <script
            src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.0/normalize.min.css"
          />
          <link
            rel="stylesheet"
            href="//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
