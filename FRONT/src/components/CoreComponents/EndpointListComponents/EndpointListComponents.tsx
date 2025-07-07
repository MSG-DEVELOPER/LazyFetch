import { Wrapper, Header, Grid } from "./EndpointListComponents.style";
import { endpointsData } from "../CardEndpointListComponents/Card.data";
import CardEndpointListComponents from "../CardEndpointListComponents/CardEndpointListComponents";

function EndpointListComponents() {
  return (
    <Wrapper>
      <Header>
        <h1>SELECT ONE OF +100 ENDPOINTS</h1>
      </Header>

      <Grid>
        {endpointsData.map((endpoint) => (
          <CardEndpointListComponents
            key={endpoint.id}
            image={endpoint.image}
            baseUrl={endpoint.baseUrl}
            endpoint={endpoint.endpoint}
            description={endpoint.description}
            exampleData={endpoint.exampleData}
            requiresApiKey={endpoint.requiresApiKey}
            hasParams={endpoint.hasParams}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default EndpointListComponents;
