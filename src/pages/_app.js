import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import { theme } from "../chakra/theme";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
