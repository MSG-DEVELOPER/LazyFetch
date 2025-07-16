import { Container } from "./HeaderUtilsComponents.style";

function HeaderUtilsComponents() {
  return (
    <Container>
      <h2>
        EXPERIENCE NOW THE <span className="highligth">REVOLUTION</span>
      </h2>

      <div className="tutorial-link">
        <h3>Tutorial </h3>
        <a href="https://www.youtube.com/watch?v=7mubSyoKh8Y" target="_blank" rel="noopener noreferrer">
          <img src="/YT.png" alt="" />
        </a>
      </div>
    </Container>
  );
}

export default HeaderUtilsComponents;
