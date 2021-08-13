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
        <div className="flex flex-col justify-center items-center flex-1">
            <div className="">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"  
                    layout="fixed"
                    width="300"           
                    height="100"           
                />
            </div>
            <div className="flex items-center rounded-full border border-gray-300 h-10 font-bold md:w-7/12 lg:w-6/12 xl:w-5/12 ">
                <FontAwesomeIcon icon={faSearch} className="h-6 text-gray-300 inline-flex pl-4 pt-1"/>
                <input 
                    type="text" 
                    value={val} 
                    onChange={handleChange} 
                    className="truncate ml-3 items-center bg-transparent outline-none placeholder-opacity-50 flex-shrink md:inline-flex w-full" />
                <img src="/google-mic.svg" alt="google-mic" className="h-6 text-gray-300 inline-flex pr-6 pt-1"/>
            </div>
            <div className="flex flex-row mt-4 mb-7 space-x-3 md:space-x-6">
                <div onClick={() => window.location.href= `https://google.com/search?q=${val}`} className="px-4 py-2 bg-gray-100 hover:shadow hover:border rounded cursor-pointer">
                    <h1>Google Search</h1>
                </div>
                <div onClick={() => window.location.href= 'https://perfects.engineering'} className="px-4 py-2 bg-gray-100 hover:shadow hover:border rounded cursor-pointer">
                    <h1>I'm Feeling Lucky</h1>
                </div>
            </div>
            <div className="text-sm hidden md:flex flex-row space-x-3">
                <p className="">Google offered in:</p>
                <p className="text-blue-900 hover:border-b border-blue-900 cursor-pointer">Hausa</p>
                <p className="text-blue-900 hover:border-b border-blue-900 cursor-pointer">Igbo</p>
                <p className="text-blue-900 hover:border-b border-blue-900 cursor-pointer">Èdè Yorùbá</p>
                <p className="text-blue-900 hover:border-b border-blue-900 cursor-pointer">Nigerian Pidgin</p>
            </div>
        </div>
    )
}

export default Body