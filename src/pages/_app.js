import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
// import { AppWrapper } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    // <AppWrapper>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </AppWrapper>
  );
}

export default MyApp;
