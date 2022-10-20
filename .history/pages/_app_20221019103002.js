import "../styles/globals.css";
import { Provider } from "react-redux";
import { Store } from "../app/store";
import { ThemeProvider } from "@material-tailwind/react";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
