// @flow
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { css, StyleSheet } from 'aphrodite';
import Gravatar from '../Gravatar';
import { media } from '../../styles/settings';

const styles = StyleSheet.create({
  title: {
    marginBottom: '1.5rem',
    fontSize: '2.5rem',
  },

  link: {
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'none',
    },
  },

  meta: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '90%',
    color: 'rgb(160,165,170)',
  },

  author: {
    paddingRight: '.75rem',
    marginRight: '.75rem',
    borderRight: '1px solid rgba(160,165,170,.5)',
  },

  postDivider: {
    margin: '2rem 0',
    [media.smUp]: {
      margin: '4rem 0',
    },
  },
});

const excerpt = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const text = tmp.textContent || tmp.innerText || '';
  return `${text.substring(0, 340)}${text.length > 340 ? '...' : ''}`;
};

type Props = {
  post: {
    slug: string,
    title: string,
    html: string,
    author: {
      email: string,
      name: string,
    },
    publishedAt: string,
  },
};

const PostPreview = ({ post }: Props) =>
  <div>
    <Link to={`/blog/${post.slug}`} className={css(styles.link)}>
      <h3 className={css(styles.title)}>{post.title}</h3>
    </Link>
    <div style={{ marginBottom: '1.5rem' }}>{excerpt(post.html)}</div>
    <div className={css(styles.meta)}>
      <span style={{ marginRight: '.75rem' }}>
        <Gravatar email={post.author.email} size={24} />
      </span>
      <span className={css(styles.author)}>{post.author.name}</span>
      <time>{moment(post.publishedAt).format('D MMMM YYYY')}</time>
    </div>
    <hr className={css(styles.postDivider)} />
  </div>;

export default PostPreview;
