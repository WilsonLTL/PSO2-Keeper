import * as React from 'react';
import { Avatar, Badge, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, Icon, makeStyles, Theme, createStyles } from '@material-ui/core'

export default function ResponsiveGroupList(props) {

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        background: {
            borderColor: "coral",
        },
        inline: {
            display: 'grid',
        }
    }),
  );

  const classes = useStyles();

    const tileData = props.tileData

    const click = props.click

    const join = props.join

    return (
        <div className={classes.background}>
            <Card>
                <List className={classes.root}>

                    {tileData.map(tile => (
                        <div key={tile.groupName}>
                            <ListItem button={true} alignItems="flex-start" onClick={tile.status ? () => props.submit("Group-form") : click }>
                                <ListItemAvatar >
                                    <div>
                                        {
                                            (tile.status) ?
                                            <Badge badgeContent={<Icon style={{ color: "#3C5A99" }}>new_releases</Icon>} >
                                                <Avatar alt="Remy Sharp" src={tile.avatar} />
                                            </Badge> : <Avatar alt="Remy Sharp" src={tile.avatar} />
                                        }

                                    </div>
                                </ListItemAvatar>
                                <ListItemText
                                    secondary={
                                        <React.Fragment>
                                            <Typography component="span" variant="overline" className={classes.inline} color="textSecondary" >
                                                {"Group Name"}
                                            </Typography>
                                            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary" >
                                                {tile.groupName}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                    { props.type === "User-panel" &&
                        <ListItem key={"new_item"} button={true} alignItems="flex-start" onClick={() =>join("Join-group")}>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/images/icon/matoi_icon.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" variant="overline" className={classes.inline} color="textSecondary" >
                                            {"Click to join new group"}
                                        </Typography>
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary" >
                                            {"Click to join new group"}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    }
                </List>
            </Card>
        </div>
    );
}