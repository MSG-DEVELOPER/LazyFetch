import GIFHomeComponents from "../../components/HomeComponents/GIFHomeComponents/GIFHomeComponents"
import FeaturesHomeComponents from "../../components/HomeComponents/FeaturesHomeComponents/FeaturesHomeComponents"
import FooterHomeComponents from "../../components/HomeComponents/FooterHomeComponents/FooterHomeComponents"
import HeadlineHomeComponent from "../../components/HomeComponents/HeadlineHomeComponents/HeadlineHomeComponents"
import SidebarHomeComponents from "../../components/HomeComponents/SidebarHomeComponents/SidebarHomeComponents"
import { Div } from "./HomePage.style"


function HomePage() {
  return (
<>
    <SidebarHomeComponents/>

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