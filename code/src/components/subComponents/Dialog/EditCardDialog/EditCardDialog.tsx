import * as React from 'react';
import { Avatar, Button, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent, Typography, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';
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
          memberCard: {
            height: "300px",
            minHeight: "100px",
            maxWidth: "600px",
            minWidth: "50px",
            borderRadius: "30px",
            boxShadow: "4px 4px #EFEFEF",
            background: "linear-gradient(#90A1EF, #E4A2F5)",
            margin: "0 auto"
          },
          creditCardIcon: {
              height: 70,
              width: 130,
              padding: "10px",
              float: "right" as "right",
          },
          creditCardChip: {
              height: 70,
              width: 130,
              padding: "10px",
              float: "left" as "left",
          },
          credirCardHeader: {
              margin: "10px 10px 0px 0px",
              color: "white",
          },
          creditAvatar: {
              float: "right" as "right",
              width: 120,
              height: 120,
              margin: "0px 10px 0px 10px"
          },
          creditData: {
              display: "inline-grid",
              margin:"20px",
              color: "white"
          },
          inline: {
              display: 'grid',
          }
        }),
    );

    const classes = useStyles();

  const user = props.user
  const title = props.Title
  return (
    <div>
      <Dialog
        key={props.title}
        fullScreen={false}
        open={props.status}
        onClose={() => props.close("Edit-profile")}
        disableBackdropClick={true}
        aria-labelledby="responsive-dialog-title"
      >
        <CardHeader className={classes.bar} avatar={
          <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
          titleTypographyProps={{ variant: 'h5' }}
          title={props.title} />
        <CardContent>
          <div className={classes.memberCard}>
            <div style={{ display: "grid" }}>
              <div>
                <Avatar className={classes.creditCardIcon} alt="Remy Sharp" src="/images/icon/arks_logo_credit.png" />
              </div>
              <div>
                <Avatar className={classes.creditCardChip} alt="Remy Sharp" src="/images/icon/chip.png" />
                <Avatar className={classes.creditAvatar} alt="Remy Sharp" src={user.avatar} />
              </div>
            </div>
            <div className={classes.creditData}>
              <Typography component="span" variant="overline">
                {"User Name"}
              </Typography>
              <Typography component="span" variant="body2" >
                {user.username}
              </Typography>
            </div>
            <div className={classes.creditData}>
              <Typography component="span" variant="overline">
                {"Email Address"}
              </Typography>
              <Typography component="span" variant="body2" >
                {user.email}
              </Typography>
            </div>
            <div className={classes.creditData}>
              <Typography component="span" variant="overline">
                {"Register Date"}
              </Typography>
              <Typography component="span" variant="body2" >
                {user.register_date}
              </Typography>
            </div>
            <div className={classes.creditData}>
              <Typography component="span" variant="overline">
                {"Level"}
              </Typography>
              <Typography component="span" variant="body2" >
                {"Regular"}
              </Typography>
            </div>
          </div>
        </CardContent>
        <DialogTitle className={classes.title} id="dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form className={classes.form} noValidate={true} autoComplete="on">
              <TextField id="dialog-avatar" name="edit-avatar" label="Avatar" value={user.avatar} margin="normal" variant="outlined" onChange={props.handleChange} />
              <TextField id="dialog-name" name="edit-username" label="User Name" value={user.username} margin="normal" variant="outlined" onChange={props.handleChange} />
              <TextField id="dialog-password-input" name="edit-password" type="password" label="Password" value={user.password} margin="normal" variant="outlined" onChange={props.handleChange} />
              <TextField id="dialog-email-input" name="edit-email" type="email" autoComplete="email" label="Email Address" value={user.email} margin="normal" variant="outlined" onChange={props.handleChange} />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button name="edit-cancel" variant={"outlined"} autoFocus={true} onClick={() => props.close("Edit-profile")}>
            Cancel
            </Button>
          <Button name="edit-submit" className={classes.button} variant="contained" color="primary" autoFocus={true} onClick={() => props.submit("Edit-profile")}>
            Confirm
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}