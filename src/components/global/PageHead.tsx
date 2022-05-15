import Head from "next/head";

interface PageHeadProps {
  title: string;
}

const PageHead = ({ title }: PageHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;