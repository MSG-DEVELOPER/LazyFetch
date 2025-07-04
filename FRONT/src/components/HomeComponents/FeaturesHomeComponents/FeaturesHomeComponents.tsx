import { DivStyle } from "./FeaturesHomeComponents.style";

function FeaturesHomeComponents() {
  return (
    <DivStyle>
      <div>
        <img src="featuresIconEasy.png" alt="Icon 1" />
        <div>
          <h2>Easy to Use</h2>
          <p>One line of code and you have your answer.</p>
        </div>
      </div>
      <div>
        <img src="featuresIconAssembly.png" alt="Icon 2" />
        <div>
          <h2>100% React</h2>
          <p>Hooks designed to integrate seamlessly.</p>
        </div>
      </div>
      <div>
        <img src="featuresIconPopular.png" alt="Icon 3" />
        <div>
          <h2>Popular APIs</h2>
          <p>Instant access to the most used APIs.</p>
        </div>
      </div>
    </DivStyle>
  );
}

export default FeaturesHomeComponents;
