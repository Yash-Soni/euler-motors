import { useState } from "react"

const Options = ({details, setDetails, curIndex}) => {
  const [options, setOptions] = useState([])

  const addInput = (e) => {
    e.preventDefault()
    setOptions([...options, ''])
  }

  const removeInput = (index) => {
    options.splice(index, 1)
  }

  const handleInput = (index, value) => {
    const newInputs = [...options]
    newInputs[index] = value
    setOptions(newInputs)
    const updatedDetails = [...details]
    if(updatedDetails[curIndex]) {
      updatedDetails[curIndex].options = newInputs
      setDetails(updatedDetails)
    }
  }

  return (
    <div>
      Add Options:
      {options.map((input, index) => (
        <div className="optionsInput">
          <input type='text' value={input} onChange={e => handleInput(index, e.target.value)} />
          <button onClick={() => removeInput(index)}>-</button>
        </div>)
      )}
      <button onClick={e => addInput(e)}>+</button>
    </div>
  )
}

export default Options