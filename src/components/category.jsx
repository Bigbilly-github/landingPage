
import plane from '../svg/category/plane.svg'

import satellite from '../svg/category/satellite-dish.svg'
import mic from '../svg/category/Group 50.svg'
import settingslogo from '../svg/category/Group 49.svg'

function  Category (){

    const categoryArray = [
        {
            img: plane,
            maintext: "Best Flights",
            paragraph:"Engrossed listening. Park gate sell they west hard for the."
        },
        {
            img: satellite,
            maintext: "Calculated Weather ",
            paragraph:"Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            img: mic,
            maintext: "Local Events ",
            paragraph:"Barton vanity itself do in it. Preferd to men it engrossed listening. "
        },
        {
            img: settingslogo,
            maintext: "Customization",
            paragraph:"We deliver outsourced aviation services for military customers "
        }

    ]

    return(
        <>
            <section className="w-full lg:h-auto sm:h-[1600px] h-[1350px] flex justify-center mt-[97px] xl:mb-o  mb-[100px] " >
                <div className="xl:w-[1228px] xl:h-[525px] w-[50vw] flex flex-col items-center">
                    <div className=" flex items-center flex-col xl:mb-[108px] mb-[50px]">
                        <p className="font-poppins lg:text-[20px] text-[18px] font-semibold text-[#5E6282]">
                        CATEGORY
                        </p>
                        <h1 className="font-volx xl:text-[50px] lg:text-[45px] md:text-[35px]  sm:text-[28px]    text-[20px] font-bold text-[#14183E]">
                        We Offer Best Services
                        </h1>
                    </div>
                    <div className="xl:w-[1228px] h-[1200px] xl:auto sm:h-auto justify-between lg:w-[800px] lg:bg-[red] lg:grid lg:grid-cols-2 xl:flex xl:justify-between xl:flex-row  flex flex-col gap-[50px]  ">
                       { categoryArray.map((category,index)=> <div className="  sm:w-[367px] w-[267px] sm:h-[314px] h-[314px] bg-[#FFFFFF] shadow-xl rounded-[36px]  border-0 flex flex-col  items-center justify-center gap-[10px]   ">
                            <div className='w-[137px] h-[95px]'>
                                <img src={category.img} alt="image of an airplane" className='w-[100%] h-[100%]'/>
                            </div>
                            <h3 className='font-sans text-[20px] w-[200px] text-center h-[27px] font-semibold text-[#1E1D4C]'>
                           {category.maintext}
                            </h3>
                            <p className='font-poppins text-[12px] text-center font-semibold w-[181px] h-[78px] leading-[26px] text-[#5E6282]'>
                            {category.paragraph}
                            </p>

                            

                        </div>
                        )}
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default Category