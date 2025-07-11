import MakeButtonJsTabEngine from "./MakeButtonJsTabEngine/MakeButtonJsTabEngine";
import ScriptJsTabEngine from "./ScriptJsTabEngine/ScriptJsTabEngine";
import FunctionJsTabEngine from "./FunctionJsTabEngine/FunctionJsTabEngine";

import { Container } from "./JsTabEngine.style";

function JsTabEngine() {
  return (
    <Container >
      <section ><ScriptJsTabEngine/></section>
      <section>
        
        <MakeButtonJsTabEngine/>

      </section>
      <section >
        <FunctionJsTabEngine/>
      </section>
    </Container>
  );
}

export default JsTabEngine;
