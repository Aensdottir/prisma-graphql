import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/navBar/navBar'
import ShopContainer from '../components/shopContainer/shopContainer'
import { Sidebar } from '../components/sidebar/sidebar'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 


      <NavBar></NavBar>
    
      <Flex flex={1} minHeight={'100vh'}  justifyContent={'center'} paddingX={4} >
        <Flex flex={1} maxWidth={'1074px'} justifyContent={'center'}>

          <Sidebar></Sidebar>
          <ShopContainer></ShopContainer>

        </Flex>
      </Flex>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default HomePage
