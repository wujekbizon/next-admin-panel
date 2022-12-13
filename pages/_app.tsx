import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { LightModeProvider } from '../context/lightModeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LightModeProvider>
      <Layout>
        <Head>
          <title>NextJs Admin Panel</title>
          <meta name="description" content="" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </LightModeProvider>
  );
}
