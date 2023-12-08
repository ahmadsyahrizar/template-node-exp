export interface ButtonProps {
    type? : "button" | "submit" | "reset" | undefined
    color : string
    children : React.ReactNode
    onClick : () => void
    disabled? : boolean
  }
  