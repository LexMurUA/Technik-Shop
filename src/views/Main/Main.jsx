import './Main.css'
import data from '../../data/data.json'
import { Product } from '../../components/Product/Product'
import { useAppContext } from '../../context/AppContext'
import { useState } from 'react'
import { Pagination } from '../../components/Pagination/Pagination'



export const Main = () => {
const { cart, perPage, currentPage } = useAppContext();


const lastIndex = currentPage * perPage;
const firstIndex = lastIndex - perPage; 

const perProducts = data.slice(firstIndex,lastIndex)




  return (
    <main>
      <section className="products">
        {perProducts.map((product) => (
          <Product
            {...product}
            key={product.id}
            isInCart={cart.some((item) => item.code === product.code)}
          />
        ))}
      </section>
      <Pagination />
    </main>
  );
}