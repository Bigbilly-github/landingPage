
import traveller from '../svg/hero/Traveller 1.svg'
import playimg from '../svg/hero/Polygon 1.svg'
import plane from '../svg/hero/plane.svg'

function Hero (){

    return(
        <>
         <section  className="w-full h-auto flex justify-center   ">
            <div className="xl:w-[1200px] w-[100vw] h-[664px] flex md:flex-row items-center justify-center flex-col md:ml-[45px]">
            <div className='w-[630px] h-[535px]   md:items-start flex  flex-col items-center md:ml-[20px] xl:ml-0'>
                        <p className='w-[410px] h-[30px] font-poppins font-bold text-[20px] tracking-normal text-[#DF6951]'>
                            BEST DESTINATIONS AROUND THE WORLD
                        </p>
                        <h1 className='font-volx w-[477px] h-[267px] md:ml-0 ml-[60px] font-bold text-[64px] leading-[89px] text-[#181E4B]'>
                            Travel, enjoy and live a new and full life
                        </h1>
                        <p className='font-poppins font-medium text-[16px] md:ml-0  ml-[50px] leading-[30px] sm:w-[477px] w-[457px] h-[90] text-[#5E6282]'>
                            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                        </p>
                        <div className='flex mt-[34px] items-center'>
                            <button className='cursor-pointer w-[170px] h-[60px] bg-[#F1A501] rounded-[10px] font-sans font-medium text-[18px] text-[#FFFFFF]'>
                                Find out more
                            </button>
                            <div className='cursor-pointer rounded-[50%] bg-[#DF6951]  shadow   w-[52px] h-[52px] ml-[44px] pt-[20px] pl-[3px] mr-[21px]'> 
                                <img src={playimg} alt="a play icon" className='mx-auto '/>
                            </div>
                            <p className='font-poppins font-medium text-[17px] text-[#686D77] w-[92px] h-[26px]'>
                                Play Demo
                            </p>
                        </div>
                </div>
                <div className=' hidden md:flex w-[783px]  h-[764px] -ml-[200px] bg-[url("/src/svg/hero/plane.svg")]  bg-no-repeat bg-auto bg-[100%_20%]  '>
                        <img src={traveller} alt="image of a traveller" className='w-[100%] h-[100%] bg-[url("/src/svg/hero/plane.svg")] bg-no-repeat bg-auto bg-[23%_8%]     '  />


                </div>


            </div>

         </section>
        </>
    )

    
}
export default Hero


