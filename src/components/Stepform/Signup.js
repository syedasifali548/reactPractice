import React from 'react'
import './Form.css'
const Signup = ({formData,setFormData}) => {
  return (
    <div>

<div className="container">  
  <form id="contact">
    <h3>Signup Form</h3>
    <fieldset>
      <input placeholder="Your name" type="text"  
      value={formData.name}
      onChange={(e)=>{
        setFormData({...formData,name:e.target.value})
      }}
      />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email"
      value={formData.email}
      onChange={(e)=>{
        setFormData({...formData,email:e.target.value})
      }}
      />
    </fieldset>
    <fieldset>
      <input placeholder="Password" type="text" 
      value={formData.password}
      onChange={(e)=>{
        setFormData({...formData,password:e.target.value})
      }}
      />
    </fieldset>
  </form>
</div>

    </div>
  )
}

export default Signup