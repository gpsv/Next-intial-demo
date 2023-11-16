import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'
import { NextApiRequest, NextPage } from 'next';
import { AppProps } from 'next/app';

type NextPAgeLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPAgeLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
