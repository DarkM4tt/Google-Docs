import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
