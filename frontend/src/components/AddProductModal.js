import React, { useState } from 'react';
import './AddProductModal.css'; // Import the CSS file for the styles

function AddProductModal({ showModal, onClose }) {
  const [PName, setProductName] = useState('');
  const [PPrice, setProductPrice] = useState('');
  const [PDesc, setProductDescription] = useState('');


  const handleAddProduct = async () => {
    alert(`${PName} ${PPrice} ${PDesc}`);
    try {
        const response = await fetch('http://localhost:5000/addProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ PName, PPrice, PDesc }),
        });
  
        if (response.ok) {
          const data = response.json();
          console.log(response.status);
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
        <h2 className="modal-title">Add Product</h2>
        <form>
          {/* Form fields for product details */}
          <input
            type="text"
            value={PName}
            onChange={(e) => setProductName(e.target.value)}
            className="modal-input"
            placeholder="Product Name"
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
              onClick={handleAddProduct}
              className="modal-button"
            >
              Add
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

export default AddProductModal;
