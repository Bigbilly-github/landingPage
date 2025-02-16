
import romeimg from '../svg/destinations/rectangle 14.svg'
import londonimg from '../svg/destinations/rectangle 15.svg'
import europeimg from '../svg/destinations/rectangle 16.svg'

function Destinations (){

    const DestinationsArray = [
        {
            img:romeimg,
            city: "Rome",
            likes: "5.24k",
            days: "10 Days Trip"
        },

        {
            img:londonimg,
            city: "London",
            likes: "4.24k",
            days: "12 Days Trip"
        },
        {
            img:europeimg,
            city: "Europe",
            likes: "15k",
            days: "28 Days Trip"
        }

    ]

    return(
        <>
            <section className="w-full h-auto flex justify-center  lg:mt-[223px] mt-[103px]  " >
                <div className="w-[1228px] h-[525px]  ">
                    <div className="flex items-center flex-col  mb-[60px]">
                        <p className="font-poppins lg:text-[20px] text-[18px]  font-semibold text-[#5E6282]">
                        TOP SELLING
                        </p>
                        <h1 className="font-volx xl:text-[50px] lg:text-[45px] md:text-[35px]  sm:text-[28px]    text-[20px]  font-bold text-[#14183E]">
                            Top Destinations
                        </h1>
                    </div>

                 <div className='flex sm:flex-row  flex-col sm:h-auto h-[1300px] sm:gap-0  gap-[200px] justify-between items-center lg:gap-[20px] sm:justify-center sm:bg-[url("/src/svg/destinations/decore.svg")]   bg-no-repeat bg-auto md:bg-[88%_30%] bg-[97%_0%]'> 
                        {DestinationsArray.map((destination)=> 
                        <div  className='lg:w-[314px] md:w-[260px] sm:w-[230px]  w-[400px] sm:h-[457px] h-[300px]  relative rounded-[24px]'> 
                                    
                                <img src={destination.img} alt="image of a city" className='w-[100%]'/>
                                <div className='flex gap-[10px] rounded-bl-[24px]  pt-[20px] pl-[10px] md:-ml-[10px] sm:-ml-[15px] lg:-ml-[2px] pr-[10px] shadow-xl rounded-br-[24px] flex-col md:w-[173px] sm:w-[154px] w-[265px] lg:w-[209px] bg-[#FFFFFF] sm:h-[100px] h-[110px] ml-[13px] absolute  sm:bottom-[195px] -bottom-[90px] md:bottom-[135px] left-[54px]'>
                                    <div className='flex justify-between'>
                                            <p className='font-poppins font-medium text-[18px] leading-[124.5%] text-[#5E6282]'>
                                                {destination.city}
                                            </p>
                                            <p  className='font-poppins font-medium text-[18px] leading-[124.5%] text-[#5E6282]'>
                                                {destination.likes}
                                            </p>

                                    </div>

                                    <div  className='font-poppins font-medium text-[16px] leading-[124.5%] text-[#5E6282]'>
                                        {destination.days}
                                    </div>
                                </div>
                                
                        </div>

                
                    )}
                </div>


                </div>
                </section>
        
        </>
    )

}
export default Destinations