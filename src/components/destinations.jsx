
import romeimg from '../svg/destinations/rectangle 14.svg'
import londonimg from '../svg/destinations/rectangle 15.svg'
import europeimg from '../svg/destinations/rectangle 16.svg'

function Destinations (){

    const DestinationsArray = [
        {
            img:romeimg,
            city: "Rome, Italy",
            likes: "5.24k",
            days: "10 Days Trip"
        },

        {
            img:londonimg,
            city: "London, Uk",
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
            <section className="w-full h-auto flex justify-center mt-[123px]" >
                <div className="w-[1228px] h-[525px]  ">
                    <div className="flex items-center flex-col  mb-[60px]">
                        <p className="font-poppins text-[18px] font-semibold text-[#5E6282]">
                        Top Selling
                        </p>
                        <h1 className="font-volx text-[50px] font-bold text-[#14183E]">
                            Top Destinations
                        </h1>
                    </div>

                 <div className='flex  justify-center bg-[url("/src/svg/destinations/decore.svg")]  bg-no-repeat bg-auto bg-[88%_30%] '> 
                        {DestinationsArray.map((destination)=> 
                        <div  className='w-[314px] h-[457px]  relative rounded-[24px]'> 
                                    
                                <img src={destination.img} alt="image of a city" className='w-[100%]'/>
                                <div className='flex gap-[10px] rounded-bl-[24px] pt-[20px] pl-[10px] -ml-[2px] pr-[10px] shadow-xl rounded-br-[24px] flex-col w-[209px] bg-[#FFFFFF] h-[100px] absolute bottom-[135px] left-[54px]'>
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