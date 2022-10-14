import '../styles/globals.css'
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {

  return <Provider></Provider> <Component {...pageProps} />
}

export default MyApp
