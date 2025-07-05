import { SidebarProvider } from "./context/SidebarContext";
import { NavbarSharedComponents } from "./components/SharedComponents/NavbarSharedComponents/NavbarSharedComponents";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <NavbarSharedComponents />
        <AppRoutes />
      </SidebarProvider>
    </>
  );
}

export default App;
