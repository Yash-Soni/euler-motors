import { useState } from 'react'
import './styles.css'

const BasicDetails = ({details, setDetails, index}) => {
  const [ fieldName, setFieldName ] = useState()
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setDetails(prevArr => [...prevArr, {fieldName}])
    setIsDisabled(true)
  }

  return (
    <div>
      <label>Field Name:</label>
      <input 
        type='text' 
        value={fieldName} 
        onChange={(e) => setFieldName(e.target.value)} 
        placeholder='Enter your Field Name'
        className='inputField'
      />
      <button onClick={e => handleClick(e)} disabled={isDisabled} >Confirm</button>
    </div>
  )
}

export default BasicDetails