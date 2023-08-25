import CartContextProvider from '@/context/CartContext'
import Footer from '@/modules/footer/Footer'
import Header from '@/modules/header/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <ToastContainer />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
    </QueryClientProvider>
  )
}
