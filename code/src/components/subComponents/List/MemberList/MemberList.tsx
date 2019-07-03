import * as React from 'react';

import { Card, Avatar, Divider, CardContent, List, ListItem, Chip, makeStyles, Theme, createStyles, Checkbox, Button, Menu, MenuItem, Icon } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function ResponsiveMemberList(props) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            listStyle: {
                width: '100%',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 450,
            },
            button: {
                background: "#3C5A99",
                margin: theme.spacing(1),
            },
        }),
    );
    const classes = useStyles();

    return (
        <div>
            <Card>
                {/* <CardHeader avatar={
                    <Avatar alt="Remy Sharp" src="/images/icon/arks_logo2.png" />}
                    titleTypographyProps={{ variant: 'h5' }}
                    title="Member List" />
                <Divider /> */}
                <CardContent>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {popupState => (
                            <React.Fragment>
                                <Button className={classes.button} color="primary" variant="contained" {...bindTrigger(popupState)}>
                                    <Icon className={'fas fa-palettefas fa-palette'}/>Assign Team
                                 </Button>
                                <Menu {...bindMenu(popupState)}>
                                    {props.colorList.map(item => (
                                        item.team.map(x => (
                                            <MenuItem onClick={() => {
                                                popupState.close()
                                                props.submit("assign-team",x.name)
                                            }} key={"id-"+x.name}>{x.name}</MenuItem>
                                        ))
                                    ))}
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState >
                    <Button className={classes.button} color="primary" variant="contained" onClick={() => props.submit("assign-leader")}>
                        <Icon className={'fas fa-star'} />Assign Leader
                    </Button>
                    <List className={classes.listStyle}>
                        {props.memberList.map(item => (
                            <div key={"id-"+item.username}>
                                <ListItem key={item.username}>
                                    <Checkbox
                                        edge="start"
                                        tabIndex={-1}
                                        disableRipple={true}
                                        value={item.checked}
                                        onChange={() => props.change("checkbox",item.username)}
                                        inputProps={{ 'aria-labelledby': item.username }}
                                    />
                                    <Chip
                                        avatar={<Avatar src={item.avatar} />}
                                        color={item.color !== "" ? "primary":"default"}
                                        style={{background:item.color, height: "36px"}}
                                        label={item.username + " - " + item.class}
                                        clickable={true}
                                    />
                                    {item.leader === true && <Button variant="contained" style={{background: item.color, borderRadius: "30px"}} color="primary" className={classes.button}>
                                        <Icon>label</Icon>Leader
                                    </Button> }
                                    {item.class === "TE" &&  <Button variant="contained" style={{background: item.color, borderRadius: "30px"}} color="primary" className={classes.button}>
                                        <Icon className={'fas fa-cross'}/>TE
                                    </Button> }
                                    {item.class === "RA" && <Button variant="contained" style={{background: item.color, borderRadius: "30px"}} color="primary" className={classes.button}>
                                        <Icon className={'fas fa-crosshairs'}/>RA
                                    </Button>}
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}