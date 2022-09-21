
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router'
import { Props } from '@/interface/common';

const Wrapper = ({ children }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const router = useRouter();
  const isLogin = router.pathname === '/login' ? true : false;

  useEffect(() => {
    
  }, []);


  return (
    <div className='w-screen min-h-screen flex justify-center bg-gray-200'>
      <div className='bg-white max-w-30 w-full'>
        {children}
      </div>
    </div>
  )
}

export default Wrapper