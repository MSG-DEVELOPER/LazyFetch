import GIFHomeComponents from "../../components/HomeComponents/GIFHomeComponents/GIFHomeComponents"
import FeaturesHomeComponents from "../../components/HomeComponents/FeaturesHomeComponents/FeaturesHomeComponents"
import FooterHomeComponents from "../../components/HomeComponents/FooterHomeComponents/FooterHomeComponents"
import HeadlineHomeComponent from "../../components/HomeComponents/HeadlineHomeComponents/HeadlineHomeComponents"
import { Div } from "./HomePage.style"


function HomePage() {
  return (
<>
    <HeadlineHomeComponent/>
    <Div>
       <GIFHomeComponents/>
       <FeaturesHomeComponents/>
    </Div>
    <FooterHomeComponents/>
</>
  )
}

export default HomePage