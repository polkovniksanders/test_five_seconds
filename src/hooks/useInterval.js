import React, {useEffect, useMemo, useRef} from "react"

const useInterval = (shouldStartTick, callback, timeout) => {
  let interval =  useRef()

  useEffect(() => {
    return () => clearInterval(interval.current)
  }, [])

  useEffect(() => {
    if(shouldStartTick) {
      interval.current = setInterval(()=>
        callback()
      ,timeout)
    } else  {
      return clearInterval(interval.current)
    }
  }, [ shouldStartTick ])

}

export default useInterval
