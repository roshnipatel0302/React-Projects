import React from 'react'

const Button = ({children,type="button",bgColor="bg-blue-600",textColor= "text-white",claasName="",...props}) => {
  return (
    <button>{children}</button>
  )
}

export default Button