import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      {counter}
      <button onClick={increment}>add</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </div>
  )
}

export default App