import { SidebarContainer } from "./SidebarHomeComponents.style"
import { useSidebar } from "../../../context/SidebarContext"

function SidebarHomeComponents() {
 const { isSidebarOpen } = useSidebar();

  return (
    <SidebarContainer $open={isSidebarOpen}>
      <h2>Sidebar lateral</h2>
      {/* Aquí luego pondremos los formularios */}
    </SidebarContainer>
  );
}

export default SidebarHomeComponents