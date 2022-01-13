import { useEffect } from 'react'

function Child(props) {
  console.log(props)
  const privateData = 'Child Data'

  //   呈現即傳送(子女到父母傳遞)
  //   useEffect(() => {
  //     props.setData(privateData)
  //   }, [])

  //   return <></>

  //   透過button傳遞資料(子女到父母傳遞)
  return (
    <>
      <button
        onClick={() => {
          props.setData(privateData)
        }}
      >
        送資料給父母元件
      </button>
    </>
  )
}
export default Child
