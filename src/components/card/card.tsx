import Image from 'next/image'

const Card = () => {
  return (
    <>
      <div className='w-screen h-screen bg-gray-200'>
        <div className="p-6 h-1024 w-320 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
            <div className="shrink-0">
            <Image src="/google.png" width={120} height={120} alt="ChitChat Logo" />
            </div>
            <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;