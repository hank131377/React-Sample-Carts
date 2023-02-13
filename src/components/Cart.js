import { useContext, useEffect } from 'react'
import CartContext from '../CartContext'

const Cart = () => {
  const [state, dispatch] = useContext(CartContext)
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {state.cartList.map((prod, i) => {
            return (
              <tr key={prod.id}>
                <td>
                  <a
                    href="/#"
                    onClick={() => {
                      dispatch({
                        type: 'DELETE',
                        payload: prod,
                      })
                    }}
                  >
                    X
                  </a>
                </td>
                <td>
                  <img src={prod.img} className="table-image" alt="..." />
                </td>
                <td>
                  {prod.title}
                  <br />
                  <small className="text-muted">NT$ {prod.price}</small>
                </td>
                <td>
                  <select
                    name=""
                    className="form-select"
                    value={prod.qty}
                    onChange={(e) => {
                      const qty = parseInt(e.target.value)
                      dispatch({
                        type: 'CHANGE_CART_QTY',
                        payload: { ...prod, qty },
                      })
                    }}
                  >
                    {[...Array(20)].map((v, i) => {
                      return <option key={i + 1}>{i + 1}</option>
                    })}
                  </select>
                </td>
                <td className="text-end">NT$ {prod.price * prod.qty}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額 NT$
              {[...state.cartList].length > 0
                ? [...state.cartList]
                    .map((prod, i) => {
                      return prod.price * prod.qty
                    })
                    .reduce((a, b) => a + b)
                : ''}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
