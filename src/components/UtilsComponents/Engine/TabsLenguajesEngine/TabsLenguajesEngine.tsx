import JsTabEngine from "../JsTabEngine/JsTabEngine"
import  { useState } from "react"
import { Wrapper } from "./TabsLenguajesEngine.style"

function TabsLenguajesEngine() {
  const [activeTab, setActiveTab] = useState("js")

  function handleTabChange(tab : string) {
    setActiveTab(tab)
  }


  return (
    <Wrapper>
      <div className="tabs">
        <button
          onClick={() => handleTabChange("js")}
          className={activeTab === "js" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleTabChange("react")}
          className={activeTab === "react" ? "active" : ""}
        >
          React
        </button>
        <button
          onClick={() => handleTabChange("Typescript")}
          className={activeTab === "Typescript" ? "active" : ""}
        >
          Typescript
        </button>
          <button
          onClick={() => handleTabChange("tsx")}
          className={activeTab === "tsx" ? "active" : ""}
        >
          React + Typescript
        </button>
      </div>

      <div className="content">
        {activeTab === "js" && <JsTabEngine/>}
        {activeTab === "react" && <p>Contenido para React</p>}
        {activeTab === "Typescript" && <p>Contenido para TS</p>}
         {activeTab === "tsx" && <p>Contenido para TSx</p>}
      </div>
    </Wrapper>
  )
}

export default TabsLenguajesEngine
