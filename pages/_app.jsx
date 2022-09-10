import Head from 'next/head';
import '../styles/globals.scss'

function MyApp({ Component, pageProps })
{
  return (
    <>
      <Head>
        <title>CAJOGOS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp