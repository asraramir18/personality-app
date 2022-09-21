import { useEffect, useState } from "react";
import Image from 'next/image'
import { Formik, Field, Form, FormikHelpers } from 'formik';


interface Card {
    key: number
    data: {
      id: number;
      name: string;
    },
    listOfValue: ListOfValue[]
}

interface ListOfValue {
  display: string;
  id: number;
  value: string;
}

const DropDown = (props: Card) => {
  const [isShow, setIsShow] = useState(false)
  const [currentData, setCurrentData] = useState('')
  const setDropDown = (data: any) =>{
    setCurrentData(data.display)
  }

  return (
    <Field key={props.data.id} as="select" id={props.data.name} name={props.data.name} className='my-2'>
      <div className={`flex cursor-pointer p-2 ${isShow ? 'bg-sky-700' : 'bg-white'}`} onClick={() => {
          setIsShow(!isShow)
        }}>
        {currentData ? currentData : 'Pilih Opsi'}
      </div>
      {isShow && 
        <div className='absolute bg-white'>
          {props.listOfValue.map((data: ListOfValue) => {
            return(
                <div key={data.id} className='cursor-pointer hover:bg-sky-700 p-2' onClick={() => {
                  setCurrentData(data.display)
                  setIsShow(false)
                }}>
                  {data.display}
                </div>
                )
          })}
        </div>
        }
    </Field>
  );
};

export default DropDown;