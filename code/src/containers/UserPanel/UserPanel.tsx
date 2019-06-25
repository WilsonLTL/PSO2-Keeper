import { connect } from 'react-redux';import { Dispatch } from 'redux';

import { handleChangeText, handleSnackBarOpen, handleSnackBarClose, handleClick, handleClose,handleSubmit, handleCreateSubmit, handleJoinSubmit } from '../../actions/UserPanel';
import UserPanel from '../../components/mainComponents/UserPanel';
import { IUserPanelState } from '../../types';


const mapStateToProps = (state: IUserPanelState): { User: any ,Groups: any, SnackBar: any, DashData: any, EditDialog: any, CreateDialog: any, JoinDialog: any, GroupInfoDialog: any} => 
({User: state.UserPanel.User, Groups: state.UserPanel.Groups, SnackBar: state.UserPanel.SnackBar, 
    DashData: state.UserPanel.DashData, EditDialog: state.UserPanel.EditDialog, 
    CreateDialog: state.UserPanel.CreateDialog, JoinDialog: state.UserPanel.JoinDialog,
    GroupInfoDialog: state.UserPanel.GroupInfoDialog
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHandleChangeText: () => dispatch(handleChangeText()),
    onHandleSnackBarOpen: () => dispatch(handleSnackBarOpen()),
    onHandleSnackBarClose: () => dispatch(handleSnackBarClose()),
    onHandleClick: (payload:string, groupName:string) => dispatch(handleClick(payload, groupName)),
    onHandleClose: (payload:string, groupName:string) => dispatch(handleClose(payload, groupName)),
    onHandleSubmitEdit: () => dispatch(handleSubmit()),
    onHandleSubmitCreate: () => dispatch(handleCreateSubmit()),
    onHandleSubmitJoin: () => dispatch(handleJoinSubmit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);