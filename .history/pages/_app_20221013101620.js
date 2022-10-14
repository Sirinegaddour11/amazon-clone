import '../styles/globals.css'
import { Provider } from "react-redux";
import {  } from "../app";
function MyApp({ Component, pageProps }) {

  return <Provider store={}><Component {...pageProps} /></Provider> 
}

export default MyApp
