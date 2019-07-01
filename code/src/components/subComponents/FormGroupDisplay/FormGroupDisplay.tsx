import * as React from 'react';
import { Grid, Card, CardContent, Chip, Avatar, List, ListItem, Button, Icon, makeStyles, Theme, createStyles } from '@material-ui/core';
import clsx from 'clsx';

export default function ResponsiveFormGroupDisplay(props) {

    // const mission = props.mission
    const groupFormList = props.groupFormList
    const colorList = props.colorList

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            avatar: {
                // background: "#3C5A99",
                width: "225px",
                height: "225px"
            },
            listStyle: {
                width: '100%',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 450,
            },
            button: {
                background: "#3C5A99",
                margin: "0px 5px"
            },
            icon: {}
        }),
    );
    const classes = useStyles();

    // const groupNum = mission.quota/4/mission.teamAsGroup
    // const size = mission.teamAsGroup*3

    return (
        <div>
            {colorList.map((list, index) => (
                <Grid justify={"flex-start"} container={true} spacing={1} key={"id-"+index}>
                    <Grid item={true} xs={12} sm={"auto"}>
                        <Card>
                            <CardContent>
                                    <Button className={classes.button} style={{ color: "white" }} variant="contained">
                                        Group {index+1}
                                    </Button>
                                <Avatar alt="Remy Sharp" src={list.avatar} className={classes.avatar} />
                            </CardContent>
                        </Card>
                    </Grid>
                    {list.team.map((item) => (
                        <Grid item={true} xs={12} sm={"auto"} key={"id-"+item.name}>
                            <Card>
                                <CardContent>
                                    <Button className={classes.button} style={{ background: item.color, color: "white" }} variant="contained">
                                        Team {item.name}
                                    </Button>
                                    <List>
                                        {groupFormList.filter(x => x.team === item.name).map((member) => (
                                            <ListItem key={"id-"+member.username}>
                                                <Chip
                                                    avatar={<Avatar src={member.avatar} />}
                                                    color={member.color !== "" ? "primary" : "default"}
                                                    style={{ background: member.color, height: "36px" }}
                                                    label={member.username + " - " + member.class}
                                                    clickable={true}
                                                />
                                                {member.leader === true && <Button variant="contained" style={{ background: member.color, borderRadius: "30px" }} color="primary" className={classes.button}>
                                                    <Icon>label</Icon>
                                            </Button>}
                                                {member.class === "TE" && <Button variant="contained" style={{ background: member.color, borderRadius: "30px" }} color="primary" className={classes.button}>
                                                    <Icon className={clsx(classes.icon, 'fas fa-cross')} />
                                            </Button>}
                                                {member.class === "RA" && <Button variant="contained" style={{ background: member.color, borderRadius: "30px" }} color="primary" className={classes.button}>
                                                    <Icon className={clsx(classes.icon, 'fas fa-crosshairs')} />
                                            </Button>}
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </div>
    )
}