import * as React from 'react';
import { Avatar, Button, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';

export default function ResponsiveDialog(props) {

  const useStyles = makeStyles((theme: Theme) =>
        createStyles({
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
        }),
    );

    const classes = useStyles();

  const title = props.Title
  
  return (
    <div>
      <Dialog
        key={props.title}
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
        <DialogTitle className={classes.title} id="dialog-title">{title}</DialogTitle>
        <DialogContent >
            <DialogContentText>
              <form className={classes.form} noValidate={true} autoComplete="on">
                <TextField id="dialog-access-token" name="new-group-access-token" label="Access Token" value={props.access_token} margin="normal" variant="outlined" onChange={props.handleChange} />
              </form>
            </DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button name="create-dialog-cancel" variant={"outlined"} onClick={() => props.close("Join-group")}>
            Cancel
          </Button>
          <Button className={classes.button} variant="contained" color="primary" autoFocus={true} onClick={() => props.submit("Join-group")}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}