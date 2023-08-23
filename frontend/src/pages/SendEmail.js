import FindProduct from "../components/FindProduct";
import AddProductModal from "../components/AddProductModal";
import { useState } from "react";

const SendEmail = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };
    return (
      <div>
        <FindProduct/>
        <button onClick={handleOpenModal}>Add Product</button>
        <AddProductModal showModal={showModal} onClose={handleCloseModal} />
      </div>
    );
    
  };
  
export default SendEmail;