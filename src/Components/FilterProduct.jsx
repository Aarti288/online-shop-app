import { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { toggleCategory, TOGGLE_BRAND, TOGGLE_AVAILABILITY, toggleBrand, toggleAvailability, toggleRange } from '../Redux/Actions/action';

export default function FilterProduct() {
    
   
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedAvailability, setSelectedAvailability] = useState(null);
    const selectedPriceRange = useSelector(state => state?.product?.selectedPriceRange);
    console.log("selectedPriceRange",selectedPriceRange)

    const [inputValue, setInputValue] = useState(selectedPriceRange?.min || 0);


   
  

    const styled = {
        filterContainer: {
            // padding: "10px",
            paddingTop:"20px",
            borderRadius: "4px",
        },
        section: {
            marginBottom: "20px",
        },
        sectionTitle: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
            marginLeft:"7px", 
        },
        sectionContent: {
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
            marginBottom:"10px",
            marginTop: "25px",

        },
        checkboxLabel: {
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
        },
        checkbox: {
            marginRight: "10px",
        },
        priceRange: {
            fontSize: "1rem",
            marginBottom: "10px",
        },
        innerfilterContainer:{
            padding:"0 10px 0 10px"
        }
    };

    const [categories] = useState(['Furniture', 'Lighting', 'Decoration', 'Bath & Shower', 'Curtains', 'Toys']);
    const [Brands]=useState(['Eche','kartel','boche bobels','polform']);
    const [Availability]=useState(['On Stock','Out of Stock']);


    const dispatch = useDispatch();
     
    const handleCategoryChange=(category)=>{
        setSelectedCategory(category === selectedCategory ? null : category);
        const isChecked = category === selectedCategory;
        console.log("isChecked in compo",isChecked)
        dispatch(toggleCategory(category,isChecked));
    }

    const handleBrandsChange=(brands)=>{
        setSelectedBrand(brands === selectedBrand ? null : brands);
        const isChecked=brands===selectedBrand;
        console.log("isChecked in compo",isChecked)
        dispatch(toggleBrand(brands,isChecked));

    }
    const handlePriceChange = (event) => {
        console.log("event is:",event.target.value)
       let range=parseInt(event.target.value);
       console.log("range is:",range)
       setInputValue(range);
        dispatch(toggleRange(range,true))
      };

    const handleAvailabilityChange=(Availability)=>{
        setSelectedAvailability(Availability===selectedAvailability ? null : Availability);
        const isChecked=Availability===selectedAvailability;
        dispatch(toggleAvailability(Availability,isChecked));

    }


    return (
        <div style={styled.filterContainer}>
            <div style={styled.innerfilterContainer}>
            <div style={styled.section}>
                <span style={styled.sectionTitle}>CATEGORIES</span>
                <div style={styled.sectionContent}>
                    {categories.map((category, index) => (
                        <label key={index} style={styled.checkboxLabel}>
                            <input type="checkbox" checked={category === selectedCategory} style={styled.checkbox} onChange={()=>handleCategoryChange(category)}/>
                            {category}
                        </label>
                    ))}
                </div>
            </div>

            <div style={styled.section}>
                <span style={styled.sectionTitle}>PRICE</span>
                <div style={styled.sectionContent}>
                <div>Price Range: $0 - ${inputValue}</div>
      <input
        type="range"
        min={0}
        max={800}
        value={inputValue}
        onChange={handlePriceChange}
        step={10}
      />
                </div>
            </div>

            <div style={styled.section}>
                <span style={styled.sectionTitle}>BRANDS</span>
                <div style={styled.sectionContent}>
                    {Brands.map((brands, index) => (
                        <label key={index} style={styled.checkboxLabel}>
                            <input type="checkbox"  checked={brands === selectedBrand} style={styled.checkbox} onChange={()=>handleBrandsChange(brands)} />
                            {brands}
                        </label>
                    ))}
                </div>
            </div>

            <div style={styled.section}>
                <span style={styled.sectionTitle}>AVAILABILITY</span>
                <div style={styled.sectionContent}>
                    {Availability.map((Availability, index) => (
                        <label key={index} style={styled.checkboxLabel}>
                            <input type="checkbox" checked={Availability === selectedAvailability} style={styled.checkbox} onChange={()=>handleAvailabilityChange(Availability)} />
                            {Availability}
                        </label>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}
