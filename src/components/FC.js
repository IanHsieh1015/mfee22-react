import { useState } from 'react'

// function App() App要大寫，可更改，如要修改要改export default App的App與檔名，三個要相同
function FC() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
