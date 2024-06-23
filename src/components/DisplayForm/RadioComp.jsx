import { useState } from 'react'
import './styles.css'

const RadioComp = ({radioObj}) => {
  const [selectedOption, setSelectedOption] = useState('')
  const handleChange = (item) => {
    setSelectedOption(item)
  }
  return (
    <div>
        {radioObj.fieldName}: 
        {radioObj.options.map((item) => (
          <div className='radioOption' key={item}>
            <label>
              <input 
                type='radio' 
                name={item}
                value={item}
                checked={selectedOption===item}
                onChange={e => handleChange(e.target.value)}
              />
              {item}
            </label>
          </div>
        ))}
    </div>
  )
}

export default RadioComp