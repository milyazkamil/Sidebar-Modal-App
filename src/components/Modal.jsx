import { RiCloseFill } from 'react-icons/ri';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, toggleModal } = useGlobalContext();
  return (
    <section className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <div className="close-container">
          <RiCloseFill className="close-modal" onClick={toggleModal} />
        </div>
        <div className="modal-info">
          <p>Modal Content</p>
        </div>
      </div>
    </section>
  )
}
export default Modal;