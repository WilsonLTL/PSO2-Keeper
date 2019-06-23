import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@material-ui/core'
import * as React from 'react';

export default function ResponsiveNavBar() {
    const Styles = {
        AppBarBackgroundColor: {
            "backgroundColor": '#3C5A99'
        },
    }

    return (
        <div>
            <AppBar style={Styles.AppBarBackgroundColor} position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />
                    </IconButton>
                    <Typography variant="h6">
                        PSO2-Keeper
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
  }

  