import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { css, StyleSheet } from 'aphrodite';
import { fetchPosts, fetchMorePosts } from './actions';
import PostPreview from '../../components/PostPreview';
import PostPreviewTemplate from '../../components/PostPreviewTemplate';

const styles = StyleSheet.create({
  siteHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '400px',
    marginBottom: '4rem',
    color: '#fff',
    backgroundColor: 'rgb(60,65,70)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  siteName: {
    fontSize: '3rem',
  },

  siteDescription: {
    fontSize: '1.5rem',
    fontWeight: '300',
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
    meta: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
    account: PropTypes.object.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    fetchMorePosts: PropTypes.func.isRequired,
    isLoadingPosts: PropTypes.bool.isRequired,
    isLoadingMorePosts: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
    };
  }

  componentWillMount() {
    const { page, limit } = this.state;
    this.props.fetchPosts({ page, limit });
  }

  loadMorePosts() {
    const { page, limit } = this.state;
    this.props.fetchMorePosts({ page, limit });
  }

  handlePagination = () => {
    this.setState({
      page: this.props.meta.nextPage,
    }, () => { this.loadMorePosts(); });
  }

  renderHeader() {
    const { account } = this.props;
    if (isEmpty(account)) { return <header className={css(styles.siteHeader)} />; }

    return (
      <header
        className={css(styles.siteHeader)}
        style={{ backgroundImage: `url(${account.image})` }}
      >
        <h1 className={css(styles.siteName)}>{account.name}</h1>
        {account.description &&
          <h2 className={css(styles.siteDescription)}>{account.description}</h2>
        }
      </header>
    );
  }

  renderPosts() {
    const { posts } = this.props;
    if (!posts.length) { return null; }

    return posts.map(post => <PostPreview key={post.id} post={post} />);
  }

  render() {
    const { isLoadingPosts, isLoadingMorePosts, meta: { nextPage } } = this.props;

    return (
      <div>
        {this.renderHeader()}
        <section className="container">
          {isLoadingPosts && [...Array(5).keys()].map(i => <PostPreviewTemplate key={i} />)}
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
    meta: state.home.meta,
    posts: state.home.posts,
    account: state.app.account,
    isLoadingPosts: state.home.isLoadingPosts,
    isLoadingAccount: state.app.isLoadingAccount,
    isLoadingMorePosts: state.home.isLoadingMorePosts,
  }),
  { fetchPosts, fetchMorePosts }
)(Home);
