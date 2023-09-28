import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import AppContextProvider from '../@crema/utility/AppContextProvider';
import {Provider} from 'react-redux';
import AppThemeProvider from '../@crema/utility/AppThemeProvider';
import AppStyleProvider from '../@crema/utility/AppStyleProvider';
import AppLocaleProvider from '../@crema/utility/AppLocaleProvider';
import FirebaseAuthProvider from '../@crema/services/auth/firebase/FirebaseAuthProvider';
import AuthRoutes from '../@crema/utility/AuthRoutes';

import {useStore} from '../redux/store'; // Client-side cache, shared for the whole session of the user in the browser.

import '../@crema/services/index';
import '../shared/vendors/index.css';
// CSS for REACT Toastify
// import 'react-toastify/dist/ReactToastify.css';

import AppPageMeta from '../@crema/core/AppPageMeta';
import JWTAuthProvider from '@crema/services/auth/jwt-auth/JWTAuthProvider';
import ScrollUp from 'modules/commanmodules/ScrollUp';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// tawkMessengerRef.current.popup();

export default function MyApp(props) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const store = useStore(pageProps.initialReduxState);
  const tawkMessengerRef = React.useRef();
  const customStyle = {
    visibility: {
      desktop: {
        xOffset: '15',
        yOffset: '15',
        position: 'bl',
      },

      mobile: {
        xOffset: 15,
        yOffset: 15,
        position: 'bl',
      },
    },
  };
  const onLoad = () => {
    tawkMessengerRef.current.popup();
  };
  return (
    <CacheProvider value={emotionCache}>
      <AppContextProvider>
        <Provider store={store}>
          <AppThemeProvider>
            <AppStyleProvider>
              <AppLocaleProvider>
                <FirebaseAuthProvider>
                  <JWTAuthProvider>
                    <AuthRoutes>
                      <CssBaseline />
                      <AppPageMeta />
                      <TawkMessengerReact
                        propertyId='5da463fbfbec0f2fe3b9a18a'
                        widgetId='default'
                        customStyle={customStyle}
                        onLoad={onLoad}
                        ref={tawkMessengerRef}
                      />
                      <Component {...pageProps} />
                    </AuthRoutes>
                  </JWTAuthProvider>
                </FirebaseAuthProvider>
              </AppLocaleProvider>
            </AppStyleProvider>
          </AppThemeProvider>
        </Provider>
      </AppContextProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
