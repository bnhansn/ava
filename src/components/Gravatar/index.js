// @flow
import React from 'react';
import md5 from 'md5';

type Props = {
  email: string,
  size?: number,
  className?: string,
};

const Gravatar = ({ email, size = 48, className }: Props) => {
  const hash = md5(email);
  const src = `https://secure.gravatar.com/avatar/${hash}?s=${size}`;

  return <img src={src} alt={email} className={className} style={{ borderRadius: '50%' }} />;
};

export default Gravatar;
