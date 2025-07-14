import JsTabEngine from "../JsTabEngine/JsTabEngine"
import UnderConstructionTabsLenguajeEngine from "./UnderConstructionTabsLenguajesEngine/UnderConstructionTabsLenguajeEngine"
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
        {activeTab === "react" && <UnderConstructionTabsLenguajeEngine/>}
        {activeTab === "Typescript" &&<UnderConstructionTabsLenguajeEngine/>}
         {activeTab === "tsx" && <UnderConstructionTabsLenguajeEngine/>}
      </div>
    </Wrapper>
  )
}

export default TabsLenguajesEngine
