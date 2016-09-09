import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { fetchPosts, fetchMorePosts } from './actions';
import PostPreview from '../../components/PostPreview';
import PostPreviewTemplate from '../../components/PostPreviewTemplate';
import './styles.css';

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
    if (isEmpty(account)) { return <header className="site-header" />; }

    return (
      <header className="site-header" style={{ backgroundImage: `url(${account.image})` }}>
        <h1 className="site-name">{account.name}</h1>
        {account.description && <h2 className="site-description">{account.description}</h2>}
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
                className="load-posts-button"
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
