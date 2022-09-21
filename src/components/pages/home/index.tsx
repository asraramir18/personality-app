import { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { ListOfValue } from '@/constant/listOfTraits';
import { DropDown, Button } from '@/components';
import { FormInitial } from '@/interface/home';
import { Formik, Field, Form, FormikHelpers } from 'formik';


const initialValues: FormInitial = {
  firstDropThink: '',
  secondDropThink: '',
  thirdDropThink: '',
  fourthDropThink: '',
  fifthDropThink: '',
  firstDropGuess: '',
  secondDropGuess: '',
  thirdDropGuess: '',
  fourthDropGuess: '',
  fifthDropGuess: '',
}

const listOfThink = [{
  id: 1,
  name: 'firstDropThink'
}, {
  id: 2,
  name: 'secondDropThink'
}, {
  id: 3,
  name: 'thirdDropThink'
}, {
  id: 4,
  name: 'fourthDropThink'
}, {
  id: 5,
  name: 'fifthDropThink'
}]

const listOfGuess = [{
  id: 1,
  name: 'firstDropGuess'
}, {
  id: 2,
  name: 'secondDropGuess'
}, {
  id: 3,
  name: 'thirdDropGuess'
}, {
  id: 4,
  name: 'fourthDropGuess'
}, {
  id: 5,
  name: 'fifthDropGuess'
}]

const HomePage = () => {
  const [search, set] = useState('');
  return (
      <div className='flex p-4 w-full flex-col'>
        <div className='flex flex-col mb-3'>
          <h1 className='font-bold'>
            Instruction
          </h1>
          <span>
            Please fill in all 5 option each and no same option
          </span>
        </div>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: any = {};
            if(
              values.firstDropThink === "" ||
              values.secondDropThink === "" ||
              values.thirdDropThink === "" ||
              values.fourthDropThink === "" ||
              values.fifthDropThink === "" ||
              values.firstDropGuess === "" ||
              values.secondDropGuess === "" ||
              values.thirdDropGuess === "" ||
              values.fourthDropGuess === "" ||
              values.fifthDropGuess === ""
            ){
              errors.firstDropThink = 'Please fill all the option!';
            }
            return errors;
          }}
          onSubmit={(
            values: FormInitial,
            { setSubmitting }: FormikHelpers<FormInitial>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >{({
          errors,
          touched,
        }) => (
          <Form>
            <div className='flex flex-col mb-2'>
              <h2>
                1. What do you think about yourself ?
              </h2>
              <div>
                {listOfThink.map((data) => {
                  return(
                    <>
                      <Field key={data.id} as="select" id={data.name} name={data.name} 
                        className={`flex cursor-pointer p-2 my-2 border-2 border-slate-300 w-full`}
                      >
                        <option value="" disabled selected>Select your personality</option>
                        {ListOfValue.map((data) => {
                          return(
                              <option className='cursor-pointer hover:bg-sky-700 p-3'  key={data.id} value={data.value}>{data.display}</option>
                          )
                        })}
                      </Field>
                    </>
                  )
                })}
              </div>
            </div>
            <div className='flex flex-col mb-2'>
              <h2>
                2. What do you want to show to other people ?
              </h2>
              <div>
                {listOfGuess.map((data) => {
                  return(
                    <Field key={data.id} as="select" id={data.name} name={data.name} 
                      className={`flex cursor-pointer p-2 my-2 border-2 border-slate-300 w-full`}
                    >
                      <option value="" disabled selected>Select your personality</option>
                      {ListOfValue.map((data) => {
                        return(
                          <option  className='cursor-pointer hover:bg-sky-700 p-3'  key={data.id} value={data.value}>{data.display}</option>
                        )
                      })}
                    </Field>
                  )
                })}
              </div>
            </div>
            <div className='flex flex-col mb-2'>
              <h2 className='mb-1'>
                3. Get to know what other people think about you!
              </h2>
              <a href='instagram-stories://share'>
                SHARE THIS 
              </a>
              
              <Button type='submit'>Save & Copy link to other</Button>
              <div>
                {errors.firstDropThink? <span className='text-red-500'>*{errors.firstDropThink}</span> : null}
              </div>
            </div>
          </Form>
        )}
        </Formik>
      </div>
  );
};

export default HomePage;