
import logo from '../svg/header/Jadoo.svg'

function Header () {

    return(
        <>
        <header className="w-full h-[100px] flex justify-center items-center fixed top-0 z-20">
            <div className='flex w-[90vw]  lg:w-[1160px] h-[40px] items-center  justify-between  '>
                    <img src={logo} alt="image of the web logo" className='w-[114.91px] h-[33.99] xl:ml-0 lg:ml-[20px] md:mr-[222px]  xl:mr-[222px] lg:mr-[150px] '/>

                    <nav  className='mr-[86px] hidden lg:flex'>
                        <ul className='flex  font-sans font-medium text-[17px]'>
                            <li className='lg:mr-[40px] w-[100px] h-[22px] cursor-pointer opacity-100 hover:opacity-55 transition-opacity duration-150'><a href=''>Destinations</a></li>
                            <li className='mr-[64px] lg:mr-[40px]  w-[51px] h-[22px] cursor-pointer opacity-100 hover:opacity-55 transition-opacity duration-150'><a href=''>Hotels</a></li>
                            <li className='mr-[62px] lg:mr-[40px]  w-[53px] h-[22px] cursor-pointer opacity-100 hover:opacity-55 transition-opacity duration-150'><a href=''>Flights</a></li>
                            <li className='w-[78px] lg:mr-[40px]  h-[22px] cursor-pointer opacity-100 hover:opacity-55 transition-opacity duration-150'><a href=''>Bookings</a></li>
                        </ul>
                    </nav>

                    <div className='flex items-center '>
                        <p className='font-medium text-[17px] mr-[20px] lg:mr-[22px] w-[44px] cursor-pointer h-[22px] opacity-100 hover:opacity-55 transition-opacity duration-150'>
                            Login
                        </p>

                        <button className='font-medium text-[17px] mr-[10px] lg:mr-[42px] cursor-pointer  w-[102px] h-[40px]  border rounded-[5px]  border-[#212832]  hover:bg-amber-200  transition-bg duration-150'>
                            Sign Up
                        </button>


                    </div>

            </div>

        </header>
        
        </>
    )

}
export default Header