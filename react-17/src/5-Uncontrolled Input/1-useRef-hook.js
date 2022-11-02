import React, { useRef, useEffect } from 'react'

const UseRefHook = () => {
    const refContainer = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
    useEffect(() => {
        refContainer.current.focus()
    })
  return (
    <>
    <form className = 'form' onSubmit = {handleSubmit}>
        <div>
            <input type="text" ref = {refContainer} />
            <button type="submit">Submit</button>
        </div>
    </form>
    </>
  )
}

export default UseRefHook
