import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

import CartProvider from '@store/Cart';

// export function reportWebVitals(metric) {
//   // analytics - Calibre
//   // esto nos ayuda a hacerle seguimientos exitos a nuestros sitios web

//   console.log(metric)
//   //serverAnalytics.log(metric)
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
