
import {
  Container,
  Section,
  Title,
  SubTitle,
  Text,
  CodeBlock,
  List,
} from "./AboutTechPage.style";

const codeSample = `// config inside lazyfetch.js
const config = {
  Chuck: { url: "https://api.chucknorris.io/jokes/random", path: "value" },
  Advice: { url: "https://api.adviceslip.com/advice", path: "slip.advice" },
  // …other endpoints
};

// usage in browser
<script src="https://lazy-fetch.vercel.app/lazyfetch.js"></script>
<button onclick="lazyFetch.render('Advice', '#result')">Get Advice</button>
<div id="result"></div>`;

function AboutTechPage() {
  return (
    <Container>
      <Section>
        <Title>Technical Overview</Title>
        <Text>
          <strong>LazyFetch</strong> is a zero‑config, one‑line fetch utility for
          JavaScript/TypeScript (JSX/TSX). Its core goals:
        </Text>
        <List>
          <li><strong>Minimal setup:</strong> Just include the script, no boilerplate.</li>
          <li><strong>Configurable endpoints:</strong> Pre‑register popular APIs in a simple object.</li>
          <li><strong>Consistent API:</strong> Call <code>lazyFetch.render()</code> or <code>lazyFetch.generic()</code>.</li>
          <li><strong>Vanilla & Framework‑agnostic:</strong> Works in plain JS, TS, React, Vue, etc.</li>
        </List>
      </Section>

      <Section>
        <SubTitle>Core Architecture</SubTitle>
        <List>
          <li>
            <code>config</code> object holds endpoint definitions:
            <ul>
              <li><code>url</code>: the fetch URL</li>
              <li><code>path</code>: dot‑notation path to extract the value</li>
            </ul>
          </li>
          <li><code>generic(key)</code>: performs <code>fetch()</code>, parses JSON and extracts via <code>extractByPath()</code>.</li>
          <li><code>render(key, selector)</code>: finds a DOM node, calls <code>generic</code> and injects the result or error message.</li>
        </List>
        <CodeBlock>
          <pre>{codeSample}</pre>
        </CodeBlock>
      </Section>

      <Section>
        <SubTitle>Technologies & Tooling</SubTitle>
        <List>
          <li><strong>Vanilla ES Modules:</strong> No build step required for basic use.</li>
          <li><strong>TypeScript:</strong> Full typings for <code>generic</code> and <code>render</code> in TSX/JSX projects.</li>
          <li><strong>Vercel Hosting:</strong> Served via <code>lazy-fetch.vercel.app</code> CDN.</li>
          <li><strong>Styled‑Components:</strong> (For the demo site UI, optional in your app.)</li>
        </List>
      </Section>

      <Section>
        <SubTitle>Limitations</SubTitle>
        <List>
          <li>Only supports GET requests out‑of‑the‑box.</li>
          <li>No built‑in caching (you can wrap <code>generic()</code> if needed).</li>
          <li>Transforms only JSON responses (no XML/text parsing).</li>
          <li>Endpoint config must be known at build time or registered before use.</li>
        </List>
      </Section>

      <Section>
        <SubTitle>Roadmap & Future Enhancements</SubTitle>
        <List>
          <li>✅ Add POST/PUT/DELETE helper methods.</li>
          <li>✅ Client‑side caching and stale‑while‑revalidate support.</li>
          <li>🔜 Custom headers and authentication tokens.</li>
          <li>🔜 Retry logic with exponential backoff.</li>
          <li>🔜 Async hooks for React (e.g. <code>useLazyFetch</code>).</li>
        </List>
      </Section>

      <Section>
        <SubTitle>Get the Code</SubTitle>
        <Text>
          Clone or explore on GitHub:&nbsp;
          <a
            href="https://github.com/MSG-DEVELOPER/LazyFetch"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/MSG‑DEVELOPER/LazyFetch
          </a>
        </Text>
      </Section>
    </Container>
  );
}

export default AboutTechPage;
