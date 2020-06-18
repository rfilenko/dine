import React from 'react';
import App from 'next/app';

import MainLayout from '../components/layouts/main';
import DefaultLayout from '../components/layouts/default';

import '../styles.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;
    return (
      <>
        {/* <MainLayout>
          <Layout> */}
        <Component {...pageProps} />
        {/* </Layout>
        </MainLayout> */}
      </>
    );
  }
}

export default MyApp;
