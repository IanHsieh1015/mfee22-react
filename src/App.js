import './App.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

import { useState } from 'react'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  // {
  //   id: 2,
  //   name: '白色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/ba3tvGm.jpg',
  //   price: 200,
  // },
  // {
  //   id: 3,
  //   name: '黑色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 450,
  // },
  // {
  //   id: 4,
  //   name: '黑色 T-shirt',
  //   category: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 450,
  // },
]

function App() {
  const [total, setTotal] = useState(1)

  return (
    <div className="card">
      <div className="row">
        <OrderList products={products} total={total} setTotal={setTotal} />
        <Summary count={total} amount={total * products[0].price} />
      </div>
    </div>
  )
}

export default App
