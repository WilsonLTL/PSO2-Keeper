import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { handleChange, handleChangeText, handleClickOpen, clear, handleClose } from '../../actions/Home';
import Home from '../../components/mainComponents/Home';
import { ILoginRegisterState } from '../../types';


const mapStateToProps = (state: ILoginRegisterState)
: { value: number ,Email: string, Login: boolean, Dialog: boolean, Password: string, Confirmpassword: string, Username: string, Dialogtitle: string, Dialogtext: string } => 
({
    value: state.Home.value, Email: state.Home.Email, Login: state.Home.Login, Dialog: state.Home.Dialog, Password: state.Home.Password, Confirmpassword: state.Home.Confirmpassword, Username: state.Home.Username, Dialogtitle: state.Home.Dialogtitle,
    Dialogtext: state.Home.Dialogtext
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHandleChange: () => dispatch(handleChange()),
    onHandleChangeText: () => dispatch(handleChangeText()),
    onHandleClickOpen: () => dispatch(handleClickOpen()),
    onClear: () => dispatch(clear()),
    onHandleClose: () => dispatch(handleClose())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);