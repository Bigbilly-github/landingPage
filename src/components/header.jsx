
import logo from '../svg/header/Jadoo.svg'

function Header () {

    return(
        <>
        <header className="w-full h-[100px] flex justify-center items-center fixed">
            <div className='flex  w-[1160px] h-[40px] items-center'>
                    <img src={logo} alt="image of the web logo" className='w-[114.91px] h-[33.99] mr-[222px]'/>

                    <nav  className='mr-[86px]'>
                        <ul className='flex  font-sans font-medium text-[17px]'>
                            <li className='mr-[55px] w-[100px] h-[22px]'><a href=''>Destinations</a></li>
                            <li className='mr-[64px] w-[51px] h-[22px]'><a href=''>Hotels</a></li>
                            <li className='mr-[62px] w-[53px] h-[22px]'><a href=''>Flights</a></li>
                            <li className='w-[78px] h-[22px]'><a href=''>Bookings</a></li>
                        </ul>
                    </nav>

                    <div className='flex items-center '>
                        <p className='font-medium text-[17px] mr-[52px] w-[44px] h-[22px]'>
                            Login
                        </p>

                        <button className='font-medium text-[17px] mr-[42px] w-[102px] h-[40px]  border rounded-[5px]  border-[#212832]'>
                            Sign Up
                        </button>

                        <p  className='font-medium text-[17px] mr-[52px] w-[38.5px] h-[22px]'>
                            EN
                        </p>
                    </div>

            </div>

        </header>
        
        </>
    )

}
export default Header