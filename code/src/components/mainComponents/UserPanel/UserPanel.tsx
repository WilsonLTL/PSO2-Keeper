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
import { Grid } from '@material-ui/core';

// create infterface
export interface IProps {
    User: any,
    Groups: any,
    SnackBar: any,
    DashData: any,
    EditDialog: any,
    CreateDialog: any,
    JoinDialog: any,
    onHandleChangeText: () => void,
    onHandleSnackBarOpen: () => void,
    onHandleSnackBarClose: () => void,
    onHandleEditClick: () => void,
    onHandleEditClose: () => void,
    onHandleCreateClick: () => void,
    onHandleCreateClose: () => void,
    onHandleJoinClick: () => void,
    onHandleJoinClose: () => void,
    onHandleSubmitEdit: () => void,
    onHandleSubmitCreate: () => void,
    onHandleSubmitJoin: () => void,
}

const Styles = {
    background: {
        backgroundColor: "#EFEFEF",
        height: "100vh"
    }
}

// PureComponent with compontent control    
class UserPanel extends React.PureComponent<IProps> {
    public render() {
        const { CreateDialog, DashData, EditDialog, Groups, JoinDialog, SnackBar, User, 
            onHandleChangeText, onHandleSnackBarOpen, onHandleSnackBarClose, onHandleEditClick, onHandleEditClose, onHandleCreateClick, onHandleCreateClose, onHandleJoinClick, onHandleJoinClose, onHandleSubmitEdit, onHandleSubmitCreate, onHandleSubmitJoin 
        } = this.props;
        return(
            <div style={Styles.background}>
                <NavBar />
                <Grid style={{margin: "10px"}} direction="row" container={true} spacing={2}>
                    <Grid direction="column" container={true} item={true} xs={12} md={9} spacing={2}>
                        <Grid item={true} direction="row" container={true} spacing={2}>
                            <Grid item={true} xs={12} md={6}>
                                <MemberCard user={User} click={onHandleEditClick}/>
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Dashboard data={DashData}/>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <GroupCardList tileData={Groups} click={onHandleCreateClick}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} md={3}>
                        <GroupList tileData={Groups}  click={onHandleSnackBarOpen} join={onHandleJoinClick}/>
                    </Grid>
                </Grid>
                <MessageSnackBar status={SnackBar.status} messagetype={SnackBar.messageTpye} message={SnackBar.message} close={onHandleSnackBarClose}/>
                <EditCardDialog status={EditDialog.status} title={"Edit Profile"} close={onHandleEditClose} user={User} handleChange={onHandleChangeText} submit={onHandleSubmitEdit}/>
                <CreateGroupDialog status={CreateDialog.status} newGroup={CreateDialog} title={"Create New Group"} close={onHandleCreateClose} handleChange={onHandleChangeText} submit={onHandleSubmitCreate}/>
                <JoinGroupDialog status={JoinDialog.status} access_token={JoinDialog.access_token} title={"Join New Group"} close={onHandleJoinClose} handleChange={onHandleChangeText} submit={onHandleSubmitJoin}/>
            </div>
        );
    }
}

export default UserPanel