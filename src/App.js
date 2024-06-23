import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import { useSelector, useDispatch } from 'react-redux';
import {removeForm} from '../src/components/redux/slices/formSlice'
import DisplayForm from './components/DisplayForm/DisplayForm';

function App() {
  const [displayForm, setDisplayForm] = useState(false)
  const [form, setForm] = useState()
  
  const formData = useSelector(state => state.form)
  const { formDataList } = formData
  const dispatch = useDispatch()

  const handleClick = (index) => {
    setDisplayForm(true)
    setForm(formDataList[index])
  }

  const handleDelete = (index) => {
    dispatch(removeForm(index))
  }

  return (
    <div className="App">
      <InputForm />
      <p>Created Forms: </p>
      {formDataList && 
        formDataList.map((form, index) => (
          <div className='formRow'>
            <span>{form.title}</span>
            <button onClick={() => handleClick(index)} className='icons'>👁️</button>
            <button onClick={() => handleDelete(index)} className='icons'>🗑️</button>
          </div>)
        )
      }
      {displayForm && 
        <DisplayForm displayForm={displayForm} setDisplayForm={setDisplayForm} formDetails={form} /> 
      }
    </div>
  );
}

export default App;
