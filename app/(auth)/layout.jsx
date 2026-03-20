import React from 'react'

const Authlayout = ({ children }) => {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>

        {children}
    </main>
  )
}

export default Authlayout