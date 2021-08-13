import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import Body from '../components/Body'
import Footer from '../components/Footer'
import Header from '../components/header'

export default function Home() {
  const node = useRef();

  return (
    <div ref={node} className="w-screen flex flex-col overflow-x-hidden overscroll-x-none h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/5/53/20200429221626%21Google_%22G%22_Logo.svg/118px-Google_%22G%22_Logo.svg.png" />
      </Head>

      <Header />
      <Body />
      <Footer />
    </div>
  )
}
