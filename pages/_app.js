import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
const SERVER_URL= process.env.MORALIS_SERVER_ID;
const APP_ID=process.env.MORALIS_APP_ID;

function MyApp({ Component, pageProps }) {
  return (
<MoralisProvider serverUrl="https://cu63u4hgrvp1.usemoralis.com:2053/server" appId='HtuFk9EzwMK56ziCbHLupwq3LCFNENrfOQvWo5tc'>
<Component {...pageProps} />
</MoralisProvider>

  )
}

export default MyApp
