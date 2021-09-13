import MasterPage from "../components/MasterPage";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) { 
  return (
    <MasterPage>
      <Component {...pageProps} />
    </MasterPage>
  );
}

export default MyApp;
