import '../styles/globals.css'
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {

  return <Provider <Component {...pageProps} />
}

export default MyApp
