const SECRET = 'Bearer ';

let API;
if (NODE_ENV === 'development') {
  API = '//ls.local/api';
} else {
  const API = '//' + location.hostname + (location.port ? ':' + location.port : '') + '/' + 'api';
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const post = (url, data, token) => fetch(url, {
    method: 'POST',
    headers: {
      ...headers,
      authorization : token ? SECRET + token : '',
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) { return response.json();}
  })
  .catch(error => console.error(error));

const get = (url, token) => fetch(url, {
    headers: {
      ...headers,
      authorization : token ? SECRET + token : '',
    }
  })
  .then(response => response.json());

const del = (url, token) => fetch(url, {
    method: 'DELETE',
    headers: {
      ...headers,
      authorization : token ? SECRET + token : '',
    }
  })
  .then(response => response.json());

const serialize = (obj, prefix) => {
  let str = [], p;
  for(p in obj) {
    if (obj.hasOwnProperty(p)) {
      const k = prefix ? prefix + '[' + p + ']' : p,
            v = obj[p];

      const param = (v !== null && typeof v === 'object')
        ? serialize(v, k)
        : encodeURIComponent(k) + '=' + encodeURIComponent(v);

      str.push(param);
    }
  }
  return str.join('&');
};