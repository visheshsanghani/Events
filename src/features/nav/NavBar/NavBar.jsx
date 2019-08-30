import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Menu , Container , Button } from "semantic-ui-react";
import {NavLink , Link , withRouter} from "react-router-dom";
import { openModal } from '../../modals/modalActions';
import {logout} from '../../auth/authActions';

import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

const dispatchStateToProps ={
  openModal : openModal,
  logout : logout
}

const mapStateToProps = state =>({
  auth : state.auth
})

class NavBar extends Component {

    handleSignIn = () => this.props.openModal('LoginModal')

    handleRegister = () => this.props.openModal('RegisterModal')

    handleSignOut = () => {
      this.props.logout();
      this.props.history.push('/')
    }

    render() {
        return (
                      <Menu inverted fixed="top">
                        <Container>
                          <Menu.Item exact as = {NavLink} to="/" header>
                            <img src="assets/logo.png" alt="logo" />
                            Re-vents
                          </Menu.Item>
                          <Menu.Item exact  as = {NavLink} to="/events" name="Events" />
                          {this.props.auth.authenticated &&
                          <Menu.Item as = {NavLink} to="/people" name="People" />}
                          {this.props.auth.authenticated && <Menu.Item>
                            <Button 
                            as = {Link}
                            to = "/createEvent"
                            floated="right" 
                            positive inverted 
                            content="Create Event" />
                          </Menu.Item>}
                          {this.props.auth.authenticated ? 
                          <SignedInMenu signOut = {this.handleSignOut}
                          currentUser = {this.props.auth.currentUser}
                          /> 
                          : 
                          <SignedOutMenu signIn = {this.handleSignIn}  
                          register = {this.handleRegister} />}
                        </Container>
                      </Menu>
        )
    }
}

export default withRouter (connect(mapStateToProps,dispatchStateToProps)(NavBar));