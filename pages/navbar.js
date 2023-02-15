import Image from 'next/image';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../public/logo.png';

export default function Navbar() {
    const [hiddenMenu, setHiddenMenu] = React.useState(false);
    function handleClick() {
        setHiddenMenu(!hiddenMenu);
    };

    return ( 
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 dark:bg-gray-900 w-full">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <Image src={logo} className="h-8 mr-3 sm:h-9" alt="Flowbite Logo" width="30"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WATOK</span>
                </a>
                <input className="w-full md:block md:w-auto" style={{padding:'10px',fontSize:'12px',borderRadius:'10px',width:'30vw'}} type="text" id="roll" name="roll" required  minlength="10" maxlength="20" placeholder='Cari di Watok sini'/>
                <button data-collapse-toggle="navbar-default" type="button" onClick={handleClick} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={hiddenMenu ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
                <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <div className='md:pt-1 md:pb-1 md:pr-3 md:pl-3'>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Nampan
                    </a>
                    </div>
                    <div className="hidden md:block text-blue-100" style={{height:'24px',borderLeft:'1px solid white', height:'30px'}} />
                    <div className='md:pt-1 md:pb-1 md:pr-3 md:pl-3 border-solid border-2 border-cyan-300' style={{borderRadius:'10px'}}>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Login
                        </a>
                    </div>
                    <div className='md:pt-1 md:pb-1 md:pr-3 md:pl-3 border-semibold border-2 bg-cyan-300' style={{borderRadius:'10px'}}>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-zinc-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Daftar
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
}
 