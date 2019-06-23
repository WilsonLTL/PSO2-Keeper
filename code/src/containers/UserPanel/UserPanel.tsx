import { connect } from 'react-redux';import { Dispatch } from 'redux';

import { handleChangeText, handleSnackBarOpen, handleSnackBarClose, handleEditClick, handleEditClose, handleCreateClick, handleCreateClose, handleSubmit, handleCreateSubmit, handleJoinClick, handleJoinClose, handleJoinSubmit } from '../../actions/UserPanel';
import UserPanel from '../../components/mainComponents/UserPanel';
import { IUserPanelState } from '../../types';


const mapStateToProps = (state: IUserPanelState): { User: any ,Groups: any, SnackBar: any, DashData: any, EditDialog: any, CreateDialog: any, JoinDialog: any} => 
({User: state.UserPanel.User, Groups: state.UserPanel.Groups, SnackBar: state.UserPanel.SnackBar, DashData: state.UserPanel.DashData, EditDialog: state.UserPanel.EditDialog, CreateDialog: state.UserPanel.CreateDialog, JoinDialog: state.UserPanel.JoinDialog})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHandleChangeText: () => dispatch(handleChangeText()),
    onHandleSnackBarOpen: () => dispatch(handleSnackBarOpen()),
    onHandleSnackBarClose: () => dispatch(handleSnackBarClose()),
    onHandleEditClick: () => dispatch(handleEditClick()),
    onHandleEditClose: () => dispatch(handleEditClose()),
    onHandleCreateClick: () => dispatch(handleCreateClick()),
    onHandleCreateClose: () => dispatch(handleCreateClose()),
    onHandleJoinClick: () => dispatch(handleJoinClick()),
    onHandleJoinClose: () => dispatch(handleJoinClose()),
    onHandleSubmitEdit: () => dispatch(handleSubmit()),
    onHandleSubmitCreate: () => dispatch(handleCreateSubmit()),
    onHandleSubmitJoin: () => dispatch(handleJoinSubmit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);