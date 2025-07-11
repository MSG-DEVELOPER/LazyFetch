import { useState } from "react";
import {
  Wrapper,
  PreviewButton,
  CopyButton,
} from "./MakeButtonJsTabEngine.style";

function MakeButtonJsTabEngine() {
  const [text, setText] = useState("Click me");
  const [bgColor, setBgColor] = useState("#3498db");
  const [padding, setPadding] = useState("10px 20px");
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);

  const [buttonId, setButtonId] = useState("button-fetch");
  const [allowCustomId, setAllowCustomId] = useState(false);

  const generatedCSS = `
#${buttonId} {
  background-color: ${bgColor};
  padding: ${padding};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
`;

  // ✅ Ahora el botón tiene el onClick incluido correctamente
  const generatedHTML = `<button id="${buttonId}" onclick="fetchChuckNorris()">${text}</button>`;

  function handleCopyCSS() {
    navigator.clipboard.writeText(generatedCSS);
    setCopiedCSS(true);
    setTimeout(() => setCopiedCSS(false), 2000);
  }

  function handleCopyHTML() {
    navigator.clipboard.writeText(generatedHTML);
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 2000);
  }

  function toggleCustomId() {
    setAllowCustomId(!allowCustomId);
  }

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

          <label>Button-ID:</label>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="text"
              value={buttonId}
              onChange={(e) => setButtonId(e.target.value)}
              disabled={!allowCustomId}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              style={{ cursor: "pointer" }}
              onClick={toggleCustomId}
              title={
                allowCustomId
                  ? " ⚠WARNING!!  ID is unlocked.  Only change it if you're sure! ⚠"
                  : " ⚠The ID has a default value. Only change it if you know what it is. ⚠"
              }
            >
              {allowCustomId ? (
                <img src="/iconUnlock.png" alt="Unlocked" />
              ) : (
                <img src="/iconLock.png" alt="Locked" />
              )}
            </button>
          </div>

          <hr />

          <p>Preview:</p>
          <PreviewButton id={buttonId} $padding={padding} $bgColor={bgColor}>
            {text}
          </PreviewButton>
        </form>
      </div>

      <div className="right">
        <h3>Copy & paste your CSS</h3>
        <pre>{generatedCSS}</pre>
        <CopyButton onClick={handleCopyCSS}>
          {copiedCSS ? "Copied!" : "Copy CSS"}
        </CopyButton>

        <h3 style={{ marginTop: "2rem" }}>Copy & paste your styled Button in the HTML</h3>
        <pre>{generatedHTML}</pre>
        <CopyButton onClick={handleCopyHTML}>
          {copiedHTML ? "Copied!" : "Copy HTML"}
        </CopyButton>
      </div>
    </Wrapper>
  );
}

export default MakeButtonJsTabEngine;
