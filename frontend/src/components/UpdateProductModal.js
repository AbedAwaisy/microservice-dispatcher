import React, { useState } from 'react';

function UpdateProductModal({ showModal, onClose, item }) {
  const [PName, setProductName] = useState(item.name);
  const [PPrice, setProductPrice] = useState(item.price);
  const [PDesc, setProductDescription] = useState(item.description);


  const handleUpdateProduct = async () => {
    alert(`${PName} ${PPrice} ${PDesc} ${item._id}`);
    try {
        const response = await fetch(`http://localhost:5000/updateProduct/${item._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ PName, PPrice, PDesc }),
        });
  
        if (response.ok) {
          const data = response.json();
          console.log(data.message);
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
          {/* Form fields for product details */}
          <input
            type="text"
            value={PName}
            onChange={(e) => setProductName(e.target.value)}
            className="modal-input"
          />
          <input
            type="number"
            value={PPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="modal-input"
            placeholder="Product Price"
          />
          <textarea
            value={PDesc}
            onChange={(e) => setProductDescription(e.target.value)}
            className="modal-textarea"
            placeholder="Product Description"
          />
          <div className="modal-button-container">
            <button
              type="button"
              onClick={handleUpdateProduct}
              className="modal-button"
            >
              Update
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

export default UpdateProductModal;
