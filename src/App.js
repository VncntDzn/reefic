import { CssBaseline, ThemeProvider, } from '@material-ui/core';
import Footer from 'layouts/Footer';
import { LandingPage } from 'pages'
import Cast from 'pages/Cast';
import Contact from 'pages/Contact';
import Partnership from 'pages/Partnership';
import PressRelease from 'pages/PressRelease';
import Promotions from 'pages/Promotions';
import ProtocolUpdates from 'pages/ProtocolUpdates';
import YoutubeThumbnail from 'pages/YoutubeThumbnail'
import theme from 'theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <LandingPage />
      <YoutubeThumbnail />
      <PressRelease />
      <ProtocolUpdates />
      {/* <Cycle />
      <Roadmap /> */}
      <Cast />
      <Partnership />
      <Promotions />
      <Contact />
      <Footer />

    </ThemeProvider>
  );
}

export default App;
