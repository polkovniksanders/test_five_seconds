import React from "react"
import { memo } from "react"

const Graph = ({height}) => {

  const styledGraph = {
    height: height * 10 + 'px',
    background: 'red',
    width: '2rem',
    border: '1px solid black',
    margin: '.5rem 0',
  }

  return <div style={styledGraph} />

}


export default memo(Graph)
