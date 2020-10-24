import Head from "next/head";

export default function Page({ title = "", children, description = "", keywords = "" }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ` : null}PeachArt</title>
        {description && <meta name="description" content={description || "Shop website"} />}
        {keywords && <meta name="keywords" content={keywords || "E-commerce, website"} />}
      </Head>
      {children}
    </>
  );
}
