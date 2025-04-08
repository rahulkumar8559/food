import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [name,setName]=useState('')
    

    const Searchdata=(SearchValue)=>{

            if(SearchValue===""){
                setName(null);
            }
    
            const filterData=food_list.filter((items)=>items.name.toLowerCase().includes(SearchValue.toLowerCase()));
            setName(filterData);   
    
        }
    

    const addtocart = (itemId) => {

        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]:1 }))
        }else {
            setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]+1 }))
        }
    },

    removetocart=(itemId)=>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
    

    const getTotalCartAmount=()=>{

        let totalAmount=0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
                }
                
            }
            return totalAmount;
    }
    






    const contextValue = {
        food_list,
        removetocart,
        addtocart,
        cartItems,
        getTotalCartAmount,
        Searchdata,
        name,
        setName
        
    }
    return (

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider;