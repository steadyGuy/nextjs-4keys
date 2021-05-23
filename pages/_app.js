import '../styles/global.scss';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { StoreProvider } from '../store/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </StoreProvider>
  );
}

export default MyApp;
