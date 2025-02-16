import BookingDetails from "../components/bookingdetails"
import Category from "../components/category"
import Destinations from "../components/destinations"
import Header from "../components/header"
import Hero from "../components/hero"
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
                 

          </main>
         
        
        </>
    )

}
export default Homepage