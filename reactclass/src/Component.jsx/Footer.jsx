import React from 'react'

export default function Footer() {
  return (
    <div className='w-full p-10'>
      <div className='font-[400] flex justify-center gap-40'>
        <ul className='m-4'>
            <p className='font-bold mb-5 text-2xl'>About Zouk</p>
            <h1 className='mt-3'>Customer Reviews</h1>
            <h1 className='mt-3'>Blog</h1>
            <h1 className='mt-3'>Our Journal</h1>
            <h1 className='mt-3'>About Us</h1>
            <h1 className='mt-3'>Store Locator</h1>
        </ul>
        <ul className='m-4'>
            <p className='font-bold mb-5 text-2xl'>Useful Links</p>
            <h1 className='mt-3'>Contact Us</h1>
            <h1 className='mt-3'>FAQs</h1>
            <h1 className='mt-3'>Order Delivery</h1>
            <h1 className='mt-3'>Privacy Policy</h1>
            <h1 className='mt-3'>Exchange & Returun Policy</h1>
        </ul>
        <ul className='m-4'>
            <p className='font-bold mb-5 text-2xl'>Newsletter</p>
            <h1 className='mt-3'>Subscribe to receive updates,  access to <br /> exclusive deals, and more.</h1>
            <input type="text" placeholder='Enter Your email address' className='border-1 p-3 mt-5 pr-20'/><br />
            <button className='bg-[#cfc9c9] p-3 mt-4 pl-10 pr-10'>SUBSCRIBE</button>
        </ul>
      </div>
    </div>
  )
}
