import Image from 'next/image'
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <div className='w-full h-full bg-gray-200 justify-center items-center flex min-w-min'>
        <div className="p-6 mx-auto bg-white rounded-xl flex-col shadow-lg items-center space-y-3 mx-5">
          <div className="text-3xl font-medium text-black text-center">Know Yourself Better</div>
          <div className="shrink-0 justify-center">
            <Image src="/google.png" width={120} height={120} alt="ChitChat Logo" />
          </div>
         
          <Link href={'/home'}>
            <div>
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Facebook Login
              </button>
            </div>
          </Link>
          <Link href={'/home'}>
            <div>
              <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Google Login
              </button>
            </div>
          </Link>
          <Link href={'/home'}>
            <div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Email Login
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;