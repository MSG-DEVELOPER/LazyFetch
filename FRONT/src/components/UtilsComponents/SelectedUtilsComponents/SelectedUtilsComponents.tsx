import { useParams } from "react-router-dom";
import { endpointsData } from "../../CoreComponents/CardEndpointListComponents/Card.data";
import CardEndpointListComponents from "../../CoreComponents/CardEndpointListComponents/CardEndpointListComponents";

function SelectedUtilsComponents() {
  const { id } = useParams();
  const selectedCard = endpointsData.find((item) => String(item.id) === id);

   if (!selectedCard) {
    return <p>No se encontró ninguna card con el ID: {id}</p>;
  }

  return (
    <div>
     
      <CardEndpointListComponents {...selectedCard} />
    
    </div>
  );
}

export default SelectedUtilsComponents;
