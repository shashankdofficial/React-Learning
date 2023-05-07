import React from 'react'

export default function login() {
  return (
    <div clasName="container mx-auto">
        <div clasName='flex justify-center items-center h-screen'>
            <div>
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold'>Hello Again!</h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                        This is the Login Page.
                    </span>
                </div>

                <form className='py-1'>
                    <div className='textbox'>
                        <input type='text' placeholder='username' />
                    </div>
                    <div className='textbox'>
                        <input type='password' placeholder='password' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
