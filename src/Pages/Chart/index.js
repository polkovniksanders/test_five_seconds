import React, {useEffect, useMemo, useState} from "react"
import axios from "axios"

import useInterval from "../../hooks/useInterval"
import Title from "../../components/Title"
import Graph from "../../components/Graph"
import Play from "../../components/Buttons/Start"
import Value from "../../components/Value"
import {URL, REQUEST_TIMEOUT} from "../../constants/settings"
import styles from "./Chart.module.scss"

const ChartPage = () => {
  const [ users, setUsers ] = useState([])
  const [ isActive, setIsActive ] = useState(true)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    axios.get(URL)
      .then((response) => {
        usersHandler(response.data)
      })
      .catch((error) => {
        console.log()
      })
      .finally(() => {
        console.log()
      })
  }

  useInterval(isActive, getUsers, REQUEST_TIMEOUT)

  const usersHandler = (items) => {
    let users = []
    items
      ?.split("\n")
      ?.filter((elem) => !!elem)
      ?.forEach((item) => {
        const values = item.split(" ")
        if (values[0] && values[1]) {
          users.push({
            name: values[0],
            value: values[1],
          })
        }
      })
    setUsers(users)
  }

  return (
    <div style={{height: '100vh'}}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {users.map((u, index) =>
            <div className={styles.item} key={index}>
              <Value value={u.value}/>
              {u.value > 0 ? <Graph height={u.value}/> : null}
              <Title text={u.name}/>
            </div>,
          )}
        </div>
        <Play isActive={isActive} setIsActive={setIsActive}/>
      </div>
    </div>
  )
}

export default ChartPage
