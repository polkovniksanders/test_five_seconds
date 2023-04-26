import React from "react"

const Play = ({isActive, setIsActive}) => {

  const handleSwitch = () => {
    setIsActive(!isActive)
  }

  return <button
    onClick={() => handleSwitch()}
    className={isActive ? 'button' : 'button paused'}
  />

}

export default Play
