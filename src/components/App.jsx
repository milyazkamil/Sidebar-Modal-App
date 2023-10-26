import Modal from "./Modal";
import ShowModalBtn from "./ShowModalBtn";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";
import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  const { toggleSidebar } = useGlobalContext();
  return (
    <>
    <main className="main">
      <GiHamburgerMenu className="hamburger-menu" onClick={toggleSidebar} />
      <Modal /> 
      <ShowModalBtn />
      <Sidebar />
    </main>
    </>
  )
}
export default App;