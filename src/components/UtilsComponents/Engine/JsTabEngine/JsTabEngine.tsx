import MakeButtonJsTabEngine from "./MakeButtonJsTabEngine/MakeButtonJsTabEngine";
import ScriptJsTabEngine from "./ScriptJsTabEngine/ScriptJsTabEngine";

import { Container } from "./JsTabEngine.style";

function JsTabEngine() {
  return (
    <Container >
      <section ><ScriptJsTabEngine/></section>
      <section>
        
        <MakeButtonJsTabEngine/>

      </section>
      <section >pendiente</section>
    </Container>
  );
}

export default JsTabEngine;
