import React, {Component} from 'react';
import { Icon, Image, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import './css/navbar.css';
import StatusBPJS from './statusbpjs'

class Navbar extends Component {
  render() {
    return (
      <Grid className='navbar'>        
        <Grid.Row className='navbarinformation'>
          <Grid.Column mobile={12} computer={12}>
            <p className='nav-text'>Poliklinik Events</p>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}textAlign='right'>
            <Icon name='setting' size='large'/>
            <Icon name='help circle' size='large'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center' className='nav-icon'>
          <Grid.Column mobile={4} computer={4}>
            <NavLink to='/bpjsvalidation' activeClassName="active">
            <Icon link name='check square' size='big'/>
            </NavLink>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}>
           <NavLink to='/b' activeClassName="active">
            <Icon link name='doctor' size='big'/>
            </NavLink>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}>
           <NavLink to='/c' activeClassName="active">
            <Icon name='calendar' size='big'/>
            </NavLink>
          </Grid.Column>
          <Grid.Column mobile={4} computer={4}>
           <NavLink to='/d' activeClassName="active">
            <Icon name='user' size='big'/>
            </NavLink>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Navbar;


