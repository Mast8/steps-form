import { ReactNode } from "react"
import "./FormWrapper.css"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 >
        {title}
      </h2>
      <div className="form" >
        {children}
      </div>
    </>
  )
}