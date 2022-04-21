import "../styles/globals.css";
import app from "services/firebase";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
