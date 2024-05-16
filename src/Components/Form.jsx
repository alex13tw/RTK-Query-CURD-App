import React from 'react'
import Input from './Input'
import Label from './Label'
import Button from './Button'
import Fields from './Fields'
import FormHead from './FormHead'

const Form = ({onSubmit ,handleChange,value1,value2,fname }) => {
  return (
    <div>
      <form className='bg-secondary p-4 rounded' onSubmit={onSubmit}>     
      <FormHead name={fname}/>   
      <div className="mb-3">  
      <Fields type="text"  name="name" value={value1} id="exampleInputPassword1" onChange={handleChange} />
      <Fields type="email" name="email" value={value2}  id="exampleInputEmail1" onChange={handleChange} /> 
      </div>  
      <Button type="submit" className="btn btn-primary" name="Submit"  />
      </form>
    </div>
  )
}

export default Form
