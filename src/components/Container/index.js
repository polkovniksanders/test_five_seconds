import React from "react"

import styles from "./Container.module.scss"

const Container = ({className, children}) => {

  return (
    <div className={className ? className + styles.container : styles.container}>
      {children}
    </div>
  )
}

export default Container
