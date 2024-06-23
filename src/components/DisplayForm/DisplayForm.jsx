import { Box, Modal } from '@mui/material'
import DropDownComp from './DropDownComp'
import './styles.css'
import RadioComp from './RadioComp'

const DisplayForm = ({ displayForm, setDisplayForm, formDetails}) => {

  return (
    <>
      <Modal open={displayForm} >
        <Box className='displayForm'>
          <div className='formFields'>
            <form>
              <h3 className='formTitle'>{formDetails.title}</h3>

              {formDetails.fields.map(inputField => {
                if(inputField.type!=='dropdown' && inputField.type != 'radio') {
                  return (
                    Array.from({ length: inputField.count }).map((_, index) => (
                      inputField.data.map(item => (
                        <div key={index} className='formField'>
                        <label>{item.fieldName}: </label>
                        <input type={inputField.type} />
                      </div>
                      ))
                    ))
                  )
                } else if(inputField.type === 'dropdown') {
                  return (
                    Array.from({ length: inputField.count }).map((_, index) => (
                      <DropDownComp dropdownObj = {inputField.data[index]} />
                    )))
                } else {
                  return (
                    Array.from({ length: inputField.count }).map((_, index) => (
                      <RadioComp radioObj = {inputField.data[index]} />
                  )))
                }
              })}
              <input type='submit' className='formField' />
            </form>
          </div>
          <button onClick={() => setDisplayForm(false)} className='closeButton'>X</button>
        </Box>
      </Modal>
    </>
  )
}

export default DisplayForm