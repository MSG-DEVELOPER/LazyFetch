// FeaturesHomeComponents.jsx
import { Section, Heading, DivStyle, Card } from "./FeaturesHomeComponents.style";
import { featuresData } from "./featuresData";

function FeaturesHomeComponents() {
  return (
    <Section >
      <Heading>WHY LAZYFETCH <span className="highligth">?</span></Heading>
      <DivStyle>
        {featuresData.map((feature) => (
          <Card key={feature.id}>
            <img src={feature.icon} alt={feature.title} />
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </Card>
        ))}
      </DivStyle>
    </Section>
  );
}

export default FeaturesHomeComponents;
