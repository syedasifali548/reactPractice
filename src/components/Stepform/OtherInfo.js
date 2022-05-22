import { FormatAlignJustify } from '@material-ui/icons'
import React from 'react'
import './Form.css'

const OtherInfo = ({formData,setFormData}) => {
  return (
    <div className="container">  
    <form  id="contact">
      <h3>Other Information</h3>
      <fieldset>
        <input placeholder="Your Nationality" type="text" 
        value={formData.nationlity}
        onChange={((e)=>{
          setFormData({...formData,nationlity:e.target.value})
        })}
        />
      </fieldset>
      <fieldset>
        <input placeholder="Your City" type="email"
        value={formData.city}
        onChange={((e)=>{
          setFormData({...FormData,city:e.target.value})
        })}
        />
      </fieldset>
      <fieldset>
      <input placeholder="Others (optional)" type="text" 
        value={formData.others}
        onChange={((e)=>{
          setFormData({...FormData,others:e.target.value})
        })}
      />
      </fieldset>
    </form>
  </div>
  )
}

export default OtherInfo