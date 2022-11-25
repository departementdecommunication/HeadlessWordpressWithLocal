import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageTitle from '../components/title'
import Header from '../components/header'
import Languages from '../components/languages'
import Presentation from '../components/presentation'
import Carrousel from '../components/carrousel'
import Contact from '../components/contact'
import Layout from '../components/layout'
//import CookieConsent from "react-cookie-consent";



const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Languages/>
        <Header/>
        <Presentation/>
        <Carrousel/>
        <Contact/>
        
  
      </Layout>
    </>
  )
}

export default Home


