import React from "react"

/**
 * @param value
 * @returns {JSX.Element}
 * @constructor
 */
const Value = ({value}) => {
  return <p>{Math.round(value)}</p>
}

export default Value
