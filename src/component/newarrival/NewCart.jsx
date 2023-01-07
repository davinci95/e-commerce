import React from 'react'
import Ndata from "./Ndata"

const NewCart = () => {
  return (
    <>
      <div className="content grid product">
            {Ndata.map((value, index) => {
                  return (
                        <div className="box" key={index}>
                              <div className="img">
                                    <img src={value.cover} alt="" />
                              </div>
                              <h4>{value.name}</h4>
                              <span>${value.price}</span>
                        </div>
                  )
            })}
      </div>
    </>
  )
}

export default NewCart