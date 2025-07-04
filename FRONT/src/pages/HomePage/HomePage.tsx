import GIFHomeComponents from "../../components/HomeComponents/GIFHomeComponents/GIFHomeComponents"
import FeaturesHome from "../../components/HomeComponents/FeaturesHomeComponents/FeaturesHomeComponents"
import { Div } from "./HomePage.style"


function HomePage() {
  return (
    <Div>
       <GIFHomeComponents/>
       <FeaturesHome/>
       

    </Div>
  )
}

export default HomePage