import Document, { Html, Head, Main, NextScript } from "next/document"

class CustomDocument  extends Document {
  render(){
    return(
      <Html>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Piyush Rajput" />
        <meta name="description" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
        <meta name="og:title" content="Covid19 Tracker App" />
        <meta name="og:type" content="Website" />
        <meta name="og:description" content="Get Information about the anomalies brought about by Covid19 or Corona Virus" />
        <meta name="keywords" content="corona virus app, corona-app, corona virus stats, covid19 stats, covid19 stats app" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}
export default CustomDocument