import { DivStyle, ContentWrapper } from "./GIFHomeComponents.style";

function GIFHomeComponents() {
  const handleDownload = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://lazy-fetch.vercel.app/lazyfetch.js"></script> 
  </head>
  <body>
    <button onclick="lazyFetch.render('Advice', '#lazyfetch-result p')">
      Click me
    </button>
    <div id="lazyfetch-result">
      <p></p>
    </div>
  </body>
</html>
    `.trim();

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "lazyfetch-demo.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <DivStyle>
      <h2>
        HOW IT <span className="highligth">WORKS</span>
      </h2>
      <ContentWrapper>
        <img src="/GifHome.gif" alt="Demo gif" />
        <button onClick={handleDownload}>📄 Get file to test</button>
      </ContentWrapper>
    </DivStyle>
  );
}

export default GIFHomeComponents;
