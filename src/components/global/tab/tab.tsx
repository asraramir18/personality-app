import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const tabList = [{
    id: 'Know',
    tabListName: 'Know Yourself',
    tabPathName: ['/', '/home']
},{
    id: 'Result',
    tabListName: 'Result',
    tabPathName: ['/result']
},{
    id: 'Start',
    tabListName: 'Know Yourself',
    tabPathName: ['/Start Over']
},]

const Tab = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const router = useRouter()
    const { pathname } = router

    useEffect(() => {
      
    }, []);
    

    const checkPath = (path: string) => {
        return path === pathname
    }
    // console.log(router.pathname)
    return (
        <div className="sticky w-screen border-b shadow-lg bg-white">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {/* {tabList.map((data) => {
                    return(
                        <Link key={data.id} href='/home' className='hover:bg-sky-700'>
                            <li className={`w-1/3 flex flex-row justify-center items-center p-3 border-b-2  ${data.tabPathName.some(checkPath) ? 'border-blue-600' : 'border-transparent'}`}>
                                <svg aria-hidden="true" className={`mr-1 w-5 h-5 ${data.tabPathName.some(checkPath) ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                {data.tabListName}
                            </li>
                        </Link>
                    )
                })} */}
                <Link href='/home' className='hover:bg-sky-700'>
                    <li key='Know' className={`cursor-pointer w-1/3 flex flex-row justify-center items-center p-3 border-b-2  ${(pathname === '/' || pathname === '/home') ? 'border-blue-600' : 'border-transparent'}`}>
                        <svg aria-hidden="true" className={`mr-1 w-5 h-5 ${(pathname === '/' || pathname === '/home') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                        Know Yourself
                    </li>
                </Link>
                <Link href='/result' className='hover:bg-sky-700'>
                    <li key='Result' className={`cursor-pointer w-1/3 flex flex-row justify-center items-center p-3 border-b-2 ${(pathname === '/result') ? 'border-blue-700' : 'border-transparent'}`}>
                    <svg aria-hidden="true" className={`mr-1 w-5 h-5 ${(pathname === '/result') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        Result
                    </li>
                </Link>
                <Link href='/start' className='hover:bg-sky-700'>
                    <li key='Start' className={`cursor-pointer w-1/3 flex flex-row justify-center items-center p-3 border-b-2 ${(pathname === '/start') ? 'border-blue-700' : 'border-transparent'}`}>
                    <svg aria-hidden="true" className={`mr-1 w-5 h-5 ${(pathname === '/start') ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                        Start Over
                    </li>
                </Link>
                {/* <Link href='/'>
                    <li className="w-1/3 inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                        <svg aria-hidden="true" className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        Result
                    </li>
                </Link>
                <Link href='/'>
                    <li className="w-1/3">
                        <a href="#" className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            <svg aria-hidden="true" className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                            Start Over
                        </a>
                    </li>
                </Link> */}
            </ul>
        </div>
    )
}

export default Tab
