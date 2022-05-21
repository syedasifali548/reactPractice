import React, { useState } from 'react'
import Modal from './Modal'
import './modal.css'
const Buttons = () => {
    const [openModal,setOpenModal] = useState(false);
    console.log(setOpenModal);
  return (
    <div>
        <div className='container btns_container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='button_content'>
                        <h2>Click to Open Modal</h2>
                        <button className='btn btn-primary'
                        onClick={()=>{
                            setOpenModal(true)
                        }}
                        >Open</button>
                          {openModal && <Modal closeModal={setOpenModal}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buttons