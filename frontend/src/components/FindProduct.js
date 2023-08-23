import React, { useState } from 'react';
import PreviewListComponent from './PreviewListComponent';

function FindProduct() {
  const [pName, setProductName] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    setProductName(inputValue);
    try {
      const response = await fetch(`http://localhost:5000/products/${inputValue}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Product Search</h2>
      <form>
        <label>
          Product Name:
          <input
            type="text"
            value={pName}
            onChange={handleInputChange}
            placeholder="Enter product name"
          />
        </label>
      </form>
      {searchResults.length > 0 && <PreviewListComponent data={searchResults} />}
    </div>
  );
}

export default FindProduct;
