import React, { PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import './styles.css';
import Gravatar from '../Gravatar';

const excerpt = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const text = tmp.textContent || tmp.innerText || '';
  return `${text.substring(0, 340)}${text.length > 340 ? '...' : ''}`;
};

const PostPreview = ({ post }) =>
  <div>
    <Link to={`/${post.slug}`} className="preview-link">
      <h3 className="preview-title">{post.title}</h3>
    </Link>
    <p className="preview-excerpt">{excerpt(post.html)}</p>
    <div className="preview-meta">
      <Gravatar email={post.author.email} size={24} className="preview-gravatar" />
      <span className="preview-author">{post.author.name}</span>
      <time>{moment(post.publishedAt).format('D MMMM YYYY')}</time>
    </div>
    <hr className="preview-divider" />
  </div>;

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostPreview;
