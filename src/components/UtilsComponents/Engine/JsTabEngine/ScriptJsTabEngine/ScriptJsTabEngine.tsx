import { useState } from "react";
import { Wrapper, CopyBox, CopyIcon } from "./ScriptJsTabEngine.style";

function ScriptJsTabEngine() {
  const scriptSrc = `<script src="https://lazy-fetch.vercel.app/lib/lazyfetch.js" type="module"></script>`;
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(scriptSrc).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <Wrapper>
      <h3>Copy & paste to link the library</h3>
      <CopyBox title="Click to copy">
        <code>{scriptSrc}</code>
        <CopyIcon  onClick={handleCopy}>📋</CopyIcon>
      </CopyBox>
      {copied && <p className="copied-message">Copied!</p>}
    </Wrapper>
  );
}

export default ScriptJsTabEngine;
