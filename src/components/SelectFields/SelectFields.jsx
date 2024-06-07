import './SelectFields.css'
import {COUNTRY_DATA} from './countryData.js'

export default function SelectFields({type}){
  return(
    <div className="select-field">
      <h6>{type}</h6>
      <select name = {type}>
        {COUNTRY_DATA.map((item) => <option value={item}>{item}</option>)}
      </select>
    </div>
  )
}