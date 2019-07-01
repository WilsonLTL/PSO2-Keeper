import * as React from 'react';
import { Dialog, CardHeader, Avatar, DialogContent, DialogContentText, DialogActions, Button, makeStyles, Theme, createStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export default function ResponsiveDialog(props) {
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
          formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
    }));

    const classes = useStyles();

    const joinDialog = props.joinDialog

    const change = props.change

    const classLabel = ["HU","FI","GU","FO","TE","BR","BO","SU","HR","PH"]
    return (
        <div>
          <Dialog
            fullScreen={false}
            open={props.status}
            onClose={() => props.close("Join-group")}
            disableBackdropClick={true}
            aria-labelledby="responsive-dialog-title"
          >
            <CardHeader className={classes.bar} avatar={
              <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
              titleTypographyProps={{ variant: 'h5' }}
              title={props.title} />
            <DialogContent >
                <DialogContentText>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-simple">
                    Class
                    </InputLabel>
                    <Select
                    value={joinDialog.class}
                    onChange={() => change("Change-class")}
                    inputProps={{
                        name: 'class',
                        id: 'class',
                      }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {classLabel.map(item => (
                        <MenuItem value={item}>{item}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </DialogContentText>
              </DialogContent>
            <DialogActions>
              <Button name="create-dialog-cancel" variant={"outlined"} onClick={() => props.close("Join-mission")}>
                Cancel
              </Button>
              <Button className={classes.button} variant="contained" color="primary" autoFocus={true} onClick={() => props.submit("Join-mission")}>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}