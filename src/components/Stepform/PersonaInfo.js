import React from 'react'
import './Form.css'

const PersonaInfo = ({formData,setFormData}) => {
  return (
 <div className="container">  
  <form  id="contact">
    <h3>Persnol Information</h3>
    <fieldset>
      <input placeholder="Your Education" type="text" 
        value={formData.education}
      onChange={(e)=>{
        setFormData({...formData,education:e.target.value})
      }}
      />
    </fieldset>
    <fieldset>
      <input placeholder="Persnol Email" type="email"
      value={formData.persnolEmail}
      onChange={(e)=>{
        setFormData({...formData,persnolEmail:e.target.value})
      }}
      />
    </fieldset>
    <fieldset>
    <input placeholder="House Number (optional)" type="tel"
      value={formData.houseNum}
      onChange={(e)=>{
        setFormData({...formData,houseNum:e.target.value})
      }}
    />
    </fieldset>
  </form>
</div>
  )
}

export default PersonaInfo