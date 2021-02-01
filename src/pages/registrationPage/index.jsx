import React, { useState } from 'react';
import InputText from '../../components/inputs/text';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '../../components/buttons/buttonForms';
import FormHeadings from '../../components/headings/formHeading';
import Alert from '@material-ui/lab/Alert';
import InputPass from '../../components/inputs/password';
import { registerUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const containerStyle = {
    minHeight: '100vh',
};

const cardStyle = {
    padding: '40px 30px 40px 30px',
    borderRadius: '12px',
    marginTop: '30px',
    marginBottom: '30px'
};

const linkStyle = {
    color: '#2d3436'
}

const Register = ({ err, errorText, registerUser }) => {
    const [name, setName] = useState('')
        , [alias, setAlias] = useState('')
        , [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();
        let data = { email, password, name, alias };
        registerUser(data);
    }

    return <form onSubmit={submit}>
        <Grid container spacing={3} alignItems="center" justify="center" style={containerStyle}>
            <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
                <Paper elevation={3} style={cardStyle}>
                    <Grid container spacing={3} alignItems="center" justify="center">
                        <FormHeadings heading="Register now" subheading="Create your account" />
                        <Grid item xs={12}>
                            <Grid container direction="row" spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <InputText name="name" variant="outlined" type="text" required={true} value={name} label="Name" handleInput={e => setName(e.target.value)} />
                                </Grid>
                                 <Grid item sm={6} xs={12}>
                                    <InputText name="alias" variant="outlined" type="text" required={false} value={alias} label="Alias" handleInput={e => setAlias(e.target.value)} />
                                </Grid>
                            </Grid>
                        </Grid>
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
                        <Button text={"Sign Up"} />
                        <Grid item>
                            <Typography component="h1">
                                <Box
                                    style={linkStyle}
                                    fontSize="0.9em"
                                    fontWeight={500}
                                    textAlign="center"
                                    fontFamily="Roboto">
                                    Already have an account? <Link to='/login'>Login here</Link>
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
        err: state.User.isRegError,
        errorText: state.User.errorText
    }
}

export default connect(mapStateToProps, { registerUser })(Register);