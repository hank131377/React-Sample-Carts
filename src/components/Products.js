import { useState, useContext } from 'react'
import CartContext from '../CartContext'
import productsData from './../assets/productsData'

const Products = () => {
  const [state, dispatch] = useContext(CartContext)
  return (
    <div className="row row-cols-3 g-3">
      {productsData.map((prod, i) => {
        return (
          <div className="col" key={prod.id}>
            <div className="card">
              <img src={prod.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">
                  {prod.title}
                  <span className="float-end">NT${prod.price}</span>
                </h6>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => {
                    dispatch({
                      type: 'ADD_TO_CARD',
                      payload: {
                        ...prod,
                        qty: 1,
                      },
                    })
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
