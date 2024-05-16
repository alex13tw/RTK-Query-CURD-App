import React from 'react'
import Input from './Input'
import Label from './Label'

const Fields = ({name,type,id,onChange,value}) => {
  return (
    <div>
       <div className="mb-3">               
            <Label name={name} />
            <Input type={type}  name={name} value={value}  id={id} onChange={onChange}/>
        </div> 
    </div>
  )
}

export default Fields
