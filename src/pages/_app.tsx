import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer, Zoom } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer role="alert" autoClose={1000} transition={Zoom} />
    </>
  )
}
