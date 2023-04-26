import React from "react"

/**
 * Функция отображения заголовка на странице
 * @param text {string} принимает строку и отображает ее
 * @returns {JSX.Element}
 * @constructor
 */
const Title = ({text}) => {
  console.log(text)

  const _x = {
    transform: 'rotate(90deg)',
    margin: 0,
  }

  return (
    <div style={_x}>
      <h4 >
        {text || ''}
      </h4>
    </div>
  )
}

export default Title
