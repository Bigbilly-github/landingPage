
import logo1 from '../svg/bookingdetails/Group 7.svg'
import logo2 from '../svg/bookingdetails/Group 12.svg'
import logo3 from '../svg/bookingdetails/Group 11.svg'
import image from '../svg/bookingdetails/Rectangle 17.svg'
import leaf from '../svg/bookingdetails/LEAF.svg'
import map from '../svg/bookingdetails/map icon.svg'
import  send from '../svg/bookingdetails/send.svg'
import  icon from '../svg/bookingdetails/Group.svg'
import  heart from '../svg/bookingdetails/heart (6) 1.svg'
import  pic from '../svg/bookingdetails/image 32.svg'

function BookingDetails () {

    return(
        <>
        <section className="w-[100vw] h-auto flex justify-center">
            <div className="sm:w-[1000px] xl:w-[900px] lg:h-[492px] h-[800px] lg:pl-[50px] xl:pl-0  mt-[80px] flex lg:flex-row flex-col lg:justify-between  items-center">
                <div className=' flex flex-col lg:items-start items-center  '>
                    <p className='sm:w-[90%] lg:w-[137px] w-[130px] text-center h-[27px] font-poppins font-semibold   text-[18px] text-[#5E6282]'>
                        Easy and Fast
                    </p>
                    <h1 className='sm:w-[511px] w-[300px] lg:h-[130px] h-[60px] sm:h-[80px] font-volx sm:font-bold font-extrabold  lg:text-[50px] sm:text-[30px] text-[17px] text-[#14183E] sm:mt-[15px] sm:leading-[40px] lg:leading-[60px]'>
                        Book your next trip 
                        in 3 easy steps
                    </h1>

                    <div className=' flex gap-[21px] w-[400px]  items-center sm:justify-start justify-center lg:mt-[31px] '>
                        <img src={logo1} alt="icon" />
                        <div className='flex flex-col gap-[5px] '>
                            <p className='sm:w-[254px] w-[200px]  h-[20px] font-poppins font-bold sm:text-[16px] text-[14px] text-[#5E6282]'>
                            Choose Destination
                            </p>
                            <p className='sm:w-[327px] w-[250px] sm:h-[20px] h-[20px] font-poppins sm:text-[16px] text-[14px] font-normal leading-[124.5%] text-[#5E6282]'>
                            Lorem ipsum dolor sit amet, consectetur. 
                            </p>
                        </div>

                    </div>

                    <div className=' flex gap-[21px] w-[400px]  items-center sm:justify-start justify-center lg:mt-[31px] sm:mt-[15px] mt-[30px]'>
                        <img src={logo2} alt="icon" />
                        <div className='flex flex-col gap-[5px]'>
                        <p className='sm:w-[254px] w-[200px]  h-[20px] font-poppins font-bold sm:text-[16px] text-[14px] text-[#5E6282]'>
                            Make Payment
                            </p>
                            <p className='sm:w-[327px] w-[250px] sm:h-[20px] h-[20px] font-poppins sm:text-[16px] text-[14px] font-normal leading-[124.5%] text-[#5E6282]'>
                            Lorem ipsum dolor sit amet, consectetur. 
                            </p>
                        </div>

                    </div>

                    <div className=' flex gap-[21px] w-[400px]  items-center sm:justify-start justify-center lg:mt-[31px] sm:mt-[20px] mt-[30px]'>
                        <img src={logo3} alt="icon" />
                        <div className='flex flex-col gap-[5px]'>
                        <p className='sm:w-[254px] w-[250px]  h-[20px] font-poppins font-bold sm:text-[16px] text-[14px] text-[#5E6282]'>
                            Reach Airport on Selected Date
                            </p>
                            <p className='sm:w-[327px] w-[250px] sm:h-[20px] h-[20px] font-poppins sm:text-[16px] text-[14px] font-normal leading-[124.5%] text-[#5E6282]'>
                            Lorem ipsum dolor sit amet, consectetur. 
                            </p>
                        </div>

                    </div>

                </div>



                <div className='sm:w-[455px] w-[330px] h-[459px]  flex flex-col justify-end  relative'>
                    <div className='w-[370px] h-[400px] bg-[#FFFFFF] rounded-[35px] flex flex-col gap-[26px] items-center pt-[20px] shadow-2xl'>
                        <div className='w-[321px] h-[161px] '>
                            <img src={image} alt="image of a lady at the maldives" />
                        </div>
                        <div className='w-[321px] '>
                            <p className='font-poppins font-medium text-[18px] mb-0 leading-[124.5%] text-[#080809]'>
                            Trip To Greece
                            </p>
                            <p className='h-[20px] font-poppins mt-[13px] mb-0 font-medium text-[16px] leading-[124.5%] text-[#84829A]'>
                            14-29 June
                            </p>

                            <div className='flex gap-[18px] mt-[21px] mb-0'>
                                <img src={leaf} alt="a leaf icon" />
                                <img src={map} alt="a map icon" />
                                <img src={send} alt="a send icon" />
                            </div>

                            <div className='flex justify-between mt-[30px] '>
                                <div className='flex gap-[10px] w-[100%]'>
                                    <img src={icon} alt="icon of a building" />
                                    <p className='w-[200px] h-[20px] font-poppins font-medium text-[16px] leading-[124.5%] text-[#84829A]'>
                                        24 people going
                                    </p>
                                </div>
                                <img src={heart} alt="a heart icon" />
                            </div>
                        </div>

                    </div>

                    <div className='sm:w-[273px] w-[210px] h-[129px] pl-[20px] pt-[20px] grid grid-cols-[60px_1fr] bg-[#FFFFFF] rounded-[10px] absolute sm:right-[40px]  xl:-right-[65px]  lg:-right-[20px] md:right-0  -right-[50px]  bottom-[70px] shadow-2xl '>
                        <div className='w-[50px] h-[50px]'>
                            <img src={pic} alt="a profile picture" className='rounded-[50%] w-[100%] h-[100%]' />

                        </div>

                        <div>
                                <p className='font-poppins font-medium text-[14px] leading-[124.5%] -tracking-[3.5%] text-[#84829A] mb-0'>
                                Ongoing
                                </p>
                                <p className='font-poppins font-medium text-[18px] leading-[124.5%] -tracking-[1.5%] mt-[6px] text-[#080809] mb-0'>
                                Trip to rome
                                </p>
                                <p className='font-poppins font-medium text-[14px] leading-[124.5%] -tracking-[5.5%] text-[#080809] mt-[14px] mb-0'>
                                40% completed
                                </p>
                                <div className='sm:w-[156px] w-[110px] h-[5px] rounded-[5px] bg-slate-300 mt-[10px]'>
                                    <div className='sm:w-[62.4px] w-[52.4px] h-[5px] bg-[blue] rounded-l-[5px]'>

                                    </div>
                                </div>

                        </div>



                    </div>


                </div>

            </div>
        </section>
        </>
    )

}
export default BookingDetails