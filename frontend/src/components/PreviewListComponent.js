import React from 'react';
import PreviewProductComponent from './PreviewProductComponent'; // Import the component
import UpdateProductModal from './UpdateProductModal';
import { useState } from "react";
import DeleteProductModal from './DeleteProductModal';

function PreviewListComponent({ data}) {

  const [showModalU, setShowModalU] = useState(false);
  const [showModalD, setShowModalD] = useState(false);

  const handleOpenModalU = () => {
    setShowModalU(true);
  };

  const handleCloseModalU = () => {
    setShowModalU(false);
  };

  const handleOpenModalD = () => {
    setShowModalD(true);
  };

  const handleCloseModalD = () => {
    setShowModalD(false);
  };

  return (
    <div>
      <h3>Data List</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <PreviewProductComponent product={item} />
            <button onClick={handleOpenModalU}>Update Product</button>
            <UpdateProductModal showModal={showModalU} onClose={handleCloseModalU} item={item} />
            <button onClick={handleOpenModalD}>Delete Product</button>
            <DeleteProductModal showModal={showModalD} onClose={handleCloseModalD} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviewListComponent;
