import * as React from 'react';
import { Dialog, CardHeader, Avatar, CardContent, GridListTile, GridListTileBar, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';

export default function ResponsiveDialog(props) {

    const mission = props.mission.mission

    const Styles = {
        title: {
          color: '#3C5A99',
          textAlign: "center" as "center"
        },
        bar: {
          backgroundColor: '#3C5A99',
          color: "white",
          textAlign: "left" as "left",
          maxHeight: "30px"
        },
        button: {
          backgroundColor: '#3C5A99',
        },
        form: {
          display: "grid"
        },
        creditAvatar: {
          width: 120,
          height: 120,
          margin: "0px auto"
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
    }

    return (
        <Dialog
            key={props.title}
            fullScreen={false}
            open={props.status}
            onClose={() => props.close("Select-message")}
            disableBackdropClick={true}
            aria-labelledby="responsive-dialog-title"
        >
            <CardHeader style={Styles.bar} avatar={
                <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                titleTypographyProps={{ variant: 'h5' }}
                title={props.title} />
            <CardContent>
                <GridListTile>
                    <img style={{ borderRadius: "30px", maxHeight: "220px" }} src={mission.backImage} />
                    <GridListTileBar title={
                        <Avatar style={Styles.groupCardListIcon} alt="Remy Sharp" src={mission.avatar} />
                    }
                        style={Styles.gridListTileBar}
                    />
                </GridListTile>
                <DialogContent >
                    <DialogContentText>
                        <form style={Styles.form} noValidate={true} autoComplete="on">
                            <TextField id="dialog-avatar" name="select-mission-avatar" label="Avatar" value={mission.avatar} margin="normal" variant="outlined" onChange={props.handleChange} />
                            <TextField id="dialog-backImage" name="select-mission-backImage" label="Background Image" value={mission.backImage} margin="normal" variant="outlined" onChange={props.handleChange} />
                            <TextField id="dialog-name" name="select-mission-missionName" label="Mission Name" value={mission.missionName} margin="normal" variant="outlined" onChange={props.handleChange} />
                            <TextField id="dialog-name" name="select-mission-quota" label="Quota" value={mission.quota} type="number" margin="normal" variant="outlined" onChange={props.handleChange} />
                            <TextField id="dialog-name" name="select-mission-team_as_group" label="Team as One Group" value={mission.teamAsGroup} type="number" margin="normal" variant="outlined" onChange={props.handleChange} />
                        </form>
                    </DialogContentText>
                </DialogContent>

            </CardContent>
            <DialogActions>
                <Button name="create-dialog-cancel" variant={"outlined"} onClick={() => props.close("Select-message")}>
                    Cancel
                </Button>
                <Button style={Styles.button} variant="contained" color="primary" autoFocus={true} onClick={() => props.submit("Select-message",props.type)}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}