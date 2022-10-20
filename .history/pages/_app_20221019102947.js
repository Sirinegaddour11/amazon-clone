import "../styles/globals.css";
import { Provider } from "react-redux";
import { Store } from "../app/store";
function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
