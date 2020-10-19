import NextApp from "next/app";
import Head from "next/head";

import { AnimatePresence } from "framer-motion";
import "../styles/app.scss";

export default class App extends NextApp {
  render() {
    const { Component, router, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}
