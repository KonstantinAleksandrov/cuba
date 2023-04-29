import {FC} from 'react'
import Item from "./Item";

const List: FC<{list: number[]}> = ({list}) => {
  return <>{list.map((item: number, key) => <Item key={String(item) + key}>{item}</Item>)}</>
}


export default List