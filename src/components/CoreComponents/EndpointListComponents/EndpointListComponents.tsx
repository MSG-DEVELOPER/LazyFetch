import { useState } from "react";
import { Wrapper, Header, Grid, HeaderTop } from "./EndpointListComponents.style";
import { endpointsData } from "../CardEndpointListComponents/Card.data";
import CardEndpointListComponents from "../CardEndpointListComponents/CardEndpointListComponents";
import SearchBar from "../SearchBarEndpointListComponents/SearchBarEndpointListComponents";

function EndpointListComponents() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEndpoints = endpointsData.filter((endpoint) =>
    endpoint.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Header>
        <HeaderTop>
          <h1>SELECT ONE OF +100 ENDPOINTS</h1>
          <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </HeaderTop>
      </Header>

      <Grid>
        {filteredEndpoints.map((endpoint) => (
          <CardEndpointListComponents
           id={String(endpoint.id)} 
            key={endpoint.id}
            image={endpoint.image}
            baseUrl={endpoint.baseUrl}
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
