import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>hueneu - Where stories find their aesthetic.</title>
        <meta name="description" content="Designs that whisper loud stories. hueneu is a graphic design studio focused on story-first, intentional, and balanced design."/>
        {/* Link to a potential favicon if it's not in the root of public, or for different sizes/types */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
