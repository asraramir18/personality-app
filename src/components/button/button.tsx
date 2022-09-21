import { Props } from '@/interface/common';

const Button = ({ children, type }: Props) => {
    return (
			<>
				<button type={type} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
					{children}
				</button>
			</>
    )
  }

export default Button;
  