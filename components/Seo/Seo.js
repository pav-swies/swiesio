import Head from 'next/head';

const Seo = ({ title, description, keywords, featuredImage }) => {
  const url = 'https://swies.io';
  const formattedTitle = title ? `${title} — Pawel Swies` : 'Pawel Swies — Web Developer';
  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <link href={url} rel="canonical" />
        <meta content="en_GB" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        <meta content={featuredImage ? featuredImage : `${url}/default.jpg`} property="og:image" />
        <meta content={description} property="og:image:alt" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@p_swies" name="twitter:site" />
        <meta content="@p_swies" name="twitter:creator" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
    </>
  );
};

export default Seo;
