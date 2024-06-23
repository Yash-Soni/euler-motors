import { useForm } from 'react-hook-form'
import { Box, Button, Modal } from '@mui/material'
import { useReducer, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle, addField, addForm } from '../redux/slices/formSlice'
import './styles.css'
import BasicDetails from './BasicDetails'
import Options from './Options'

export const Actions = {
	SetDropdowns: 'setDropdowns',
	SetTextFields: 'setTextFields',
	SetTextAreas: 'setTextAreas',
	SetSwitches: 'setSwitches',
	SetRadios: 'setRadios',
	RESET: 'reset'
}

const initialState = { 
  dropdownCount: '', 
  textFieldCount: '', 
  textAreaCount: '', 
  switchCount: '', 
  radioCount: '', 
}

function reducer(state, action) {
  switch(action.type) {
    case Actions.SetDropdowns:
      return {...state, dropdownCount: action.payload}
    
    case Actions.SetTextFields:
      return {...state, textFieldCount: action.payload}

    case Actions.SetTextAreas:
      return {...state, textAreaCount: action.payload}
    
    case Actions.SetSwitches:
      return {...state, switchCount: action.payload}
    
    case Actions.SetRadios:
      return {...state, radioCount: action.payload}

    case Actions.RESET:
      return initialState
    
    default:
      break
  }
}

const InputForm = () => {
  const [ openForm, setOpenForm ] = useState(false)
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const [dropdownDetails, setDropdownDetails] = useState([])
  const [textFieldDetails, setTextFieldDetails] = useState([])
  const [textAreaDetails, setTextAreaDetails] = useState([])
  const [switchDetails, setSwitchDetails] = useState([])
  const [radioDetails, setRadioDetails] = useState([])

  const globalDispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()

  const resetStates = () => {
    setDropdownDetails([])
    setTextFieldDetails([])
    setTextAreaDetails([])
    setSwitchDetails([])
    setRadioDetails([])
  }

  const onSubmit= (data) => {
    if(data && typeof data==='object') {
      globalDispatch(setTitle(data.formTitle))
      const fieldData = [
        {type: 'dropdown', count: Number(data.dropdowns), data: dropdownDetails },
        {type: 'textField', count: Number(data.textFields), data: textFieldDetails },
        {type: 'textArea', count: Number(data.textAreas), data: textAreaDetails },
        {type: 'switch', count: Number(data.switches), data: switchDetails },
        {type: 'radio', count: Number(data.radios), data: radioDetails }
      ]
      fieldData.forEach(field => globalDispatch(addField(field)))
      const formData = {
        title: data.formTitle,
        fields: fieldData
      }
      globalDispatch(addForm(formData))
    }
    setOpenForm(false)
    reset()
    dispatch({type: Actions.RESET})
    resetStates()
  }

  const handleCountInput = (inputType, value) => {
    switch(inputType) {
      case 'dropdown': dispatch({type: Actions.SetDropdowns, payload: value})
      break
      case 'textField': dispatch({type: Actions.SetTextFields, payload: value})
      break
      case 'textArea': dispatch({type: Actions.SetTextAreas, payload: value})
      break
      case 'switch': dispatch({type: Actions.SetSwitches, payload: value})
      break
      case 'radio': dispatch({type: Actions.SetRadios, payload: value})
      break
    }
  }

  // const addFieldName = (newName, ) => {
  //   set
  // }

  return (
    <div>
      Input Form: 
      <Button onClick={() => setOpenForm(true)}>Create Form</Button>
      <Modal open={openForm}>
        <Box className='inputForm'>
          <div className='inputFields'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Form Title: </label>
              <input 
                type='text' 
                {...register("formTitle")} 
                placeholder='Enter Your Form Title'
              />

              <p>Number of Input Fields Required for your Form:</p>
              <div className='individualInput'>
                <label>Dropdowns:</label>
                <input 
                  type='number' 
                  // value={state.dropdownCount} onChange={updateDropdownCount} placeholder='0' 
                  className='inputBox'
                  {...register("dropdowns")}
                  placeholder='0'
                  onChange={e=>handleCountInput('dropdown', e.target.value)}
                />
                {state.dropdownCount > 0 && 
                  Array.from({ length: state.dropdownCount}).map((_, index) => {
                    console.log('index is: ', index);
                    return (
                    <div key={index}>
                      <BasicDetails details={dropdownDetails} setDetails={setDropdownDetails} index={index} />
                      <Options details={dropdownDetails} setDetails={setDropdownDetails} curIndex={index}/>
                    </div>
                  )})
                }
              </div>

              <div className='individualInput'>
                <label>TextFields:</label>
                <input 
                  type='number' 
                  // value={state.textFieldCount} onChange={updateTextFieldCount} placeholder='0' 
                  className='inputBox'
                  {...register("textFields")}
                  placeholder='0'
                  onChange={e=>handleCountInput('textField', e.target.value)}
                />
                {state.textFieldCount > 0 && 
                 Array.from({ length: state.textFieldCount}).map((_, index) => (
                  <BasicDetails details={textFieldDetails} setDetails={setTextFieldDetails} index={index} />
                ))
                }
              </div>

              <div className='individualInput'>
                <label>TextAreas:</label>
                <input 
                  type='number' 
                  // value={state.textAreaCount} onChange={updateTextAreaCount} placeholder='0' 
                  className='inputBox'
                  {...register("textAreas")}
                  placeholder='0'
                  onChange={e=>handleCountInput('textArea', e.target.value)}
                />
                {state.textAreaCount > 0 && 
                  Array.from({ length: state.textAreaCount}).map((_, index) => (
                    <BasicDetails details={textAreaDetails} setDetails={setTextAreaDetails} index={index} />
                  ))
                }
              </div>

              <div className='individualInput'>
                <label>Switches:</label>
                <input 
                  type='number' 
                  // value={state.switchCount} onChange={updateSwitchCount} placeholder='0' 
                  className='inputBox'
                  {...register("switches")}
                  placeholder='0'
                  onChange={e=>handleCountInput('switch', e.target.value)}
                />
                {state.switchCount > 0 &&
                Array.from({ length: state.switchCount}).map((_, index) => (
                  <BasicDetails details={switchDetails} setDetails={setSwitchDetails} index={index} />
                ))
                }
              </div>

              <div className='individualInput'>
                <label>Radio Buttons:</label>
                <input 
                  type='number' 
                  // value={state.radioCount} onChange={updateRadioCount} placeholder='0' 
                  className='inputBox'
                  {...register("radios")}
                  placeholder='0'
                  onChange={e=>handleCountInput('radio', e.target.value)}
                />
                {state.radioCount > 0 && 
                  Array.from({ length: state.radioCount}).map((_, index) => (
                    <div>
                      <BasicDetails details={radioDetails} setDetails={setRadioDetails} index={index} />
                      <Options details={radioDetails} setDetails={setRadioDetails} curIndex={index} />
                    </div>
                  ))
                }
              </div>

              <input type='submit' className='submitButton' />
            </form>
          </div>
          <button onClick={() => setOpenForm(false)} className='closeButton'>X</button>
        </Box>
      </Modal>
    </div>
  )
}

export default InputForm