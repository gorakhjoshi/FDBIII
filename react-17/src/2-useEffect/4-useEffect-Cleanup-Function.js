import { useState, useEffect } from 'react'

const UseEffectCleanupFunction = () => {
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    // return () => {
    //   console.log('cleanup')
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])

  console.log('Rendering your components')

  return (
    <>
      <h1>window</h1>
      <h2>{size}px</h2>
    </>
  )
}

export default UseEffectCleanupFunction
