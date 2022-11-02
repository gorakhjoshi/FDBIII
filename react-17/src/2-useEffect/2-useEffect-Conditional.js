import { useState, useEffect } from 'react'

const UseEffectConditional = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('test')
    if (value >= 1) {
      document.title = `New Messages (${value})`
    }
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

export default UseEffectConditional
