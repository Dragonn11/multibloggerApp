import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width , initial-scale=1.0"/> 
            <link 
             rel="stylesheet"
              href = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/css/bootstrap.min.css"/>
              {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/> */}
              {/* <link href="//db.onlinewebfonts.com/c/ebf6ce43a50abbec75de5c1aaa1b557f?family=Alberta" rel="stylesheet" type="text/css"/> */}
              <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument