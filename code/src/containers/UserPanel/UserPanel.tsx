import { connect } from 'react-redux';import { Dispatch } from 'redux';

import { handleLoad, handleChangePermission, handleChangeText, handleSnackBarOpen, handleSnackBarClose, handleClick, handleClose, handleSubmit } from '../../actions/UserPanel';
import UserPanel from '../../components/mainComponents/UserPanel';
import { IUserPanelState } from '../../types';


const mapStateToProps = (state: IUserPanelState): { User: any ,Groups: any, SnackBar: any, DashData: any, EditDialog: any, CreateDialog: any, JoinDialog: any, GroupDialog: any, SelectMissionDialog: any} => 
({User: state.UserPanel.User, Groups: state.UserPanel.Groups, SnackBar: state.UserPanel.SnackBar, 
    DashData: state.UserPanel.DashData, EditDialog: state.UserPanel.EditDialog, 
    CreateDialog: state.UserPanel.CreateDialog, JoinDialog: state.UserPanel.JoinDialog,
    GroupDialog: state.UserPanel.GroupDialog, SelectMissionDialog: state.UserPanel.SelectMissionDialog
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHandleLoad: (payload:JSON) => dispatch(handleLoad(payload)),
    onHandleChangePermission: (payload:string, data:any) => dispatch(handleChangePermission(payload, data)),
    onHandleChangeText: () => dispatch(handleChangeText()),
    onHandleSnackBarOpen: () => dispatch(handleSnackBarOpen()),
    onHandleSnackBarClose: () => dispatch(handleSnackBarClose()),
    onHandleClick: (payload:string, data:any) => dispatch(handleClick(payload, data)),
    onHandleClose: (payload:string, data:string) => dispatch(handleClose(payload, data)),
    onHandleSubmit: (payload:string, data:any) => dispatch(handleSubmit(payload, data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);