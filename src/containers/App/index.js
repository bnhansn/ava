// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';
import { fetchAccount } from './actions';
import Home from '../Home';
import Post from '../Post';
import NotFound from '../../components/NotFound';

type Props = {
  fetchAccount: () => void;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchAccount();
  }

  props: Props;

  render() { // eslint-disable-line
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
