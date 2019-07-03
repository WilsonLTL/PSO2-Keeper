import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Button, Icon} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonGroup: {
            display: "flex"
        },
        button: {
            background: "#3C5A99",
            margin: theme.spacing(1),
        },
        card: {
            display: 'flex',
            // width: '1000px'
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
            // height: 151
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    }),
);

export default function ResponsiveGroupConrol(props) {

    const classes = useStyles();

    const mission = props.mission

    const memberNumber = props.member

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={mission.avatar}
                    title={mission.missionName}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {mission.missionName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Quota: {mission.quota}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Current Members: {memberNumber.length}
                        </Typography>
                        <div className={classes.buttonGroup}>
                            <Button variant="contained" color="primary" className={classes.button}>
                                <Icon>label</Icon>Leader
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                <Icon className={'fas fa-cross'}/>TE
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                <Icon className={'fas fa-crosshairs'}/>RA
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => props.click("Push-message")}>
                                <Icon className={'fas fa-envelope'}/>Push Message
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button} onClick={() => props.click("Join-mission")}>
                                <Icon className={'fas fa-sticky-note'}/>Join Form
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                <Icon className={'fas fa-check'} onClick={() => props.click("Finish")}/>Finish
                            </Button>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}