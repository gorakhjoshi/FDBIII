import { useState, useEffect } from 'react'

const UseEffectDependency = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('useEffect 1')
    if (value >= 1) {
      document.title = `New Messages (${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('useEffect 2')
  }, [])
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

export default UseEffectDependency
