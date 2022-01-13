function ChildA(props) {
  const privateData = 'Child A Data'

  return (
    <>
      <button
        onClick={() => {
          props.setData(privateData)
        }}
      >
        送資料給子女元件-B
      </button>
    </>
  )
}

export default ChildA
