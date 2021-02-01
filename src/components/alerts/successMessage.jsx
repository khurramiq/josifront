import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { clearSnack } from '../../redux/actions/userActions';
import { useHistory } from "react-router-dom";

const SnackBar = ({ clearSnack, isShow, text }) => {
    let history = useHistory();
    const handleClose = () => {
        clearSnack();
    }
    if (text === 'Logged in successfully' || text === 'Account registration successfully') {
        history.push("/");
    }
    else if (text === 'Survey added successfully') {
        history.push("/my-tests");
    }

    return <Snackbar open={isShow} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">            
            {text}
        </Alert>
    </Snackbar>
}

const mapStateToProps = state => {
    return {
        isShow: state.Snackbar.isShow,
        text: state.Snackbar.successText
    }
}

export default connect(mapStateToProps, { clearSnack })(SnackBar);