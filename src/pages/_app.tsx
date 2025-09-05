import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Preconnect to Vimeo for faster video loading */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="//player.vimeo.com" />
        <link rel="dns-prefetch" href="//i.vimeocdn.com" />
        <link rel="dns-prefetch" href="//f.vimeocdn.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://raw.githubusercontent.com/eddiebullock/landing-page-assets/main/WhatsApp%20Image%202025-08-30%20at%2020.53.25.jpeg" as="image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
