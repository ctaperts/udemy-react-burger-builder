import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleClicked = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleClicked}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  };
}

export default Layout;
