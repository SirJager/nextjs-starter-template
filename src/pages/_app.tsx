import "@/style/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
