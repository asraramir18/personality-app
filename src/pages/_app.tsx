import '@/styles/globals.css'
import Layout from '@/components/global/layout/layout'
import type { AppProps } from 'next/app'
import React, { useEffect } from "react";
import Router from 'next/router'
// import useUser from '../lib/useUser'

// y


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const {pathname} = Router
    const isLogin = true
    if(!isLogin){
        Router.push('/login')
    }
  });
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
