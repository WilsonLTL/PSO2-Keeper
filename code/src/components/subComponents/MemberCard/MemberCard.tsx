import * as React from 'react';
import { Avatar, Card, CardContent, CardHeader, Divider, Fab, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

export default function ResponsiveMemberCard(props) {

    const Styles = {
        avatar: {
            backgroundColor: '#3C5A99',
        },
        submit_button: {
            backgroundColor: '#3C5A99'
        },
        memberCard: {
            height: "300px",
            minHeight: "100px",
            maxWidth: "600px",
            minWidth: "50px",
            borderRadius: "30px",
            boxShadow: "3px 3px grey",
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
            margin: "20px",
            color: "white"
        },
        inline: {
            display: 'grid',
        },
    }

    const user = props.user
    const click = props.click
    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar style={Styles.avatar} alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                    titleTypographyProps={{ variant: 'h5' }}
                    title="Your Profile" />
                <Divider />
                <CardContent>
                    <Fab id="edit-card" name="edit-card" color="secondary" size={"small"} aria-label="Edit" style={Styles.submit_button} onClick={() => click("Edit-profile")}>
                        <Icon id="edit-card">edit_icon</Icon>
                    </Fab>
                    <div style={Styles.memberCard}>
                        <div style={{ display: "grid" }}>
                            <div>
                                <Avatar style={Styles.creditCardIcon} alt="Remy Sharp" src="/images/icon/arks_logo_credit.png" />
                            </div>
                            <div>
                                <Avatar style={Styles.creditCardChip} alt="Remy Sharp" src="/images/icon/chip.png" />
                                <Avatar style={Styles.creditAvatar} alt="Remy Sharp" src={user.avatar} />
                            </div>
                        </div>
                        <div style={Styles.creditData}>
                            <Typography component="span" variant="overline">
                                {"User Name"}
                            </Typography>
                            <Typography component="span" variant="body2" >
                                {user.username}
                            </Typography>
                        </div>
                        <div style={Styles.creditData}>
                            <Typography component="span" variant="overline">
                                {"Email Address"}
                            </Typography>
                            <Typography component="span" variant="body2" >
                                {user.email}
                            </Typography>
                        </div>
                        <div style={Styles.creditData}>
                            <Typography component="span" variant="overline">
                                {"Register Date"}
                            </Typography>
                            <Typography component="span" variant="body2" >
                                {user.register_date}
                            </Typography>
                        </div>
                        <div style={Styles.creditData}>
                            <Typography component="span" variant="overline">
                                {"Level"}
                            </Typography>
                            <Typography component="span" variant="body2" >
                                {"Regular"}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    );
}