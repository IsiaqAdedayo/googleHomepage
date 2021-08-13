import { useState } from "react"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Body = () => {

    const [val, setVal] = useState("");

    const handleChange = e => {
        e.preventDefault()
        setVal(e.target.value)
    };

    return (
        <div className="flex flex-col justify-center items-center flex-1 md:pb-20">
            <div className="w-6/12 h-24 md:w-full flex items-center justify-center md:pb-16">
                <Image
                    src="/Google-Logo.wine.svg"  
                    layout="fixed"
                    width={350}           
                    height="170"           
                />
            </div>
            <div className="flex items-center rounded-full border border-gray-300 h-10 md:h-12 font-bold w-11/12 md:w-7/12 lg:w-6/12 xl:w-5/12 ">
                <FontAwesomeIcon icon={faSearch} className="h-6 text-gray-300 inline-flex pl-4 pt-1"/>
                <input 
                    type="text" 
                    value={val} 
                    onChange={handleChange} 
                    className="truncate ml-3 items-center bg-transparent outline-none placeholder-opacity-50 flex-shrink md:inline-flex w-full" />
                <img src="/google-mic.svg" alt="google-mic" className="h-6 text-gray-300 inline-flex pr-6 pt-1"/>
            </div>
            <div className="flex flex-row mt-4 mb-7 space-x-3 md:space-x-6">
                <div onClick={() => window.location.href= `https://google.com/search?q=${val}`} className="px-4 py-2 bg-gray-50 hover:shadow border border-transparent hover:border-gray-300 rounded cursor-pointer">
                    <h1>Google Search</h1>
                </div>
                <div onClick={() => window.location.href= 'https://perfects.engineering'} className="px-4 py-2 bg-gray-50 hover:shadow border border-transparent hover:border-gray-300 rounded cursor-pointer">
                    <h1>I'm Feeling Lucky</h1>
                </div>
            </div>
            <div className="text-sm flex flex-col md:flex-row space-x-3 justify-center items-center space-y-3 md:space-y-0">
                <p className="">Google offered in:</p>
                <div className="flex flex-row space-x-3">
                    <p className="text-blue-700 border-b border-transparent hover:border-blue-700 cursor-pointer">Hausa</p>
                    <p className="text-blue-700 border-b border-transparent hover:border-blue-700 cursor-pointer">Igbo</p>
                    <p className="text-blue-700 border-b border-transparent hover:border-blue-700 cursor-pointer">Èdè Yorùbá</p>
                    <p className="text-blue-700 border-b border-transparent hover:border-blue-700 cursor-pointer">Nigerian Pidgin</p>
                </div>
            </div>
        </div>
    )
}

export default Body
