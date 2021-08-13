import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, 
        faHistory, 
        faCog, 
        faQuestionCircle,
        faCommentAlt,
        faBookmark,
        faSearchDollar,
        faSearchPlus,
        faShieldAlt,
    } from '@fortawesome/free-solid-svg-icons'
import { faEtsy } from '@fortawesome/free-brands-svg-icons';

const MenuComponents = () => {
    return (
        <div className="w-3/4 bg-white pl-3 pt-8 pb-14 space-y-6 overflow-y-scroll overscroll-y-auto h-screen">
            <div className="-ml-3">
                <Image
                    src="/Google-Logo.wine.svg"  
                    layout="fixed"
                    width="100"           
                    height="40"           
                />
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faHome} className="h-4"/>
                <h1>Home</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faHistory} className="h-4"/>
                <h1>Search history</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faBookmark} className="h-4"/>
                <h1>Collections</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80 border-b border-gray-400 pb-4">
                <FontAwesomeIcon icon={faSearchPlus} className="h-4"/>
                <h1>Offline Searches</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faCog} className="h-4"/>
                <h1>Settings</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faShieldAlt} className="h-4"/>
                <h1>Your data in Search</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faEtsy} className="h-4"/>
                <h1>Hide explicit results:off</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faSearchDollar} className="h-4"/>
                <h1>How Search works</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faQuestionCircle} className="h-4"/>
                <h1>Help</h1>
            </div>
            <div className="flex space-x-3 items-center text-gray-500 text-opacity-80">
                <FontAwesomeIcon icon={faCommentAlt} className="h-4"/>
                <h1>Send feedback</h1>
            </div>

        </div>
    )
}

export default MenuComponents
