import {ReactNode} from "react"
export interface BtnProps {
    name?:string ;
    icon?: ReactNode;
    onClick?:(x:any)=>void;
    type?: "button" | "submit" | "reset";
    children?: string | ReactNode,
    className?: string,
    disabled?: boolean

}
export interface Inputprops {
    onChange: (x:any)=> void;
    type:string;
    name?: string;
    placeholder? :string;
    value?:string | number
    min?:number;
    max?: number;
    accept?: string;
    required?:boolean;
    multiple?: boolean
  
  }
  export interface LabelProps {
    children:string
  }
  export enum ActionTypes  {
    registerInputs = "REGISTER_INPUTS",
    siginInputs = "SIGNIN_INPUTS",
    reset = "RESET_STATE",
    login ="LOG_IN",
    logout= "LOG_OUT"
 }
 export  interface initialStateType {
     name: string,
     email:string,
     password:string
 }