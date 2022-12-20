import { Html, Head, Main, NextScript } from 'next/document'
import Header from "../components/navigation/Header"
import Footer from "../components/navigation/Footer"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
