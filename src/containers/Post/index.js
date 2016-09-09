import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import { Link } from 'react-router';
import { fetchPost } from './actions';
import './styles.css';
import NotFound from '../../components/NotFound';
import Gravatar from '../../components/Gravatar';
import PostTemplate from '../../components/PostTemplate';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    fetchPost: PropTypes.func.isRequired,
    isLoadingPost: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.slug !== this.props.params.slug) {
      this.props.fetchPost(nextProps.params.slug);
    }
  }

  renderHeader() {
    const { post, account } = this.props;
    if (isEmpty(post) || isEmpty(account)) { return <div className="page-header" />; }

    return (
      <header
        style={{ backgroundImage: `url(${post.image})` }}
        className={`page-header ${post.image ? 'page-header--image' : 'page-header--no-image'}`}
      >
        <Link to="/" className="page-title">{account.name}</Link>
      </header>
    );
  }

  renderPostHtml() {
    return { __html: this.props.post.html };
  }

  renderPost() {
    const { post, isLoadingPost } = this.props;
    if (isLoadingPost) { return null; }
    if (isEmpty(post)) { return <NotFound />; }

    return (
      <article className="post">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <time>{moment(post.publishedAt).format('D MMMM YYYY')}</time>
          </div>
        </header>
        <section dangerouslySetInnerHTML={this.renderPostHtml()} />
        <hr style={{ margin: '2rem 0' }} />
        <div className="post-author">
          <Gravatar email={post.author.email} size={24} className="post-author-gravatar" />
          <span>{post.author.name}</span>
        </div>
      </article>
    );
  }

  render() {
    const { isLoadingPost } = this.props;

    return (
      <div>
        {this.renderHeader()}
        <div className="container">
          {isLoadingPost && <PostTemplate />}
          {this.renderPost()}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post.post,
    account: state.app.account,
    isLoadingPost: state.post.isLoadingPost,
  }),
  { fetchPost }
)(Post);
