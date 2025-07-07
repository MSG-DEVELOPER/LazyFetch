// CardEndpointListComponents.tsx

import {
  Card,
  CardImage,
  CardContent,
  ApiLink,
  Endpoint,
  Description,
  Example,
  CardIcons
} from "./CardEndpointListComponents.style";

interface Props {
  image: string;
  baseUrl: string;
  endpoint: string;
  description: string;
  exampleData: string;
  requiresApiKey: boolean;
  hasParams: boolean;
}

function CardEndpointListComponents({
  image,
  baseUrl,
  endpoint,
  description,
  exampleData,
  requiresApiKey,
  hasParams,
}: Props) {
  return (
    <Card>
      <CardImage src={image} alt="Endpoint thumbnail" />
      <CardContent>
        <ApiLink href={baseUrl} target="_blank" rel="noopener noreferrer">
          {baseUrl}
        </ApiLink>
        <Description>{description}</Description>

        <Example>{exampleData}</Example>
        <Endpoint>{baseUrl + endpoint}</Endpoint>
        {(requiresApiKey || hasParams) && (
          <CardIcons>
            {requiresApiKey && <span title="Requires API Key">🔑</span>}
            {hasParams && <span title="Has Parameters">📎</span>}
          </CardIcons>
        )}
      </CardContent>
    </Card>
  );
}

export default CardEndpointListComponents;
