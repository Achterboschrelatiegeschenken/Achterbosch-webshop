import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
}

export function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}