import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import { fetchPosts, fetchMorePosts } from './actions';
import HomeHeader from '../../components/HomeHeader';
import PostPreview from '../../components/PostPreview';
import PostPreviewTemplate from '../../components/PostPreviewTemplate';
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
} from './constants';
import {
  FETCH_ACCOUNT_PENDING,
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_FAILURE,
} from '../App/constants';

const styles = StyleSheet.create({
  siteHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '400px',
    padding: '0 15px',
    marginBottom: '4rem',
    color: '#fff',
    backgroundColor: 'rgb(60,65,70)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  button: {
    padding: '.5rem .75rem',
    color: 'rgb(160,165,170)',
    background: '#fff',
    border: '1px solid rgb(160,165,170)',
    borderRadius: '3px',
    ':hover': {
      color: 'rgb(140,145,170)',
      border: '1px solid rgb(140,145,170)',
      cursor: 'pointer',
    },
  },
});

class Home extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    fetchMorePosts: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
    };
  }

  componentDidMount() {
    const { page, limit } = this.state;
    this.props.fetchPosts({ page, limit });
  }

  loadMorePosts() {
    const { page, limit } = this.state;
    this.props.fetchMorePosts({ page, limit });
  }

  handlePagination = () => {
    this.setState({
      page: this.props.posts.meta.nextPage,
    }, () => { this.loadMorePosts(); });
  }

  renderHeader() {
    const { app, app: { account } } = this.props;

    if (app.readyState === FETCH_ACCOUNT_PENDING ||
        app.readyState === FETCH_ACCOUNT_REQUEST ||
        app.readyState === FETCH_ACCOUNT_FAILURE) {
      return <header className={css(styles.siteHeader)} />;
    }

    return <HomeHeader account={account} />;
  }

  renderPosts() {
    const { posts } = this.props;

    if (posts.readyState === FETCH_POSTS_PENDING ||
        posts.readyState === FETCH_POSTS_REQUEST) {
      return [...Array(5).keys()].map(i => <PostPreviewTemplate key={i} />);
    }

    if (posts.readyState === FETCH_POSTS_FAILURE) {
      return <p>Error loading posts</p>;
    }

    return posts.list.map(post => <PostPreview key={post.id} post={post} />);
  }

  render() {
    const { posts: { isLoadingMorePosts, meta: { nextPage } } } = this.props;

    return (
      <div>
        {this.renderHeader()}
        <section className="container">
          {this.renderPosts()}
          {nextPage && !isLoadingMorePosts &&
            <div style={{ textAlign: 'center', margin: '3rem 0' }}>
              <button
                className={css(styles.button)}
                onClick={this.handlePagination}
              >
                Older posts →
              </button>
            </div>
          }
          {isLoadingMorePosts && [...Array(5).keys()].map(i => <PostPreviewTemplate key={i} />)}
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({
    app: state.app,
    posts: state.posts,
  }),
  { fetchPosts, fetchMorePosts }
)(Home);
