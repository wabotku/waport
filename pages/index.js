import Head from 'next/head';
import React from 'react';
import Navbar from '../pages/navbar';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const listProduk = [
    'Produk 1',
    'Produk 2',
    'Produk 3',
    'Produk 4',
    'Produk 5',
    'Produk 6',
    'Produk 7',
    'Produk 8',
  ];
  const styleCar = {
    height:'30vh',
  };
  const cnProduk = 'flex w-full items-center justify-center  text-center h-24 border-2';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center" style={{backgroundColor:'white'}}>
      <Head>
        <title>Walid Porto</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Navbar />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
        <div className='flex w-full items-center justify-center  text-center h-24 border-2'>
          Kategori
        </div>
        <div className='flex w-full items-center justify-center  text-center h-24 grid grid-cols-4 gap-4 mt-4'>
        {listProduk.map(
          (produk) => (
          <div className={cnProduk}>
            {produk}
          </div>
          )
        )}
        </div>
        {/* <Carousel autoPlay={true} infiniteLoop={true} interval={3000} showIndicators={false} showThumbs={false} showStatus={false}>
        {carImg.map(
          (car) => (
          <div style={styleCar}>
            <img src={car} style={styleCar} />
          </div>
          )
        )}
        </Carousel> */}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}WABOT
        </a>
      </footer>
    </div>
  )
}
