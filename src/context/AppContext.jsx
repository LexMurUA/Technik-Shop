import { createContext, useContext } from "react"
import { useState, useEffect } from 'react'
import data from '../data/data.json'
const AppContext = createContext(null)

export const AppContextProvider = ({children})=>{
    //Майбутні файли
      const [cart, setCart] = useState(() => {
    const cartInLocal = localStorage.getItem('cart')
    return cartInLocal ? JSON.parse(cartInLocal) : []
  })
const perPage = 5;
const [currentPage, setCurrentPage] = useState(1);
const showNumPage = (page)=>setCurrentPage(page)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(code) {
    const product = cart.find(item => item.code === code)
    setCart(product
      ? cart.map(item => item.code === code ? { ...item, quantity: item.quantity + 1 } : item)
      : [...cart, {...data.find(item => item.code === code),quantity:1}]
    )
  }

  const deleteFromCart = (code)=>{
    setCart(cart.filter(item=>item.code != code))
  }

  const increaseQuantity = (code)=>setCart(cart.map(item=>item.code===code ? {...item,quantity:item.quantity+1}:item))

    const decreaseQuantity = (code)=>{
        console.log('fff')
    setCart(cart.map(item=>item.code===code ? item.quantity===1? cart.filter(item=>item.code != code): {...item, quantity:item.quantity-1}:item))
    // cart.map(item=>item.code===code ? {...item,quantity: item.quantity===1? deleteFromCart(code): {...item, quantity:item.quantity-1}}    :item)
  }

    return (
      <AppContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
          deleteFromCart,
          increaseQuantity,
          decreaseQuantity,
          perPage,
          currentPage,
          setCurrentPage,
          showNumPage,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export const useAppContext = ()=>{
    const context = useContext(AppContext)
    if (context===null) throw new Error('error of context using not within')
    return context
}

// =======================================
//   <StrictMode>
//     <AppContextProvider>
//       <App />
//     </AppContextProvider>
//   </StrictMode>,

// const {'виклик файлів'}= useAppContext()