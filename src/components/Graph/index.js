import React from "react"
import { memo } from "react"
import {backgrounds} from "../../constants/colors"

const Graph = ({height}) => {

  const color = Math.floor(Math.random() * backgrounds.length)
  const isGraphHidden = +height <= 0.9

  const stylesGraph = {
    width: '2rem',
    margin: '.5rem 0',
    height: isGraphHidden ? 0 : height * 10 + 'px',
    background: backgrounds[color],
    border: isGraphHidden ? 'none' : '1px solid black',
    transition: 'all .5s ease',
  }

  return isGraphHidden ? null : <div style={stylesGraph}/>

}

export default memo(Graph)
