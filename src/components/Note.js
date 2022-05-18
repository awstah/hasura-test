import { gql, useMutation } from '@apollo/client'
import React from 'react'

const DELETE_NOTE = gql`
 mutation DeleteNote($id: Int!){
  delete_notes_by_pk(id: $id){
    id
  }
 }
`

function Note({note}) {
  const [deleteNote, {error, loading, data}] = useMutation(DELETE_NOTE)
  console.log(error)

  const deleteHandler = (e) =>{
    e.preventDefault()
    deleteNote({
      variables: {
        id:note.id
      }
    })
  }


  return (
    <div className='bg-gray-50 p-2 rounded-md space-y-2'>
        <h3 className='text-2xl text-gray-800 font-semibold'>{note.title}</h3>
        <p className='text-gray-500 text-sm'>{note.description}</p>

        <div className='text-sm space-x-4 mt-3'>
          <button className='text-sky-400 '>Edit</button>
          <button className='text-rose-400' onClick={deleteHandler}>Delete</button>
        </div>
    </div>
  )
}

export default Note