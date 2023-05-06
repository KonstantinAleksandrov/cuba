import './common.css';
import Header from './Components/Header'
import List from './Components/List'
import {useState, useEffect} from "react"

function App() {

  const [list, setList] = useState<number[]>([])
  const [number, setNumber] = useState<number>(0)
  useEffect(() => {
    console.log('after list effect')
    setList([...list, number])
  }, [number])

  console.log('render')
  return (
    <div className="App">
      <div className='wrapper'>
       <Header/>
        <List list={list}/>
        <input type="number" onChange={(e) => setNumber((prev) => {
          return Number(e.target.value)
        })} />
        <button onClick={() => setList([...list, number])}>Add</button>
        <button onClick={() => setList((prev) => prev.filter(f => f !== number))}>Remove</button>
      </div>
    </div>
  );
}

export default App;
