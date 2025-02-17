



function  Testimonials (){

    const testimonyArray = [
        {
            testimony: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            testifier: "Mike taylor",
            location:"Lahore, Pakistan"
        },
        {
            testimony: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            testifier: "Mike taylor",
            location:"Lahore, Pakistan"
        },
        {
            testimony: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            testifier: "Mike taylor",
            location:"Lahore, Pakistan"
        },
        {
            testimony: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
            testifier: "Mike taylor",
            location:"Lahore, Pakistan"
        }

    ]

    return(
        <>
            <section className="w-full md:h-auto sm:h-[1500px] h-[1250px]  flex justify-center sm:mt-[137px] mt-[97px] lg:mt-[197px]   mb-[100px] " >
                <div className="xl:w-[1228px] xl:h-[525px] w-[50vw] flex flex-col items-center">
                    <div className=" flex items-center flex-col xl:mb-[58px] mb-[50px]">
                        <p className="font-poppins lg:text-[20px] text-[18px] font-semibold text-[#5E6282]">
                        TESTIMONIALS
                        </p>
                        <h1 className="font-volx xl:text-[50px] lg:text-[39px] sm:text-[24px]    text-[13px] font-bold text-[#14183E]">
                        What People Say About Us.
                        </h1>
                    </div>
                    <div className="xl:w-[1228px] h-[1200px]  xl:auto sm:h-auto justify-between md:w-[800px] lg:pl-0 md:pl-[60px] md:grid md:grid-cols-2 md:gap-x-[20px] lg:gap-x-[50px]  xl:flex xl:justify-between xl:flex-row  flex flex-col gap-[50px] ">
                       { testimonyArray.map((testimony,index)=> <div className=" lg:w-[367px] md:w-[300px] sm:w-[367px] w-[267px] sm:h-[314px] h-[314px] bg-[#FFFFFF] shadow-xl rounded-[36px]  border-0 flex flex-col  pl-[20px]  items-center justify-center gap-[10px]   ">
                           
                            <h3 className='font-poppins sm:text-[15px] text-[12px] w-[250px] text-left sm:h-[150px] h-[120px] leading-[25px] font-semibold text-[#5E6282]'>
                           {testimony.testimony}
                            </h3>
                            <p className='font-poppins sm:text-[18px] text-[16px]  text-left font-semibold w-[250px] sm:h-[18px] h-[14px] leading-[26px] text-[#5E6282]'>
                            {testimony.testifier}
                            </p>
                            <p className='font-poppins sm:text-[14px] text-[12px] text-left font-medium w-[250px] h-[28px] leading-[26px] text-[#5E6282]'>
                            {testimony.location}
                            </p>

                            

                        </div>
                        )}
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonials