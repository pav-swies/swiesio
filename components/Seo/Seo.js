import Head from 'next/head';

const Seo = ({ title, description, keywords, featuredImage }) => {
  const url = 'https://swies.io';
  const formattedTitle = title ? `${title} — Pawel Swies` : 'Pawel Swies — Web Developer';
  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link href={url} rel="canonical" />
        <meta content="en_US" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@p_swies" name="twitter:site" />
        <meta content="@p_swies" name="twitter:creator" />
      </Head>
    </>
  );
};

export default Seo;
