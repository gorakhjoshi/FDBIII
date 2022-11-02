import { useState } from 'react'

const MultipleState = () => {
  
  const [name, setName] = useState('Ram')
  const [age, setAge] = useState(32)
  const [message, setMessage] = useState('Hello Ram')

  const changeMessage = () => {
    setMessage('Message Changed')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default MultipleState
