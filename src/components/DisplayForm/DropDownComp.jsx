import './styles.css'

const DropDownComp = ({dropdownObj}) => {

  return (
    <div className='dropdownComp'>
      <label>{dropdownObj.fieldName}</label>
      <select>
        {dropdownObj.options.map((option, index) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDownComp