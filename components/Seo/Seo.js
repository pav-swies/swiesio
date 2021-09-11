import Head from 'next-head';

const Seo = ({}) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} — Pawel Swies` : 'Pawel Swies — Web Developer'}</title>
      </Head>
    </>
  );
};

export default Seo;
