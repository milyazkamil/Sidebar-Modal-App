import { social } from "../data";

const SidebarSocial = () => {
  return (
    <ul className="sidebar-social">
      {
        social.map((socialLinks) => {
          const { id, url, icon } = socialLinks;
          return (
            <li key={id}>
              <a href={url} target="_blank">
                {icon}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
export default SidebarSocial;