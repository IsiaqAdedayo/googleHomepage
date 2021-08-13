

const Footer = () => {
    return (
        <div className="bg-gray-100 text-gray-500 text-opacity-80 text-sm font-semibold">
            <div className="px-8 py-3 border-b border-gray-300">
                <h1>Nigeria</h1>    
            </div> 
            <div>
                <div className="hidden md:flex xl:hidden justify-center items-center pt-3">
                    <div className="flex space-x-2 items-center hover:border-b border-gray-500 cursor-pointer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="carbonleaf" className="h-4" />
                        <p>Carbon neutral since 2007</p>
                    </div>
                </div>
                <div className="px-8 py-4 flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="flex flex-row-reverse md:flex-row space-x-8 pt-3 md:pt-0">
                        <p className="hover:border-b border-gray-500 cursor-pointer">About</p>
                        <p className="pr-8 md:pr-0 hover:border-b border-gray-500 cursor-pointer">Advertising</p>
                        <p className="hover:border-b border-gray-500 cursor-pointer">Business</p>
                        <p className="hidden md:block hover:border-b border-gray-500 cursor-pointer">How Search works</p>
                    </div>

                    <div className="xl:flex space-x-2 items-center hidden xl:pr-40 hover:border-b border-gray-500 cursor-pointer">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC" alt="carbonleaf" className="h-4" />
                        <p>Carbon neutral since 2007</p>
                    </div>

                    <div className="flex flex-row-reverse md:flex-row space-x-7">
                        <p className="hover:border-b border-gray-500 cursor-pointer">Privacy</p>
                        <p className="pr-7 md:pr-0 hover:border-b border-gray-500 cursor-pointer">Terms</p>
                        <p className="hover:border-b border-gray-500 cursor-pointer">Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
