import Head from 'next/head';
import React, { memo } from 'react';

const LayoutFaviconComponent = () => (
  <Head>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/images/favicon-32x32.png"
    />
    <meta name="theme-color" content="#111111" />
  </Head>
);
export const LayoutFavicon = memo(LayoutFaviconComponent);

LayoutFavicon.displayName = 'LayoutFavicon';
