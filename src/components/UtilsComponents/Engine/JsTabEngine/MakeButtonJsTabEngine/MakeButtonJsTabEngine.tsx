import { useState } from "react";
import { Wrapper } from "./MakeButtonJsTabEngine.style";
import { PreviewButton } from "./MakeButtonJsTabEngine.style";

function MakeButtonJsTabEngine() {
  const [text, setText] = useState("Click me");
  const [bgColor, setBgColor] = useState("#3498db");
  const [padding, setPadding] = useState("10px 20px");

  const generatedCSS = `
    background-color: ${bgColor};
    padding: ${padding};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  `;

  return (
    <Wrapper>
      <div className="left">
        <h3>Style your button</h3>
        <form>
          <label>Background Color:</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <label>Button Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label>Padding:</label>
          <input
            type="text"
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
          />

          <div>
            <hr />
          </div>

          <p>Preview:</p>
          <PreviewButton $padding={padding} $bgColor={bgColor}>
            {text}
          </PreviewButton>
        </form>
      </div>

      <div className="right">
        <h3>Copy & paste your CSS</h3>
        <pre>{generatedCSS}</pre>
      </div>
    </Wrapper>
  );
}

export default MakeButtonJsTabEngine;
