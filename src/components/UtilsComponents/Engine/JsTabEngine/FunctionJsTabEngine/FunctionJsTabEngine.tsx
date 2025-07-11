import { useParams } from "react-router-dom";
import { useState } from "react";
import { endpointsData } from "../../../../CoreComponents/CardEndpointListComponents/Card.data";
import { Wrapper, CodeBox, CopyIcon } from "./FunctionJsTabEngine.style";

function FunctionJsTabEngine() {
  const { id } = useParams();
  const selectedCard = endpointsData.find((item) => String(item.id) === id);

const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!selectedCard) {
    return <p>❌ No se encontró el endpoint.</p>;
  }

  const fullUrl = `${selectedCard.baseUrl}${selectedCard.endpoint}`;

  const htmlBlock = `

<div id="lazyfetch-result">
  <p>Loading...</p>
</div>
`.trim();

  const scriptBlock = `
<script>
  function fetchChuckNorris() {
    fetch("${fullUrl}")
      .then(response => response.json())
      .then(data => {
        document.querySelector("#lazyfetch-result p").innerText = data.value;
        console.log("Fetched data:", data);
      })
      .catch(error => {
        document.querySelector("#lazyfetch-result p").innerText = "⚠️ Something went wrong!";
        console.error("Error fetching data:", error);
      });
  }
</script>
`.trim();


  function handleCopy(code:string, index:number) {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }

  return (
    <Wrapper>
      <h3>Paste this where you want to display the result</h3>
      <CodeBox>
        <code>{htmlBlock}</code>
        <CopyIcon onClick={() => handleCopy(htmlBlock, 0)}>📋</CopyIcon>
      </CodeBox>
      {copiedIndex === 0 && <p className="copied-message">📋 Copied to clipboard!</p>}

      <h3 style={{ marginTop: "2rem" }}>Script to fetch data</h3>
      <CodeBox>
        <code>{scriptBlock}</code>
        <CopyIcon onClick={() => handleCopy(scriptBlock, 1)}>📋</CopyIcon>
      </CodeBox>
      {copiedIndex === 1 && <p className="copied-message">📋 Copied to clipboard!</p>}
    </Wrapper>
  );
}

export default FunctionJsTabEngine;
