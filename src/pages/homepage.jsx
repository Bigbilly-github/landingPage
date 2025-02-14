import Category from "../components/category"
import Destinations from "../components/destinations"
import Header from "../components/header"
import Hero from "../components/hero"

function Homepage () {

    return(
        <>
          <Header/>
          <main>
                 <Hero/>
                 <Category/>
                 <Destinations/>

          </main>
         
        
        </>
    )

}
export default Homepage