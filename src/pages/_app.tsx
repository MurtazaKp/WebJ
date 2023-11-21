import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Footer from '@/components/footer'
import NavBar from '@/components/Navbar/Navbar'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
