import { Card } from "./CardEndpointListComponents.style";

interface Props {
  image: string;
  baseUrl: string;
  description: string;
  exampleData: string;
  requiresApiKey: boolean;
  hasParams: boolean;
}

function CardEndpointListComponents({
  image,
  baseUrl,
  description,
  exampleData,
  requiresApiKey,
  hasParams,
}: Props) {
  return (
    <Card>
      <a
        href={baseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        {baseUrl}
      </a>

      <img src={image} alt="Endpoint thumbnail" className="image" />

      <div className="description-box">
        <p className="description">
          {description} {exampleData}
        </p>
      </div>

      {(requiresApiKey || hasParams) && (
        <div className="icons">
          {requiresApiKey && (
            <span className="icon" title="API key required">
              🔑 API KEY
            </span>
          )}
          {hasParams && (
            <span className="icon" title="Params required">
              📎 PARAMS
            </span>
          )}
        </div>
      )}
    </Card>
  );
}

export default CardEndpointListComponents;
