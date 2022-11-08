import '../styles/globals.css'
import Navbar from '../components/navbar'
import { SessionProvider } from 'next-auth/react'
import Footer from '../components/footer'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  )
}

export default MyApp
