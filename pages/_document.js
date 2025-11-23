import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/static/css/main.css" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans:700|Noto+Sans:400,700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/static/images/lumoraclear.ico" sizes="16x16" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
