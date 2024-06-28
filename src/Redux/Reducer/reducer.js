// reducers.js

import { TOGGLE_CATEGORY, TOGGLE_BRAND, TOGGLE_AVAILABILITY,TOGGLE_PRICE_RANGE } from '../Actions/action';
import ProductData from '../../ProductList';

const initialState = {
  products: ProductData, // All products // Products after filtering
  selectedCategories: ['Furniture', 'Lighting', 'Decoration', 'Bath & Shower', 'Curtains', 'Toys'],
  selectedBrands: ['Eche','kartel','boche bobels','polform'],
  filterProduct:ProductData, 
  selectedPriceRange: { min: 0, max: 800 },
  selectedAvailability: ['On Stock','Out of Stock'],      //On Stock     Out of Stock
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CATEGORY:
  const { category, isChecked } = action.payload;
  const isSelected = state.selectedCategories.includes(category);
  const updatedCategories = isChecked
    ? [...state.selectedCategories, category]
    : state.selectedCategories.filter(cat => cat === category); 
    console.log("updatedCategories",updatedCategories)
  const filteredProductsByCategory = updatedCategories.length > 0
    ? state.products.filter(product => updatedCategories.includes(product.categoryName))
    : state.products;
    
  return {
    ...state,
    filterProduct: filteredProductsByCategory,
};


case TOGGLE_BRAND:
  const { brand, isBrandChecked } = action.payload;
  console.log("isChecked is:",isBrandChecked)
  const updatedBrands = isBrandChecked
    ? [...state.selectedBrands, brand] 
    : state.selectedBrands.filter(b => b === brand); 
   console.log("updatedBrands",updatedBrands)
   const filteredProductsByBrands = updatedBrands.length > 0 && !isBrandChecked
   ? state.products.filter(product => updatedBrands.includes(product.Brands)) 
   : state.products;
  return {
    ...state,
    filterProduct: filteredProductsByBrands,
  };

 case TOGGLE_AVAILABILITY:
    const { Availability, isAvailabilityChecked } = action.payload;

    const updatedAvailability = isAvailabilityChecked
    ? [...state.selectedAvailability, Availability] 
    : state.selectedAvailability.filter(available => available === Availability); 
   console.log("updatedAvailability",updatedAvailability)
   const filteredProductsByAvailability = updatedAvailability.length > 0 && !isAvailabilityChecked
   ? state.products.filter(product => updatedAvailability.includes(product.Availability)) 
   : state.products;

   console.log("available product is:",filteredProductsByAvailability)
  return {
    ...state,
    filterProduct: filteredProductsByAvailability,
  };


  case TOGGLE_PRICE_RANGE:
      const { range, isRangeChecked } = action.payload;
      console.log("range is in reducer:",range);
      console.log("isRangeChecked",isRangeChecked)


      const filteredProductsByPrice = isRangeChecked
        ? state.products.filter(product => parseFloat(product.prize.slice(1)) < range)
        : state.products; // If not checked, show all products

      return {
        ...state,
        filterProduct: filteredProductsByPrice,
      };
     

 default:
         return state;
  }
};


export default productReducer;
