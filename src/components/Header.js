import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-12 bg-gray-50 flex items-center justify-between px-2'>
        <Link to="/" className='text-2xl '>Notes</Link>

        <div>
            <Link to="/new" className='hover:text-sky-700 hover:underline'>Create Notes</Link>
        </div>
    </div>
  )
}

export default Header