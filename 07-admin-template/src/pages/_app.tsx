import type { AppProps } from "next/app";
import Head from "next/head";
import { AppProvider } from "../data/context/AppContext";
import { AuthProvider } from "../data/context/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Head>
          <title>Admin Template</title>
          <meta name="Projeto Admin Template" content="Feito por Helton Ricardo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}
