import React from 'react';
import ProductData from '../ProductList';
import {useSelector} from "react-redux";

export default function ProductList() {
  const filteredProducts = useSelector(state => state?.product?.filterProduct);
  console.log("state is:",filteredProducts)
  const productList=useSelector(state => state?.product?.products)
  const styled = {
    Container: {
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box',
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      flexWrap: 'wrap',
      gap: '10px', // Added gap to provide space between wrapped elements
    },
    selectContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'nowrap',
    },
    select: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box',
      width: 'auto',
      maxWidth: '150px', 
    },
    productList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px', 
    },
    productItem: {
      width: 'calc(33.33% - 20px)', 
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      textAlign: 'center', 
    },
    productName: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    productPrice: {
      color: '#888',
    },
    productImageContainer: {
      width: '100%', // Ensure image takes full width of the product item
      borderRadius: '4px',
    },
  };

  return (
    <div style={styled.Container}>
      <div style={styled.headerContainer}>
        <div>Showing {filteredProducts?.length} of {productList?.length} products</div>
        <div style={styled.selectContainer}>
          <span>Sort by:</span>
          <select id="dropdown" style={styled.select}>
            <option value="option1">Most Popular</option>
            <option value="option2">Average</option>
            <option value="option3">Rarely Available</option>
          </select>
        </div>
      </div>



      <div style={styled.productList}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styled.productItem}>
            <div style={styled.productImageContainer}>
            <img src={product.productImg}/>
            </div>
           
             <div>{product.categoryName}</div>
            <div style={styled.productName}>{product.productName}</div>
            <div style={styled.productPrice}>{product.prize}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
