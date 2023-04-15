
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
