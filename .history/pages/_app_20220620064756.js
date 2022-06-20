import Head from 'next/head'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ padding: '100px' }}>
      <Head>
        <title>Lens Social Media</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
