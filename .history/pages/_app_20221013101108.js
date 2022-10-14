import '../styles/globals.css'
import { Provider } from "redux";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
