import Head from 'next/head';
import { NAME, SITE_URL, SITE_META_DESCRIPTION, SITE_META_IMAGE, SITE_META_KEYWORDS, TWITTER_LINK, SITE_META_TITLE } from '../../lib/constants';

const Seo = ({ title, description, keywords, featuredImage }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} — ${NAME}` : SITE_META_TITLE}</title>
        <meta content={description ? description : SITE_META_DESCRIPTION} name="description" />
        <meta content={keywords ? `${keywords}, ${SITE_META_KEYWORDS}` : SITE_META_KEYWORDS} name="keywords" />
        <meta content="follow, index" name="robots" />
        <meta content="en_GB" property="og:locale" />
        <meta content={title ? `${title} — ${NAME}` : SITE_META_TITLE} property="og:title" />
        <meta content={description ? description : SITE_META_DESCRIPTION} property="og:description" />
        <meta content={SITE_URL} property="og:url" />
        <meta content={featuredImage ? featuredImage : SITE_META_IMAGE} property="og:image" />
        <meta content={description ? description : SITE_META_DESCRIPTION} property="og:image:alt" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={TWITTER_LINK.username} name="twitter:site" />
        <meta content={TWITTER_LINK.username} name="twitter:creator" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href={SITE_URL} rel="canonical" />
      </Head>
    </>
  );
};

export default Seo;
