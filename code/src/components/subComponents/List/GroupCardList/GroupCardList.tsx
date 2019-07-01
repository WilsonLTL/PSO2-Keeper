import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Divider, Fab, GridList, GridListTile, GridListTileBar, Typography, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
export default function ResponsiveGroupCardList(props) {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            avatar: {
                backgroundColor: '#3C5A99',
            },
            submit_button: {
                margin: "10px",
                backgroundColor: '#3C5A99'
            },
            start_button: {
                width: "100%",
                borderRadius: "30px"
            },
            groupCardListIcon: {
                width: "80px",
                height: "80px",
                margin: "0 auto"
            },
            gridListTileBar: {
                borderRadius: "30px",
                height: "100%",
                margin: "0"
            },
            inline: {
                display: 'grid',
                textAlign: "center" as "center"
            },
            gridList: {
                flexWrap: 'nowrap',
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
            },
            title: {
                margin: "0 auto",
                width: "80px",
                height: "80px"
              },
        }),
    );

    const classes = useStyles();

    const tileData = props.tileData

    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar} alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                                titleTypographyProps={{ variant: 'h5' }}
                                title="Your Group" />
                <Divider />
                <CardContent>
                    <Fab id="create-group" color="secondary" size={"small"} aria-label="Edit" className={classes.submit_button} onClick={() => props.click("Create-group")}>
                        <Icon id="create-group">add</Icon>
                    </Fab>
                    <GridList className={classes.gridList} cols={4} cellHeight={220} >
                        {tileData.map(item => (
                            <GridListTile key={item.img} >
                                <img style={{borderRadius: "30px",maxHeight: "220px"}} src={item.img} alt={item.groupName} />
                                <GridListTileBar classes={{title: classes.title,}} title={
                                    <Avatar className={classes.groupCardListIcon} alt="Remy Sharp" src={item.avatar} />
                                } 
                                subtitle={
                                    <React.Fragment>
                                        <Typography component="div" variant="subtitle1" className={classes.inline} >
                                            {"Group Name: "+ item.groupName}
                                        </Typography>
                                        <Typography component="div" variant="subtitle1" className={classes.inline} >
                                            {"Permission: "+ item.permission}
                                        </Typography>
                                        <div>
                                            <Button name={item.groupName} className={classes.start_button} variant="contained" color="primary" onClick={() => props.clickListItem("Click-group-info",item.groupName)}>More</Button>
                                        </div>
                                    </React.Fragment>
                                } 
                                className={classes.gridListTileBar}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </CardContent>
            </Card>
        </div>
    );
}