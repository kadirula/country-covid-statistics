import React from 'react'

const Footer = () => {
  return (
    <div className='text-center text-gray-200 py-3 bg-gray-600'>
        &copy; {new Date().getFullYear()} - Tüm Hakları <span className='font-bold text-orange-600'>Kadir Ula</span> ' ya aittir.
    </div>
  )
}

export default Footer