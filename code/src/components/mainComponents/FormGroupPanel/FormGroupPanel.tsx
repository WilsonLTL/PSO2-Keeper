import * as React from 'react';
import NavBar from '../../subComponents/NavBar';
import GroupList from '../../subComponents/List/GoupList';
import MessageSnackBar from '../../subComponents/Dialog/MessageSnackBar'
import FormGroupControlPanel from '../../subComponents/FormGroupControlPanel'
import MemberList from '../../subComponents/List/MemberList'
import FormGroupDisplay from '../../subComponents/FormGroupDisplay'
import JoinMissionDialog from '../../subComponents/Dialog/JoinMissionDialog'
import PushMessageDialog from '../../subComponents/Dialog/PushMessageDialog'
import { Grid } from '@material-ui/core';

// create infterface
export interface IProps {
    match: any,
    User: any,
    Mission: any,
    GroupFormList: any,
    ColorList: any,
    Groups: any,
    SnackBar: any,
    JoinMission: any,
    MessageDialog: any,
    onHandleLoad: (payload:JSON) => void,
    onHandleChangeText: () => void,
    onHandleChangeStatus: (payload:string, data:any) => void,
    onHandleSnackBarOpen: (payload:string) => void,
    onHandleSnackBarClose: () => void,
    onHandleClick: (payload:string,data:string) => void,
    onHandleClose: (payload:string,data:string) => void,
    onHandleSubmit: (payload:string,data:string) => void,
}

class FormGroupPanel extends React.PureComponent<IProps> {
    public componentDidMount () {
        this.props.onHandleLoad(this.props.match.params)
    }

    public render() {
        const { User, Mission, Groups, ColorList, SnackBar, GroupFormList, JoinMission, MessageDialog, onHandleChangeStatus, onHandleChangeText, onHandleSnackBarOpen, onHandleSnackBarClose, onHandleClick, onHandleClose, onHandleSubmit } = this.props;

        const Styles = {
            background: {
                backgroundImage: `url(${Mission.backImage})`,
                backgroundSize: "cover", 
            },
            layer: {
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                positive: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }
        }

        return (
            <div style={Styles.background}>
                <div style={Styles.layer}>
                <NavBar />
                <Grid style={{ margin: "10px", width: "auto" }} direction="row" container={true} spacing={2}>
                    <Grid direction="column" container={true} item={true} xs={12} md={9} spacing={2}>
                        <Grid item={true} direction="row" container={true} spacing={2}>
                            <Grid item={true} xs={12} md={12}>
                                <FormGroupControlPanel mission={Mission} member={GroupFormList} click={onHandleClick}/>
                            </Grid>
                            <Grid item={true} xs={12} md={9}>
                                <FormGroupDisplay colorList={ColorList} mission={Mission} groupFormList={GroupFormList}/>
                            </Grid>
                            <Grid item={true} xs={12} md={3}>
                                <MemberList colorList={ColorList} memberList={GroupFormList} change={onHandleChangeStatus} submit={onHandleSubmit}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <GroupList type="Form-group" tileData={Groups} click={onHandleSnackBarOpen} join={onHandleClick} />
                    </Grid>
                </Grid>
                <MessageSnackBar status={SnackBar.status} messagetype={SnackBar.messageTpye} message={SnackBar.message} close={onHandleSnackBarClose} />
                <JoinMissionDialog status={JoinMission.status} joinDialog={JoinMission} title={"Join Mission"} user={User} change={onHandleChangeStatus} close={onHandleClose} submit={onHandleSubmit}/>
                <PushMessageDialog status={MessageDialog.status} title="Push Message" message={MessageDialog} change={onHandleChangeText} close={onHandleClose} submit={onHandleSubmit}/>
                </div>
            </div>
        )
    }
}

export default FormGroupPanel;