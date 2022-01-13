// import FC from './components/FC'
// import CC from './components/CC'
import Menu from './components/Menu'
import { data } from './data/index'
import { useState } from 'react'
// function App() App要大寫，可更改，如要修改要改export default App的App與檔名，三個要相同
function App() {
  const [total, setTotal] = useState(0)
  return (
    <>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
      {total}
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <div>{total > 10 && '訊息:最多只能買10件'}</div>
      <div>{total == 0 && '訊息:未選擇數量'}</div>
      <br />
      {data.map((v, i) => {
        return (
          <table border="1">
            <tr>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          </table>
        )
      })}
      {/* <Menu /> */}
    </>
  )
}

export default App
