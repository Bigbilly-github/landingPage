
import image1 from '../svg/subscribe/Group 42.svg'


function Subscribe (){

    return(
        <>
        <section className="w-[100vw] h-auto flex justify-center mt-[44px]">
            <div className="xl:w-[1170px] lg:w-[900px] md:w-[650px] sm:w-[550px] w-[350px] md:h-[350px] h-[300px] bg-[#DFD7F9]  rounded-tl-[95px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[6px]   flex flex-col items-center justify-center gap-[30px]  ">
                <p className=' font-poppins font-semibold lg:text-[33px] md:text-[28px]  sm:text-[25px] text-[16px] leading-[54px] text-[#5E6282]'>
                Subscribe to get updates about Jadoo
                </p>
                <form  className='flex sm:gap-[30px] gap-[15px] w-'>
                    <input type="email" placeholder='Email'  className='bg-[#FFFFFF] xl:w-[421px]  lg:w-[351px] md:w-[301px] w-[200px] h-[40px] md:h-[68px] rounded-[10px] pl-[20px] font-poppins font-normal text-[14px]' />
                    <button className='md:w-[180px] w-[80px] font-sans font-semibold text-[10px] md:text-[17px] border-0 text-[#FFFFFF] h-[40px] md:h-[68px] bg-[#FF7D68] rounded-[10px] '>
                    Subscribe

                    </button>
                </form>

            </div>
        </section>
        
        </>
    )

}
export default Subscribe