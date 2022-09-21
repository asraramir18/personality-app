import Image from 'next/image'
import Link from 'next/link';
import { DropDown, Button } from '@/components';

const Result = () => {
  return (
    <div>
      <div className='bg-emerald-400 flex flex-col justify-center items-center px-4 gap-5 h-52'>
        <p className='text-emerald-700 text-5xl font-bold'>
          85%
        </p>
        <p>
          You are good to know yourself
        </p>
        <Button>Share this result</Button>
      </div>
      <div className='border-b-2 border-slate-300 p-5 flex'>
        <div>
          <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <span>
          29 people help you to know yourself
        </span>
      </div>
      <div className='border-b-2 border-slate-300 p-5 flex'>
        <div>
          They think that you are
        </div>
        <div>
          Positive Vibe
        </div>
      </div>
      <div className='border-b-2 border-slate-300 p-5 flex'>
        <div>
          You have succeed as
        </div>
        <div>
          Positive Vibe
        </div>
      </div>
      <div className='border-b-2 border-slate-300 p-5 flex'>
        <div>
          Youre strongest characteristic
        </div>
        <div>
          Humoris
        </div>
      </div>
    </div>
  );
};

export default Result;