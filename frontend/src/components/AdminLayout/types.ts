interface Return {
  name: string;
}

export type TypeCallbackWithParams = (
  firstName: string,
  lastName: string
) => string;

export type TypeFuncWithObject = (
  firstName: string,
  secondName: string
) => Return[];


export interface PropsAdminLayout {
    children: React.ReactNode
}