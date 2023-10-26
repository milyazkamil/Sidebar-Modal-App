import { useGlobalContext } from "./context";

const ShowModalBtn = () => {
  const { toggleModal } = useGlobalContext();
  return (
    <button type="button" className="show-modal-btn" onClick={toggleModal}>Show Modal</button>
  )
}
export default ShowModalBtn;