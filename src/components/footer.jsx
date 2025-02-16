
import social1 from '../svg/footer/Social1.svg'
import social from '../svg/footer/Social4.svg'
import telegram from '../svg/footer/telegram.svg'
import googleplay from '../svg/footer/google-play 1.svg'
import appleplay from '../svg/footer/Group.svg'


function Footer () {

    return(
        <>
          <section className="w-full h-auto flex justify-center mt-[196px]">
            <div className="xl:w-[1170px] lg:w-[900px] md:w-[650px] sm:w-[550px] w-[350px] h-[200px]  justify-between flex   ">
                <div className="flex flex-col">
                    <p className='font-poppins font-medium text-[44px]'>
                    Jadoo.
                    </p>
                    <p className='font-poppins font-medium text-[13px] sm:w-[250px] w-[200px] text-[#5E6282]'>
                    Book your trip in minutes

                    </p>
                </div>

                <div className="flex flex-col">
                    <h3 className='font-poppins font-bold text-[21px] mb-[34px] leading-[124.5%]'>
                        Company
                    </h3>
                    <p className='font-poppins font-medium text-[18px] mb-[12px]  mt-0 leading-[124.5%] text-[#5E6282]'>
                        About Us
                    </p>
                    <p className='font-poppins font-medium text-[18px] mb-[12px] mt-0 leading-[124.5%] text-[#5E6282]'>
                        Contact Us
                    </p>
                    <p className='font-poppins font-medium text-[18px] mb-[12px]  mt-0 leading-[124.5%] text-[#5E6282]'>
                        Privacy Policy
                    </p>
                </div>

                <div className='lg:flex flex-col w-[214px] items-start h-[147px] hidden'>
                    <div className='flex pl-0 items-center'> 
                        <img src={telegram} alt="" className='w-[45px] h-[45px]' />
                        <img src={social} alt="" />
                        <img src={social1} alt="" />

                    </div>
                    <p className='w-[173px] h-[25px] font-poppins mb-0 font-medium text-[20px] leading-[124.5%] text-[#5E6282]'>
                    Discover our app
                    </p>
                    <div className='flex gap-[10px] mt-[16px]'>
                        <button className='w-[105px] h-[35px] bg-[black] rounded-[17.5px]'>
                                <div className='flex justify-evenly'>
                                    <img src={googleplay} alt="google play icon" />
                                    <div className='flex flex-col text-left'>
                                        <p className='text-[6px] text-[#FFFFFF]'>
                                            GET IT ON
                                        </p>
                                        <p className='text-[6px] text-[#FFFFFF]'>
                                            GOOGLE PLAY
                                        </p>
                                    </div>
                                </div>
                        </button>

                        <button className='w-[100px] h-[35px] bg-[black] rounded-[17.5px]'>
                                <div className='flex justify-evenly'>
                                        
                                        <img src={appleplay} alt="apple play icon" />
                                        <div className='flex flex-col text-left'>
                                            <p className='text-[8px] text-[#FFFFFF]'>
                                                Available on the
                                            </p>
                                            <p className='text-[6px] text-[#FFFFFF]'> 
                                                Apple store
                                            </p>
                                        </div>
                                </div>
                        </button>
                    </div>

                </div>




            </div>
          </section>
        </>
    )

}
export default Footer