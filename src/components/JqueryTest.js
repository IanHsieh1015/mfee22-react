import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'

function JqueryTest(props) {
  const [total, setTotal] = useState(1)

  const titleEl = useRef(null)
  const buttonEl = useRef(null)

  // didMount
  useEffect(() => {
    // Jquery的程式碼需要寫在這裡，確保DOM元素已經出現在網頁上
    // console.log($('#title').text())
    // $('#one').on('click', () => alert('Hello, ' + $('#title').text()))

    // console.log($(titleEl.current).text())
    // $(buttonEl.current).on('click', () =>
    //   alert('Hello, ' + $(titleEl.current).text()))

    // console.log($(titleEl.current).text())

    // 移除原事件
    $(buttonEl.current).off('click')
    // 加入新事件
    // $(buttonEl.current).on('click', () =>
    //   alert('Hello, ' + $(titleEl.current).text() + ', total(state)=' + total))
    //   }, [total])

    $(buttonEl.current).on('click', () =>
      alert('Hello, ' + $(titleEl.current).text() + ', total(state)=' + total)
    )
  }, [total])
  return (
    <>
      {/* <h1 id="title">React</h1> */}
      {/* <button id="one">click me</button> */}

      <h1 ref={titleEl}>React</h1>
      <button ref={buttonEl}>click me</button>
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

export default JqueryTest
