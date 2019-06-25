import * as React from 'react';
import { Avatar, Card, Dialog, CardContent, GridListTileBar, CardMedia, Grid, List, ListItem, Chip, CardHeader, Divider, Switch, ListItemSecondaryAction, GridListTile, Typography, Button, Fab, } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

export default function ResponsiveDialog(props) {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
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

    const Styles = {
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
        }
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
                        style={Styles.cardMedia}
                        image={props.groupInfo.img}
                        title="Contemplative Reptile"
                    />
                    <GridListTileBar title={
                        <Avatar style={Styles.avatar} alt="Remy Sharp" src={props.groupInfo.avatar} />
                    }
                        style={Styles.gridListTileBar}
                    />
                </div>
                <CardContent>
                    <Grid container={true} spacing={3}>
                        <Grid item={true} xs={12} sm={4}>
                            <Card>
                                <CardHeader avatar={
                                    <Avatar alt="Remy Sharp" src="/images/icon/arks_logo2.png" />}
                                    titleTypographyProps={{ variant: 'h5' }}
                                    title="Template Mission" />
                                <Divider />
                                <Fab id="create-group" color="secondary" size={"small"} aria-label="Edit" style={Styles.add_button} onClick={props.click}>
                                    <Icon id="create-group">add</Icon>
                                </Fab>
                                <CardContent>
                                    <List className={classes.listStyle}>
                                        {props.groupInfo.mission.template_mission.map(item => (
                                            <div>
                                                <ListItem key={item.missionName}>
                                                    <GridListTile>
                                                        <img style={{ borderRadius: "30px", maxHeight: "220px" }} src={item.backImage} alt={item.missionName} />
                                                        <GridListTileBar title={
                                                            <div>
                                                                <Avatar style={Styles.groupCardListIcon} alt="Remy Sharp" src={item.avatar} />
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Mission Name: {item.missionName}</Typography>
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Quota: {item.quota}</Typography>
                                                                <div>
                                                                    <Button name={item.missionName} style={Styles.edit_button} variant="contained" color="default">Edit</Button>
                                                                    <Button name={item.missionName} style={Styles.start_button} variant="contained" color="primary">Start</Button>
                                                                </div>
                                                            </div>
                                                        }
                                                            style={Styles.missionCardTitleBar}
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
                                <Fab id="create-group" color="secondary" size={"small"} aria-label="Edit" style={Styles.add_button} onClick={props.click}>
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
                                                                <Avatar style={Styles.groupCardListIcon} alt="Remy Sharp" src={item.avatar} />
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Mission Name: {item.missionName}</Typography>
                                                                <Typography component="div" variant="body2" style={{ textAlign: "center" as "center" }}>Quota: {item.quota}</Typography>
                                                                <div>
                                                                    <Button name={item.missionName} style={Styles.edit_button} variant="contained" color="default">Edit</Button>
                                                                    <Button name={item.missionName} style={Styles.start_button} variant="contained" color="primary">Start</Button>
                                                                </div>
                                                            </div>
                                                        }
                                                            style={Styles.missionCardTitleBar}
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
                                                            checked={item.permission === "Administrator" ? true : false}
                                                            value="checkedB"
                                                            color="primary"
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