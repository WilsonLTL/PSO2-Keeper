import * as React from 'react';
import { Avatar, Button, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function ResponsiveDialog(props) {
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
        }
    }

    return (
      <div>
        <Dialog
          fullScreen={false}
          open={props.status}
          onClose={props.close}
          aria-labelledby="responsive-dialog-title"
        >
          <CardHeader style={Styles.bar} avatar={
                        <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                        titleTypographyProps={{ variant: 'h5' }}
                        title="PSO2-Keeper" />
          <DialogTitle style={Styles.title} id="responsive-dialog-title">{props.Title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{props.Text}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button style={Styles.button} variant="contained" color="primary" autoFocus={true} onClick={props.close}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }