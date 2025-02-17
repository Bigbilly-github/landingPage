

import axon from '../svg/sponsors/image 27.svg'
import jetstar from '../svg/sponsors/image 28.svg'

import qantas from '../svg/sponsors/image 30.svg'
import italia from '../svg/sponsors/image 31.svg'

function Sponsors () {

    const sponsorsArray = [axon,jetstar, qantas,italia]

    return(
        <>
        <section className='w-[100vw] h-auto flex justify-center lg:-mt-[50px] -mt-[20px]'>
            <div className='xl:w-[1228px] lg:w-[800px] sm:w-[700px] h-[162px]  flex justify-center  items-center '>
                <img src={axon} alt="icon of various sponsors" className='md:h-[130px] md:w-[130px] h-[70px] w-[70px]' />
                <img src={jetstar} alt="icon of various sponsors" className='md:h-[110px] md:w-[172px] h-[70px] w-[70px]' />
                <img src={qantas} alt="icon of various sponsors" className='md:h-[32px] md:w-[162px] h-[70px] w-[70px]' />
                <img src={italia} alt="icon of various sponsors" className='md:h-[21px] md:w-[130px] h-[70px] w-[70px]' />
            </div>
        </section>
        </>
    )

}
export default Sponsors