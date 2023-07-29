import "@/styles/globals.css";
import { ProductProvider } from "@/context/productContext";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
