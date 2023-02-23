import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Page from '@/components/page'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  return  ( 
<Page>
  <Head>
    <title>Victor Adrian</title>
  </Head>
<Component {...pageProps} />
</Page>
  )
}
