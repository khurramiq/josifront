import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useLocation } from 'react-router-dom';

import './style.css';

export default ({ query, isOpen, profileItems }) => {      
    let location = useLocation();    
    const list = [
        <Link to='/'
            className={location.pathname === '/' ? 'link-item-active' : 'link-item'} render="true" >Home</Link>,
        <Link to='/my-tests'
            className={location.pathname === '/my-tests' ? 'link-item-active' : 'link-item'} render="true" >My Tests</Link>,
        <Link to='/take-test'
            className={location.pathname === '/take-test' ? 'link-item-active' : 'link-item'} render="true" >Take Test</Link>,       
        <Link to='/answers'
            className={location.pathname === '/answers' ? 'link-item-active' : 'link-item'} render="true" >Answers</Link>        
    ]

    const renderList = () => list.map((i, k) => i.props.render==="true" && <Grid item key={k}>{i}</Grid>)

    return <Grid container style={{ paddingLeft: '24px', paddingRight: '24px' }} direction={query ? 'column' : 'row'} alignItems="center" spacing={3}>
        {((query && isOpen) || !query) && <>
            {profileItems ? profileItems : ''}
            {renderList()}
        </>}
    </Grid>
}