import React from 'react'

const Footer = () => {
  return (
    <div className='lg:flex flex-col hidden  mt-auto w-full px-6 text-gray-400 text-[14px] items-center  justify-center '>
      <div className='flex items-center gap-4'>
         <p>© 2023 MovStream Website</p>
      <p>All rights reserved.</p>
      </div>
     
      <p>All contents are uploaded by users. Moviebox only provides webpage services and does not store, record, or upload any content. If you find any content infringe on your rights, please contact us by " Report content "</p>
    </div>
  )
}

export default Footer