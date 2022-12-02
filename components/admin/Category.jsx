import React from 'react'
import Title from '../ui/Title'
import Input from "../../components/form/input"
import { useState } from 'react'

const Category = () => {
    const [inputText, setInputText] = useState("");
    const [categories, setCategories] = useState(["pizza"]);

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const addCategory = () => {
        setCategories([...categories, inputText]);
        setInputText("");
    }

    const deleteCategory = (category) => {
        setCategories(categories.filter((cat) => cat !== category))
    }

  return (
    <div className='lg:p-8 flex-1 lg:mt-0 mt-5'>
        <Title addClass="text-[40px]">Category</Title>
        <div className='mt-5'>
            <div className='flex gap-4 flex-1 items-center'>
                <Input 
                    placeholder="Add a new category..." 
                    onChange={handleChange}
                    value={inputText}/>
                <button 
                    className='btn-primary'
                    onClick={addCategory}>
                        Add
                </button>
            </div>
        </div>
        <div className='mt-10'>
            {
                categories.map((category, index)=>
                <div className='flex justify-between mt-4' key={index}>
                    <b className='text-xl'>{category}</b>
                    <button 
                        className="btn-primary !bg-danger" 
                        onClick={()=> deleteCategory(category)}>
                            Delete
                    </button>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Category
