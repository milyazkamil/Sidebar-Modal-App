import { links } from "../data";

const SidebarButtons = () => {
  return (
    <ul className="sidebar-buttons">
      {
        links.map((link) => {
          const {id, text, icon} = link;
          return (
            <li key={id}>
              <button type="button">
                {icon} {text}
              </button>
            </li>
          )
        })
      }
    </ul>
  )
}
export default SidebarButtons;