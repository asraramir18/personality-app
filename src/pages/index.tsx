import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomePage } from '@/components/pages'

const Home: NextPage = () => {

  const checkIfLogin = true
  return (
    <>
      <HomePage />
    </>
  )
}

export default Home
