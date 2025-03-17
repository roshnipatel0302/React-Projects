import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div className="flex items-center justify-center p-2">
      <img 
        src="https://plus.unsplash.com/premium_photo-1679941208895-91501f622a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJsb2clMjBsb2dvfGVufDB8fDB8fHww" 
        alt="Logo"
        className="rounded-full shadow-lg border-2 border-white"
        style={{ width, height: width }}
      />
    </div>
  )
}

export default Logo
