import * as React from 'react';
import NavBar from '../../subComponents/NavBar';
import GroupList from '../../subComponents/List/GoupList';
import MemberCard from '../../subComponents/MemberCard';
import Dashboard from '../../subComponents/Dashboard';
import GroupCardList from '../../subComponents/List/GroupCardList';
import MessageSnackBar from '../../subComponents/Dialog/MessageSnackBar';
import EditCardDialog from '../../subComponents/Dialog/EditCardDialog';
import CreateGroupDialog from '../../subComponents/Dialog/CreateGroupDialog';
import JoinGroupDialog from '../../subComponents/Dialog/JoinGroupDialog';
import GroupInfoDialog from '../../subComponents/Dialog/GroupInfoDialog';
import SelectMessageDialog from '../../subComponents/Dialog/SelectMessageDialog'
import { Grid } from '@material-ui/core';

// create infterface
export interface IProps {
    match: any,
    User: any,
    Groups: any,
    SnackBar: any,
    DashData: any,
    EditDialog: any,
    CreateDialog: any,
    JoinDialog: any,
    GroupDialog: any,
    SelectMissionDialog: any,
    onHandleLoad: (payload:JSON) => void,
    onHandleChangeText: () => void,
    onHandleChangePermission: (payload:string, data:string) => void,
    onHandleSnackBarOpen: () => void,
    onHandleSnackBarClose: () => void,
    onHandleClick: (payload:string,data:string) => void,
    onHandleClose: (payload:string,data:string) => void,
    onHandleSubmit: (payload:string, data:string) => void,
}

const Styles = {
    background: {
        backgroundColor: "#EFEFEF",
        width: "auto"
    }
}

// PureComponent with compontent control    
class UserPanel extends React.PureComponent<IProps> {

    public componentDidMount () {
        this.props.onHandleLoad(this.props.match.params)
    }

    public render() {
        const { CreateDialog, DashData, EditDialog, Groups, JoinDialog, SnackBar, User, GroupDialog, SelectMissionDialog, 
            onHandleChangePermission, onHandleChangeText, onHandleSnackBarOpen, onHandleSnackBarClose, onHandleClick, onHandleClose, onHandleSubmit
        } = this.props;

        return(
            <div style={Styles.background}>
                <NavBar />
                <Grid style={{margin: "10px", width:"auto"}} direction="row" container={true} spacing={2}>
                    <Grid direction="column" container={true} item={true} xs={12} md={9} spacing={2}>
                        <Grid item={true} direction="row" container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <MemberCard user={User} click={onHandleClick}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Dashboard data={DashData}/>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <GroupCardList tileData={Groups} click={onHandleClick} clickListItem={onHandleClick} closeListItem={onHandleClose} groupInfo={GroupInfoDialog} handleChangePermission={onHandleChangePermission}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <GroupList tileData={Groups} type="User-panel" click={onHandleSnackBarOpen} join={onHandleClick} submit={onHandleSubmit}/>
                    </Grid>
                </Grid>
                <MessageSnackBar status={SnackBar.status} messagetype={SnackBar.messageTpye} message={SnackBar.message} close={onHandleSnackBarClose}/>
                <EditCardDialog status={EditDialog.status} title={"Edit Profile"} close={onHandleClose} user={User} handleChange={onHandleChangeText} submit={onHandleSubmit}/>
                <CreateGroupDialog status={CreateDialog.status} newGroup={CreateDialog} title={"Create New Group"} close={onHandleClose} handleChange={onHandleChangeText} submit={onHandleSubmit}/>
                <JoinGroupDialog status={JoinDialog.status} access_token={JoinDialog.access_token} title={"Join New Group"} close={onHandleClose} handleChange={onHandleChangeText} submit={onHandleSubmit}/>
                <GroupInfoDialog status={GroupDialog.status} close={onHandleClose} groupInfo={GroupDialog.targetGroup} click={onHandleClick} handleChangePermission={onHandleChangePermission} submit={onHandleSubmit}/>
                <SelectMessageDialog status={SelectMissionDialog.status} type={SelectMissionDialog.type} mission={SelectMissionDialog} title={"Select Mission"} close={onHandleClose} handleChange={onHandleChangeText} submit={onHandleSubmit}/>
            </div>
        );
    }
}

export default UserPanel