import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Link } from 'react-router';
import { media } from '../../styles/settings';

const styles = StyleSheet.create({
  header: {
    padding: '1rem',
    marginBottom: '4rem',
  },

  headerWithImage: {
    height: '40vh',
    [media.mdUp]: {
      height: '60vh',
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  headerWithNoImage: {
    borderTop: '4px solid #4183c4',
  },

  siteName: {
    fontSize: '1.5rem',
    ':hover': {
      textDecoration: 'none',
    },
    ':focus': {
      textDecoration: 'none',
    },
  },

  siteNameWithImage: {
    color: '#fff',
    ':hover': {
      color: '#fff',
    },
    ':focus': {
      color: '#fff',
    },
  },
});

const PostHeader = ({ post, account }) => {
  const headerClass = css(
    styles.header,
    post.image && styles.headerWithImage,
    !post.image && styles.headerWithNoImage,
  );

  const siteNameClass = css(
    styles.siteName,
    post.image && styles.siteNameWithImage,
  );

  return (
    <header
      className={headerClass}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <Link to="/" className={siteNameClass}>{account.name}</Link>
    </header>
  );
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
};

export default PostHeader;
