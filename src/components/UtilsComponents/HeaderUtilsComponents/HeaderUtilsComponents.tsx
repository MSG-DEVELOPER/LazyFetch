import { Container } from "./HeaderUtilsComponents.style";

function HeaderUtilsComponents() {
  return (
    <Container>
      <h2>
        EXPERIENCE NOW THE <span className="highligth">REVOLUTION</span>
      </h2>

      <div className="tutorial-link">
        <h3>We have made a 20s tutorial for you</h3>
        <a href="https://example.com/tutorial" target="_blank" rel="noopener noreferrer">
          🔗
        </a>
      </div>
    </Container>
  );
}

export default HeaderUtilsComponents;
