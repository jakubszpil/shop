import NextApp from "next/app";
import Head from "next/head";

import { AnimatePresence } from "framer-motion";
import "../styles/app.scss";
import Layout from "../layout/Layout";

export default class App extends NextApp {
  render() {
    const { Component, router, pageProps } = this.props;

    return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://kit.fontawesome.com/bb5b654169.js" crossorigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
          <link rel="preload" href="/fonts/NATS-Regular.ttf" as="font" crossOrigin="" />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.key} />
        </AnimatePresence>
      </Layout>
    );
  }
}
