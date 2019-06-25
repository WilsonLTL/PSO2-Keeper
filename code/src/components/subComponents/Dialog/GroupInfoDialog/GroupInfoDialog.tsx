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

    const group = {
        img: "http://img.soogif.com/nF7fr7X0ny8hiYeCZdRmqS848j4WXE4V.gif_jpg",
        avatar: "https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/18157862_1175327462576972_6446174160084094492_n.jpg?_nc_cat=104&_nc_ht=scontent.fhkg4-2.fna&oh=a28bb65b5b72b1d9c46c0770d9adf0a4&oe=5D940F34",
        groupName: '康娜的日常',
        permission: 'Administrator',
        member: [
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1999678.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2014111.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2106255.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2038176.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1980899.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2007448.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.1986761.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2040341.jpg",
                permission: "Administrator"
            },
            {
                username: "Username",
                avatar: "https://s3.zerochan.net/Matoi.%28PSO2%29.240.2031898.jpg",
                permission: "Administrator"
            }
        ],
        mission: {
            custom_mission: [
                {
                    avatar: "https://pbs.twimg.com/media/D431dlTUEAAiAxb.jpg",
                    backImage: "https://pbs.twimg.com/media/DqwbhkeU0AAQwEz.jpg",
                    missionName: "終の艦隊迎撃戦",
                    quota: 16
                }
            ],
            template_mission: [
                {
                    avatar: "https://pbs.twimg.com/media/D431dlTUEAAiAxb.jpg",
                    backImage: "https://pbs.twimg.com/media/DqwbhkeU0AAQwEz.jpg",
                    missionName: "終の艦隊迎撃戦",
                    quota: 16
                }
            ]
        },
        status: true
    }

    return (
        <div>
            <Dialog
                key={props.title}
                fullScreen={false}
                open={props.status}
                onClose={props.close}
                fullWidth={true}
                maxWidth={"lg"}
                aria-labelledby="responsive-dialog-title"
            >
                <Card>
                    <div>
                        <CardMedia
                            style={Styles.cardMedia}
                            image={group.img}
                            title="Contemplative Reptile"
                        />
                        <GridListTileBar title={
                            <Avatar style={Styles.avatar} alt="Remy Sharp" src={group.avatar} />
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
                                            {group.mission.template_mission.map(item => (
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
                                            {group.mission.custom_mission.map(item => (
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
                                            {group.member.map(item => (
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
        </div>
    )
}