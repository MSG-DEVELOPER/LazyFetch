import { SidebarProvider } from "./context/SidebarContext";
import { NavbarSharedComponents } from "./components/SharedComponents/NavbarSharedComponents/NavbarSharedComponents";
import { AppRoutes } from "./routes/AppRoutes";
import FooterSharedComponents from "./components/SharedComponents/FooterSharedComponents/FooterSharedComponents";
import "./App.css";

function App() {
  return (
    <>
      <SidebarProvider>
        <NavbarSharedComponents />
        <AppRoutes />
        <FooterSharedComponents/>
      </SidebarProvider>
    </>
  );
}

export default App;
