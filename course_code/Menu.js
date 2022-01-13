// import FC from './FC'
// import CC from './CC'
import { useState } from 'react'
import './Menu.css'

function Menu() {
  // 狀態是記錄被點到的陣列索引值
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li key={i}>
              <a
                href="#/"
                className={selectedIndex === i ? 'active' : ''}
                onClick={() => {
                  setSelectedIndex(i)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
