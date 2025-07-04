// GIFHomeComponents.jsx

import { DivStyle, ContentWrapper } from "./GIFHomeComponents.style";

function GIFHomeComponents() {
  return (
    <DivStyle>
      <h2>HOW IT <span className="highligth">WORKS</span></h2>
      <ContentWrapper>
        <img src="/GifHome.gif" alt="Demo gif" />
        <button>TRY WITH NO CONDITIONS</button>
      </ContentWrapper>
    </DivStyle>
  );
}

export default GIFHomeComponents;
