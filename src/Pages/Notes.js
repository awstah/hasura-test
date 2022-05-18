import React from 'react'
import {useQuery, gql} from "@apollo/client"
import Note from '../components/Note'

const GET_NOTES = gql`
query{
    notes{
        id
        title
        description
        created_at
        updated_at
    }
}
`

function Notes() {
    const {error, data, loading} = useQuery(GET_NOTES)

    console.log(data)

    
  return (
    <div className='max-w-3xl mx-auto mt-10 space-y-2'>
        {error && <div>{error}</div>}
        {loading && <div>loading</div>}
         {data?.notes.map(note => (
         <Note note={note}/>
        ))}
    </div>
  )
}

export default Notes