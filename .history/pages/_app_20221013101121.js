import '../styles/globals.css'
import { Provider } from "reactredux";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
