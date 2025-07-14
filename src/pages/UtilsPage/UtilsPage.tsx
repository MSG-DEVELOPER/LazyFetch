import SelectedUtilsComponents from "../../components/UtilsComponents/SelectedUtilsComponents/SelectedUtilsComponents";
import HeaderUtilsComponents from "../../components/UtilsComponents/HeaderUtilsComponents/HeaderUtilsComponents";
import TabsLenguajesEngine from "../../components/UtilsComponents/Engine/TabsLenguajesEngine/TabsLenguajesEngine";
import { Container } from "./UtilsPage.style";

function UtilsPage() {
  
  return (

    <Container >
        <HeaderUtilsComponents/>
     <section > 
         <div className="selected"> 
             <SelectedUtilsComponents/>
         </div>
         <div  className="utils">
           
            <TabsLenguajesEngine/>
         </div>
     </section>
    
    </Container>
  )
}

export default UtilsPage