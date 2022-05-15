import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="duration-200 ease-in-out transition-all font-font0 bg-light-primary dark:bg-dark-primary text-dark-secondary dark:text-light-primary selection:bg-light-selection-bg selection:text-light-selection-fg dark:selection:bg-dark-selection-bg dark:selection:text-dark-selection-fg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
