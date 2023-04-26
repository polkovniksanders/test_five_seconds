import React, { useEffect, useState } from "react"
import axios from "axios"

import useInterval from "../../hooks/useInterval"
import {URL, REQUEST_TIMEOUT} from "../../constants/settings"


const ChartPage = (props) => {
  const [ rawUsers, setRawUsers ] = useState("")
  const [ users, setUsers ] = useState([])
  /**
     * получили данные из файла
     * @returns {Promise<void>}
     */
  const get = async () => {
    axios.get(URL)
      .then((response) => {
        splitName(response.data) // не работает потому что стеqт асинхронныq
      })
      .catch((error) => {
        console.log()
      })
      .finally(() => {
        console.log()
      })
  }
  /*    useEffect(() => {
        get().then(()=>splitName())
       }, [])*/

  useInterval(get, REQUEST_TIMEOUT)

  /**
     * Преобразовали данные из файла в нормальные
     */



  const splitName = (items) => {
    let users = []

    items
      ?.split("\n") //делаем массив из строки по /n
      ?.filter((elem) => !!elem) // исключает пустые элементы null из массива и каждую пару прогоняем по пробелам
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

  console.log("raw", rawUsers)
  console.log("user", users)


  return (
    <div>
      <div>{users.map((u, index) =>
        <div key={index}>
          <div>key {index}</div>
          <div>u.name {u.name}</div>
          <div>u.value {u.value}</div>
        </div>)}
      </div>
    </div>
  )
}


export default ChartPage
