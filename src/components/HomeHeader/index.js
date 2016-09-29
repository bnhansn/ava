import React, { PropTypes } from 'react';
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

const HomeHeader = ({ account }) =>
  <header
    className={css(styles.siteHeader)}
    style={{ backgroundImage: `url(${account.image})` }}
  >
    <h1 className={css(styles.siteName)}>{account.name}</h1>
    {account.description &&
      <h2 className={css(styles.siteDescription)}>{account.description}</h2>
    }
  </header>;

HomeHeader.propTypes = {
  account: PropTypes.object.isRequired,
};

export default HomeHeader;
