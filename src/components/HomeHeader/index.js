// @flow
import React from 'react';
import { css, StyleSheet } from 'aphrodite';

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

  siteName: {
    fontSize: '3rem',
  },

  siteDescription: {
    fontSize: '1.5rem',
    fontWeight: '300',
  },
});

type Props = {
  account: {
    image?: string,
    name: string,
    description?: string,
  },
};

const HomeHeader = ({ account }: Props) => {
  const style = account.image ? { backgroundImage: `url(${account.image})` } : null;

  return (
    <header
      style={style}
      className={css(styles.siteHeader)}
    >
      <h1 className={css(styles.siteName)}>{account.name}</h1>
      {account.description &&
        <h2 className={css(styles.siteDescription)}>{account.description}</h2>
      }
    </header>
  );
};

export default HomeHeader;
