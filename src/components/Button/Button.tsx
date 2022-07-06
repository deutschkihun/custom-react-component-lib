import React from 'react'
import {SIZES,VARIANTS,StyledButton} from './Style'


interface ButtonProps {
    disabled:boolean;
    children:string;
    size: string;
    variant:string;
    redirect?:string
}

const Button = ({disabled, children, size, variant}:ButtonProps) => {
  const sizeStyle = size == 'sm' ? SIZES.sm : size == 'md' ? SIZES.md : SIZES.lg 
  const variantStyle = variant == 'success' ? VARIANTS.success : variant == 'error' ? VARIANTS.error : VARIANTS.warning 

  
    return (
      <StyledButton
        disabled={disabled}
        sizeStyle={sizeStyle}
        variantStyle={variantStyle}
      >
        {children}
      </StyledButton>
  )
}
export default Button

