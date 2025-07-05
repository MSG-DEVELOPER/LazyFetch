
import SidebarFormLogin from "./forms/SidebarFormLogin";
import SidebarFormRegister from "./forms/SidebarFormRegister";
import { SidebarContainer } from "./SidebarHomeComponents.style"
import { useSidebar } from "../../../context/SidebarContext"


function SidebarHomeComponents() {
 const { isSidebarOpen } = useSidebar();

  return (
    <SidebarContainer $open={isSidebarOpen}>
       <SidebarFormLogin />
      <SidebarFormRegister />
    </SidebarContainer>
  );
}

export default SidebarHomeComponents