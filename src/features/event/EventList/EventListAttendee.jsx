import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image size = "mini" circular src={this.props.attendee.photoURL} />
            </List.Item>
        )
    }
}

export default EventListAttendee;