import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAccount } from './actions';
import './styles.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    fetchAccount: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchAccount();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchAccount }
)(App);
