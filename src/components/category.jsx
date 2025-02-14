
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
            <section className="w-full h-auto pt-[197px] pl-[134px] pr-[58px] sm:bg-[red] md:bg-[blue] lg:bg-[green] xl:bg-[orange]" >
                <div className="w-[1228px] h-[525px] ">
                    <div className="flex items-center flex-col mb-[108px]">
                        <p className="font-poppins text-[18px] font-semibold text-[#5E6282]">
                        CATEGORY
                        </p>
                        <h1 className="font-volx text-[50px] font-bold text-[#14183E]">
                        We Offer Best Services
                        </h1>
                    </div>
                    <div className="w-auto h-auto flex  gap-[30px]">
                       { categoryArray.map((category,index)=> <div className="w-[267px] h-[314] bg-[#FFFFFF] shadow-xl rounded-[36px]  border-0 flex flex-col  items-center gap-[10px]   ">
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