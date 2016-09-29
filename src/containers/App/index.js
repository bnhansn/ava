import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';
import { fetchAccount } from './actions';
import Home from '../Home';
import Post from '../Post';
import NotFound from '../../components/NotFound';

class App extends Component {
  static propTypes = {
    fetchAccount: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchAccount();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/blog/:slug" component={Post} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchAccount }
)(App);
