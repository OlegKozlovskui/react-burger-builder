import React, {Component} from 'react';

import classes from './Layout.css';
import Aux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  state = {
    showSideDrawer: true
  };

  sideDrawerClosed = () => {
    this.setState({showSideDrawer: false})
  };

  sideDrawerToggle = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggle} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosed} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
};

export default Layout;