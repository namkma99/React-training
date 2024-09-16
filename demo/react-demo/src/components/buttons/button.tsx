import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = ({variant, ...arg}: ButtonProps) => {
  return (
    <button {...arg}></button>
  )
}

export default Button