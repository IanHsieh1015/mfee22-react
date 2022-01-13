import React from 'react'

function ProductItem(props) {
  const { name, category, image, price, total, setTotal } = props

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#sec"
              onClick={() => {
                if (total - 1 >= 1) setTotal(total - 1)
              }}
            >
              -
            </a>
            <a href="#sec" className="border">
              {total}
            </a>
            <a
              href="#sec"
              onClick={() => {
                setTotal(total + 1)
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price} <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
