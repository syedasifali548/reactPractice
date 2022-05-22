import React, { useState } from 'react'
import OtherInfo from './OtherInfo'
import PersonaInfo from './PersonaInfo'
import Signup from './Signup'

const Form = () => {
  const[page,setPage] = useState(0)
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    education:"",
    persnolEmail:"",
    houseNum:"",
    nationlity:"",
    city:"",
    others:""
  })
  const formTitles= ["sign Up","Persnol Info","Others"]
  const pageDisplay=()=>{
    if(page==0){
      return <Signup formData={formData} setFormData={setFormData}/>
    }
    else if(page==1){
      return <PersonaInfo formData={formData} setFormData={setFormData}/>
    }else{
      return <OtherInfo formData={formData} setFormData={setFormData}/>
    }
  }
  return (
    <div>
       <div className='form'>
         <div className='progressbar'>
         <div style={{width:page ==0 ? "33.3%" :page == 1 ? "66.6%":"100%"}}></div>
         </div>
         <div className='form-container'>
           <div className='header'>
             <h1>{formTitles[page]}</h1>
           </div>
           <div className='body'>
             {pageDisplay()}
             
           </div>
           <div className='footer'>
             <button
                 className='btn back_btn'
               disabled={page==0}
               onClick={()=>{
                setPage((currPage)=>currPage-1)
              }}
             >Prev</button>
             <button
             className='btn next_btn'
           
             disabled={page== formTitles.length-1}
             onClick={()=>{
              if(page== formTitles.length-1){
                alert("Form Submitted")
              }
              else{
                setPage((currPage)=>currPage+1)
              }
             }}
             >
{page===formData.length-1 ? 'Submit': 'Next'}

             </button>

           </div>
         </div>
       </div>
    </div>
  )
}

export default Form