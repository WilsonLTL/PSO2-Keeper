import * as React from 'react';
import { Avatar, Button, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardContent, TextField, GridListTile, GridListTileBar, makeStyles, Theme, createStyles} from '@material-ui/core';

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
  const newGroup = props.newGroup
  return (
    <div>
      <Dialog
        key={props.title}
        fullScreen={false}
        open={props.status}
        onClose={() => props.close("Create-group")}
        disableBackdropClick={true}
        aria-labelledby="responsive-dialog-title"
      >
        <CardHeader className={classes.bar} avatar={
          <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
          titleTypographyProps={{ variant: 'h5' }}
          title={props.title} />
        <DialogTitle className={classes.title} id="dialog-title">{title}</DialogTitle>
        <CardContent>
          <GridListTile key={newGroup.backImage}>
            <img style={{ borderRadius: "30px", maxHeight: "220px" }} src={newGroup.backImage} alt={newGroup.groupName} />
            <GridListTileBar title={
              <Avatar className={classes.groupCardListIcon} alt="Remy Sharp" src={newGroup.avatar} />
            }
            className={classes.gridListTileBar}
            />
          </GridListTile>
          <DialogContent >
            <DialogContentText>
              <form className={classes.form} noValidate={true} autoComplete="on">
                <TextField id="dialog-avatar" name="new-group-avatar" label="Avatar" value={newGroup.avatar} margin="normal" variant="outlined" onChange={props.handleChange} />
                <TextField id="dialog-backImage" name="new-group-backImage" label="Background Image" value={newGroup.backImage} margin="normal" variant="outlined" onChange={props.handleChange} />
                <TextField id="dialog-name" name="new-group-username" label="Group Name" value={newGroup.groupName} margin="normal" variant="outlined" onChange={props.handleChange} />
              </form>
            </DialogContentText>
          </DialogContent>

        </CardContent>
        <DialogActions>
          <Button name="create-dialog-cancel" variant={"outlined"} onClick={() => props.close("Create-group")}>
            Cancel
          </Button>
          <Button className={classes.button} variant="contained" color="primary" autoFocus={true} onClick={() => props.submit("Create-group")}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}