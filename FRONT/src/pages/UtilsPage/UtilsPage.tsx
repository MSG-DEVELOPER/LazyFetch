import SelectedUtilsComponents from "../../components/UtilsComponents/SelectedUtilsComponents/SelectedUtilsComponents";
import HeaderUtilsComponents from "../../components/UtilsComponents/HeaderUtilsComponents/HeaderUtilsComponents";
import Engine from "../../components/UtilsComponents/Engine/Engine";
import { Container } from "./UtilsPage.style";

function UtilsPage() {
  
  return (

    <Container style={{border:"5px dotted red"}}>
        <HeaderUtilsComponents/>
     <section style={{border:"solid 5px black"}}> 
         <div className="selected" style={{border:"5px solid yellow"}}> 
             <SelectedUtilsComponents/>
         </div>
         <div style={{border:"5px solid yellow"}} className="utils">
           
            <Engine/>
         </div>
     </section>
    
    </Container>
  )
}

export default UtilsPage