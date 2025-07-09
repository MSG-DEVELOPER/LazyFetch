import { Card } from "./CardEndpointListComponents.style";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  image: string;
  baseUrl: string;
  description: string;
  exampleData: string;
  requiresApiKey: boolean;
  hasParams: boolean;
}

function CardEndpointListComponents({
  id,
  image,
  baseUrl,
  description,
  exampleData,
  requiresApiKey,
  hasParams,
}: Props) {
  const showLazyfetchSelection = !requiresApiKey && !hasParams;

  return (
    <Link to={`/utils/${id}`} style={{ textDecoration: "none" }}>
      <Card>
        <a
          href={baseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          onClick={(e) => e.stopPropagation()}
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

        {showLazyfetchSelection && (
          <div
            className="icon"
            title="Fastest Fetch, don't need config"
           style={{backgroundColor:"#007ACC"}}
          >
            ⭐ LAZYFETCH SELECTION
          </div>
        )}
      </Card>
    </Link>
  );
}

export default CardEndpointListComponents;
