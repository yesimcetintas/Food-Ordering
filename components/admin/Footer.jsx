import React from 'react'
import Title from '../ui/Title'
import Input from '../form/input'
import { useFormik } from 'formik';
import { footerSchema } from '../../schema/footer';
import { useState } from 'react';

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState("")
  const [iconName, setIconName] = useState("fa fa-")
  const [icons, setIcons] = useState(["fa fa-facebook", "fa fa-twitter", "fa fa-linkedin"])

  const handleChangeIcon = (e) => {
    setIconName(e.target.value)
  }

  const addIcon = () => {
    setIcons([...icons, iconName]);
    setIconName("fa fa-");
  }

  const onSubmit = async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 4000))
      actions.resetForm()
    }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
      initialValues:{
        location:"",
        email:"",
        phoneNumber:"",
        description:"",
        day:"",
        time:""
      },
      onSubmit,
      validationSchema: footerSchema,
    })
    
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
        id: 3,
        name: "phoneNumber",
        type: "number",
        placeholder: "Your Phone Number",
        value: values.phoneNumber,
        errorMessage: errors.phoneNumber,
        touched: touched.phoneNumber
    },
    {
      id: 4,
      name: "description",
      type: "text",
      placeholder: "Write a Description",
      value: values.description,
      errorMessage: errors.description,
      touched: touched.description,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Write a Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day  
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Write a Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time  
    },
    ];
  return (
    <form className='lg:p-8 flex-1 lg:mt-0 mt-5' onSubmit={handleSubmit}>
      <Title addClass="text-[40px]">Footer</Title>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          {
              inputs.map((input)=>
              <Input key={input.id} 
              {...input} 
              onChange={handleChange}
              onBlur={handleBlur}/>)
          }
      </div>
      <div className='mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4'>
        <div className='flex gap-4 items-center'>
          <Input 
            placeholder="Link Address" 
            value="https://"
            onChange=""/>
          <Input 
            placeholder="Icon Name" 
            onChange={handleChangeIcon}
            value={iconName}/>
          <button 
            className="btn-primary" 
            type='button' 
            onClick={addIcon}>
              Add
            </button>
        </div>
        <ul className='flex items-center gap-6'>
          {
            icons.map((icon, index)=>
              <li key={index} className="flex items-center">
              <i className={`${icon} text-2xl`}></i>
              <button 
                className='text-danger'
                onClick={() => {
                  setIcons((prev) => prev.filter((item, i) => i !== index));
                }}
                type="button">
                  <i className='fa fa-trash text-xl ml-2'></i>
              </button>
            </li>
            )
          }
        </ul>
      </div>
      <button className="btn-primary mt-4">Update</button>
    </form>
  )
}

export default Footer
