import { DivStyle } from "./FeaturesHomeComponents.style";
import { featuresData } from "./featuresData";

function FeaturesHomeComponents() {
  return (
    <DivStyle>
      {featuresData.map((feature) => (
        <div key={feature.id}>
          <img src={feature.icon} alt={feature.title} />
          <div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </DivStyle>
  );
}

export default FeaturesHomeComponents;
