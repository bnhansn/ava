import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import { Link } from 'react-router';
import { css, StyleSheet } from 'aphrodite';
import { fetchPost } from './actions';
import NotFound from '../../components/NotFound';
import Gravatar from '../../components/Gravatar';
import PostTemplate from '../../components/PostTemplate';

const styles = StyleSheet.create({
  header: {
    minHeight: '2rem',
    padding: '1rem',
    marginBottom: '4rem',
  },

  headerWithImage: {
    height: '60vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  headerWithNoImage: {
    borderTop: '4px solid #4183c4',
  },

  headerTitle: {
    fontSize: '1.5rem',
    ':hover': {
      textDecoration: 'none',
    },
    ':focus': {
      textDecoration: 'none',
    },
  },

  headerTitleWithImage: {
    color: '#fff',
    ':hover': {
      color: '#fff',
    },
    ':focus': {
      color: '#fff',
    },
  },

  postTitle: {
    fontSize: '2.5rem',
  },

  postMeta: {
    fontSize: '90%',
    color: 'rgb(160,165,170)',
  },

  postAutor: {
    display: 'flex',
    alignItems: 'center',
  },
});

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
    if (isEmpty(post) || isEmpty(account)) { return <div className={css(styles.header)} />; }
    const headerClass = css(
      styles.header,
      post.image && styles.headerWithImage,
      !post.image && styles.headerWithNoImage,
    );
    const titleClass = css(
      styles.headerTitle,
      post.image && styles.headerTitleWithImage,
    );

    return (
      <header
        className={headerClass}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <Link to="/" className={titleClass}>{account.name}</Link>
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
      <article className={css(styles.post)}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 className={css(styles.postTitle)}>{post.title}</h1>
          <div className={css(styles.postMeta)}>
            <time>{moment(post.publishedAt).format('D MMMM YYYY')}</time>
          </div>
        </header>
        <section dangerouslySetInnerHTML={this.renderPostHtml()} />
        <hr style={{ margin: '2rem 0' }} />
        <div className={css(styles.postAutor)}>
          <span style={{ marginRight: '.75rem' }}>
            <Gravatar email={post.author.email} size={24} className="post-author-gravatar" />
          </span>
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
