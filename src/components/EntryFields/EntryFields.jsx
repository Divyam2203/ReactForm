import './EntryFields.css'
import { useState } from 'react';
import { CountrySelect,CitySelect, StateSelect } from 'react-country-state-city'
import "react-country-state-city/dist/react-country-state-city.css";

export default function EntryFields({type, label}){
  
  const [countryId,setCountryId] = useState(0)
  const [stateId,setStateId] = useState(0)


  if(type === "locationSelect"){
    return (
      <div className='loc-field'>
        <h6>Select Country</h6>
          <CountrySelect  onChange = {(e) => {setCountryId(e.id);}}/>
        <h6>Select State</h6>
          <StateSelect countryid = {countryId} onChange = {(e) => {setStateId(e.id);}} />
        <h6>Select City</h6>
          <CitySelect countryid = {countryId} stateid = {stateId} />
      </div>
    )
  }
  
  
  return(
    <div className='entry-field'> 
      <h6>{label}</h6>
      <input type={type} name = {label} id = {label} />
    </div>
  );
}