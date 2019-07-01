import { ModifyAction } from '../../actions/Home';
import {HANDLECHANGE, HANDLECHANGETEXT, CLEAR, HANDLECLICKOPEN, HANDLECLOSE } from '../../constants/Home';
// import { ILoginRegisterState } from '../../types'

const defaultValue = {
  value: 0,
  Email: "email@email.com",
  Login: false,
  Dialog: false,
  Password: "",
  Confirmpassword: "",
  Username: "User Name",
  Dialogtitle: "Register Successful",
  Dialogtext: "Register successful! Please login your account and finish the setup."
}

export default (state= defaultValue, action: ModifyAction): any => {
  switch (action.type) {
    case HANDLECHANGE:
      return {
        value: state.value,
        Email: state.Email,
        Login: action.payload.target.checked,
        Dialog: state.Dialog,
        Password: state.Password,
        Confirmpassword: state.Confirmpassword,
        Username: state.Username,
        Dialogtitle: state.Dialogtitle,
        Dialogtext: state.Dialogtext
      }
    case HANDLECHANGETEXT:
      switch (action.payload.target.name) {
        case "username":
          return {
            value: state.value,
            Email: state.Email,
            Login: state.Login,
            Dialog: state.Dialog,
            Password: state.Password,
            Confirmpassword: state.Confirmpassword,
            Username: action.payload.target.value,
            Dialogtitle: state.Dialogtitle,
            Dialogtext: state.Dialogtext
          }
        case "password":
          return {
            value: state.value,
            Email: state.Email,
            Login: state.Login,
            Dialog: state.Dialog,
            Password: action.payload.target.value,
            Confirmpassword: state.Confirmpassword,
            Username: state.Username,
            Dialogtitle: state.Dialogtitle,
            Dialogtext: state.Dialogtext
          }
        case "confirmPassword":
          return {
            value: state.value,
            Email: state.Email,
            Login: state.Login,
            Dialog: state.Dialog,
            Password: state.Password,
            Confirmpassword: action.payload.target.value,
            Username: state.Username,
            Dialogtitle: state.Dialogtitle,
            Dialogtext: state.Dialogtext
          }
        case "email":
          return {
            value: state.value,
            Email: action.payload.target.value,
            Login: state.Login,
            Dialog: state.Dialog,
            Password: state.Password,
            Confirmpassword: state.Confirmpassword,
            Username: state.Username,
            Dialogtitle: state.Dialogtitle,
            Dialogtext: state.Dialogtext
          }
      }
    case CLEAR:  
      return {
        value: "",
        Email: "",
        Login: state.Login,
        Dialog: false,
        Password: "",
        Confirmpassword: "",
        Username: "",
        Dialogtitle: state.Dialogtitle,
        Dialogtext: state.Dialogtext
      }
    case HANDLECLICKOPEN:
      if (!state.Login) {
        window.location.href = "/userPanel/access_token/userID";
      }else {
        return {
          value: state.value,
          Email: state.Email,
          Login: state.Login,
          Dialog: true,
          Password: state.Password,
          Confirmpassword: state.Confirmpassword,
          Username: state.Username,
          Dialogtitle: state.Dialogtitle,
          Dialogtext: state.Dialogtext
        }
      }
    case HANDLECLOSE:
        return {
          value: state.value,
          Email: state.Email,
          Login: state.Login,
          Dialog: false,
          Password: state.Password,
          Confirmpassword: state.Confirmpassword,
          Username: state.Username,
          Dialogtitle: state.Dialogtitle,
          Dialogtext: state.Dialogtext
        } 
    default:
      return defaultValue
  }
}