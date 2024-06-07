import { useState } from 'react'
import './App.css'
import EntryFields from './components/EntryFields/EntryFields'
import SelectFields from './components/SelectFields/SelectFields'


export default function App() {
  const [firstName, setfirstName] = useState('')

  const items = [1,2,3,4,5,6,7,8];

  return (
    <div className='App'>
      <div className='content'> 
        <SelectFields type = "Country" /> 
        <EntryFields type = "text" label = "First Name"/>
        <EntryFields type = "text" label = "Last Name" />
        <EntryFields type = "text" label = "Username" />
        <EntryFields type = "email" label="Email" />
        <EntryFields type = "password" label = "Password" />
        <EntryFields type = "tel" label = "Phone No." />
        <EntryFields type = "locationSelect" label = "Phone No." />
        <EntryFields type = "text" label = "Pan No." />
        <EntryFields type = "text" label = "Aadhaar No." />
      </div>
    </div>
  )
}


      
