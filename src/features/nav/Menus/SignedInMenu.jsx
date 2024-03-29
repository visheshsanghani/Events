import React from 'react'
import { Image,Menu, Dropdown } from 'semantic-ui-react';
import {Link} from "react-router-dom";

const SignedInMenu = (props) => {
    return (
                    <Menu.Item position="right">
                      <Image avatar spaced="right" src='/assets/user.png' />
                      <Dropdown pointing="top right" text={props.currentUser}>
                        <Dropdown.Menu>
                          <Dropdown.Item text="Create Event" icon="plus" />
                          <Dropdown.Item text="My Events" icon="calendar" />
                          <Dropdown.Item text="My Network" icon="users" />
                          <Dropdown.Item text="My Profile" icon="user" />
                          <Dropdown.Item as = {Link} to = '/settings' text="Settings" icon="settings" />
                          <Dropdown.Item onClick = {props.signOut} text="Sign Out" icon="power" />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
    
    )
}

export default SignedInMenu
