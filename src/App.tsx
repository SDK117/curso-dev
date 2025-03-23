import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {

  const [count, setCount] = useState(0)
  // const [name, setname] = useState('Ulises')


  const countMore = () => {
    setCount(count + 1)
  }
  // const changeName = () => {
  //   setname('Jesus')
  // }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      {/* <p>Name is {name}</p>
      <Button label="Change name" parentMethod={changeName} /> */}
    </>
  )
}

export default App
