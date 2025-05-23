
import traveller from '../svg/hero/Traveller 1.svg'
import playimg from '../svg/hero/Polygon 1.svg'
import plane from '../svg/hero/plane.svg'

function Hero (){

    return(
        <>
         <section  className="w-[100vw] h-auto flex justify-center mt-[50px] sm:mt-[20px] lg:mt-[60px]  ">
            <div className="xl:w-[1200px] w-[100vw] sm:h-[664px] h-[550px] flex md:flex-row items-center justify-center flex-col md:ml-[45px]">
            <div className='w-[630px] h-[535px]   md:items-start flex  flex-col items-center md:ml-[20px]  xl:ml-0'>
                        <p className='sm:w-[410px] w-[350px] h-[30px] font-poppins font-bold sm:text-[20px] text-[16px] tracking-normal text-[#DF6951]'>
                            BEST DESTINATIONS AROUND THE WORLD
                        </p>
                        <h1 className='font-volx sm:w-[477px] w-[405px] sm:h-[267px] h-[220px] md:ml-0 ml-[60px] font-bold sm:text-[64px] text-[50px]  sm:leading-[89px] leading-[70px] text-[#181E4B]'>
                            Travel, enjoy and live a new and full life
                        </h1>
                        <p className='font-poppins font-medium sm:text-[16px] text-[14px] md:ml-0  ml-[50px] leading-[30px] sm:w-[467px] w-[390px] h-[90px]  text-[#5E6282]'>
                        Explore new places, embrace new experiences,<br/> and create unforgettable memories Travel, and <br/> live life to the fullest.The world is waiting for you!
                        </p>
                        <div className='flex mt-[34px] items-center w-[340px] sm:w-[410px]'>
                            <button className='cursor-pointer sm:w-[170px] w-[130px] h-[60px] bg-[#F1A501] rounded-[10px] font-sans font-medium sm:text-[18px] text-[15px] text-[#FFFFFF]'>
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


