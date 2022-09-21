
import React, { useEffect, useMemo, useState } from 'react';
import {Navbar, Tab, Wrapper} from '@/components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Props } from '@/interface/common';

const Layout = ({ children }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const router = useRouter();
  const isLogin = router.pathname === '/login' ? true : false;

  useEffect(() => {
    
  }, []);


  return (
    <div>      
      <Head>
        <title>Personality APP</title>
        <meta name="description" content="Get your personality check!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky top-0 z-100">
        {!isLogin && <Navbar />}
        {!isLogin && <Tab />}
      </header>
      <main>
        <Wrapper>
            {/* <div className='overflow-auto h-screen w-screen bg-gray-200 justify-center items-center flex min-w-min'> */}
              {children}
            {/* </div> */}
        </Wrapper>
      </main>
    </div>
  )
}

export default Layout