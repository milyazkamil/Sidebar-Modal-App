import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen === false ? true : false);
  };

  const toggleModal = () => {
    setIsModalOpen(isModalOpen === true ? false : true);
  };

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, isModalOpen, setIsSidebarOpen, setIsModalOpen, toggleSidebar, toggleModal }}>
      {children}
    </GlobalContext.Provider>
  )
};
export default AppContext;

export const useGlobalContext = () => useContext(GlobalContext);
