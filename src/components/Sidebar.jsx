import SidebarButtons from "./SidebarButtons";
import SidebarHeader from "./SidebarHeader";
import SidebarSocial from "./SidebarSocial";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <SidebarHeader />
      <div className="space-between">
        <SidebarButtons />
        <SidebarSocial />
      </div>
    </aside>
  )
}
export default Sidebar;