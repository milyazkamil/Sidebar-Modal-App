import { RiCloseFill } from 'react-icons/ri';
import { useGlobalContext } from "./context";
import avatar from "../assets/images/avatar.png";

const SidebarHeader = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <header className="sidebar-header">
      <img src={avatar} className='avatar' alt="avatar photo" />
      <RiCloseFill className="close-sidebar" onClick={toggleSidebar} />
    </header>
  )
}
export default SidebarHeader;