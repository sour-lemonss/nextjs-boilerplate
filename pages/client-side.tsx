import Head from 'next/head';
import type { NextPage } from 'next';
import { ISanityPage } from 'src/backend/types';
import { useQuery } from '@apollo/client';
import { PageQuery } from 'src/backend/queries/page';
import { CustomPortableText } from '@components/custom-portable-text';
import { PortableTextBlock } from '@portabletext/types';

const Home: NextPage = () => {
  const { loading, error, data } = useQuery<{ Page: ISanityPage }>(PageQuery);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col justify-center items-center min-h-screen pt-16 bg-slate-100 dark:bg-slate-800">
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {data && (
          <div>
            <CustomPortableText
              content={data.Page.customPortableTextRaw as PortableTextBlock[]}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;