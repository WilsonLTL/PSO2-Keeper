import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { handleLoad, handleChangeStatus, handleChangeText, handleSnackBarOpen, handleSnackBarClose, handleClick, handleClose, handleSubmit } from '../../actions/FormGroupPanel';
import FormGroupPanel from '../../components/mainComponents/FormGroupPanel';
import { IFormGroupPanelState } from '../../types';

const mapStateToProps = (state: IFormGroupPanelState): { User:any, Mission:any, GroupFormList:any, Groups:any, SnackBar:any, JoinMission:any, ColorList: any, MessageDialog:any } => 
({User:state.FormGroupPanel.User, Mission: state.FormGroupPanel.Mission, GroupFormList: state.FormGroupPanel.GroupFormList, Groups: state.FormGroupPanel.Groups, 
    SnackBar: state.FormGroupPanel.SnackBar, JoinMission: state.FormGroupPanel.JoinMission, ColorList:state.FormGroupPanel.ColorList, MessageDialog:state.FormGroupPanel.MessageDialog})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHandleLoad: (payload:JSON) => dispatch(handleLoad(payload)),
    onHandleChangeStatus: (payload:string, data:any) => dispatch(handleChangeStatus(payload, data)),
    onHandleChangeText: () => dispatch(handleChangeText()),
    onHandleSnackBarOpen: (payload:string) => dispatch(handleSnackBarOpen(payload)),
    onHandleSnackBarClose: () => dispatch(handleSnackBarClose()),
    onHandleClick: (payload:string, data:any) => dispatch(handleClick(payload, data)),
    onHandleClose: (payload:string, data:string) => dispatch(handleClose(payload, data)),
    onHandleSubmit: (payload:string, data:string) => dispatch(handleSubmit(payload, data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormGroupPanel);