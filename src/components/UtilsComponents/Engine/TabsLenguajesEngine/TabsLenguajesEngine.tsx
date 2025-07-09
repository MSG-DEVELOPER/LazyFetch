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
          onClick={() => handleTabChange("tsx")}
          className={activeTab === "cdn" ? "active" : ""}
        >
          CDN
        </button>
      </div>

      <div className="content">
        {activeTab === "js" && <p>Contenido para JavaScript</p>}
        {activeTab === "react" && <p>Contenido para React</p>}
        {activeTab === "tsx" && <p>Contenido para TSX</p>}
      </div>
    </Wrapper>
  )
}

export default TabsLenguajesEngine
