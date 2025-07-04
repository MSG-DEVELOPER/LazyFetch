import { DivStyle  } from "./FeaturesHomeComponents.style"

function FeaturesHomeComponents() {
  return (
    <DivStyle>
 <div>
        <img src="featuresIconEasy.png" alt="Icono 1" />
        <div>
          <h2>Fácil de usar</h2>
          <p>Una línea de código y ya tienes tu respuesta.</p>
        </div>
      </div>
      <div>
        <img src="featuresIconAssembly.png" alt="Icono 2" />
        <div>
          <h2>100 % React</h2>
          <p>Hooks diseñados para integrarse sin fricción.</p>
        </div>
      </div>
      <div>
        <img src="featuresIconPopular.png" alt="Icono 3" />
        <div>
          <h2>API populares</h2>
          <p>Acceso inmediato a las APIs más usadas.</p>
        </div>
      </div>




    </DivStyle>
  )
}

export default FeaturesHomeComponents