import React, { useState } from 'react';
import InputText from '../../components/inputs/text';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/buttons/buttonForms';
import FormHeadings from '../../components/headings/formHeading';
import InputPass from '../../components/inputs/password';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

const containerStyle = {
    minHeight: '100vh',
};

const cardStyle = {
    padding: '40px 30px 40px 30px',
    borderRadius: '12px',
    marginTop:'30px',
    marginBottom:'30px'
};

const linkStyle = {
    color: '#2d3436'
}

const Login = ({ err, errorText, Auth, loginUser }) => {
    const [email, setEmail] = useState('')
        , [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();
        let data = { email, password };
        loginUser(data);         
    }    

    return <form onSubmit={submit}>
            <Grid container spacing={3} alignItems="center" justify="center" style={containerStyle}>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                    <Paper elevation={3} style={cardStyle}>
                        <Grid container spacing={3} alignItems="center" justify="center">
                            <FormHeadings heading="Signin here" subheading="Log in to your account" />
                            <Grid item xs={12}>
                                <InputText name="email" variant="outlined" type="email" required={true} value={email} label="Email" handleInput={e => setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <InputPass name="password" value={password} label="Password" handleInput={e => setPassword(e.target.value)} />
                            </Grid>
                            {err && <Grid item xs={12}>
                                <Alert variant="filled" severity="error">
                                    {errorText}
                                </Alert>
                            </Grid>}
                            <Button text={"Login"} />
                                  <Grid item>
                                <Typography component="h1">
                                    <Box
                                        style={linkStyle}
                                        fontSize="0.9em"
                                        fontWeight={500}
                                        textAlign="center"
                                        fontFamily="Roboto">
                                        Don't have an account? <Link to='/register'>Register here</Link>
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </form>
};

const mapStateToProps = state => {
    return {
        err: state.User.isLoginError,
        errorText: state.User.errorText,
        Auth: state.User.Auth,
    }
}

export default connect(mapStateToProps, { loginUser })(Login);