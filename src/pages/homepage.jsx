import BookingDetails from "../components/bookingdetails"
import Category from "../components/category"
import Destinations from "../components/destinations"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Sponsors from "../components/sponsors"
import Subscribe from "../components/susbcribe"
import Testimonials from "../components/testimonials"

function Homepage () {

    return(
        <>
          <Header/>
          <main>
                 <Hero/>
                 <Category/>
                 <Destinations/>
                 <BookingDetails/>
                 <Testimonials/>
                 <Sponsors/>
                 <Subscribe/>
                 <Footer/>
                 

          </main>
         
        
        </>
    )

}
export default Homepage