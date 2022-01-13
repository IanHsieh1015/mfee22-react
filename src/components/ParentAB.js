import ChildA from './ChildA'
import ChildB from './ChildB'
import { useState } from 'react'

function ParentAB(props) {
  const [data, setData] = useState('')
  return (
    <>
      <h2>Child A</h2>
      <ChildA setData={setData} />
      <h2>Child B</h2>
      <ChildB data={data} />
    </>
  )
}

export default ParentAB
