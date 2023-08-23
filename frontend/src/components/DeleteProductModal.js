import React, { useState } from 'react';

function DeleteProductModal({ showModal, onClose, item }) {
  const [PName, setProductName] = useState(item.name);
  const [PPrice, setProductPrice] = useState(item.price);
  const [PDesc, setProductDescription] = useState(item.description);


  const handleDeleteProduct = async () => {
    alert(`${PName} ${PPrice} ${PDesc} ${item._id}`);
    try {
        const response =  await fetch(`http://localhost:5000/products/delete/${item._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ PName, PPrice, PDesc }),
        });
  
        if (response.ok) {
          const data = response.json();
          console.log(data);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    // Close the modal after adding
    onClose();
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Update Product</h2>
        <form>
          <div className="modal-button-container">
            <button
              type="button"
              onClick={handleDeleteProduct}
              className="modal-button"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={onClose}
              className="modal-button modal-button-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeleteProductModal;