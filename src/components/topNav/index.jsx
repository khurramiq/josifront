import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avtr from '../../assets/user.png';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ButtonDropDown from '../buttons/buttonDropDown';
import { logOut } from '../../redux/actions/userActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Rct from '../../assets/react.svg';
import ListLink from './list';

const NavStyle = {
    marginBottom: '30px',
    top: '0',
    position: 'fixed',
    width: '100%'
};

const ImageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '1000px',
    padding: '6px',
};

const LogoStyle = {
    width: '40px',
    height: '40px',
    padding: '6px 6px 8px 6px',
};

const ItemStyle = {
    minWidth: '150px'
};

const TypographyStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
};

const TopNav = ({
    isProfile,
    profile,
    logOut    
}) => {

    const responsive = useMediaQuery('(max-width: 992px)'),
        [isOpen, setOpen] = useState(false),
        [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setAnchorEl(null);
        logOut();
    }

    const items = [
        <MenuItem style={ItemStyle} onClick={handleClose} render="true" key="profile" >Profile</MenuItem>,
        <MenuItem style={ItemStyle} onClick={e => logout()} render="true" key="logout" >Logout</MenuItem>
    ];

    const renderHeading = (text) => <Typography component="h1">
        <Box
            fontSize="1em"
            fontWeight={600}
            letterSpacing={1}
            style={TypographyStyle}
            fontFamily="Roboto">
            {text}
        </Box>
    </Typography>

    const profileItem = () => <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
            {!responsive && <Grid item>
                <ListLink query={responsive} />
            </Grid>}
            <Grid item>
                <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                    <Grid item>
                        <ButtonDropDown anchorEl={anchorEl} handleClick={handleClick}
                            handleClose={handleClose} items={items} text={
                                renderHeading(isProfile && profile.name)
                            } />
                    </Grid>
                    <Grid item>
                        <img src={Avtr} style={ImageStyle} alt="User" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>

    return <Paper elevation={3} square style={NavStyle}>
        <Box bgcolor="#1769aa" color="#fff" style={{ padding: '0px 12px 0px 12px' }}>
            <Grid container direction="row" alignItems="center" justify="space-between" style={{ padding: '6px' }}>
                <Grid item>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                        <Grid item>
                            <img src={Rct} style={LogoStyle} alt="Logo" />
                        </Grid>
                        <Grid item>
                            {renderHeading('Survey App')}
                        </Grid>
                    </Grid>
                </Grid>
                {!responsive && profileItem()}
                {responsive && <Grid item>
                    <IconButton onClick={e => setOpen(!isOpen)} aria-label="Menu" style={{ color: 'white' }}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Grid>}
            </Grid>
            {responsive && <ListLink query={responsive} userType={profile.userType} isOpen={isOpen} profileItems={profileItem()} />}
        </Box>
    </Paper>
}

const mapStateToProps = state => {
    return {
        isProfile: state.User.isProfile,
        profile: state.User.profile,        
    }
}

export default connect(mapStateToProps, { logOut })(TopNav);