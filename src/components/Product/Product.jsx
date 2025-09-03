import { useState } from "react";
import "./Product.css";
import cartInImg from '../../images/cartIn.png'
import { useAppContext } from "../../context/AppContext";
export const Product = ({
  code,
  name,
  vendor,
  price,
  description,
  images,
 isInCart
 
}) => {
  const [mainImage, setmainImage] = useState(images[0]);
  const {addToCart,deleteFromCart,increaseQuantity,decreaseQuantity}=useAppContext()
  // const [cartIn,setCartIn]=useState(isInCart)
    //   const [cartIn,setCartIn]=useState(()=>{
    //   const inCart = localStorage.getItem('cart')
    //    return JSON.parse(inCart).find(item=>item.code===code) ? true:false
      
    // })
  
  return (
    <div className="product-view">
      <div className="product-slider">
        <div className="main-image">
          <img src={mainImage} alt="1" />
        </div>
        <div className="product-slider-buttons">
          {images.map((image, idx) => (
            <img
              src={image}
              alt={idx}
              key={idx}
              onClick={() => setmainImage(image)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <span>{name}</span>
        <span>{code}</span>
        <span>{vendor}</span>
        <span>{price}</span>
        <p>{description}</p>
      </div>
        {isInCart ? <img src={cartInImg} alt="incartexist" className="panelsimg" /> : <button onClick={() => addToCart(code)}>Додати в кошик</button> }
        {isInCart 
        ? <div className="product-pannel">
        
        <button onClick={()=>increaseQuantity(code)}>+</button>
        <button onClick={()=>decreaseQuantity(code)}>-</button>
        <button onClick={()=>deleteFromCart(code)}><i>X</i></button>
      </div> :null       }
      
    </div>
  );
};
