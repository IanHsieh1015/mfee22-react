import Child from './Child'
import { useState } from 'react'

function Parent(props) {
  const [data, setData] = useState('')
  return (
    <>
      <Child setData={setData} />
      <hr />
      {data}
    </>
  )
}

export default Parent
