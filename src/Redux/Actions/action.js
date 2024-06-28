// actions.js

export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const TOGGLE_BRAND = 'TOGGLE_BRAND';
export const TOGGLE_AVAILABILITY = 'TOGGLE_AVAILABILITY';
export const TOGGLE_PRICE_RANGE='TOGGLE_RANGE';

export const toggleCategory = (category,isChecked) => ({
  type: TOGGLE_CATEGORY,
  payload: {category,isChecked},
});

export const toggleBrand = (brand,isBrandChecked) => ({
  type: TOGGLE_BRAND,
  payload: {brand,isBrandChecked},
});

export const toggleAvailability = (Availability,isAvailabilityChecked) => ({
  type: TOGGLE_AVAILABILITY,
  payload: {Availability,isAvailabilityChecked},
});


export const toggleRange = (range,isRangeChecked) => ({
    type: TOGGLE_PRICE_RANGE,
    payload: {range,isRangeChecked},
  });
  