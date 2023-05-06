import {FC, useEffect} from 'react'
const Item:FC<{children: number}> = ({children}) => {
  useEffect(() => {
    return () => {
      console.log('unmount component with ', children)
    }
  }, [])
  return <>{children}</>
}


export default Item