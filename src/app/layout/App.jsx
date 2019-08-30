import React , {Component , Fragment} from 'react';
import {Container} from "semantic-ui-react";
import {Route , Switch , withRouter} from 'react-router-dom';

import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventsDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from '../../features/event/EventForm/EventForm';
import ModalManager from '../../features/modals/ModalManager';

class App extends Component {
  render(){
  return (
    <Fragment>
      <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route path="/(.+)" 
            render = {() => (
        <Fragment>
        <NavBar />
          <Container className="main">
            <Switch key ={this.props.location.key}>
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventsDetailedPage} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/people/:id' component={EventDashboard} />
            <Route path='/settings' component={SettingsDashboard} />
            <Route path={['/createEvent', '/manage/:id' ]} component={EventForm} />
            </Switch>
            </Container>
        </Fragment>
            )}/>
    </Fragment>
      
  );
  }
}

export default withRouter(App);

