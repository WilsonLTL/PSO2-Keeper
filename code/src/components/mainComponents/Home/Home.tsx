import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, FormControlLabel, Grid, Switch, TextField } from '@material-ui/core';
import Message_Dialog from '../../subComponents/Dialog/MessageDialog'
import NavBar from '../../subComponents/NavBar'
// import LoginRegisterCard from './LoginRegisterCard'
import * as React from 'react';

// create infterface
export interface IProps {
    value : any,
    Email: string,
    Login: boolean,
    Dialog: boolean,
    Password: string
    Confirmpassword: string
    Username: string,
    Dialogtitle: string,
    Dialogtext: string,
    onHandleChange: () => void,
    onHandleChangeText: () => void,
    onClear: () => void,
    onHandleClickOpen: () => void,
    onHandleClose: () => void,
}

// easy modify css style
const Styles = {
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    AppBarBackgroundColor: {
        "backgroundColor": '#3C5A99'
    },
    card: {
        minWidth: 400,
        maxWidth: 700,
        marginBottom: '100px',
        fontSize: "100px"
    },
    media: {
        height: 200,
    },
    bar: {
        backgroundColor: '#3C5A99',
        color: "white",
        textAlign: "left" as "left"
    },
    submit_button: {
        backgroundColor: '#3C5A99'
    },
    form: {
        display: "grid"
    }
};

// PureComponent with compontent control
class Home extends React.PureComponent<IProps> {
    public render() {
        console.log(this.props)
        const { Confirmpassword, Dialog, Dialogtitle, Dialogtext, Email, Login, Password, Username, onHandleChange, onHandleChangeText, onClear, onHandleClickOpen, onHandleClose } = this.props;
        return (
            <div style={{backgroundImage: "url(images/icon/pso2_wallpaper2.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <NavBar/>
                <Grid style={{ height: '100vh' }} container={true} direction="row" justify="center" alignItems="center">
                    {/* <LoginRegisterCard/> */}
                    <div>
                        <Message_Dialog status={Dialog} close={onHandleClose} Title={Dialogtitle} Text={Dialogtext} />
                        <Card style={Styles.card}>
                            <CardMedia
                                style={Styles.media}
                                image="/images/icon/matoi_1.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardHeader style={Styles.bar} avatar={
                                <Avatar alt="Remy Sharp" src="/images/icon/arks_logo.png" />}
                                titleTypographyProps={{ variant: 'h5' }}
                                title="PSO2-Keeper" />
                            <CardContent>
                                <form style={Styles.form} noValidate={true} autoComplete="off">
                                    <FormControlLabel
                                        control={
                                            <Switch checked={Login} color="primary" onChange={onHandleChange} value="Login" />
                                        } label="Login/Register" />
                                    <TextField id="outlined-name" name="username" label="User Name" value={Username} margin="normal" variant="outlined" onChange={onHandleChangeText} />
                                    <TextField id="outlined-password-input" name="password" type="password" label="Password" value={Password} margin="normal" variant="outlined" onChange={onHandleChangeText} />
                                    {(Login === true) && <TextField id="outlined-confirm-password-input" name="confirmPassword" type="password" label="Confirm Password" value={Confirmpassword} margin="normal" variant="outlined" onChange={onHandleChangeText} />}
                                    {(Login === true) && <TextField id="outlined-email-input" name="email" type="email" autoComplete="email" label="Email Address" value={Email} margin="normal" variant="outlined" onChange={onHandleChangeText} />}
                                </form>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" color="default" onClick={onClear}>
                                    Clear
                                </Button>
                                <Button style={Styles.submit_button} variant="contained" color="primary" onClick={onHandleClickOpen}>
                                    Submit
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Home;

