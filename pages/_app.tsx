import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import React from "react"
import { ThemeProvider } from "../providers/ThemeProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  )
}
export default MyApp
