import { FooterStyle } from "./FooterShardeComponents.style";
import { Link } from "react-router-dom";

function FooterHomeComponents() {
  return (
    <FooterStyle>
      <Link to="/about-tech" aria-label="Technical Overview">
        <img src="/icon.svg" alt="How it was made" title="Technical Overview" />
      </Link>

      <a
        href="https://github.com/MSG-DEVELOPER/LazyFetch"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img
          src="/githubIcon.svg"
          alt="GitHub icon"
          title="Github repo project"
        />
      </a>

      <Link to="/about-me" aria-label="About me">
        {" "}
        <img src="/iconMe.svg" alt="people icon" title="About me & hire me" />
      </Link>

      <a
        href="/About/LICENSE.TXT"
        download
        title="Download info about product"
        aria-label="Download License"
      >
        <img src="/license.svg" alt="License icon" />
      </a>
    </FooterStyle>
  );
}

export default FooterHomeComponents;
