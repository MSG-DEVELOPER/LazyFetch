import { DemoBox, ResultBox, CodeBlock } from "./DemoGifHomeComponets.style";

declare global {
  interface Window {
    lazyFetch: {
      render: (endpoint: string, selector: string) => void;
    };
  }
}

function DemoGifHomeComponents() {
  const handleDemo = () => {
    if (window.lazyFetch) {
      window.lazyFetch.render("Advice", "#lazyfetch-result p");
    }
  };

  const codeString = `
<script src="https://lazy-fetch.vercel.app/lib/lazyfetch.js" type="module"></script>

<button onclick="lazyFetch.render('Chuck', '#lazyfetch-result p')">Click me</button>
<div id="lazyfetch-result"><p></p></div>
  `.trim();

  return (
    <DemoBox>
      <h3>Prueba lazy-fetch ahora mismo 🚀</h3>

      <button onClick={handleDemo}>✨ Hacer fetch</button>

      <ResultBox id="lazyfetch-result">
        <p>← Aquí aparecerá tu resultado</p>
      </ResultBox>

      <CodeBlock>
        <pre>
          <code>{codeString}</code>
        </pre>
      </CodeBlock>
    </DemoBox>
  );
}

export default DemoGifHomeComponents;
