import * as React from 'react';
import { Avatar, Card, Dialog, CardContent, GridListTileBar, CardMedia, Grid, List, ListItem, Chip, CardHeader, Divider, Switch, ListItemSecondaryAction, GridListTile, Typography, Button, Fab, } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

export default function ResponsiveDialog(props) {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            avatar: {
                width: "200px",
                height: "200px",
                margin: "0px auto"
            },
            add_button: {
                margin: "10px 0px -10px 10px",
                backgroundColor: '#3C5A99'
            },
            cardMedia: {
                height: "300px",
            },
            gridListTileBar: {
                height: "300px",
                margin: "0",
                top: "0"
            },
            missionCardTitleBar: {
                borderRadius: "30px",
                height: "220px",
                margin: "0",
                top: "0"
            },
            groupCardListIcon: {
                width: "80px",
                height: "80px",
                margin: "0 auto"
            },
            start_button: {
                float: "right" as "right",
                margin: "0px 30px 0px 0px"
            },
            edit_button: {
                float: "left" as "left",
                margin: "0px 0px 0px 30px"
            },
            listStyle: {
                width: '100%',
                maxWidth: 360,
                position: 'relative',
                overflow: 'auto',
                maxHeight: 350,
            }
        }),
    );

    const classes = useStyles();

    const permissionUpdate = (event, item) => {
        item.permission === "Administrator" ? item.permission = "User" : item.permission = "Administrator"
        item.status = event.target.checked;
        props.handleChangePermission("Switch-permission")
    }

    return (
        <Dialog
            key={props.title}
            fullScreen={false}
            open={props.status}
            onClose={() => props.close("Click-group-info")}
            fullWidth={true}
            maxWidth={"lg"}
            aria-labelledby="responsive-dialog-title"
        >
            <Card>
                <div>
                    <CardMedia
                        className={classes.cardMedia}
                        image={props.groupInfo.img}
                        title="Contemplative Reptile"
                    />
                    <GridListTileBar title={
                        <div>
                            <Avatar className={classes.avatar} alt="Remy Sharp" src={props.groupInfo.avatar} />
                            <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Group Name: {props.groupInfo.groupName}</Typography>
                            <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Permission: {props.groupInfo.permission}</Typography>
                            <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Access Token: {props.groupInfo.access_token}</Typography>
                        </div>
                    }
                    className={classes.gridListTileBar}
                    />
                </div>
                <CardContent style={{backgroundColor: "#EFEFEF"}}>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12} sm={4}>
                            <Card>
                                <CardHeader avatar={
                                    <Avatar alt="Remy Sharp" src="/images/icon/arks_logo2.png" />}
                                    titleTypographyProps={{ variant: 'h5' }}
                                    title="Template Mission" />
                                <Divider />
                                <CardContent>
                                    <List className={classes.listStyle}>
                                        {props.groupInfo.mission.template_mission.map(item => (
                                            <div>
                                                <ListItem key={item.missionName}>
                                                    <GridListTile>
                                                        <img style={{ borderRadius: "30px", maxHeight: "220px", maxWidth: "310px" }} src={item.backImage} alt={item.missionName} />
                                                        <GridListTileBar title={
                                                            <div>
                                                                <Avatar className={classes.groupCardListIcon} alt="Remy Sharp" src={item.avatar} />
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Mission Name: {item.missionName}</Typography>
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Quota: {item.quota}</Typography>
                                                                <div>
                                                                    <Button name={item.missionName} className={classes.edit_button} disabled={props.groupInfo.permission === "Administrator" ? false:true} variant="contained" color="default" onClick={() => props.click("Select-mission",{type: "edit", mission: item})}>Edit</Button>
                                                                    <Button name={item.missionName} className={classes.start_button} disabled={props.groupInfo.permission === "Administrator" ? false:true} variant="contained" color="primary" onClick={() => props.submit("Group-form")}>Start</Button>
                                                                </div>
                                                            </div>
                                                        }
                                                        className={classes.missionCardTitleBar}
                                                        />
                                                    </GridListTile>
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} sm={4}>
                            <Card>
                                <CardHeader avatar={
                                    <Avatar alt="Remy Sharp" src="/images/icon/arks_logo2.png" />}
                                    titleTypographyProps={{ variant: 'h5' }}
                                    title="Custom Mission" />
                                <Divider />
                                <Fab id="create-group" color="secondary" size={"small"} aria-label="Edit" className={classes.add_button} disabled={props.groupInfo.permission === "Administrator" ? false:true} onClick={() => props.click("Select-mission",{type: "create"})}>
                                    <Icon id="create-group">add</Icon>
                                </Fab>
                                <CardContent>
                                    <List className={classes.listStyle}>
                                        {props.groupInfo.mission.custom_mission.map(item => (
                                            <div>
                                                <ListItem key={item.missionName}>
                                                    <GridListTile>
                                                        <img style={{ borderRadius: "30px", maxHeight: "220px" }} src={item.backImage} alt={item.missionName} />
                                                        <GridListTileBar title={
                                                            <div>
                                                                <Avatar className={classes.groupCardListIcon} alt="Remy Sharp" src={item.avatar} />
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Mission Name: {item.missionName}</Typography>
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Quota: {item.quota}</Typography>
                                                                <div>
                                                                    <Button name={item.missionName} className={classes.edit_button} disabled={props.groupInfo.permission === "Administrator" ? false:true} variant="contained" color="default">Edit</Button>
                                                                    <Button name={item.missionName} className={classes.start_button} disabled={props.groupInfo.permission === "Administrator" ? false:true} variant="contained" color="primary">Start</Button>
                                                                </div>
                                                            </div>
                                                        }
                                                        className={classes.missionCardTitleBar}
                                                        />
                                                    </GridListTile>
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} sm={4}>
                            <Card>
                                <CardHeader avatar={
                                    <Avatar alt="Remy Sharp" src="/images/icon/arks_logo2.png" />}
                                    titleTypographyProps={{ variant: 'h5' }}
                                    title="Member List" />
                                <Divider />
                                <CardContent>
                                    <List className={classes.listStyle}>
                                        {props.groupInfo.member.map(item => (
                                            <div>
                                                <ListItem key={item.username}>
                                                    <Chip
                                                        avatar={<Avatar src={item.avatar} />}
                                                        label={item.username + " - " + item.permission}
                                                        color={item.permission === "Administrator" ? "primary" : "default"}
                                                        variant="outlined"
                                                        clickable={true}
                                                    />
                                                    <ListItemSecondaryAction>
                                                        <Switch
                                                            checked={item.status}
                                                            value={item.status}
                                                            color="primary"
                                                            disabled={props.groupInfo.permission === "Administrator" ? false:true}
                                                            onChange={(event) => {permissionUpdate(event,item)}}
                                                        />
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Dialog>
    )
}