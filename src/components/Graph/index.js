import React from "react"
import { memo } from "react"

const Index = ({height}) => {

  const stylesGraph = {
    height: height * 10 + 'px',
    background: 'red',
    width: '2rem',
    border: '1px solid black',
    margin: '.5rem 0',
  }

  return +height === 0 ? null : <div style={stylesGraph}/>

}


export default memo(Index)
