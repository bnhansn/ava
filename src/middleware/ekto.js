const EKTO_URL = 'https://api.ekto.tech/v1';
const ACCOUNT_KEY = process.env.REACT_APP_EKTO_KEY;

const queryString = (params) => {
  const query = Object.keys(params)
                      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
                      .join('&');
  return `${query.length ? '?' : ''}${query}`;
};

export default {
  fetch(path, params = {}) {
    console.log('ekto fetch');
    console.log(path);
    return fetch(`${EKTO_URL}/${ACCOUNT_KEY}${path}${queryString(params)}`)
      .then(response =>
        response.json().then(json => {
          if (!response.ok) {
            return Promise.reject(json);
          }
          return json;
        })
      );
  },
};
