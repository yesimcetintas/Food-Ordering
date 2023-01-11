import React from 'react'
import Title from '../ui/Title'
import Input from '../form/input'
import { useFormik } from 'formik';
import { profileSchema } from '../../schema/profile';
import axios from 'axios';
import { toast } from 'react-toastify';

const Account = ({user}) => {
    const onSubmit = async (values, actions) => {
        try {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values)
          if(res.status===200){
            toast.success("Profile updated successfully")
          }
        } catch (err) {
          console.log(err)
        }
      }

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        enableReinitialize: true,
        initialValues:{
          fullName: user?.fullName,
          email: user?.email,
          phoneNumber: user?.phoneNumber,
          address: user.address,
          job: user.job,
          bio: user.bio
        },
        onSubmit,
        validationSchema: profileSchema,
      })
    
    const inputs = [
        {
          id: 1,
          name: "fullName",
          type: "text",
          placeholder: "Your Full Name",
          value: values.fullName,
          errorMessage: errors.fullName,
          touched: touched.fullName
        },
        {
          id: 2,
          name: "email",
          type: "email",
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
          name: "address",
          type: "text",
          placeholder: "Your Address",
          value: values.address,
          errorMessage: errors.address,
          touched: touched.address,
        },
        {
          id: 5,
          name: "job",
          type: "text",
          placeholder: "Your Job",
          value: values.job,
          errorMessage: errors.job,
          touched: touched.job  
        },
        {
            id: 6,
            name: "bio",
            type: "text",
            placeholder: "Your Bio",
            value: values.bio,
            errorMessage: errors.bio,
            touched: touched.bio  
        },
      ];
  return (
    <form className='lg:p-8 flex-1 lg:mt-0 mt-5' onSubmit={handleSubmit}>
        <Title addClass="text-[40px]">Account Setting</Title>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
            {
                inputs.map((input)=>
                <Input key={input.id} 
                {...input} 
                onChange={handleChange}
                onBlur={handleBlur}/>)
            }
        </div>
        <button className="btn-primary mt-4" type='submit'>Update</button>
    </form>
  )
}

export default Account
