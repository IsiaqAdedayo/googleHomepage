import { useState, useEffect, useRef } from 'react';
import { Transition } from "@headlessui/react";
import MenuComponents from './MenuComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const node = useRef();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuClick = e => {
        if (node.current && !node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setIsMenuOpen(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", menuClick);
    
        return () => {
          document.removeEventListener("mousedown", menuClick);
        };
      }, []);

    return (
        <div className="w-full pt-5 md:pt-5 px-4 font-semibold h-10 flex flex-row justify-between items-center relative">
            <div className="flex flex-row space-x-4 text-xs mt-3 text-gray-700 text-opacity-90  md:hidden">
                <FontAwesomeIcon onClick={e => setIsMenuOpen(!isMenuOpen)} icon={ faBars } className="w-7 h-5"/>
                <p className="text-blue-500 border-b-2 border-blue-500 pb-2">ALL</p>
                <p>IMAGES</p>
            </div>


            <Transition show={isMenuOpen}>
                <Transition.Child
                    enter="transition ease-in duration-100 transform"
                    enterFrom="opacity-0 scale-0"
                    enterTo="opacity-100 scale-100"
                    className="absolute z-20 top-0 bg-trns w-full h-screen lg:hidden left-0"
                >
                    <Transition.Child
                        enter="transition ease-out duration-500 transform origin-left"
                        enterFrom="opacity-0 -translate-x-full"
                        enterTo="opacity-100 -translate-x-0"
                        leave="transition ease-in duration-1000 transform origin-left"
                        leaveFrom="-translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <MenuComponents />
                    </Transition.Child>
                </Transition.Child>
            </Transition>

            <nav className="flex flex-row justify-around items-center md:w-1/2 lg:w-2/5 xl:w-1/5 ml-auto text-black text-opacity-60">
                <p className="hidden md:block text-sm hover:border-b border-black cursor-pointer">Gmail</p>
                <p className="hidden md:block text-sm hover:border-b border-black cursor-pointer">Images</p>
                <div className="w-10 h-8 p-3 rounded-full flex items-center hover:bg-gray-200 cursor-pointer text-opacity-50">
                    <FontAwesomeIcon icon={ faTh } />
                </div>
                <p className="py-1 px-4 bg-blue-400 rounded text-white cursor-pointer hover:bg-blue-700">Sign in</p>
            </nav>
        </div>
    )
}

export default Header;
