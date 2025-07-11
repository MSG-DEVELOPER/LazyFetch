import SelectedUtilsComponents from "../../components/UtilsComponents/SelectedUtilsComponents/SelectedUtilsComponents";
import HeaderUtilsComponents from "../../components/UtilsComponents/HeaderUtilsComponents/HeaderUtilsComponents";
import TabsLenguajesEngine from "../../components/UtilsComponents/Engine/TabsLenguajesEngine/TabsLenguajesEngine";
import { Container } from "./UtilsPage.style";

function UtilsPage() {
  
  return (

    <Container style={{border:"10px dotted red"}}>
        <HeaderUtilsComponents/>
     <section style={{border:"solid 5px black"}}> 
         <div className="selected" style={{border:"5px solid yellow"}}> 
             <SelectedUtilsComponents/>
         </div>
         <div style={{border:"5px solid yellow"}} className="utils">
           
            <TabsLenguajesEngine/>
         </div>
     </section>
    
    </Container>
  )
}

export default UtilsPage