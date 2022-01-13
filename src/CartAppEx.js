import { useState } from 'react'

function App() {
  const [counts, setCounts] = useState([1, 1, 1, 1])

  const [product, setProduct] = useState({
    name: 'iphone',
    price: 15000,
    stock: 5,
  })

  return (
    <>
      <button
        onClick={() => {
          //1. 從原本的狀態拷貝一份出來
          const newCounts = [...counts]
          //2. 在拷貝出來的陣列或物件上作更動
          newCounts[0] = newCounts[0] + 1
          //3. 將更動完的陣列或物件設定回原本狀態
          setCounts(newCounts)
        }}
      >
        +
      </button>
      {counts[0]}
      <button
        onClick={() => {
          //1. 從原本的狀態拷貝一份出來
          const newCounts = [...counts]
          //2. 在拷貝出來的狀態上作更動
          newCounts[0] = newCounts[0] - 1
          //3. 將更動完的陣列或物件設定回原本狀態
          setCounts(newCounts)
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          const newProduct = { ...product }
          newProduct.price = 20000
          setProduct(newProduct)
        }}
      >
        Change price to 20000
      </button>
    </>
  )
}

export default App
