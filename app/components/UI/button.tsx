import React from 'react'

const Button = ({ children, variant = 'primary', onClick, className = '' }: any) => {
    const baseStyle = "px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-medium flex items-center justify-center gap-2 cursor-pointer";
    const variants = {
      primary: "bg-stone-900 text-white hover:bg-stone-800",
      outline: "border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white",
      white: "bg-white text-stone-900 hover:bg-stone-100",
      ghost: "text-stone-900 hover:text-stone-600 px-0 py-1"
    };
    return (
      <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
        {children}
      </button>
    );
}

export default Button
