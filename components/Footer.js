import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-center dark:bg-secondaryDark'>
        <div className='h-px w-full bg-border'></div>
        <div className='min-h-20 flex items-center justify-center'>

        <p className='text-lg text-secondaryForeground text-center mt-2.5'>© 2026 Devora. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer