import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('test')
    document.title = `New Messages (${value})`
  })
  console.log('test outside')

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  )
}

export default UseEffectBasics
