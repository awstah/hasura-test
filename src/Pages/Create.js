import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const INSERT_NOTE = gql`
mutation CreateNote($title: String!, $description:String!){
  insert_notes_one(object:{
    title: $title,
    description :$description
  }){
    id
    title
    description
    created_at
  }
}
`
function Create() {
  const [form, setform] = useState({
    title:"",
    description:""
  })

  const [createNote, {data, loading, error}] = useMutation(INSERT_NOTE)

  const navigate = useNavigate()

  console.log(error)

  const onFormSubmit = async (e) => {
    console.log(form)
    e.preventDefault()
    await createNote({
      variables: form
    })
    setform({
      title:"",
      description:""
    })
    navigate("/")
  }


  const onChangeHandler = (e) => {
    let value = e.target.value;
    setform({ ...form, [e.target.name]: value });
  }
console.log(form)
  return (
    <div className='max-w-3xl mx-auto mt-10'>
      <form className='flex flex-col space-y-3' onSubmit={onFormSubmit}>
        <div className='bg-gray-50 h-14 rounded-md'>
        <input value={form.title} name="title" onChange={onChangeHandler} type="text" placeholder="Title" className='w-full h-full bg-transparent px-3 text-xl'/>
        </div>
        <div className='bg-gray-50 h-auto rounded-md'>
        <textarea onChange={onChangeHandler} name="description" placeholder='Description' className='bg-transparent min-h-32 w-full p-3'>
          {form.description}
        </textarea>
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default Create