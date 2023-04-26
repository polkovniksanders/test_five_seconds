import React from "react"
import styles from "./Start.module.scss"

const Play = ({isActive, setIsActive}) => {

  const handleSwitch = () => {
    setIsActive(!isActive)
  }

  return <div
    onClick={() => handleSwitch()}
    className={isActive ? 'button' : 'button paused'}
  />

}



export default Play
