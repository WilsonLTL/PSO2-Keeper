import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Divider, Fab, GridList, GridListTile, GridListTileBar, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
export default function ResponsiveGroupCardList(props) {

    const Styles = {
        avatar: {
            backgroundColor: '#3C5A99',
        },
        submit_button: {
            margin: "10px",
            backgroundColor: '#3C5A99'
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
    }


    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
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
                        <Avatar style={Styles.avatar} alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                                titleTypographyProps={{ variant: 'h5' }}
                                title="Your Group" />
                <Divider />
                <CardContent>
                    <Fab id="create-group" color="secondary" size={"small"} aria-label="Edit" style={Styles.submit_button} onClick={props.click}>
                        <Icon id="create-group">add</Icon>
                    </Fab>
                    <GridList className={classes.gridList} cols={4} cellHeight={220} >
                        {tileData.map(tile => (
                            <GridListTile key={tile.img}>
                                <img style={{borderRadius: "30px",maxHeight: "220px"}} src={tile.img} alt={tile.groupName} />
                                <GridListTileBar classes={{title: classes.title,}} title={
                                    <Avatar style={Styles.groupCardListIcon} alt="Remy Sharp" src={tile.avatar} />
                                } 
                                subtitle={
                                    <React.Fragment>
                                        <Typography component="div" variant="subtitle1" style={Styles.inline} >
                                            {"Group Name: "+ tile.groupName}
                                        </Typography>
                                        <Typography component="div" variant="subtitle1" style={Styles.inline} >
                                            {"Permission: "+ tile.permission}
                                        </Typography>
                                    </React.Fragment>
                                } 
                                style={Styles.gridListTileBar}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </CardContent>
            </Card>
        </div>
    );
}