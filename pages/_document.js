import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <html lang="en" />
          <meta
            name="description"
            content="Dine restaurant landing page, build with nextjs"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#111111" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
