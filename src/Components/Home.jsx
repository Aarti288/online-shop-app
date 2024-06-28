import FilterProduct from "./FilterProduct";
import ProductList from "./ProductList";
export default function Home()
{
    const styled={
        homeContainer:{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",   
            maxWidth: "1200px",
            maxHeight:"100%",
            width: "100%",

        },

       
    }
    return(
        <div style={styled.homeContainer}>
         
                    <FilterProduct />
               
                <ProductList />
        </div>
    )
}