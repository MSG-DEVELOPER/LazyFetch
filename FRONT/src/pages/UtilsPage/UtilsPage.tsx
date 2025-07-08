import FunctionsUtilsComponents from "../../components/UtilsComponents/FunctionsUtilsComponents/FunctionsUtilsComponents";
import HeaderUtilsComponents from "../../components/UtilsComponents/HeaderUtilsComponents/HeaderUtilsComponents";
import { Container } from "./UtilsPage.style";

function UtilsPage() {
  
  return (

    <Container style={{border:"5px dotted red"}}>
        <HeaderUtilsComponents/>
     <section style={{border:"solid 5px black"}}> 
         <div className="selected" style={{border:"5px solid yellow"}}> 
             <FunctionsUtilsComponents/>
         </div>
         <div style={{border:"5px solid yellow"}} className="utils">
            aqui viene el quit de la cuestion
         </div>
     </section>
    
    </Container>
  )
}

export default UtilsPage