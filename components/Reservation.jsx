import React from 'react'
import Title from './ui/Title'
import Input from "../components/form/input"

const Reservation = () => {
    const inputs = [
        {
          id: 1,
          name: "fullName",
          type: "text",
          placeholder: "Your Full Name",
        },
        {
          id: 2,
          name: "phoneNumber",
          type: "number",
          placeholder: "Your Phone Number",
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
        },
        {
          id: 4,
          name: "persons",
          type: "number",
          placeholder: "How Many Persons?",
        },
        {
          id: 5,
          name: "persons",
          type: "datetime-local",
          placeholder: "How Many Persons?",
        },
      ];
  return (
    <div className='container mx-auto py-12'>
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
        <div className='flex justify-between flex-wrap-reverse gap-x-10'>
            <div className='lg:flex-1 w-full'>
                <div className='flex flex-col gap-y-3'>
                    {
                        inputs.map((input)=>
                        <Input key={input.id} {...input}/>)
                    }
                </div>
                <button className="btn-primary mt-4">BOOK NOW</button>
            </div>
            <div className='lg:flex-1 w-full'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.74301317202!2d-74.25209572829749!3d40.73126228225651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254800f03fbe5%3A0xc3102364a9100bc7!2sThe%20Newark%20Museum%20of%20Art!5e0!3m2!1str!2str!4v1669120013423!5m2!1str!2str" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    className='h-full w-full'>
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default Reservation
